<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



// web routes
// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/sitemap.xml', SitemapController::class);

// web routes
Route::get('/', function () {
    return Inertia::render('Home');
});


Route::get('/web-design-development', function () {
    return Inertia::render('WebDesign');
});
Route::get('/web-portals', function () {
    return Inertia::render('ServicesPages/web-portals');
});
Route::get('/web-apps', function () {
    return Inertia::render('ServicesPages/web-apps');
});
    Route::get('/landing-pages', function () {
        return Inertia::render('ServicesPages/landing-pages');
    });
Route::get('/mobile-apps', function () {
    return Inertia::render('ServicesPages/mobile-apps');
});

Route::get('/ecommerce-development', function () {
    return Inertia::render('ServicesPages/ecommerce-development');
});
Route::get('/ui-ux-design', function () {
    return Inertia::render('ServicesPages/ui-ux-design');
});
Route::get('/hosting-services', function () {
    return Inertia::render('ServicesPages/hosting-services');
});
Route::get('/server-management', function () {
    return Inertia::render('ServicesPages/server-management');
});
Route::get('/website-maintenance', function () {
    return Inertia::render('ServicesPages/website-maintenance');
});

Route::get('/ai-solutions', function () {
    return Inertia::render('AISolutions');
});
Route::get('/ai-powered-crm', function () {
    return Inertia::render('AiTechnologies/ai-powered-crm');
});
Route::get('/ai-automation', function () {
    return Inertia::render('AiTechnologies/ai-automation');
});
Route::get('/machine-learning-systems', function () {
    return Inertia::render('AiTechnologies/machine-learning-systems');
});
Route::get('/ai-consulting', function () {
    return Inertia::render('AiTechnologies/ai-consulting');
});
Route::get('/ai-assistants', function () {
    return Inertia::render('AiTechnologies/ai-assistants');
});
Route::get('/ai-chatbots', function () {
    return Inertia::render('AiTechnologies/ai-chatbots');
});
Route::get('/nlp-solutions', function () {
    return Inertia::render('AiTechnologies/nlp-solutions');
});
Route::get('/voice-ai', function () {
    return Inertia::render('AiTechnologies/voice-ai');
});
Route::get('/data-analytics', function () {
    return Inertia::render('AiTechnologies/data-analytics');
});
Route::get('/process-automation', function () {
    return Inertia::render('AiTechnologies/process-automation');
});
Route::get('/predictive-analytics', function () {
    return Inertia::render('AiTechnologies/predictive-analytics');
});

Route::get('/digital-marketing', function () {
    return Inertia::render('Marketing/digital-marketing');
});
Route::get('/seo-services', function () {
    return Inertia::render('SEOServices');
});
Route::get('/aeo-services', function () {
    return Inertia::render('Marketing/aeo-services');
});
Route::get('/local-seo', function () {
    return Inertia::render('Marketing/local-seo');
});
Route::get('/technical-seo', function () {
    return Inertia::render('Marketing/technical-seo');
});
Route::get('/ppc-management', function () {
    return Inertia::render('Marketing/ppc-management');
});
Route::get('/google-ads', function () {
    return Inertia::render('Marketing/google-ads');
});
Route::get('/retargeting', function () {
    return Inertia::render('Marketing/retargeting');
});
Route::get('/social-media-marketing', function () {
    return Inertia::render('Marketing/social-media-marketing');
});
Route::get('/social-media-management', function () {
    return Inertia::render('Marketing/social-media-management');
});
Route::get('/content-marketing', function () {
    return Inertia::render('Marketing/content-marketing');
});

Route::get('/branding', function () {
    return Inertia::render('BrandingPage');
});
Route::get('/branding-strategy', function () {
    return Inertia::render('Branding/branding-strategy');
});
Route::get('/brand-design', function () {
    return Inertia::render('Branding/brand-design');
});
Route::get('/logo-design', function () {
    return Inertia::render('Branding/logo-design');
});
Route::get('/brand-guidelines', function () {
    return Inertia::render('Branding/brand-guidelines');
});

Route::get('/industries', function () {
    return Inertia::render('Industries/industries');
});
Route::get('/industries/healthcare', function () {
    return Inertia::render('Industries/healthcare');
});
Route::get('/industries/real-estate', function () {
    return Inertia::render('Industries/real-estate');
});
Route::get('/industries/finance', function () {
    return Inertia::render('Industries/finance');
});
Route::get('/industries/legal', function () {
    return Inertia::render('Industries/legal');
});
Route::get('/industries/ecommerce', function () {
    return Inertia::render('Industries/ecommerce');
});
Route::get('/industries/saas', function () {
    return Inertia::render('Industries/saas');
});
Route::get('/industries/education', function () {
    return Inertia::render('Industries/education');
});
Route::get('/industries/hospitality', function () {
    return Inertia::render('Industries/hospitality');
});

Route::get('/about', function () {
    return Inertia::render('Company/about');
});
Route::get('/our-team', function () {
    return Inertia::render('Company/our-team');
});
Route::get('/case-studies', function () {
    return Inertia::render('Company/case-studies');
});
Route::get('/blog', function () {
    return Inertia::render('Company/blog');
});
Route::get('/careers', function () {
    return Inertia::render('Company/careers');
});
Route::get('/contact', function () {
    return Inertia::render('ContactPage');
});
Route::post('/contact', [ContactController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('contact.store');
Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});
Route::get('/terms-of-service', function () {
    return Inertia::render('TermsOfServicePage');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// dashboard routes
Route::get('/admin', function () {
    return view('screens.admin.dashboard.index');
});

require __DIR__.'/auth.php';
