<?php

namespace App\Exports;

use App\Model\Work;
use Maatwebsite\Excel\Excel;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithProperties;


class WorksExport implements FromView, Responsable, ShouldAutoSize, WithProperties
{
    use Exportable;

    private $fileName = 'works.xlsx';

    private $writerType = Excel::XLSX;

    private $headers = [
        'Content-Type' => 'text/csv',
    ];

    protected $works;

    public function __construct($works)
    {
        $this->works = $works;
    }

    public function view(): View
    {
        return view('excels.works', [
            'works' => $this->works,
        ]);
    }

    public function properties(): array
    {
        return [
            'creator'        => 'IES Member',
            'lastModifiedBy' => 'IES Member',
            'title'          => 'IES work system',
            'description'    => 'Works',
            'subject'        => 'Works',
            'keywords'       => 'works,spreadsheet',
            'category'       => 'Works',
            'manager'        => 'Scott Kim',
            'company'        => 'Intrust Energy Solution',
        ];
    }
}
