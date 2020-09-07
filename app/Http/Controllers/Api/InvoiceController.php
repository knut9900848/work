<?php

namespace App\Http\Controllers\Api;

use App\Model\Invoice;
use App\Model\Work;
use App\Model\InvoiceIesReminder;
use App\Model\InvoiceClientReminder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Storage;
use PDF;
use App\User;
use App\Model\Company;
use App\Model\InvoiceApprover;

class InvoiceController extends Controller
{
	public function store(Request $request)
	{
		$request->validate([
			'invoice.number' => 'required|max:255|unique:invoices,number',
			'invoice.date' => 'required|date',
			'invoice.payment_term' => 'required|integer',
			'invoice.payment_due_date' => 'required|date',
			// 'invoice.total_price' => 'nullable|',
			// 'invoice.tax' => 'nullable|numeric,',
			// 'invoice.discount' => 'nullable|numeric,',
			// 'invoice.shipping_fee' => 'nullable|numeric,',
			// 'invoice.grand_total' => 'nullable|numeric,',
			'invoice.requestor_id' => 'required',
			'invoice.originator_id' => 'required',
			'invoice.work_id' => 'required',
			'invoice.bank_id' => 'required',
			'manager' => 'required'
		]);

		$invoice = new Invoice;
		$invoice->number = $request->invoice['number'];
		$invoice->date = $request->invoice['date'];
		$invoice->payment_due_date = $request->invoice['payment_due_date'];
		$invoice->payment_term = $request->invoice['payment_term'];
		$invoice->deliver_to = $request->invoice['deliver_to'];
		$invoice->total_price = $request->invoice['total_price'];
		$invoice->discount = $request->invoice['discount'];
		$invoice->tax = $request->invoice['tax'];
		$invoice->shipping_fee = $request->invoice['shipping_fee'];
		$invoice->grand_total = $request->invoice['grand_total'];
		$invoice->requestor_id = $request->invoice['requestor_id'];
		$invoice->originator_id = $request->invoice['originator_id'];
		$invoice->work_id = $request->invoice['work_id'];
		$invoice->bank_id = $request->invoice['bank_id'];
		$invoice->project_number = $request->invoice['project_number'];
		$invoice->save();

		$work = $invoice->work;
		$work->invoice_number = $invoice->number;
		$work->invoice_date = $invoice->date;
		$work->payment_due_date = $invoice->payment_due_date;
		$work->invoice_total_price = $invoice->total_price;
		$work->phase = "SENT INV";
		$work->save();

		$invoiceApprover = new InvoiceApprover;
		$invoiceApprover->user_id = auth()->user()->id;
		$invoiceApprover->manager_id = $request->manager['id'];
		$invoiceApprover->order = 1;
		$invoiceApprover->invoice_id = $invoice->id;
		$invoiceApprover->save();
		$manager = $invoiceApprover->manager;

		return response()->json([
			"result" => "success",
			"message" => "New Invoice has created successfully.",
			"invoice" => $invoice,
			"work" => $work,
			"manager" => $manager,
		]);
	}

	public function init($company)
	{
		$company = Company::findOrFail($company);
		$managers = User::permission('approve-invoice')->get();

		return response()->json([
			"managers" => $managers,
			"requestors" => $company->employees,
		]);
	}

	public function show($invoice_id)
	{
		$invoice = Invoice::findOrFail($invoice_id);
		$manager = $invoice->invoice_approvers->first()->manager;
		$managers = User::permission('approve-invoice')->get();

		return response()->json([
			"invoice" => $invoice,
			"requestors" => $invoice->work->company->employees,
			"invoiceLines" => $invoice->invoice_lines,
			"option" => $invoice->invoice_option,
			"managers" => $managers,
			"manager" => $manager,
		]);
	}

	public function update(Request $request, $invoice_id)
	{
		$invoice = Invoice::findOrFail($invoice_id);

		$request->validate([
			"invoice.number" => 'required|max:255|unique:invoices,number,' . $invoice->id,
			'invoice.date' => 'required|date',
			'invoice.payment_term' => 'required|integer',
			'invoice.payment_due_date' => 'required|date',
			// 'invoice.total_price' => 'nullable|',
			// 'invoice.tax' => 'nullable|numeric,',
			// 'invoice.discount' => 'nullable|numeric,',
			// 'invoice.shipping_fee' => 'nullable|numeric,',
			// 'invoice.grand_total' => 'nullable|numeric,',
			'invoice.requestor_id' => 'required',
			'invoice.originator_id' => 'required',
			'invoice.work_id' => 'required',
			'invoice.bank_id' => 'required',
			'manager' => 'required'
		]);

		$invoice->number = $request->invoice['number'];
		$invoice->date = $request->invoice['date'];
		$invoice->payment_due_date = $request->invoice['payment_due_date'];
		$invoice->payment_term = $request->invoice['payment_term'];
		$invoice->deliver_to = $request->invoice['deliver_to'];
		$invoice->total_price = $request->invoice['total_price'];
		$invoice->discount = $request->invoice['discount'];
		$invoice->tax = $request->invoice['tax'];
		$invoice->shipping_fee = $request->invoice['shipping_fee'];
		$invoice->grand_total = $request->invoice['grand_total'];
		$invoice->requestor_id = $request->invoice['requestor_id'];
		$invoice->originator_id = $request->invoice['originator_id'];
		$invoice->work_id = $request->invoice['work_id'];
		$invoice->bank_id = $request->invoice['bank_id'];
		$invoice->project_number = $request->invoice['project_number'];
		$invoice->save();

		$work = $invoice->work;
		$work->phase = "SENT INV";
		$work->invoice_number = $invoice->number;
		$work->invoice_date = $invoice->date;
		$work->payment_due_date = $invoice->payment_due_date;
		$work->invoice_total_price = $invoice->total_price;
		$work->save();

		$invoiceApprover = InvoiceApprover::findOrFail($invoice->invoice_approvers->first()->id);
		$invoiceApprover->manager_id = $request->manager['id'];
		$invoiceApprover->save();
		$manager = $invoiceApprover->manager;

		return response()->json([
			"result" => "success",
			"message" => "Invoice has updated successfully.",
			"invoice" => $invoice,
			"work" => $work,
			"manager" => $manager,
		]);
	}

