<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\InvoiceIesReminder;
use App\Model\InvoiceReminderEmailHistory;
use App\Model\Invoice;
use App\User;
use App\Model\Work;
use Carbon\Carbon;
use Mail;
use App\Mail\InvoiceReminderEmailToIes;

class SendReminderEmailToIes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reminder:emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send invoice reminder email to IES Staff';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $expiredDate = Carbon::now()->addDays(3)->toDateString();
        $targetWorks = Work::where('phase', 'SENT INV')
            ->where('status', 'OPEN')
            ->whereDate('payment_due_date', $expiredDate)
            ->get();

        $invoices = [];
        foreach ($targetWorks as $work) {
            $invoices[] = $work->invoice;
        }

        foreach ($invoices as $invoice) {
            $this->sendInvoiceReminderEmailToIes($invoice);
        }
    }

    private function sendInvoiceReminderEmailToIes($invoice)
    {
        foreach ($invoice->invoice_ies_reminders as $reminder) {
            Mail::to($reminder)->send(new InvoiceReminderEmailToIes);

            $reminderHistory = new InvoiceReminderEmailHistory;
            $reminderHistory->invoice_id = $reminder->invoice_id;
            $reminderHistory->receiver_id = $reminder->user_id;
            $reminderHistory->invoice_number = $reminder->number;
            $reminderHistory->receiver_name = $reminder->name;
            $reminderHistory->receiver_timezone = $reminder->timezone;
            $reminderHistory->receiver_email_address = $reminder->email;

            if (Mail::failures()) {
                $reminderHistory->result = "Failed";
            } else {
                $reminderHistory->result = "Success";
            }

            $reminderHistory->save();
        }
    }
}
