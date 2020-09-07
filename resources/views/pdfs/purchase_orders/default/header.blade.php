<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{{ public_path('css/normalize.css') }}">
  <link rel="stylesheet" href="{{ public_path('css/purchase-orders/default.css') }}">
  <title>{{ $purchaseOrder->number }}</title>
  <script>
    window.onload = function() {
      var vars = {};
      var x = document.location.search.substring(1).split('&');
      for (var i in x) {
        var z = x[i].split('=', 2);
        vars[z[0]] = unescape(z[1]);
      }
      document.querySelectorAll('.page-number')[0].textContent = 'Page: ' + vars['page'] + ' of ' + vars['topage'];
    };
  </script>
</head>

<body>
  <header>
    <div class="wrap-top">
      <div class="section-left">
        <img src="{{ public_path('img') }}/logos/logo_c.jpg" width="85">
      </div>
      <div class="section-right">
        <p>(주)인트러스트에너지솔루션<p>
      </div>
    </div>

    <h1 class="page-title">PURCHASE ORDER</h1>

    <div class="wrap-info-table">
      <table cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td class="branch">{{ $purchaseOrder->branch->name }}</td>
            <td class="number">{{ $purchaseOrder->number }}</td>
          </tr>
          <tr>
            <td class="address">
              @if(!empty($purchaseOrder->branch->street1)){{ $purchaseOrder->branch->street1 }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->street2)){{ $purchaseOrder->branch->street2 }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->city)){{ $purchaseOrder->branch->city }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->state)){{ $purchaseOrder->branch->state }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->zipcode)){{ $purchaseOrder->branch->zipcode }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->country)){{ $purchaseOrder->branch->country }}@endif
            </td>
            <td class="revision">@if($version !== 0)Rev. {{ $version }}@endif</td>
          </tr>
          <tr>
            <td class="phone">Representive Phone Number: {{ $purchaseOrder->branch->phone }}</td>
            <td class="page-number"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="wrap-attention-table">
      <table cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <th>Attn.</th>
            <td>{{ $purchaseOrder->receiver->name }} &lt;{{ $purchaseOrder->receiver->email }}&gt; / {{ $purchaseOrder->supplier->name }}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              @if(isset($purchaseOrder->supplier->addresses->first()->street1)){{ $purchaseOrder->supplier->addresses->first()->street1 }},&nbsp;@endif
              @if(isset($purchaseOrder->supplier->addresses->first()->street2)){{ $purchaseOrder->supplier->addresses->first()->street2 }}@endif
              @if(isset($purchaseOrder->supplier->addresses->first()->state)){{ $purchaseOrder->supplier->addresses->first()->state }}@endif
              @if(isset($purchaseOrder->supplier->addresses->first()->city)){{ $purchaseOrder->supplier->addresses->first()->city }}@endif
              <!-- @if(isset($purchaseOrder->supplier->addresses->first()->country)){{ $purchaseOrder->supplier->addresses->first()->country }}@endif -->
            </td>
          </tr>
          <tr>
            <th>Project</th>
            <td>{{ $purchaseOrder->project->name }}</td>
          </tr>
          @foreach ($purchaseOrder->fields as $extraField)
          @if ($extraField->position === 'Attention Info Table')
          <tr>
            <th>{{ $extraField->title }}</th>
            <td>{{ $extraField->content }}</td>
          </tr>
          @endif
          @endforeach
        </tbody>
      </table>
    </div>

    <div class="wrap-originator-table">
      <table cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <th>Originator</th>
            <td>{{ $purchaseOrder->originator->title }}{{ $purchaseOrder->originator->name }} / {{ $purchaseOrder->originator->position }} / {{ $purchaseOrder->originator->email }} / {{ $purchaseOrder->originator->mobile }}</td>
          </tr>
          <tr>
            <th>Supplier&apos;s Name</th>
            <td>{{ $purchaseOrder->branch->name }}</td>
          </tr>
          <tr>
            <th>Supplier&apos;s Address</th>
            <td>
              @if(!empty($purchaseOrder->branch->street1)){{ $purchaseOrder->branch->street1 }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->street2)){{ $purchaseOrder->branch->street2 }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->city)){{ $purchaseOrder->branch->city }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->state)){{ $purchaseOrder->branch->state }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->zipcode)){{ $purchaseOrder->branch->zipcode }},&nbsp;@endif
              @if(!empty($purchaseOrder->branch->country)){{ $purchaseOrder->branch->country }}@endif
            </td>
          </tr>
          <tr>
            <th>Supplier&apos;s Quote #</th>
            <td>{{ $purchaseOrder->number }}</td>
          </tr>
          <tr>
            <th>Issued Date of Purchase Order</th>
            <td>{{ Carbon\Carbon::parse($purchaseOrder->issued_date)->formatLocalized('%d %b %Y') }}</td>
          </tr>
          @foreach ($purchaseOrder->fields as $extraField)
          @if ($extraField->position === 'Originator Info Table')
          <tr>
            <th>{{ $extraField->title }}</th>
            <td>{{ $extraField->content }}</td>
          </tr>
          @endif
          @endforeach
        </tbody>
      </table>
    </div>

    <div class="wrap-extra-table">
      <table cellpadding="0" cellspacing="0">
        <tbody>
          @foreach ($purchaseOrder->fields as $extraField)
          @if ($extraField->position === 'New Table')
          <tr>
            <th>{{ $extraField->title }}</th>
            <td>{{ $extraField->content }}</td>
          </tr>
          @endif
          @endforeach
        </tbody>
      </table>
    </div>
  </header>
</body>

</html>