	public function initIesReminder($invoice_id)
	{
		$invoice = Invoice::find($invoice_id);
		$reminders = $invoice->invoice_ies_reminders;
		$plucked = $reminders->pluck('user_id');

		return response()->json([
			"reminders" => $plucked->all(),
		]);
	}

	public function updateIesReminder(Request $request, $invoice_id)
	{
		$invoice = Invoice::find($invoice_id);
		$invoice->invoice_ies_reminders()->delete();

		$reminders = $request->reminders;

		foreach ($reminders as $reminder) {
			$newReminder = new InvoiceIesReminder;
			$newReminder->invoice_id = $request->invoice_id;
			$newReminder->user_id = $reminder['id'];
			$newReminder->name = $reminder['name'];
			$newReminder->email = $reminder['email'];
			$newReminder->timezone = "Asia/Seoul";
			$newReminder->number = $request->invoice_number;
			$newReminder->save();
		}

		return response()->json([
			"result" => "success",
			"message" => "IES STAFF Reminders has been updatee successfully.",
		]);
	}


	public function initClientReminder($invoice_id)
	{
		$invoice = Invoice::find($invoice_id);
		$reminders = $invoice->invoice_client_reminders;
		$plucked = $reminders->pluck('employee_id');

		return response()->json([
			"reminders" => $plucked->all(),
		]);
	}

	public function updateClientReminder(Request $request, $invoice_id)
	{
		// ANCHOR updateClientReminder
		$invoice = Invoice::find($invoice_id);
		$invoice->invoice_client_reminders()->delete();

		$reminders = $request->reminders;

		foreach ($reminders as $reminder) {
			$newReminder = new InvoiceClientReminder;
			$newReminder->invoice_id = $request->invoice_id;
			$newReminder->employee_id = $reminder['id'];
			$newReminder->name = $reminder['name'];
			$newReminder->email = $reminder['email'];
			$newReminder->timezone = $reminder['timezone'];
			$newReminder->number = $request->invoice_number;
			$newReminder->save();
		}

		return response()->json([
			"result" => "success",
			"message" => "Client Reminders has been updatee successfully.",
		]);
	}

	public function getSaleOrderLines($work_id)
	{
		$work = Work::findOrFail($work_id);
		$saleOrder = $work->sale_order;
		$saleOrderLines = $saleOrder->sale_order_lines;

		return response()->json([
			"saleOrderLines" => $saleOrderLines,
		]);
	}

	public function convertToPdf($invoice_id, $overwrite = true)
	{
		$invoice = Invoice::findOrFail($invoice_id);
		if ($invoice->invoice_option->pdf_form_type === "baker-hughes") {
			$marginTop = "65mm";
			$marginBottom = "55mm";
			$page = "";
			$viewSrc = "pdfs.invoices.baker-hughes";
		} else {
			$marginTop = "65mm";
			$marginBottom = "8mm";
			$page = "Page [page] of [toPage]";
			$viewSrc = "pdfs.invoices.default";
		}

		$headerHtml = view()->make($viewSrc . ".header", compact('invoice'))->render();
		$footerHtml = view()->make($viewSrc . ".footer", compact('invoice'))->render();

		$pdf = PDF::loadView($viewSrc . ".default", compact('invoice'))
			->setOption('margin-top', $marginTop)
			->setOption('margin-bottom', $marginBottom)
			->setOption('header-html', $headerHtml)
			->setOption('footer-html', $footerHtml)
			->setPaper('a4')
			// ->setOption('page-offset', 2)
			->setOption('footer-right', $page)
			->setOption('footer-font-size', 8)
			// ->setOption('footer-left', 'Confidential')
			// ->setOption('footer-right', date)
			// ->setOption('toc', true)
			// ->setOption('toc-level-indentation', 3)
			->setOrientation('landscape');

		if (Storage::disk('invoice_pdfs')->exists('test.pdf')) {
			Storage::disk('invoice_pdfs')->delete('test.pdf');
		}
		$generatedPdfFileStoragePath = Storage::disk('invoice_pdfs')->path('test.pdf');
		$pdf->save($generatedPdfFileStoragePath);
	}
}
