<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{{ public_path('css/normalize.css') }}">
  <link rel="stylesheet" href="{{ public_path('css/reports/daily.css') }}">
  <title>IES Work System Daily Report {{ $today }}</title>
</head>

<body>
  <main class="main">
    <div class="wrap-quotation-table">
      <h3>1. 발송된 Quotations</h3>
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>No</th>
            <th>QT No.</th>
            <th>Total Price</th>
            <th>Sub Project</th>
            <th>Sumary</th>
          </tr>
        </thead>
        <tbody>
          @if (count($quotations) > 0)
          @foreach ($quotations as $index => $quotation)
          <tr>
            <td>{{ $index+1 }}</td>
            <td class="object-number">{{ $quotation->number }}</td>
            <td>{{ $quotation->total_price }}</td>
            <td>{{ $quotation->sub_project->name }}</td>
            <td>{{ $quotation->summary }}</td>
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

    <div class="wrap-purchas-order-table">
      <h3>2. 발송된 IES Purchase Order</h3>
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>No</th>
            <th class="object-number">IES PO No.</th>
            <th>Supplier</th>
            <th>Total Price</th>
            <th>Sub Project</th>
            <th>Sumary</th>
          </tr>
        </thead>
        <tbody>
          @if (count($purchaseOrders))
          @foreach ($purchaseOrders as $index => $purchaseOrder)
          <tr>
            <td>{{ $index+1 }}</td>
            <td class="object-number">{{ $purchaseOrder->number }}</td>
            <td>{{ $purchaseOrder->supplier->name }}</td>
            <td>{{ $purchaseOrder->total_price }}</td>
            <td>{{ $purchaseOrder->sub_project->name }}</td>
            <td>{{ $purchaseOrder->summary }}</td>
          </tr>
          @endforeach
          @else
          <tr>
            <td colspan="6">해당하는 데이터가 없습니다.</td>
          </tr>
          @endif
        </tbody>
      </table>
    </div>

    <div class="wrap-sale-order-table">
      <h3>3. 접수된 Client Purchase Order</h3>
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>No</th>
            <th class="object-number">Client PO No.</th>
            <th>Total Price</th>
            <th>Sub Project</th>
            <th>Sumary</th>
          </tr>
        </thead>
        <tbody>
          @if (count($saleOrders) > 0)
          @foreach ($saleOrders as $index => $saleOrder)
          <tr>
            <td>{{ $index+1 }}</td>
            <td>{{ $saleOrder->number }}</td>
            <td>{{ $saleOrder->total_price }}</td>
            <td>{{ $saleOrder->work->sub_project->name }}</td>
            <td>{{ $saleOrder->summary }}</td>
          </tr>
          @endforeach
          @else
          <tr>
            <td colspan="5">
              해당하는 데이터가 없습니다.
            </td>
          </tr>
          @endif
        </tbody>
      </table>
    </div>

    <div class="wrap-invoice-table">
      <h3>4. 발송된 Invoice</h3>
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>No</th>
            <th class="object-number">Invoice No.</th>
            <th class="object-number">Related PO NO.</th>
            <th>Total Price</th>
            <th>Sub Project</th>
            <th>Sumary</th>
          </tr>
        </thead>
        <tbody>
          @if (count($invoices) > 0)
          @foreach ($invoices as $index => $invoice)
          <tr>
            <td>{{ $index+1 }}</td>
            <td>{{ $invoice->number }}</td>
            <td>{{ $invoice->work->purchaseOrder->number }}</td>
            <td>{{ $invoice->total_price }}</td>
            <td>{{ $invoice->work->sub_project->name }}</td>
            <td>{{ $invoice->summary }}</td>
          </tr>
          @endforeach
          @else
          <tr>
            <td colspan="6">
              해당하는 데이터가 없습니다.
            </td>
          </tr>
          @endif
        </tbody>
      </table>
    </div>

    <div class="wrap-purchas-order-payment-table">
      <h3>5. 내일까지 지불 되어야 할 대금</h3>
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>No</th>
            <th>IES PO No.</th>
            <th>Amount</th>
            <th>Supplier</th>
            <th>Sub Project</th>
            <th>Paid</th>
            <th>Sumary</th>
          </tr>
        </thead>
        <tbody>
          @if (count($purchaseOrderPayments) > 0)
          @foreach ($purchaseOrderPayments as $index => $purchaseOrderPayment)
          <tr>
            <td>{{ $index+1 }}</td>
            <td>{{ $purchaseOrderPayment->number }}</td>
            <td>{{ $purchaseOrderPayment->total_price }}</td>
            <td>{{ $purchaseOrderPayment->supplier->name }}</td>
            <td>{{ $purchaseOrderPayment->sub_project->name }}</td>
            @if ($purchaseOrderPayment->payment_date)
            <td>Paid</td>
            @else
            <td>Not Paid</td>
            @endif
            <td>{{ $purchaseOrderPayment->summary }}</td>
          </tr>
          @endforeach
          @else
          <tr>
            <td colspan="7">
              해당하는 데이터가 없습니다.
            </td>
          </tr>
          @endif
        </tbody>
      </table>
    </div>
  </main>
</body>

</html>