<?php

namespace App\Listeners;

use App\Event\UpdateOrCreateDeliveryNoteEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Model\DeliveryNote;

class UpdateOrCreateDeliveryNoteListner
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    { }

    /**
     * Handle the event.
     *
     * @param  UpdateOrCreateDeliveryNoteEvent  $event
     * @return void
     */
    public function handle(UpdateOrCreateDeliveryNoteEvent $event)
    {
        DeliveryNote::updateOrCreate([
            'id' => $event->line->delivery_note['id'],
        ], [
            'quotation_line_id' => $event->line->id,
            'line_description' => $event->line->description,
            'price' => $event->line->price * $event->line->quantity,
            'currency' => $event->line->quotation->currency->name,
            'quotation_number' => $event->line->quotation->number,
            'quotation_sr_number' => $event->line->quotation->sr_number,
            'quotation_issued_date' => $event->line->quotation->issued_date,
            'quotation_project' => $event->line->quotation->project->name,
        ]);
    }
}
