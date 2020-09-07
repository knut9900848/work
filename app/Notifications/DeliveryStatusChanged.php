<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;
use Carbon\Carbon;

class DeliveryStatusChanged extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    protected $deliveryHistory;
    protected $deliveryNote;
    protected $message;
    protected $sender;

    public function __construct($deliveryHistory, $deliveryNote, $message, $sender)
    {
        $this->deliveryHistory = $deliveryHistory;
        $this->deliveryNote = $deliveryNote;
        $this->sender = $sender;
        $this->message = $message;
        // $this->delay(Carbon::now()->addSeconds(30));
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $url = url('/delivery-notes');
        $greeting = sprintf('Dear %s!', $notifiable->name);
        return (new MailMessage)
            ->subject('[' . $this->deliveryHistory->status . '] ' . $this->deliveryNote->quotation_number . ' Item Status has been Changed to ' . $this->deliveryHistory->status)
            ->greeting($greeting)
            ->line(new HtmlString($this->deliveryNote->line_description))
            ->line(new HtmlString('<strong>Quotation Number</strong>: ' . $this->deliveryNote->quotation_number))
            ->line(new HtmlString('Status: <strong>' . $this->deliveryHistory->status . '</strong> Changed By ' . $this->sender->name))
            ->line(new HtmlString(nl2br($this->message)))
            // ->action('View Delivery Note', $url)
            ->line('Thank you');
        // ->markdown('emails.confirm', ['user' => $user, 'url' => $url]);
    }

    public function toDatabase($notifiable)
    {
        $title = '[' . $this->deliveryHistory->status . '] ' . $this->deliveryNote->quotation_number . ' Item Status has been Changed to ' . $this->deliveryHistory->status;
        $body = $this->deliveryNote->item_description . ' Status Changed To: ' . $this->deliveryHistory->status . ' By ' . $this->sender->name;
        return [
            'title' => $title,
            'sender_name' => $notifiable->name,
            'sender_email' => $notifiable->email,
            'sender_id' => $notifiable->id,
            'body' => $body,
            'message' => $this->message,
        ];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
