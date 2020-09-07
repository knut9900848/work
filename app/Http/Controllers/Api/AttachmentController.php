<?php

namespace App\Http\Controllers\Api;

use App\Model\Attachment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Storage;
use File;

class AttachmentController extends Controller
{
    public function upload(Request $request, $model_id)
    {
        if ($request->has('attachments')) {

            $model = "App\\Model\\" . $request->model;
            
            $request->validate( [
                'files.*' => 'required|file|mimes:pdf|max:5120'
            ]);

            $i = 0;
            foreach($request->file('attachments') as $attachedFile)
            {
                $originFileName = $attachedFile->getClientOriginalName();
    
                $filename = pathinfo($originFileName, PATHINFO_FILENAME);
                $extension = pathinfo($originFileName, PATHINFO_EXTENSION);
    
                $newFilename = Carbon::now()->timestamp.$i;
                $mime_type = $attachedFile->getClientMimeType();
                $i++;

                Storage::disk($request->storage)->putFileAs('/', $attachedFile, $newFilename);
    
                $attachment = new Attachment;
                $attachment->name = $newFilename;
                $attachment->origin_name = $filename;
                $attachment->extension = $extension;
                $attachment->mime_type = $mime_type;
                $attachment->attachmentable_type = $model;
                $attachment->attachmentable_id = $model_id;
                $attachment->save();
            }

            $modelObject = $model::findOrFail($model_id);
            $attachments = $modelObject->attachments;
    
            return response()->json([
                "attachments" => $attachments
            ]);
        }
    }

    public function download($attachment_id, $storage) {
        $attachmentFile = Attachment::findOrFail($attachment_id);
        $storagePath = Storage::disk($storage)->getDriver()->getAdapter()->getPathPrefix();
        $attachmentFilePullPath = $storagePath.$attachmentFile->name;

        if (file_exists($attachmentFilePullPath)) {
            $attachmentFileExtension = $attachmentFile->extension;
            $attachmentFileName = $attachmentFile->origin_name;
            $attachmentFileMimeType = $attachmentFile->mime_type;
            $headers = [
                'Content-Type' => $attachmentFileMimeType,
                'charset' => 'UTF-8',
                'Content-Encoding' => 'UTF-8',
                'Content-Disposition' => 'attachment',
                'filename' => $attachmentFileName.".".$attachmentFileExtension,
             ];
    
            return response()->download($attachmentFilePullPath, $attachmentFileName, $headers);
        }
    }

    public function destroy($attachment_id, $storage) {
        $attachment = Attachment::findOrFail($attachment_id);
        $storagePath = $storagePath  = Storage::disk($storage)->getDriver()->getAdapter()->getPathPrefix();
        $attachmentFilePullPath = $storagePath.$attachment->name;
        
        if (file_exists($attachmentFilePullPath)) {
            Storage::disk($storage)->delete($attachment->name);
            $attachment->delete();
        }
    }
}
