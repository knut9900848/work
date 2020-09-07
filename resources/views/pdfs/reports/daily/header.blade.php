<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{{ public_path('css/normalize.css') }}">
  <link rel="stylesheet" href="{{ public_path('css/reports/daily.css') }}">
  <title>Daily Report {{ $today }}</title>
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

    <h1 class="page-title">IES System Daily Report</h1>
    <p class="report-date">{{ $today }}</p>
  </header>
</body>

</html>