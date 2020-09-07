<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="{{ public_path('css/normalize.css') }}">
	<link rel="stylesheet" href="{{ public_path('css/invoices/default.css') }}">
	<title>Document</title>
</head>

<body>
	<main>
		<div class="wrap-item-list">
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>NO</th>
						<th>DESCRIPTION</th>
						<th>UOM</th>
						<th>Q'TY</th>
						<th>UNIT PIRCE</th>
						@if($option->is_use_tax)
						<th>Tax</th>
						@endif
						<th>EXT PRICE</th>
					</tr>
				</thead>
				<tbody>
					@php $i= 0; @endphp
					@foreach ($invoice->invoice_lines as $key=>$item)
					<tr>
						<td>{{ $key+1 }}</td>
						<td>{!! nl2br($item->description) !!}</td>
						<td>{{ $item->unit }}</td>
						<td>{{ $item->quantity }}</td>
						<td>
							<div class="wrap-price">
								<span class="currency">{{ $invoice->work->currency_name }}</span>
								<span class="price">{{ $item->price }}</span>
							</div>
						</td>
						@if($option->is_use_tax)
						<td>{{ $item->tax > 0 ? "Y" : "N" }}</td>
						@endif
						<td>
							<div class="wrap-price">
								<span class="currency">{{ $invoice->work->currency_name }}</span>
								<span class="price">{{ number_format($item->price * $item->quantity, 2) }}</span>
							</div>
						</td>
					</tr>
					@endforeach
					<tr>
						<td colspan="{{ $option->is_use_tax ? 6 : 5 }}" class="total-title">TOTAL</td>
						<td class="total">
							<div class="wrap-price">
								<span class="currency">{{ $invoice->work->currency_name }}</span>
								<span class="price">{{ number_format($invoice->total_price ,2) }}</span>
							</div>
						</td>
					</tr>
					@if($option->discount > 0)
					<tr>
						<td colspan="{{ $option->is_use_tax ? 6 : 5 }}" class="total-title">Discount</td>
						<td class="total">
							<div class="wrap-price">
								<span class="currency">{{ $invoice->work->currency->symbol }}</span>
								<span class="price">{{ number_format($invoice->discount ,2) }}</span>
							</div>
						</td>
					</tr>
					@endif
					@if($option->shipping_fee > 0)
					<tr>
						<td colspan="{{ $option->is_use_tax ? 6 : 5 }}" class="total-title">Shipping / Handling Fee</td>
						<td class="total">
							<div class="wrap-price">
								<span class="currency">{{ $invoice->work->currency->symbol }}</span>
								<span class="price">{{ number_format($invoice->shipping_fee ,2) }}</span>
							</div>
						</td>
					</tr>
					@endif
					@if($option->is_use_tax && $invoice->tax > 0)
					<tr>
						<td colspan="{{ $option->is_use_tax ? 6 : 5 }}" class="total-title">Tax </td>
						<td class="total">
							<div class="wrap-price">
								<span class="currency">{{ $invoice->work->currency->symbol }}</span>
								<span class="price">{{ number_format($invoice->tax ,2) }}</span>
							</div>
						</td>
					</tr>
					@endif
					<tr>
						<td colspan="{{ $option->is_use_tax ? 6 : 5 }}" class="total-title">Grand Total </td>
						<td class="total">
							<div class="wrap-price">
								<span class="currency">{{ $invoice->work->currency->symbol }}</span>
								<span class="price">{{ number_format($invoice->grand_total ,2) }}</span>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>
	<footer>
		<div class="wrap-bottom">
			<div class="payment">
				<p><span class="strong">PAYMENT TERMS</span>: {{ $invoice->payment_term }} days / <span class="strong">INVOICE CURRENCY</span>: {{ $invoice->work->currency_name }}</p>
				<table cellspacing="0">
					<caption>VENDOR BANK ACCOUNT DETAILS FOR PAYMENT</caption>
					<tr>
						<th>BANK NAME</th>
						<td>Industrial Bank of Korea</td>
					</tr>
					<tr>
						<th>ACCOUNT TO</th>
						<td>346-131350-56-00011</td>
					</tr>
					<tr>
						<th>SWIFT CODE</th>
						<td>IBKOKRSEXXX</td>
					</tr>
					<tr>
						<th>BANK ADDRESS</th>
						<td>50, Ulchiro 2-ga, Chung-gu, Seoul, 100-758, SOUTH KOREA</td>
					</tr>
				</table>
				<p><span class="strong">VAT REGISTRATION NUMBER: 786-88-00117</span></p>
			</div>
			<div class="signature">
				@if ($process === "Draft")
				<img src="{{ public_path('img') }}/stamps/draft.jpg" width="150" />
				@elseif ($process === "REJECTED")
				<img src="{{ public_path('img') }}/stamps/rejected.jpg" width="150" />
				@elseif ($process === "DENIED")
				<img src="{{ public_path('img') }}/stamps/denied.jpg" width="150" />
				@elseif ($process === "CANCELED")
				<img src="{{ public_path('img') }}/stamps/canceled.jpg" width="150" />
				@else
				<img src="{{ public_path('img') }}/stamps/signature.jpg" width="150" />
				@endif
				<ul>
					<li><b>{{ $invoice->originator->name }}</b></li>
					<li>{{ $invoice->originator->position }}</li>
					<li>INTRUST ENERGY SOLUTION CO., Ltd</li>
				</ul>
			</div>
		</div>
	</footer>
</body>

</html>