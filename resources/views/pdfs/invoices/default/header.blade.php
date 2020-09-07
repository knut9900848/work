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
	<header>
		<div class="section-title">
			<div class="info">
				<ul>
					<li><b>INTRUST ENERGY SOLUTION</b></li>
					<li>208, 162 Hwahap-ro, Nam-gu</li>
					<li>Ulsan, 44715 South Korea</li>
				</ul>
			</div>
			<div class="title">
				<h1>INVOICE</h1>
			</div>
			<div class="logo">
				<img src="{{ public_path('img/logos/logo_c.jpg') }}" width="80px" />
			</div>
		</div>
		<div class="section-info">
			<div class="invoice-info">
				<table>
					<tbody>
						<tr>
							<th>INV NUMBER</th>
							<td>
								{{ $invoice->number }}@if($version > 0)&nbsp;Rev.{{ $version }}@endif
							</td>
						</tr>
						<tr>
							<th>INV DATE</th>
							<td>{{ $invoice->date }}</td>
						</tr>
						<tr>
							<th>SHIP DATE</th>
							<td>{{ $invoice->work->wcc->date }}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="contact-info">
				<table>
					<tbody>
						<tr>
							<th>INTERNAL CONTACT</th>
							<td>contact@intrustenergysolution.com</td>
						</tr>
						<tr>
							<th>TELEPHONE</th>
							<td>+82 52 252 9835</td>
						</tr>
						<tr>
							<th>E-MAIL</th>
							<td>scott.kim@intrustenegysolution.com</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="wrap-top">
			<div class="bill-to">
				<h4 class="title">BILL TO</h4>
				<ul class="list">
					<li><b>{{ $invoice->work->company->name }}</b></li>
					<li>
						@if(isset($invoice->work->company->addresses->first()->street1)){{ $invoice->work->company->addresses->first()->street1 }},&nbsp;@endif
						@if(isset($invoice->work->company->addresses->first()->street2)){{ $invoice->work->company->addresses->first()->street2 }}@endif
						@if(isset($invoice->work->company->addresses->first()->state)){{ $invoice->work->company->addresses->first()->state }}@endif
						@if(isset($invoice->work->company->addresses->first()->city)){{ $invoice->work->company->addresses->first()->city }}@endif
						@if(isset($invoice->work->company->addresses->first()->country)){{ $invoice->work->company->addresses->first()->country }}@endif
					</li>
					<li>{{ $invoice->work->company->addresses->first()->zipcode }}</li>
					<li>{{ $invoice->work->company->addresses->first()->country}}</li>
					<li>REQUESTOR: {{ $invoice->requestor->name }}</li>
				</ul>
			</div>
			<div class="deliver-to">
				<h4 class="title">DELIVER TO</h4>
				<ul class="list">
					<li>{{ $invoice->deliver_to }}</li>
				</ul>
			</div>
			<div class="remit-to">
				<h4 class="title">REMIT TO</h4>
				<ul class="list">
					<li><b>{{ $invoice->work->branch->name }}</b></li>
					<li>
						@if(!empty($invoice->work->branch->street1)){{ $invoice->work->branch->street1 }},&nbsp;@endif
						@if(!empty($invoice->work->branch->street2)){{ $invoice->work->branch->street2 }},&nbsp;@endif
						@if(!empty($invoice->work->branch->city)){{ $invoice->work->branch->city }},&nbsp;@endif
					</li>
					<li>
						@if(!empty($invoice->work->branch->state)){{ $invoice->work->branch->state }},&nbsp;@endif
						@if(!empty($invoice->work->branch->country)){{ $invoice->work->branch->country }}@endif
					</li>
					<li>@if(!empty($invoice->work->branch->zipcode)){{ $invoice->work->branch->zipcode }}&nbsp;@endif</li>
				</ul>
			</div>
		</div>
	</header>
</body>

</html>