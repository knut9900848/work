<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>IES work system</title>
</head>

<body>
  <table class="header-table">
    <tbody>
      <tr>
        <td colspan="16"></td>
      </tr>
      <tr>
        <td colspan="17" style="height: 30px; font-size: 18px; text-align:center;vertical-align:middle">
          <h1>IES system works excel data Sheet</h1>
        </td>
      </tr>
      <tr>
        <td colspan="17" style="text-align: right">Latest updated at {{ date('Y-m-d H:i:s') }}</td>
      </tr>
    </tbody>
  </table>
  <table>
    <thead style="text-align:center">
      <tr>
        <th style="height: 30px;">ID</th>
        <th>Status</th>
        <th>Phase</th>
        <th>Work Number</th>
        <th>Project Name</th>
        <th>Sub Project Name</th>
        <th>Currency</th>
        <th>PO Number</th>
        <th>PO Received Date</th>
        <th>PO Amount</th>
        <th>Invoice Number</th>
        <th>Invoice Sent Date</th>
        <th>Invoice Amount</th>
        <th>Pyament Due Date</th>
        <th>payment Date</th>
        <th>Exchange Rate</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      @foreach($works as $work)
      <tr>
        <td>{{ $work->id }}</td>
        <td>{{ $work->status }}</td>
        <td>{{ $work->phase }}</td>
        <td>{{ $work->number }}</td>
        <td>{{ $work->project->name }}</td>
        <td>{{ $work->sub_project->name }}</td>
        <td>{{ $work->currency_name }}</td>
        <td>{{ $work->sale_order_number }}</td>
        <td>{{ $work->sale_order_date }}</td>
        <td>{{ number_format($work->sale_order_total_price, 2) }}</td>
        <td>{{ $work->invoice_number}}</td>
        <td>{{ $work->invoice_date}}</td>
        <td>{{ number_format($work->invoice_total_price, 2) }}</td>
        <td>{{ $work->payment_due_date }}</td>
        <td>{{ $work->payment_date }}</td>
        <td>{{ number_format($work->payment_exchange_rate, 2) }}</td>
        <td>{{ number_format($work->invoice_total_price, 2) }}</td>
      </tr>
      @endforeach
    </tbody>
  </table>
</body>

</html>