<?php

use iio\libmergepdf\Merger;
use App\Model\QuotationProcess;
use App\Model\PurchaseOrderProcess;
use App\Model\InvoiceProcess;

if (!function_exists('saveQuotationProcess')) {
	function saveQuotationProcess($processName, $pdfId)
	{
		$process = new QuotationProcess;
		$process->name = $processName;
		$process->user_id = auth()->user()->id;
		$process->quotation_pdf_document_id = $pdfId;
		$process->save();

		return $process->name;
	}
}

if (!function_exists('savePurchaseOrderProcess')) {
	function savePurchaseOrderProcess($processName, $pdfId)
	{
		$process = new PurchaseOrderProcess;
		$process->name = $processName;
		$process->user_id = auth()->user()->id;
		$process->purchase_order_pdf_document_id = $pdfId;
		$process->save();

		return $process->name;
	}
}

if (!function_exists('saveInvoiceProcess')) {
	function saveInvoiceProcess($processName, $pdfId)
	{
		$process = new InvoiceProcess;
		$process->name = $processName;
		$process->user_id = auth()->user()->id;
		$process->invoice_pdf_document_id = $pdfId;
		$process->save();

		return $process->name;
	}
}

if (!function_exists('getColspan')) {
	function getColspan($discount, $tax)
	{
		$optionCount = $discount + $tax;
		if ($optionCount === 0) {
			return 5;
		} elseif ($optionCount === 1) {
			return 7;
		} else {
			return 9;
		}
	}
}

if (!function_exists('updateList')) {
	function updateList($object, $objectList, $status)
	{
		$objectList = $object->$objectList;
		$objectList->status = $status;
		$objectList->save();
	}
}

if (!function_exists('mergePdf')) {
	/**
	 * PDF파일들을 병합
	 * 
	 * @param $generatedPdfFile 생성된 PDF 파일 경로
	 * @param $attachments 첨부된 PDF 파일들
	 * @param $attachmentStoragePath 첨부된 PDF 파일들이 저장된 경로
	 * 
	 * @return $createdFile 병합된 PDF 파일.
	 */

	function mergePdf($generatedPdfFile, $attachments, $attachmentStoragePath)
	{
		$mergeTargetFiles = array();
		array_push($mergeTargetFiles, $generatedPdfFile);

		if ($attachments->count()) {
			foreach ($attachments as $attachment) {
				$attachmentFilePullPath = $attachmentStoragePath . $attachment->name;
				array_push($mergeTargetFiles, $attachmentFilePullPath);
			}
		}

		$merger = new Merger;
		$mergedFile = $merger->addIterator($mergeTargetFiles);
		$createdFile = $merger->merge();

		return $createdFile;
	}
}

if (!function_exists('invoiceTotalPrice')) {
	function invoiceTotalPrice($items)
	{
		return $items->sum(function ($item) {
			return $item['price'] * $item['quantity'];
		});
	}
}

if (!function_exists('invoiceChunksSum')) {
	function invoiceChunksSum($chunk)
	{
		return $chunk->sum(function ($item) {
			return $item['price'] * $item['quantity'];
		});
	}
}

if (!function_exists('chunksToArray')) {
	function chunksToArray($chunks)
	{
		foreach ($chunks as $key => $chunk) {
			$chunks[$key] = $chunk->toArray();
		}
		return $chunks;
	}
}

if (!function_exists('generatePurchaseOrderNumberDateFormat')) {
	function generatePurchaseOrderNumberDateFormat($date)
	{
		$date = explode('-', $date);
		$year = str_split($date[0], 2);
		$year = $year[1];
		$month = $date[1];
		$day = $date[2];

		return $year . $month . $day;
	}
}
