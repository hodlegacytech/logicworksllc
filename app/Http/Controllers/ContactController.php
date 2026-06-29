<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactFormSubmitted;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Throwable;

class ContactController extends Controller
{
    public function store(ContactFormRequest $request): RedirectResponse
    {
        $submission = $request->validated();

        try {
            Mail::to(
                config('mail.contact_to.address'),
                config('mail.contact_to.name'),
            )->send(new ContactFormSubmitted($submission));
        } catch (Throwable $exception) {
            report($exception);

            return back()
                ->withInput()
                ->withErrors([
                    'form' => 'We could not send your message right now. Please try again or email us directly at hello@logicworks.com.',
                ]);
        }

        return back()->with('contactSuccess', true);
    }
}
