<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{{ public_path('css/normalize.css') }}">
  <link rel="stylesheet" href="{{ public_path('css/reports/weekly.css') }}">
  <title>IES Work System Daily Report</title>
</head>

<body onload="init()">
  <main class="main">
    <h2 class="section-title">1. REPORT SUMMARY</h2>
    <div class="wrap-items">
      <div class="quotation">
        <h3>Issued Quotations</h3>
        <p class="item-count">{{ count($sentQuotations) }}</p>
        <p class="item-amount">KRW {{ number_format($amount->quotations, 2) }}</p>
      </div>
      <div class="purchase-order">
        <h3>Issued IES PO</h3>
        <p class="item-count">{{ count($sentPurchaseOrders) }}</p>
        <p class="item-amount">KRW {{ number_format($amount->purchaseOrders, 2) }}</p>
      </div>
      <div class="sale-order">
        <h3>Issued client PO</h3>
        <p class="item-count">{{ count($receivedSaleOrders) }}</p>
        <p class="item-amount">KRW {{ number_format($amount->saleOrders, 2) }}</p>
      </div>
    </div>

    <div class="wrap-items">
      <div class="invoice">
        <h3>Issued Invoices</h3>
        <p class="item-count">{{ count($sentInvoice) }}</p>
        <p class="item-amount">KRW {{ number_format($amount->invoices, 2) }}</p>
      </div>
      <div class="quotation">
        <h3>Overdue payment (IES)</h3>
        <p class="item-count">{{ count($sentQuotations) }}</p>
        <p class="item-amount">KRW {{ number_format($amount->quotations, 2) }}</p>
      </div>
      <div class="purchase-order">
        <h3>Overdue payment (Clients)</h3>
        <p class="item-count">{{ count($sentPurchaseOrders) }}</p>
        <p class="item-amount">KRW {{ number_format($amount->purchaseOrders, 2) }}</p>
      </div>
    </div>

    <div class="wrap-currencies">
      Exchagned Rate:&nbsp;
      @foreach($currencies as $currency)
      <span class="currency-name">{{ $currency->name }}</span>
      <span class="currency-rate">{{ $currency->exchange_rate }}</span>
      @endforeach
    </div>

    <div class="wrap-overDuePayment-table">
      <h3>1. 미수금</h3>
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>No</th>
            <th>PO No.</th>
            <th>Invoice No.</th>
            <th>Client</th>
            <th>Sub Project</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Payment Due Date</th>

          </tr>
        </thead>
        <tbody>
          @if (count($overduePayments) > 0)
          @foreach ($overduePayments as $index => $payment)
          <tr>
            <td>{{ $index+1 }}</td>
            <td class="object-number">{{ $payment->number }}</td>
            <td class="object-number">{{ $payment->work->sale_order_number }}</td>
            <td>{{ $payment->work->company->name }}</td>
            <td>{{ $payment->work->sub_project->name }}</td>
            <td>{{ $payment->work->currency_name }}</td>
            <td>{{ $payment->total_price }}</td>
            <td>{{ $payment->payment_due_date }}</td>
          </tr>
          @endforeach
          @else
          <tr>
            <td colspan="5">해당하는 데이터가 없습니다.</td>
          </tr>
          @endif
        </tbody>
      </table>
    </div>

  </main>

</body>

</html>