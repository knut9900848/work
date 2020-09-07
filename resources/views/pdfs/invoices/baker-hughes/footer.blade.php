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
	<footer>
		<div class="wrap-packing-number">
			<p>PACKING / DELIVERY NOTE NO : WCC FOR P.O {{ $invoice->number }}</p>
		</div>
		<div class="wrap-bottom">
			<div class="payment">
				<p><span class="strong">PAYMENT TERMS</span>: P/O PAYMENT TERMS / <span class="strong">INVOICE CURRENCY</span>: P/O CURRENCY</p>
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
					<li><b>John Yeom</b></li>
					<li>Procurement Manager</li>
					<li>INTRUST ENERGY SOLUTION CO., Ltd</li>
				</ul>
			</div>
		</div>
	</footer>
</body>

</html>