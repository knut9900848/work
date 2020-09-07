<?php

namespace App\Http\Controllers\Api;

use App\Model\File as AttachedFile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Storage;
use File;

class FileController extends Controller
{
    public function index($model, $model_id)
    {
        $model = 'App\\Model\\' . $model;
        $object = $model::findOrFail($model_id);

        $files = $object->files;

        return response()->json([
            "files" => $files
        ]);
    }

    public function store(Request $request)
    {
        if ($request->has('files')) {

            $request->validate([
                'files.*' => 'required|file|mimes:ppt,pptx,doc,docx,xls,xlsx,pdf,jpeg,jpg,png|max:5120'
            ]);

            $i = 0;
            foreach ($request->file('files') as $attachedFile) {
                $model = 'App\\Model\\' . $request->model;

                $originFileName = $attachedFile->getClientOriginalName();

                $filename = pathinfo($originFileName, PATHINFO_FILENAME);
                $extension = pathinfo($originFileName, PATHINFO_EXTENSION);

                $newFilename = Carbon::now()->timestamp . $i;
                $mime_type = $attachedFile->getClientMimeType();
                $i++;

                // $attachedFile->move(storage_path('app/public/upload/files'), $newFilename);
                Storage::disk($request->storage)->putFileAs('/', $attachedFile, $newFilename);

                $file = new AttachedFile;
                $file->name = $newFilename;
                $file->origin_name = $filename;
                $file->extension = $extension;
                $file->mime_type = $mime_type;
                $file->fileable_type = $model;
                $file->fileable_id = $request->model_id;
                $file->save();
            }

            $modelObject = $model::findOrFail($request->model_id);
            $files = $modelObject->files;

            return response()->json([
                "data" => $files
            ]);
        }
    }

    public function download($id, $storage)
    {
        $attachedFile = AttachedFile::findOrFail($id);

        $storagePath  = Storage::disk($storage)->getDriver()->getAdapter()->getPathPrefix();
        $file = $storagePath . $attachedFile->name;

        $fileExtension = $attachedFile->extension;
        $fileName = $attachedFile->origin_name;
        $mime_type = $attachedFile->mime_type;
        $headers = [
            'Content-Type' => $mime_type,
            'Content-Encoding' => 'UTF-8',
            'Content-Disposition' => 'attachment',
            'filename' => $fileName . "." . $fileExtension,
        ];

        return response()->download($file, $fileName, $headers);
    }

    public function destroy($id, $storage)
    {
        $file = AttachedFile::findOrFail($id);
        Storage::disk($storage)->delete($file->name);
        $file->delete();
    }
}
