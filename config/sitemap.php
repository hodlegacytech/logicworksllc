<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sitemap XML File
    |--------------------------------------------------------------------------
    |
    | Edit resources/sitemap.xml directly — paste <url> blocks in XML format.
    | Use {{APP_URL}} in <loc> tags, or write the full URL (e.g. https://logicworksllc.com/about).
    |
    */

    'file' => resource_path('sitemap.xml'),

    'base_url' => env('APP_URL', 'https://logicworksllc.com'),

];
