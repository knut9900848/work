<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="{{ public_path('css/normalize.css') }}">
	<link rel="stylesheet" href="{{ public_path('css/invoices/default.css') }}">
	<title>Invoice {{ $invoice->number }}</title>
</head>

<body>
	<main>
		<div class="test"></div>
		<div class="wrap-item-list">
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>ORDER NO</th>
						<th>DESC - LINE - SHIPT'NO</th>
						<th>PART NO.</th>
						<th>UOM</th>
						<th>Q'TY</th>
						<th>UNIT PIRCE</th>
						<th>TAX</th>
						<th>EXT PRICE</th>
					</tr>
				</thead>
				<tbody>
					@php $i= 0; @endphp
					@foreach ($invoice->invoice_lines->chunk(6) as $chunks)
					@foreach ($chunks as $key=>$item)
					@php $i += 1; @endphp
					<tr>
						<td>{{ $invoice->number }}</td>
						<td>{!! nl2br($item->description) !!}</td>
						<td>N/A</td>
						<td>{{ $item->unit }}</td>
						<td>{{ $item->quantity }}</td>
						<td>
							<div class="wrap-price">
								<span class="currency">{{ $invoice->work->currency->symbol }}</span>
								<span class="price">{{ $item->price }}</span>
							</div>
						</td>
						<td>N</td>
						<td>
							<div class="wrap-price">
								<span class="currency">{{ $invoice->work->currency->symbol }}</span>
								<span class="price">{{ number_format($item->price * $item->quantity, 2) }}</span>
							</div>
						</td>
					</tr>

					@if((count($chunks)) === $i)
					@php $i=0; @endphp
					@for($k=0; $k < 6 - count($chunks); $k++) <tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						</tr>
						@endfor
						<tr>
							<td colspan="6"></td>
							<td class="total">TOTAL</td>
							<td class="total">
								<div class="wrap-price">
									<span class="currency">{{ $invoice->work->currency->symbol }}</span>
									<span class="price">{{ number_format(invoiceChunksSum($chunks) ,2) }}</span>
								</div>
							</td>
						</tr>
						@endif
						@endforeach
						@endforeach
				</tbody>
			</table>
		</div>
	</main>
</body>

</html>