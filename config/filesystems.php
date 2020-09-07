<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application. Just store away!
    |
    */

    'default' => env('FILESYSTEM_DRIVER', 'local'),

    /*
    |--------------------------------------------------------------------------
    | Default Cloud Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Many applications store files both locally and in the cloud. For this
    | reason, you may specify a default "cloud" driver here. This driver
    | will be bound as the Cloud disk implementation in the container.
    |
    */

    'cloud' => env('FILESYSTEM_CLOUD', 's3'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    | Supported Drivers: "local", "ftp", "sftp", "s3"
    |
    */

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
        ],

        /*
        |--------------------------------------------------------------------------
        | Quotation
        |--------------------------------------------------------------------------
        */
        'quotation_pdfs' => [
            'driver' => 'local',
            'root' => storage_path('app/pdfs/quotations'),
        ],

        'quotation_files' => [
            'driver' => 'local',
            'root' => storage_path('app/files/quotations'),
        ],

        'quotation_attachments' => [
            'driver' => 'local',
            'root' => storage_path('app/attachments/quotations'),
        ],

        /*
        |--------------------------------------------------------------------------
        | Purchase Order
        |--------------------------------------------------------------------------
        */
        'purchase_order_pdfs' => [
            'driver' => 'local',
            'root' => storage_path('app/pdfs/purchase-orders'),
        ],

        'purchase_order_files' => [
            'driver' => 'local',
            'root' => storage_path('app/files/purchase-orders'),
        ],

        'purchase_order_attachments' => [
            'driver' => 'local',
            'root' => storage_path('app/attachments/purchase-orders'),
        ],

        'purchase_order_terms_and_conditions' => [
            'driver' => 'local',
            'root' => storage_path('app/purchase-order-terms-and-conditions'),
        ],

        /*
        |--------------------------------------------------------------------------
        | Sale Order
        |--------------------------------------------------------------------------
        */
        'sale_order_files' => [
            'driver' => 'local',
            'root' => storage_path('app/files/sale-orders'),
        ],

        'sale_order_attachments' => [
            'driver' => 'local',
            'root' => storage_path('app/attachments/sale-orders'),
        ],

        /*
        |--------------------------------------------------------------------------
        | WCC
        |--------------------------------------------------------------------------
        */
        'wcc_files' => [
            'driver' => 'local',
            'root' => storage_path('app/files/wccs'),
        ],

        'wcc_attachments' => [
            'driver' => 'local',
            'root' => storage_path('app/attachments/wccs'),
        ],

        /*
        |--------------------------------------------------------------------------
        | Invoice
        |--------------------------------------------------------------------------
        */
        'invoice_pdfs' => [
            'driver' => 'local',
            'root' => storage_path('app/pdfs/invoices'),
        ],

        'invoice_files' => [
            'driver' => 'local',
            'root' => storage_path('app/files/invoices'),
        ],

        /*
        |--------------------------------------------------------------------------
        | Payment
        |--------------------------------------------------------------------------
        */
        'payment_files' => [
            'driver' => 'local',
            'root' => storage_path('app/files/payments'),
        ],

        /*
        |--------------------------------------------------------------------------
        | Report
        |--------------------------------------------------------------------------
        */

        'report_pdfs' => [
            'driver' => 'local',
            'root' => storage_path('app/reports'),
        ],

        /*
        |--------------------------------------------------------------------------
        | Excel
        |--------------------------------------------------------------------------
        */

        'excels' => [
            'driver' => 'local',
            'root' => storage_path('app/excels'),
        ],


        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL') . '/storage',
            'visibility' => 'public',
        ],

        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'endpoint' => env('AWS_URL'),
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Symbolic Links
    |--------------------------------------------------------------------------
    |
    | Here you may configure the symbolic links that will be created when the
    | `storage:link` Artisan command is executed. The array keys should be
    | the locations of the links and the values should be their targets.
    |
    */

    'links' => [
        public_path('storage') => storage_path('app/public'),
    ],

];
