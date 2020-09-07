<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\PurchaseOrderTermsAndConditions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Storage;

class PurchaseOrderTermsAndConditionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        if ($request->has('file')) {
            
            $request->validate( [
                'file' => 'required|file|mimes:pdf|max:5120',
                'name' => 'required',
            ]);

            $attachedFile = $request->file('file');

            $originFileName = $attachedFile->getClientOriginalName();
            $filename = pathinfo($originFileName, PATHINFO_FILENAME);
            $extension = pathinfo($originFileName, PATHINFO_EXTENSION);
            $newFilename = Carbon::now()->timestamp;
            $mimeType = $attachedFile->getClientMimeType();

            $purchaseOrderTermsAndConditions = new PurchaseOrderTermsAndConditions;
            $purchaseOrderTermsAndConditions->name = $request->name;
            $purchaseOrderTermsAndConditions->file_name = $newFilename;
            $purchaseOrderTermsAndConditions->file_origin_name = $filename;
            $purchaseOrderTermsAndConditions->extension = $extension;
            $purchaseOrderTermsAndConditions->mime_type = $mimeType;
            $purchaseOrderTermsAndConditions->description = $request->description;
            $purchaseOrderTermsAndConditions->is_active = json_decode($request->is_active);
            $purchaseOrderTermsAndConditions->save();

            Storage::disk('purchase_order_terms_and_conditions')->putFileAs('/', $attachedFile, $purchaseOrderTermsAndConditions->file_name);

            return response()->json([
                "result" => "success",
                "message" => "New File has been uploaded succeessfully.",
                "purchaseOrderTermsAndConditions" => $purchaseOrderTermsAndConditions,
            ]);
            
        }

        return response()->json([
            "result" => "Fail",
            "message" => "There is no File",
        ]);
    }

    public function update(Request $request, PurchaseOrderTermsAndConditions $purchaseOrderTermsAndConditions)
    {
        //
    }

    public function destroy($file_id)
    {   
        $file = PurchaseOrderTermsAndConditions::findOrFail($file_id);
        if (Storage::disk('purchase_order_terms_and_conditions')->exists($file->file_name)) {
            $file = PurchaseOrderTermsAndConditions::findOrFail($file_id);
            Storage::disk('purchase_order_terms_and_conditions')->delete($file->file_name);
            $file->delete();
    
            return response()->json([
                "result" => "success",
                "message" => "The File has been  delete successfully.",
            ]);
        }

        return response()->json([
            "result" => "fail",
            "message" => "There is no file",
        ]);
    }

    public function download($file_id)
    {
        $file = PurchaseOrderTermsAndConditions::findOrFail($file_id);
        $fileName = $file->file_name;
        $originFile = $file->file_origin_name.".".$file->extension;
        $mimeType = $file->mime_type;
        $headers = [
            'Content-Type' => $mimeType,
            'Content-Encoding' => 'UTF-8',
            'Content-Disposition' => 'attachment',
            'filename' => $originFile,
        ];

        return Storage::disk('purchase_order_terms_and_conditions')->download($fileName, $originFile, $headers);
    }
}
