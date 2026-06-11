<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel Inertia React TSX</title>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Bebas+Neue&family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap" rel="stylesheet" />
    @viteReactRefresh
    @vite(['resources/css/web/app.css', 'resources/js/app.tsx'])
    <x-inertia::head />
</head>
<body>
<x-inertia::app />
</body>
</html>