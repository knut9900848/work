<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
        /* @page {
            margin: .3in;
            size: 21cm 29.7cm;
		} */
		@page { margin: 120px 50px 100px; }
        .page-break {
            page-break-after: always;
		}
		.prevent-break { page-break-after: never; }
		body { font-family: 'Helvetica'; font-size: 10px; color: #222;}
		p { padding: 0; margin: 0;}
		div { padding: 0; margin: 0; }
		h2 { padding: 0; margin: 0; }

		header { position: fixed; top: -105px; left: 0px; right: 0px; height: 55px; }
		footer { position: fixed; bottom: -100px; left: 0px; right: 0px; height: 80px;}
		header { border-bottom: 1px solid #2196f3; }
		header { border-bottom: 2px solid #2196f3;}
		header .section-left { float: left; padding-bottom: 5px; }
		header .section-left img { margin-top: 0.8rem; }
		header .section-right { float: right; padding-bottom: 5px; font-size: 12px; }
		header .section-right { font-weight: bold; margin-top: 2rem; }
		header::after { display: block; clear: both; content: ''; }
		footer { font-size: 8px; text-align: center; }
		footer .post-script-title { font-size: 15px; font-weight: bold; font-style: italic; padding: 0.5rem}
		footer .post-script-content {font-size: 11px; margin-bottom: 0.3rem}

		.page-title { text-align: center; margin-top: 0;}
		.wrap-default-info { margin-bottom: 1rem;  font-weight: bold}
		.wrap-default-info::after {display: block; clear: both; content: ''}
		.supplier-info { float: left; padding: 0; margin: 0; }
		.supplier-info li { list-style: none; margin-bottom: 3px; }
		.quotation-number { float: right; }

		main {}

		table { width: 100%; font-size: 10px; }
		th { border: 1px solid #ccc; padding: 5px; background-color: #f8f8f8; }
		td { border: 1px solid #ccc; padding: 5px; }

		.attention-table { margin-bottom: 1.5rem; }
		.attention-table th { width: 30%; text-align: left }

		.originator-table { margin-bottom: 1.5rem; }
		.originator-table th { width:30%; text-align: left }

		.extra-table {}
		.extra-table th { width: 30%; text-align: left}

		.title-item-table { margin:0 0 5px 5px; padding:0; }
		.item-table { margin-bottom: 1.5rem; }
		.item-table th { text-align: center; }
		.item-table td { text-align: center; padding: 0.5rem 0.2rem; min-height: 1rem; }
		.item-table .name { width:35%; text-align: left }
		.item-table .currency { border-right: none; text-align: left; font-size: 8px;  }
		.item-table .price { border-left: none; text-align: right; }
		.item-table .total { background-color: #f8f8f8; }
		.item-table .empty { border: none; }

		.notice { border: 1px solid #ccc; background-color: #f2f2f2; padding: 0.5rem; margin-bottom: 1.5rem; font-weight: bold; }

		.wrap-remarks { margin-bottom: 1.5rem; }
		.wrap-remarks::after { display: block; clear: both; content: ''; }
		.remarks { float: left; width: 70%; }

		.wrap-remarks { page-break-inside: avoid;}
		.signature { float: right; width: 150px;}
		.signature .stamp { border-bottom: 2px solid #2196f3; text-align: center; padding-bottom: 5px; }
		.signature .signature-name { text-align: right; margin-top:3px; margin-bottom: 3px;font-size: 12px; font-weight:bold}
		.signature .signature-position { text-align: right; margin-bottom: 3px;font-size: 10px; color: #A3A3A3;}
		.signature .signature-branch { text-align: right;font-size: 11px; }
		.remarks .remarks-title { font-size: 13px; }
		.wrap-remarks::after {display: block; clear: both; content: ''}
	</style>
    <link rel="stylesheet" href="{{ asset('css/quotation.css') }}" type="text/css">
</head>

<body>
<script type="text/php">
	if (isset($pdf)) {
		$x = 38;
		$y = 60;
		$text = "Quotation No. {{ $object->number }} - [Rev: {{ $version }} / Page: {PAGE_NUM} of {PAGE_COUNT}]";
		$font = null;
		$size = 8;
		$color = array(0,0,0);
		$word_space = 0.0;  //  default
		$char_space = 0.0;  //  default
		$angle = 0.0;   //  default
		$pdf->page_text($x, $y, $text, $font, $size, $color, $word_space, $char_space, $angle);
	}
</script>
<header>
	<div class="section-left">
		<img src="{{ public_path('img') }}/logo_c.png" width="60" height="33">
	</div>
	<div class="section-right">
		<p>Intrust Energy Solution<p>
	</div>
</header>
<footer>
	<p class="post-script-title">Thank You For Your Business!</p>
	<p class="post-script-content">if you have any questions about this price quote, please contact John Yeom, +82 10 8962 1291, john@intrustenergysolution.com</p>
	THIS DOCUMENT AND CONTAINS ARE CONFIDENTIAL AND PROPRIETARY INFORMATION OF IES WHICH SHALL NOT BE USED OR DISCLOSED TO OTHERS, EXCEPT WITH THE WRITTEN PERMISSON OF IES UNPUBLISHED WORK @2019 INTRUST ENERGY SOLUTION ALL RIGHTS RESERVED.
</footer>

<main>

<h1 class="page-title">QUOTATION</h1>

<div class="wrap-default-info">
	<ul class="supplier-info">
		<li class="list-group-item">{{ $object->branch->name }}</li>
		<li>{{ $object->branch->address }} {{ $object->branch->zipcode }}</li>
		<li>Representive Phone Number: {{ $object->branch->phone }}</li>
	</ul>
</div>

<table cellpadding="0" cellspacing="0" class="attention-table">
	<tbody>
		<tr>
			<th>Attn.</th>
			<td>{{ $object->receiver->name }} &lt;{{ $object->receiver->email }}&gt;</td>
		</tr>
		<tr>
			<th>Address</th>
			<td>
        {{ $object->company->street1 }}
        {{ $object->company->street2 }}
        {{ $object->company->city }}
        {{ $object->company->country->name }}
      </td>
		</tr>
		<tr>
			<th>Project</th>
			<td>{{ $object->project->name }}</td>
		</tr>
		@foreach ($object->fields as $extraField)
			@if ($extraField->position === 'Attention Info Table')
				<tr>
					<th>{{ $extraField->title }}</th>
					<td>{{ $extraField->content }}</td>
				</tr>	
			@endif
		@endforeach
	</tbody>
</table>

<table cellpadding="0" cellspacing="0" class="originator-table">
	<tbody>
		<tr>
			<th>Originator</th>
			<td>{{ $object->originator->name }} / {{ $object->originator->position }} / {{ $object->originator->email }}</td>
		</tr>
		<tr>
			<th>Supplier&apos;s Name</th>
			<td>{{ $object->branch->name }}</td>
		</tr>
		<tr>
			<th>Supplier&apos;s Address</th>
			<td>{{ $object->branch->address }}</td>
		</tr>
		<tr>
			<th>Supplier&apos;s Quote #</th>
			<td>{{ $object->number }}</td>
		</tr>
		<tr>
			<th>Issued Date of object</th>
			<td>{{ Carbon\Carbon::parse($object->issued_date)->formatLocalized('%d %b %Y') }}</td>
		</tr>
		@foreach ($object->fields as $extraField)
			@if ($extraField->position === 'Originator Info Table')
				<tr>
					<th>{{ $extraField->title }}</th>
					<td>{{ $extraField->content }}</td>
				</tr>	
			@endif
		@endforeach
	</tbody>
</table>


<table cellpadding="0" cellspacing="0" class="extra-table"> 
	<tbody>
		@foreach ($object->fields as $extraField)
			@if ($extraField->position === 'New Table')
				<tr>
					<th>{{ $extraField->title }}</th>
					<td>{{ $extraField->content }}</td>
				</tr>	
			@endif
		@endforeach
	</tbody>
</table>

{{-- @if(isset($work->work_object->item_list_title))
		<h3 class="title-item-table">{{ $work->work_object->item_list_title }}</h3>
@endif --}}
<table cellpadding="0" cellspacing="0" class="item-table">
	<thead>
		<tr>
			<th>No.</th>
			<th>ITEM(s)</th>
			<th>SIZE(Model)</th>
			<th>Q&apos;ty</th>
			<th>UNIT</th>
			<th colspan="2">UNIT PRICE</th>
			<th colspan="2">TOTAL</th>
		</tr>
	</thead>
	<tbody>
		@foreach ($object->items as $index => $item)
		<tr>
			<td>{{ $index + 1 }}</td>
			<td class="name">{{ $item->name }}</td>
			<td>{{ $item->size }}</td>
			<td>{{ $item->quantity }}</td>
			<td>{{ $item->unit }}</td>
			<td class="currency">{{ $object->currency->symbol }}</td>
			<td class="price">{{ number_format($item->price, 2) }}</td>
			<td class="currency">{{ $object->currency->symbol }}</td>
			<td class="price">{{ number_format($item->quantity * $item->price, 2) }}</td>
		</tr>
		@endforeach
		<tr>
			<td colspan="5" class="empty"></td>
			<td colspan="2" class="total"><strong>Grand Total</strong></td>
			<td class="currency total">{{ $object->currency->symbol }}</td>
			<td class="price total">
				@php($total = 0)
				@foreach ($object->items as $item)
					@php($total += $item->quantity * $item->price)
				@endforeach
				<strong>{{ number_format($total, 2) }}</strong>
			</td>
		</tr>
	</tbody>
</table>

<div class="notice">
Above quoted prices are based on the given infomation by the client.<br>
Any variation in quantities and/or type (grade) will be subjected to a new quote.
</div>

<div class="wrap-remarks">
	<div class="remarks">
		<h2 class="remarks-title">REMARKS</h2>
		<div>{!! $object->remarks !!}</div>
	</div>
	<div class="signature">
		<div class="stamp">
      @if ($currentProcess === "Draft")
        <img src="{{ public_path('img') }}/draft.jpg" width="130" height="77" />
      @elseif ($currentProcess === "Rejected")
        <img src="{{ public_path('img') }}/rejected.jpg" width="130" height="77" />
      @else
        <img src="{{ public_path('img') }}/signature.jpg" width="130" height="77" />
      @endif
		</div>
    
		<p class="signature-name">{{ $object->originator->name }}</p>
		<p class="signature-position">{{ strtoupper($object->originator->position) }}</p>
		<p class="signature-branch">{{ $object->branch->name }}</p>
	</div>
</div>
</main>
</body>
</html>