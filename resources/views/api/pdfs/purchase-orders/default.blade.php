<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<style>
		@font-face {
			font-family: 'NanumGothic-Regular';
			src: url("{{ storage_path('fonts/NanumGothic-Regular.ttf') }}") format('truetype');
		}

		@font-face {
			font-family: 'NanumGothic-Bold';
			src: url("{{ storage_path('fonts/NanumGothic-Bold.ttf') }}") format('truetype');
		}
	</style>
	<link rel="stylesheet" href="{{ public_path('css/purchase-orders/default.css') }}">
</head>

<body>
	<script type="text/php">
		if (isset($pdf)) {
		$x = 406;
		$y = 141;
		$text = "{PAGE_NUM} of {PAGE_COUNT}";
		$font = 'Helvetica';
		$size = 8;
		$color = array(0,0,0);
		$word_space = 0.0;
		$char_space = 0.0;
		$angle = 0.0;
		$pdf->page_text($x, $y, $text, $font, $size, $color, $word_space, $char_space, $angle);
	}
</script>
	<header>
		<div class="wrap-top">
			<div class="section-left">
				<img src="{{ public_path('img') }}/logo_c.jpg" width="60" height="33">
			</div>
			<div class="section-right">
				<p>Intrust Energy Solution<p>
			</div>
		</div>

		<h1 class="page-title">PURCHASE ORDER</h1>

		<div class="wrap-default-info">
			<table cellpadding="0" cellspacing="0" class="info-table">
				<tr>
					<td class="branch">{{ $object->branch->name }}</td>
					<td class="number-title">Number</td>
					<td class="number">{{ $object->number }}</td>
				</tr>
				<tr>
					<td>
						@if(!empty($object->branch->street1)){{ $object->branch->street1 }},&nbsp;@endif
						@if(!empty($bject->branch->street2)){{ $object->branch->street2 }},&nbsp;@endif
						@if(!empty($object->branch->city)){{ $object->branch->city }},&nbsp;@endif
						@if(!empty($object->branch->state)){{ $object->branch->state }},&nbsp;@endif
						@if(!empty($object->branch->zipcode)){{ $object->branch->zipcode }},&nbsp;@endif
						@if(!empty($object->branch->country)){{ $object->branch->country }}@endif
					</td>
					<td>Rev.</td>
					<td>{{ $version }}</td>
				</tr>
				<tr>
					<td>Representive Phone Number: {{ $object->branch->phone }}</td>
					<td>Page</td>
					<td></td>
				</tr>
			</table>
		</div>
	</header>
	<footer>
		<p class="post-script-title">Thank You For Your Business!</p>
		THIS DOCUMENT AND CONTAINS ARE CONFIDENTIAL AND PROPRIETARY INFORMATION OF IES WHICH SHALL NOT BE USED OR DISCLOSED TO OTHERS, EXCEPT WITH THE WRITTEN PERMISSON OF IES UNPUBLISHED WORK @2019 INTRUST ENERGY SOLUTION ALL RIGHTS RESERVED.
	</footer>

	<main>

		<table cellpadding="0" cellspacing="0" class="attention-table">
			<tbody>
				<tr>
					<th>Attn.</th>
					<td>{{ $object->supplier->name }} / {{ $object->receiver->name }} &lt;{{ $object->receiver->email }}&gt;</td>
				</tr>
				<tr>
					<th>Address</th>
					<td>
						@if(!empty($object->supplier->state)){{ $object->supplier->state }}&nbsp;@endif
						@if(!empty($object->supplier->city)){{ $object->supplier->city }}&nbsp;@endif
						@if(!empty($object->supplier->street1)){{ $object->supplier->street1 }}&nbsp;@endif
						@if(!empty($bject->supplier->street2)){{ $object->supplier->street2 }}&nbsp;@endif
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
					<td>
						{{ $object->branch->kor_address }}
					</td>
				</tr>
				<tr>
					<th>Supplier&apos;s Quote #</th>
					<td>{{ $object->number }}</td>
				</tr>
				<tr>
					<th>Issued Date of Quotation</th>
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

		@if(isset($option->title))
		<h3 class="title-item-table">{{ $option->title }}</h3>
		@endif
		<table cellpadding="0" cellspacing="0" class="item-table">
			<thead>
				<tr>
					<th>No.</th>
					<th>ITEM(s)</th>
					<th>SIZE(Model)</th>
					<th>Q&apos;ty</th>
					<th>UOM</th>
					<th colspan="2">UNIT PRICE</th>
					@if ($option->is_use_discount)
					<th colspan="2">DISCOUNT</th>
					@endif
					@if ($option->is_use_tax)
					<th colspan="2">TAX</th>
					@endif
					<th colspan="2">SUBTOTAL</th>
				</tr>
			</thead>
			<tbody>
				@foreach ($object->items as $index => $item)
				<tr>
					<td>{{ $index + 1 }}</td>
					<td class="name">{!! nl2br(e($item->description)) !!}</td>
					<td>{{ $item->size }}</td>
					<td>{{ $item->quantity }}</td>
					<td>{{ $item->unit }}</td>
					<td class="currency">{{ $object->currency->symbol}}</td>
					<td class="price">{{ number_format($item->price, 2) }}</td>
					@if ($option->is_use_discount)
					<td class="currency">{{ $object->currency->symbol}}</td>
					<td class="price">{{ number_format($item->discount, 2) }}</td>
					@endif
					@if ($option->is_use_tax)
					<td colspan="2" class="tax">{{ $item->tax }}%</td>
					@endif
					<td class="currency">{{ $object->currency->symbol}}</td>
					<td class="price">{{ number_format($item->quantity * $item->price, 2) }}</td>
				</tr>
				@endforeach
				@if ($option->is_use_discount || $option->is_use_tax)
				<tr>
					<td colspan="{{ $colspan }}" class="empty"></td>
					<td colspan="2" class="total"><strong>Total</strong></td>
					<td class="currency total">{{ $object->currency->symbol}}</td>
					<td class="price total">{{ number_format($object->total_price, 2) }}</td>
				</tr>
				@endif
				@if ($option->is_use_discount)
				<tr>
					<td colspan="{{ $colspan }}" class="empty"></td>
					<td colspan="2" class="total"><strong>Discount</strong></td>
					<td class="currency total">{{ $object->currency->symbol}}</td>
					<td class="price total">{{ number_format($object->discount, 2) }}</td>
				</tr>
				@endif
				@if ($option->is_use_tax)
				<tr>
					<td colspan="{{ $colspan }}" class="empty"></td>
					<td colspan="2" class="total"><strong>Tax</strong></td>
					<td class="currency total">{{ $object->currency->symbol}}</td>
					<td class="price total">{{ number_format($object->tax, 2) }}</td>
				</tr>
				@endif
				<tr>
					<td colspan="{{ $colspan }}" class="empty"></td>
					<td colspan="2" class="total"><strong>Grand Total</strong></td>
					<td class="currency total">{{ $object->currency->symbol}}</td>
					<td class="price total">{{ number_format($object->grand_total, 2) }}</td>
				</tr>
			</tbody>
		</table>

		<div class="notice prevent-break">
			Any variation in quantities and/or type (grade) will be subjected to a new P.O.
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
					@elseif ($currentProcess === "REJECTED")
					<img src="{{ public_path('img') }}/rejected.jpg" width="130" height="77" />
					@elseif ($currentProcess === "DENIED")
					<img src="{{ public_path('img') }}/denied.jpg" width="130" height="77" />
					@elseif ($currentProcess === "CANCELED")
					<img src="{{ public_path('img') }}/canceled.jpg" width="130" height="77" />
					@else
					<img src="{{ public_path('img') }}/signature.jpg" width="130" height="77" />
					@endif
				</div>

				<p class="signature-name">{{ $object->originator->kor_name }}</p>
				<p class="signature-position">{{ strtoupper($object->originator->kor_position) }}</p>
				<p class="signature-branch">{{ $object->branch->name }}</p>
			</div>
		</div>
	</main>
</body>

</html>