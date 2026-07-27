<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'LogicWorks') }} — Sign In</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

        @vite(['resources/css/admin/app.css'])
    </head>
    <body class="auth-body antialiased">
        <div class="auth-page">
            <div class="auth-page-bg" aria-hidden="true">
                <div class="auth-page-grid"></div>
                <div class="auth-page-orb auth-page-orb--1"></div>
                <div class="auth-page-orb auth-page-orb--2"></div>
            </div>

            <div class="auth-shell">
                <a href="{{ url('/') }}" class="auth-brand">
                    <img src="{{ asset('images/logicworks-logo.png') }}" alt="LogicWorks" class="auth-brand-logo" width="200" height="44" />
                </a>

                <div class="auth-card">
                    {{ $slot }}
                </div>

                <p class="auth-footer">
                    &copy; {{ date('Y') }} LogicWorks AI &mdash;
                    <a href="{{ url('/') }}">Back to website</a>
                </p>
            </div>
        </div>
    </body>
</html>
