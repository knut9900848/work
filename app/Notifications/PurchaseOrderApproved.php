<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PurchaseOrderApproved extends Notification
{
	use Queueable;

	/**
	 * Create a new notification instance.
	 *
	 * @return void
	 */
	public function __construct($purchaseOrder, $sender)
	{
		$this->purchaseOrder = $purchaseOrder;
		$this->sender = $sender;
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
		$greeting = sprintf('Dear %s!', $notifiable->name);
		$url = url('/purchase-orders/' . $this->purchaseOrder->id);
		return (new MailMessage)
			->subject('IES PO No. [' . $this->purchaseOrder->number . '] Approved')
			->greeting($greeting)
			->line('IES PO Number. [' . $this->purchaseOrder->number . '] has been approved by ' . $this->sender->name)
			->line('Please send the IES PO to the supplier as soon as possible.')
			->action('View IES PO', $url)
			->line('Thank you');
	}

	public function toDatabase()
	{
		return [
			"message" => $this->purchaseOrder->number,
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
