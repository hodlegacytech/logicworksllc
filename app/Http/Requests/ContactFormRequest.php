<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContactFormRequest extends FormRequest
{
    public const SERVICES = [
        'Web Design & Development',
        'AI Automation & Machine Learning',
        'SEO & AEO Services',
        'PPC & Paid Media',
        'Social Media Marketing',
        'Mobile App Development',
        'Branding & Brand Design',
        'AI-Powered CRM',
        'Hosting & Infrastructure',
        'Other / Multiple Services',
    ];

    public const BUDGETS = [
        'Under $5,000',
        '$5,000 – $15,000',
        '$15,000 – $50,000',
        '$50,000 – $150,000',
        '$150,000+',
        'Let\'s discuss',
    ];

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:40'],
            'company' => ['nullable', 'string', 'max:120'],
            'service' => ['required', 'string', Rule::in(self::SERVICES)],
            'budget' => ['nullable', 'string', Rule::in(self::BUDGETS)],
            'message' => ['required', 'string', 'min:20', 'max:5000'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Full name is required.',
            'email.required' => 'A valid email is required.',
            'email.email' => 'A valid email is required.',
            'service.required' => 'Please select a service.',
            'service.in' => 'Please select a valid service.',
            'budget.in' => 'Please select a valid budget range.',
            'message.required' => 'Please describe your project (min. 20 characters).',
            'message.min' => 'Please describe your project (min. 20 characters).',
        ];
    }
}
