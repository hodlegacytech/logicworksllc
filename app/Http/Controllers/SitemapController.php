<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;

class SitemapController extends Controller
{
    public function __invoke(): Response
    {
        $path = config('sitemap.file', resource_path('sitemap.xml'));

        if (! File::isReadable($path)) {
            abort(404, 'Sitemap file not found.');
        }

        $baseUrl = rtrim((string) config('sitemap.base_url'), '/');
        $xml = str_replace('{{APP_URL}}', $baseUrl, File::get($path));

        return response($xml, 200)->header('Content-Type', 'application/xml; charset=UTF-8');
    }
}
