<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{{ public_path('css/normalize.css') }}">
  <link rel="stylesheet" href="{{ public_path('css/quotations/default.css') }}">
  <title>{{ $quotation->number }}</title>
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

    <h1 class="page-title">Quotation</h1>

    <div class="wrap-info-table">
      <table cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td class="branch">{{ $quotation->branch->name }}</td>
            <td class="number">{{ $quotation->number }}</td>
          </tr>
          <tr>
            <td class="address">
              @if(!empty($quotation->branch->street1)){{ $quotation->branch->street1 }},&nbsp;@endif
              @if(!empty($quotation->branch->street2)){{ $quotation->branch->street2 }},&nbsp;@endif
              @if(!empty($quotation->branch->city)){{ $quotation->branch->city }},&nbsp;@endif
              @if(!empty($quotation->branch->state)){{ $quotation->branch->state }},&nbsp;@endif
              @if(!empty($quotation->branch->zipcode)){{ $quotation->branch->zipcode }},&nbsp;@endif
              @if(!empty($quotation->branch->country)){{ $quotation->branch->country }}@endif
            </td>
            <td class="revision">@if($version !== 0)Rev. {{ $version }}@endif</td>
          </tr>
          <tr>
            <td class="phone">Representive Phone Number: {{ $quotation->branch->phone }}</td>
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
            <td>{{ $quotation->receiver->name }} &lt;{{ $quotation->receiver->email }}&gt;</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              @if(isset($quotation->company->addresses->first()->street1)){{ $quotation->company->addresses->first()->street1 }},&nbsp;@endif
              @if(isset($quotation->company->addresses->first()->street2)){{ $quotation->company->addresses->first()->street2 }}@endif
              @if(isset($quotation->company->addresses->first()->state)){{ $quotation->company->addresses->first()->state }}@endif
              @if(isset($quotation->company->addresses->first()->city)){{ $quotation->company->addresses->first()->city }}@endif
              @if(isset($quotation->company->addresses->first()->country)){{ $quotation->company->addresses->first()->country }}@endif
            </td>
          </tr>
          <tr>
            <th>Project</th>
            <td>{{ $quotation->project->name }}</td>
          </tr>
          @foreach ($quotation->fields as $extraField)
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
            <td>{{ $quotation->originator->name }} / {{ $quotation->originator->position }} / {{ $quotation->originator->email }} / {{ $quotation->originator->mobile }}</td>
          </tr>
          <tr>
            <th>Supplier&apos;s Name</th>
            <td>{{ $quotation->branch->name }}</td>
          </tr>
          <tr>
            <th>Supplier&apos;s Address</th>
            <td>
              @if(!empty($quotation->branch->street1)){{ $quotation->branch->street1 }},&nbsp;@endif
              @if(!empty($quotation->branch->street2)){{ $quotation->branch->street2 }},&nbsp;@endif
              @if(!empty($quotation->branch->city)){{ $quotation->branch->city }},&nbsp;@endif
              @if(!empty($quotation->branch->state)){{ $quotation->branch->state }},&nbsp;@endif
              @if(!empty($quotation->branch->zipcode)){{ $quotation->branch->zipcode }},&nbsp;@endif
              @if(!empty($quotation->branch->country)){{ $quotation->branch->country }}@endif
            </td>
          </tr>
          <tr>
            <th>Supplier&apos;s Quote #</th>
            <td>{{ $quotation->number }}</td>
          </tr>
          <tr>
            <th>Issued Date of Quotation</th>
            <td>{{ Carbon\Carbon::parse($quotation->issued_date)->formatLocalized('%d %b %Y') }}</td>
          </tr>
          @foreach ($quotation->fields as $extraField)
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
          @foreach ($quotation->fields as $extraField)
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