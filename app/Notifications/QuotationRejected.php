<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class QuotationRejected extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($quotation, $sender)
    {
        $this->quotation = $quotation;
        $this->sender = $sender;
        // $this->delay(now()->addMinutes(10));
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $greeting = sprintf('Dear %s!', $notifiable->name);
        $url = url('/quotations/'.$this->quotation->id);
        return (new MailMessage)
                    ->subject('QT No. ['.$this->quotation->number.'] Rejected.')
                    ->greeting($greeting)
                    ->line('Quotation Number. ['.$this->quotation->number.'] has been Rejected by '.$this->sender->name)
                    ->line('Please review the quotation and resubmit.')
                    ->action('View Quotation', $url)
                    ->line('Thank you');
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
