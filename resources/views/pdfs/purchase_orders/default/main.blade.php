<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{{ public_path('css/normalize.css') }}">
  <link rel="stylesheet" href="{{ public_path('css/purchase-orders/default.css') }}">
  <title>{{ $purchaseOrder->number }}</title>
</head>

<body>

  <main class="main">
    <p class="divider"></p>
    @if(isset($purchaseOrder->purchase_order_option->title))
    <h3 class="title-item-table">PURCHASE ORDER FOR {{ $purchaseOrder->purchase_order_option->title }}</h3>
    @endif

    <div class="wrap-item-list">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>No.</th>
            <th>ITEM(s)</th>
            <th>SIZE(Model)</th>
            <th>Q&apos;ty</th>
            <th>UOM</th>
            <th colspan="2">UNIT PRICE</th>
            @if ($option->is_use_tax)
            <th>TAX</th>
            @endif
            <th colspan="2">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          @foreach ($purchaseOrder->purchase_order_lines as $index => $line)
          <tr>
            <td>{{ $index + 1 }}</td>
            <td class="name">{!! nl2br(e($line->description)) !!}</td>
            <td>{{ $line->size }}</td>
            <td>{{ $line->quantity }}</td>
            <td>{{ $line->unit }}</td>
            <td class="currency">{{ $purchaseOrder->currency->symbol}}</td>
            <td class="price">{{ number_format($line->price, 2) }}</td>
            @if ($option->is_use_tax)
            <td class="tax">Y</td>
            @endif
            <td class="currency">{{ $purchaseOrder->currency->symbol}}</td>
            <td class="price">{{ number_format($line->quantity * $line->price, 2) }}</td>
          </tr>
          @endforeach
          <tr>
            <td colspan="{{ $option->is_use_tax ? 8 : 7 }}" class="total-title"><strong>Total</strong></td>
            <td class="currency total">{{ $purchaseOrder->currency->symbol}}</td>
            <td class="price total">{{ number_format($purchaseOrder->total_price, 2) }}</td>
          </tr>
          @if ($option->discount > 0)
          <tr>
            <td colspan="{{ $option->is_use_tax ? 8 : 7 }}" class="total-title"><strong>Discount</strong></td>
            <td class="currency total">{{ $purchaseOrder->currency->symbol}}</td>
            <td class="price total">{{ number_format($option->discount, 2) }}</td>
          </tr>
          @endif
          @if ($option->shipping_fee > 0)
          <tr>
            <td colspan="{{ $option->is_use_tax ? 8 : 7 }}" class="total-title"><strong>Shipping / Handling</strong></td>
            <td class="currency total">{{ $purchaseOrder->currency->symbol}}</td>
            <td class="price total">{{ number_format($option->shipping_fee, 2) }}</td>
          </tr>
          @endif
          @if ($option->is_use_tax)
          <tr>
            <td colspan="{{ $option->is_use_tax ? 8 : 7 }}" class="total-title"><strong>Tax</strong></td>
            <td class="currency total">{{ $purchaseOrder->currency->symbol}}</td>
            <td class="price total">{{ number_format($purchaseOrder->tax, 2) }}</td>
          </tr>
          @endif
          <tr>
            <td colspan="{{ $option->is_use_tax ? 8 : 7 }}" class="total-title"><strong>Grand Total</strong></td>
            <td class="currency total">{{ $purchaseOrder->currency->symbol}}</td>
            <td class="price total">{{ number_format($purchaseOrder->grand_total, 2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="notice">
      Any variation in quantities and/or type (grade) will be subjected to a new PO.
    </div>

    <div class="wrap-remarks">
      <div class="remarks">
        <h3 class="remarks-title">REMARKS</h3>
        <div>{!! $purchaseOrder->remarks !!}</div>
      </div>
      <div class="signature">
        <div class="stamp">
          @if ($process === "Draft")
          <img src="{{ public_path('img') }}/stamps/draft.jpg" width="130" />
          @elseif ($process === "REJECTED")
          <img src="{{ public_path('img') }}/stamps/rejected.jpg" width="130" />
          @elseif ($process === "DENIED")
          <img src="{{ public_path('img') }}/stamps/denied.jpg" width="130" />
          @elseif ($process === "CANCELED")
          <img src="{{ public_path('img') }}/stamps/canceled.jpg" width="130" />
          @else
          <img src="{{ public_path('img') }}/stamps/signature.jpg" width="130" />
          @endif
        </div>

        <p class="signature-name">{{ $purchaseOrder->originator->name }}</p>
        <p class="signature-position">{{ strtoupper($purchaseOrder->originator->position) }}</p>
        <p class="signature-branch">Intrust Energy Solution Co., Ltd.</p>
      </div>
    </div>
  </main>
</body>

</html>