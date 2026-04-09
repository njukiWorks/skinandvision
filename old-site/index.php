<?php
include_once __DIR__ . "/lang.php";
?>

<!DOCTYPE html>
<html lang="<?php echo $currentLang; ?>">

<head>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-KGJ5F4M4');
    </script>
    <!-- End Google Tag Manager -->
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <!-- Page Title -->
    <title>Skin & Vision Clinic: Ooglid- en rimpelbehandelingen door een ervaren oogarts</title>
    <meta name="description" content="Skin & Vision Clinic in Amsterdam biedt cosmetische & medische Behandelingen. Behandelingen: Botox, bovenooglidcorrectie, onderooglidcorrectie, ptosis operatie, entropion & ectropion correctie. Maak een afspraak.">
    <meta name="keywords" content="Oogkliniek Amsterdam, Botox Amsterdam, ooglidcorrectie Amsterdam, bovenooglidcorrectie, onderooglidcorrectie, ptosis operatie, entropion correctie, ectropion correctie, oculoplastisch chirurg Amsterdam, cosmetische oogzorg, Skin & Vision, Skin & Vision Clinic">
    <meta name="author" content="Skin & Vision Clinic">

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Skin & Vision Clinic | Ooglid- en rimpelbehandelingen door een ervaren oogarts">
    <meta property="og:description" content="Rimpelbehandeling, ooglidcorrectie, ptosis operatie & medische oogbehandelingen in Amsterdam. Vertrouwde specialisten bij Skin & Vision. Maak direct een afspraak.">
    <meta property="og:image" content="https://skinandvision.nl/images/logo/main-logo.png">
    <meta property="og:url" content="https://skinandvision.nl">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Skin & Vision Clinic | Ooglid- en rimpelbehandelingen door een ervaren oogarts">
    <meta name="twitter:description" content="Gespecialiseerd in Botox, ooglidcorrectie, ptosis operatie & medische oogbehandelingen in Amsterdam. Maak vandaag nog een afspraak.">
    <meta name="twitter:image" content="https://skinandvision.nl/images/logo/main-logo.png">

    <!-- Hreflang -->
    <link rel="alternate" hreflang="nl" href="https://skinandvision.nl/" />
    <link rel="alternate" hreflang="en" href="https://skinandvision.nl/en/" />
    <link rel="alternate" hreflang="x-default" href="https://skinandvision.nl/" />
    <!-- Favicon Icon -->
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
    <!-- Google Fonts Css-->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;family=Marcellus&amp;display=swap"
        rel="stylesheet">
    <!-- Bootstrap Css -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
    <!-- SlickNav Css -->
    <link href="css/slicknav.min.css" rel="stylesheet">
    <!-- Swiper Css -->
    <link rel="stylesheet" href="css/swiper-bundle.min.css">
    <!-- Font Awesome Icon Css-->
    <link href="css/all.min.css" rel="stylesheet" media="screen">
    <!-- Animated Css -->
    <link href="css/animate.css" rel="stylesheet">
    <!-- Magnific Popup Core Css File -->
    <link rel="stylesheet" href="css/magnific-popup.css">
    <!-- Mouse Cursor Css File -->
    <link rel="stylesheet" href="css/mousecursor.css">
    <!-- Main Custom Css -->
    <link href="css/custom.css" rel="stylesheet" media="screen">
    <!-- Meta Pixel Code -->
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1361325348717961');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1361325348717961&ev=PageView&noscript=1" /></noscript>
    <!-- End Meta Pixel Code -->

    <!-- Google tag (gtag.js) event -->
    <script>
        gtag('event', 'ads_conversion_Form_1', {
            // <event_parameters>
        });
    </script>

    <!-- Google tag (gtag.js) event -->
    <script>
        gtag('event', 'form_submit', {
            // <event_parameters>
        });
    </script>

    <!-- Popup CSS -->
    <style>
        /* Overlay */
        .promo-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            display: none;
            /* shown via JS */
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
            animation: fadeIn 260ms ease;
        }

        /* Modal */
        .promo-modal {
            max-width: 920px;
            width: 100%;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
            overflow: hidden;
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 0;
            align-items: stretch;
        }

        /* Left: content */
        .promo-content {
            padding: 28px;
        }

        .promo-title {
            font-size: 1.28rem;
            margin: 0 0 8px;
            font-weight: 700;
        }

        .promo-text {
            margin: 0 0 18px;
            color: #444;
            line-height: 1.45;
        }

        .promo-cta {
            display: inline-block;
            padding: 10px 16px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            background: #1f6feb;
            color: #fff;
        }

        /* Right: image/branding */
        .promo-media {
            background: linear-gradient(180deg, #f9f9fb, #fff);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 18px;
        }

        .promo-media img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }

        /* Close button */
        .promo-close {
            position: absolute;
            right: 18px;
            top: 18px;
            background: transparent;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: #fff;
        }

        #snow {
            pointer-events: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 99999;
        }

        #snow:before,
        #snow:after {
            content: "";
            position: absolute;
            top: -10px;
            left: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-size: 200px 200px;
            opacity: 0.7;
            animation: snowfall 12s linear infinite;
        }

        #snow:before {
            background-image:
                radial-gradient(2px 2px at 10px 10px, white, rgba(255, 255, 255, 0)),
                radial-gradient(3px 3px at 50px 80px, white, rgba(255, 255, 255, 0)),
                radial-gradient(2px 2px at 90px 40px, white, rgba(255, 255, 255, 0));
        }

        #snow:after {
            background-image:
                radial-gradient(2px 2px at 30px 30px, white, rgba(255, 255, 255, 0)),
                radial-gradient(1.5px 1.5px at 70px 20px, white, rgba(255, 255, 255, 0)),
                radial-gradient(2.5px 2.5px at 120px 100px, white, rgba(255, 255, 255, 0));
            animation-duration: 18s;
        }

        @keyframes snowfall {
            0% {
                transform: translateY(0);
            }

            100% {
                transform: translateY(500px);
            }
        }


        /* small screens: stack */
        @media (max-width: 720px) {
            .promo-modal {
                grid-template-columns: 1fr;
            }

            .promo-media {
                padding: 12px 18px 20px;
            }
        }

        /* Animations */
        @keyframes fadeIn {
            from {
                opacity: 0
            }

            to {
                opacity: 1
            }
        }

        @keyframes slideUp {
            from {
                transform: translateY(8px);
                opacity: 0
            }

            to {
                transform: translateY(0);
                opacity: 1
            }
        }
    </style>
</head>

<body>

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGJ5F4M4"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <?php
    // Include the header file  
    include('header.php');
    ?>

    <div class="hero">
        <div class="container-fluid">
            <div class="row no-gutters">
                <div class="col-lg-12">
                    <div class="hero-section">
                        <div class="hero-content">
                            <div class="section-title">
                                <h3 class="wow fadeInUp">Welkom bij Skin & Vision Clinic</h3>
                                <h1 class="text-anime-style-3" data-cursor="-opaque">Ooglidchirurgie &amp; rimpelbehandelingen door gespecialiseerde oogartsen
                                    Veilig, deskundig en natuurlijk.</h1>
                                <p class="wow fadeInUp" data-wow-delay="0.2s">Skin & Vision Clinic is gespecialiseerd in medische en cosmetische ooglidzorg door BIG-geregistreerde oogartsen. Wij behandelen zowel functionele problemen als esthetische wensen. U bent welkom met én zonder verwijzing.</p>
                            </div>
                            <div class="hero-body wow fadeInUp" data-wow-delay="0.4s">
                                <div class="hero-btn">
                                    <a href="https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo" class="clinicminds-scheduler-button btn-default" data-button-text-color="#fff" data-button-background-color="#ff8835">Boek een consultatie</a>
                                </div>
                                <div class="video-play-button">
                                    <p>Bekijk video</p>
                                    <a href="images/skinandvisionvideo.mp4" class="popup-video"
                                        data-cursor-text="Play">
                                        <i class="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="hero-content-list wow fadeInUp" data-wow-delay="0.6s">
                                <ul>
                                    <li>Hoge slagingspercentages</li>
                                    <li>Deskundige specialisten</li>
                                    <li>Korte wachttijden</li>
                                    <li>One Stop Shop</li>
                                </ul>
                            </div>
                        </div>
                        <div class="hero-image">
                            <figure>
                                <img src="images/7.jpg" alt="Skin & Vision ClinicHero Image">
                            </figure>

                            <div class="working-hours-box">
                                <div class="icon-box">
                                    <i class="fa-solid fa-clock"></i>
                                </div>
                                <div class="working-hours-content">
                                    <h3>Openingstijden</h3>
                                    <p>Ma - Za ( 8:00 - 17:00 )</p>
                                    <p>Zondag ( 8:00 - 13:00 )</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="our-team" style="padding-bottom: 0px;">
        <div class="container">
            <div class="row" style="justify-content: center;">
                <div class="col-lg-4 col-md-6">
                    <div class="wow fadeInUp">
                        <div class="">
                            <p>BIG-geregistreerde oogartsen [126894]</p>
                            <a href="https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894" data-cursor-text="View" target="_blank">
                                <figure class="image-anime">
                                    <img src="images/health-card-netherlands.svg" alt="Healthcare Card Netherlands">
                                </figure>
                            </a>
                        </div>

                        <!-- Team Content Start -->
                        <div class="team-content" style="text-align:center; font-family: Arial, sans-serif;margin-top: 10px;">
                            <!-- Rating Number -->
                            <h3 style="font-size: 1.2rem; margin: 0; color: #222;">
                                ⭐ 9.9 / 10
                            </h3>

                            <!-- Star Icons -->
                            <div style="margin: 8px 0;">
                                <span style="color: #FFD700; font-size: 1.2rem;">★★★★★</span>
                                <span style="color: #ccc; font-size: 1.2rem;">☆</span>
                            </div>

                            <!-- Number of Ratings -->
                            <p style="margin: 0; font-size: 0.7rem; font-style: italic; color: #666;">
                                Gebaseerd op 28 beoordelingen
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="about-us">
        <div class="container">
            <div class="row section-row">
                <div class="col-lg-12">
                    <div class="section-title section-title-center">
                        <h3 class="wow fadeInUp">Over ons</h3>
                        <h2 class="text-anime-style-3" data-cursor="-opaque">
                            Skin &amp; Vision Clinic is gespecialiseerd in oculoplastische chirurgie – de
                            microchirurgie van de oogleden, wenkbrauwen en traanwegen. Onze BIG-
                            geregistreerde oogartsen combineren medische precisie met esthetisch inzicht. Wij
                            voeren dagelijks zowel medische ooglidcorrecties uit (zoals bij ptosis, entropion en
                            ectropion) als cosmetische behandelingen met een natuurlijk resultaat.
                        </h2>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="about-us-content">
                        <div class="about-us-image">
                            <figure class="image-anime reveal">
                                <img src="images/about-img.jpg" alt="medical-cosmetic treatments Skin & Vision">
                            </figure>
                        </div>
                        <div class="about-us-list wow fadeInUp" data-wow-delay="0.2s">
                            <ul>
                                <li>Rimpelbehandeling </li>
                                <li>Ooglidchirurgie</li>
                                <li>One Stop Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="our-services bg-section">
        <div class="container">
            <div class="row section-row">
                <div class="col-lg-12">
                    <div class="section-title section-title-center">
                        <h3 class="wow fadeInUp">Onze diensten</h3>
                        <h2 class="text-anime-style-3" data-cursor="-opaque">
                            uw intakegesprek bij Skin &amp; Vision Clinic
                        </h2>
                    </div>
                </div>
            </div>

            <div class="row service-item-list">
                <div class="col-lg-3 col-md-6">

                    <div class="service-item wow fadeInUp">
                        <div class="icon-box">
                            <img src="images/icon-service-1.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h3><a href="botox-treatments">Rimpelbehandeling met spierontspannende injecties</a></h3>
                            <p>Cosmetisch en medisch – uitgevoerd door BIG-geregistreerde oogartsen.</p>
                        </div>
                        <div class="service-readmore-btn">
                            <a href="botox-treatments" class="readmore-btn">Lees meer</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="service-item active wow fadeInUp" data-wow-delay="0.2s">
                        <div class="icon-box">
                            <img src="images/icon-service-2.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h3><a href="upper-eyelid-correction">Bovenooglidcorrectie</a></h3>
                            <p>Verwijdering van overtollige huid en vet bij de bovenoogleden voor een frissere uitstraling.</p>

                        </div>
                        <div class="service-readmore-btn">
                            <a href="upper-eyelid-correction" class="readmore-btn">Lees meer</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="service-item wow fadeInUp" data-wow-delay="0.4s">
                        <div class="icon-box">
                            <img src="images/icon-service-3.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h3><a href="lower-eyelid-correction">Onderooglidcorrectie</a></h3>
                            <p>Corrigeert wallen en overtollige huid onder de ogen door het verwijderen of verplaatsen van huid, vet of spierweefsel.</p>
                        </div>
                        <div class="service-readmore-btn">
                            <a href="lower-eyelid-correction" class="readmore-btn">Lees meer</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item wow fadeInUp" data-wow-delay="0.6s">
                        <div class="icon-box">
                            <img src="images/icon-service-4.svg" alt="">
                        </div>
                        <div class="service-content">
                            <h3><a href="ptosis-surgery">Ptosisoperatie</a></h3>
                            <p>Ptosis ontstaat door een verzwakking of uitrekking van de spier die het bovenooglid omhoog trekt.</p>
                        </div>
                        <div class="service-readmore-btn">
                            <a href="ptosis-surgery" class="readmore-btn">Lees meer</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                        <p><span>Free</span>Plan een afspraak voor een vrijblijvend consult. <a href="contact-us">Plan een afspraak</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="why-choose-us">
        <div class="container">
            <div class="row section-row">
                <div class="col-lg-12">
                    <div class="section-title section-title-center">
                        <h3 class="wow fadeInUp">Waarom kiezen voor ons</h3>
                        <h2 class="text-anime-style-3" data-cursor="-opaque">
                            “Waarom kiezen voor Skin &amp; Vision Clinic”
                        </h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="why-choose-box-1">
                        <div class="why-choose-item wow fadeInUp">
                            <p>Bij Skin & Vision Clinic krijg je consult en behandeling/operatie op dezelfde dag.<br>
                                👉 Snel, efficiënt en professioneel – </p>
                            <h2>One Stop Shop</h2>
                        </div>
                        <div class="why-choose-image">
                            <figure class="image-anime reveal">
                                <img src="images/skin-and-vision-2.jpg" alt="Skin & Vision Zero Waiting Times">
                            </figure>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="why-choose-image-box wow fadeInUp" data-wow-delay="0.2s">
                        <figure class="image-anime">
                            <img src="images/why-choose-image-2.jpg" alt="Skin & Vision ClinicMedical & Eye Cosmetic">
                        </figure>
                        <div class="why-choose-title">
                            <h2>5,000+ Patiënten Behandeld</h2>
                        </div>
                        <div class="why-choose-content">
                            <p>Meer dan 5000 patiënten hebben ons vertrouwd om hen te helpen herstellen en beter te bewegen.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <!-- Why Choose Box Start -->
                    <div class="why-choose-box-2">
                        <!-- Why Choose Image Start -->
                        <div class="why-choose-image">
                            <figure class="image-anime reveal">
                                <img src="images/skin-and-vision.jpg" alt="Skin & Vision ClinicMedical & Eye Cosmetic">
                            </figure>
                        </div>
                        <!-- Why Choose Image End -->

                        <!-- Why Choose Item Start -->
                        <div class="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                            <p>Behandeling wachttijden</p>
                            <h2>Geen wachttijd voor onze behandelingen</h2>
                        </div>
                        <!-- Why Choose Item End -->
                    </div>
                    <!-- Why Choose Box End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Why Choose Us Section End -->

    <!-- Our Feature Section Start -->
    <div class="our-features bg-section dark-section">
        <div class="container">
            <div class="row section-row">
                <div class="col-lg-12">
                    <!-- Section Title Start -->
                    <div class="section-title section-title-center">
                        <h3 class="wow fadeInUp">Meer diensten</h3>
                        <h2 class="text-anime-style-3" data-cursor="-opaque">De beste medische behandeling voor elke behoefte</h2>
                    </div>
                    <!-- Section Title End -->
                </div>
            </div>

            <div class="row">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <!-- Features Item Start -->
                            <div class="features-item wow fadeInUp" data-wow-delay="0.4s">
                                <a href="entropion-correction">
                                    <div class="icon-box">
                                        <img src="images/icon-feature-3.svg" alt="Entropion correction">
                                    </div>
                                    <div class="feature-item-content">
                                        <h3>Entropioncorrectie</h3>
                                        <p>Een aandoening waarbij het onderooglid naar binnen krult en tegen het oog wrijft.</p>
                                    </div>
                                </a>
                            </div>
                            <!-- Features Item End -->
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <!-- Features Item Start -->
                            <div class="features-item wow fadeInUp" data-wow-delay="0.6s">
                                <a href="ectropion-correction">
                                    <div class="icon-box">
                                        <img src="images/icon-feature-4.svg" alt="Ectropioncorrectie ">
                                    </div>
                                    <div class="feature-item-content">
                                        <h3>Ectropioncorrectie</h3>
                                        <p>Bij ectropion draait het onderooglid naar buiten.</p>
                                    </div>
                                </a>
                            </div>
                            <!-- Features Item End -->
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <!-- Features Item Start -->
                            <div class="features-item wow fadeInUp">
                                <a href="botox-treatments">
                                    <div class="icon-box">
                                        <img src="images/icon-feature-1.svg" alt="">
                                    </div>
                                    <div class="feature-item-content">
                                        <h3>Rimpelbehandeling met spierontspannende injecties</h3>
                                        <p>Zowel cosmetisch als medisch – uitgevoerd door BIG-geregistreerde oogartsen.</p>
                                    </div>
                                </a>
                            </div>
                            <!-- Features Item End -->
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <!-- Features Item Start -->
                            <div class="features-item wow fadeInUp" data-wow-delay="0.2s">
                                <a href="ptosis-surgery">
                                    <div class="icon-box">
                                        <img src="images/icon-feature-2.svg" alt="Ptosis surgery">
                                    </div>
                                    <div class="feature-item-content">
                                        <h3>Ptosisoperatie</h3>
                                        <p>Ptosis ontstaat door een verzwakking of uitrekking van de spier die het bovenooglid omhoog trekt.</p>
                                    </div>
                                </a>
                            </div>
                            <!-- Features Item End -->
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Our Feature Section End -->

    <!-- How It Work Section Start -->
    <div class="how-it-work">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <!-- How It Work Content Start -->
                    <div class="how-it-work-content">
                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h3 class="wow fadeInUp">Hoe kunnen we u helpen?</h3>
                            <h2 class="text-anime-style-3" data-cursor="-opaque">Met precisie en oprechte zorg
                            </h2>
                        </div>
                        <!-- Section Title End -->

                        <!-- How It Work Image Start -->
                        <div class="how-it-work-image">
                            <figure class="image-anime reveal">
                                <img src="images/pexels-cottonbro-7581081.jpg" alt="Professionele huidbehandeling bij Skin and Vision Clinic" loading="lazy" width="800" height="533">
                            </figure>
                        </div>
                        <!-- How It Work Image End -->
                    </div>
                    <!-- How It Work Content End -->
                </div>

                <div class="col-lg-6">
                    <!-- Work Step List Box Start -->
                    <div class="work-step-list-box">
                        <!-- Work Step List Start -->
                        <div class="work-step-list">
                            <!-- Work Step Item Start -->
                            <div class="work-step-item wow fadeInUp">
                                <div class="icon-box">
                                    <img src="images/icon-work-step-1.svg" alt="">
                                </div>
                                <div class="work-step-item-content">
                                    <p>Bij Skin & Vision Clinicstaan wij klaar om u te helpen met zorg, precisie en oprechte aandacht.
                                        Of u nu een oogprobleem heeft of op zoek bent naar subtiele verbeteringen, u bent van harte welkom in onze kliniek.</p>
                                </div>
                            </div>
                            <!-- Work Step Item End -->

                            <!-- Work Step Item Start -->
                            <div class="work-step-item wow fadeInUp" data-wow-delay="0.2s">
                                <div class="icon-box">
                                    <img src="images/icon-work-step-2.svg" alt="">
                                </div>
                                <div class="work-step-item-content">
                                    <p>Ons team is gespecialiseerd in medisch-cosmetische behandelingen van het gezicht en de oogzone. We luisteren aandachtig naar uw wensen, nemen de tijd voor een zorgvuldige analyse en stellen samen met u een persoonlijk behandelplan op. Uw gezicht, uw verwachtingen en een natuurlijk resultaat staan bij ons altijd centraal.</p>
                                </div>
                            </div>
                            <!-- Work Step Item End -->

                            <!-- Work Step Item Start -->
                            <div class="work-step-item wow fadeInUp" data-wow-delay="0.4s">
                                <div class="icon-box">
                                    <img src="images/icon-work-step-3.svg" alt="">
                                </div>
                                <div class="work-step-item-content">
                                    <p>Plan een vrijblijvend consult – we nemen graag de tijd om uw wensen te bespreken.</p>
                                </div>
                            </div>
                            <!-- Work Step Item End -->
                        </div>
                        <!-- Work Step List End -->

                        <!-- Work Step Button Start -->
                        <div class="work-step-btn wow fadeInUp" data-wow-delay="0.6s">
                            <a href="contact-us" class="btn-default">Vraag een consult aan</a>
                        </div>
                        <!-- Work Step Button End -->
                    </div>
                    <!-- Work Step List Box End -->
                </div>
            </div>
        </div>
    </div>
    <!-- How It Work Section End- -->

    <div id="cookie-banner" style="position:fixed; bottom:0; left:0; right:0; background:#f8f9fa; padding:15px; border-top:1px solid #ddd; text-align:center; font-size:14px; z-index:9999; display:none;">
        Wij hechten waarde aan uw privacy. Skin & Vision Clinic gebruikt cookies om de functionaliteit van de website te waarborgen en de gebruikerservaring te verbeteren.
        Door onze site te blijven gebruiken, gaat u akkoord met het gebruik van cookies. Om deze uit te schakelen kunt u de instellingen van uw browser raadplegen.
        <a href="privacy-and-cookie-statement" style="color:#f9944e;">Lees meer</a>
        <br><br>
        <button id="accept-cookies" style="margin:5px; padding:6px 12px; background:#28a745; border:none; color:#fff; border-radius:5px; cursor:pointer;">Accepteren</button>
        <button id="decline-cookies" style="margin:5px; padding:6px 12px; background:#dc3545; border:none; color:#fff; border-radius:5px; cursor:pointer;">Weigeren</button>
    </div>

    <script>
        function setCookie(name, value, days) {
            const d = new Date();
            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
        }

        function getCookie(name) {
            let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) return match[2];
            return null;
        }

        window.onload = function() {
            const consent = getCookie("cookies_consent");
            if (!consent) {
                document.getElementById("cookie-banner").style.display = "block";
            }
        }

        document.getElementById("accept-cookies").onclick = function() {
            setCookie("cookies_consent", "accepted", 365);
            document.getElementById("cookie-banner").style.display = "none";
        }

        document.getElementById("decline-cookies").onclick = function() {
            setCookie("cookies_consent", "declined", 365);
            document.getElementById("cookie-banner").style.display = "none";
        }
    </script>



    <!-- Floating Back to Top Button -->
    <button id="backToTopBtn" title="Go to top">
        ↑
    </button>

    <style>
        #backToTopBtn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99;
            background-color: #ff8835;
            color: white;
            border: none;
            outline: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s, transform 0.2s;
        }

        #backToTopBtn:hover {
            background-color: #e5721f;
            transform: scale(1.1);
        }

        /* Optional: hide until scroll */
        #backToTopBtn.hidden {
            display: none;
        }
    </style>

    <script>
        const backToTopBtn = document.getElementById("backToTopBtn");

        // Show button after scrolling down 200px
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTopBtn.classList.remove("hidden");
            } else {
                backToTopBtn.classList.add("hidden");
            }
        };

        // Smooth scroll to top when clicked
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Start hidden
        backToTopBtn.classList.add("hidden");
    </script>
    <!-- Popup overlay -->
    <!-- <div id="promoOverlay" class="promo-overlay" role="dialog" aria-modal="true" aria-labelledby="promoTitle" aria-describedby="promoDesc">
        <button id="promoCloseA" class="promo-close" aria-label="Close popup">&times;</button>

        <div class="promo-modal" role="document" style="animation: slideUp 220ms ease;">
            <div class="promo-content">
                <h2 id="promoTitle" class="promo-title">Verjaardagsactie Oktober — Botoxbehandelingen </h2>
                <p id="promoDesc" class="promo-text">
                    Boek vóór 15 oktober en ontvang een gratis luxe skincare giftset bij uw eerste
                    behandeling! Herstel een frisse, uitgeruste uitstraling met de deskundige zorg van Skin and Vision.
                </p>
                <a class="promo-cta" href="/book-appointment.php" id="promoCta">Book Consultation</a>
                <p style="margin-top:12px;font-size:0.9rem;color:#666;">Or call us: 06 46096641</p>
            </div>

            <div class="promo-media" aria-hidden="true">
                <img src="images/2.png" alt="Botulinumtoxine Treatment Promo">
            </div>
        </div>
    </div> -->


    <!-- Testimonials Section Start -->
    <section class="testimonials section-padding">
        <div class="container">
            <div class="section-title text-center wow fadeInUp">
                <h2 class="text-anime-style-3">Wat onze klanten zeggen</h2>
            </div>
            <div class="row" id="testimonials-grid">
            </div>
            <div class="text-center mt-4 wow fadeInUp">
                <a href="reviews" class="btn-default btn-highlighted"><span>Schrijf een beoordeling</span></a>
            </div>
        </div>
    </section>
    <!-- Testimonials Section End -->

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            fetch('/reviews.json')
                .then(r => r.json())
                .then(reviews => {
                    const grid = document.getElementById('testimonials-grid');
                    if (!reviews.length) {
                        grid.closest('section').style.display = 'none';
                        return;
                    }
                    reviews.slice(-6).reverse().forEach(r => {
                        const stars = '&#9733;'.repeat(r.rating) + '&#9734;'.repeat(5 - r.rating);
                        grid.innerHTML += `<div class="col-lg-4 col-md-6 mb-4">
                    <div class="testimonial-item wow fadeInUp">
                        <div style="color:#f5a623;font-size:1.2rem">${stars}</div>
                        <div class="testimonial-content">
                            <p>${r.review}</p>
                            <h3>${r.name}</h3>
                            <small>${r.date}</small>
                        </div>
                    </div></div>`;
                    });
                })
                .catch(() => document.querySelector('.testimonials').style.display = 'none');
        });
    </script>

    <!-- Footer Start -->
    <?php
    // Include the footer file
    include('footer.php');
    ?>
    <!-- Footer End -->

    <!-- Jquery Library File -->
    <script src="js/jquery-3.7.1.min.js"></script>
    <!-- Bootstrap js file -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Validator js file -->
    <script src="js/validator.min.js"></script>
    <!-- SlickNav js file -->
    <script src="js/jquery.slicknav.js"></script>
    <!-- Swiper js file -->
    <script src="js/swiper-bundle.min.js"></script>
    <!-- Counter js file -->
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <!-- Magnific js file -->
    <script src="js/jquery.magnific-popup.min.js"></script>
    <!-- SmoothScroll -->
    <script src="js/SmoothScroll.js"></script>
    <!-- Parallax js -->
    <script src="js/parallaxie.js"></script>
    <!-- MagicCursor js file -->
    <script src="js/gsap.min.js"></script>
    <script src="js/magiccursor.js"></script>
    <!-- Text Effect js file -->
    <script src="js/SplitText.js"></script>
    <script src="js/ScrollTrigger.min.js"></script>
    <!-- YTPlayer js File -->
    <script src="js/jquery.mb.YTPlayer.min.js"></script>
    <!-- Wow js file -->
    <script src="js/wow.min.js"></script>
    <!-- Main Custom js file -->
    <script src="js/function.js"></script>
    <!-- Popup JS (you can move to script.js) -->
    <script>
        (function() {
            const overlay = document.getElementById('promoOverlay');
            const closeBtn = document.getElementById('promoCloseA');
            const cta = document.getElementById('promoCta');

            // Configuration
            const SHOW_DELAY_MS = 1500; // Delay after page load before showing popup

            function showPopup() {
                overlay.style.display = 'flex';
                closeBtn.focus();
                document.body.style.overflow = 'hidden'; // prevent background scroll
            }

            function hidePopup() {
                overlay.style.display = 'none';
                document.body.style.overflow = ''; // restore scroll
            }

            // Close handlers
            closeBtn.addEventListener('click', function() {
                hidePopup();
            });

            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    hidePopup();
                }
            });

            // Optional: CTA click closes popup
            cta.addEventListener('click', function() {
                hidePopup();
            });

            // Show logic: always show after delay
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(showPopup, SHOW_DELAY_MS);
            });

            // Optional: ESC to close
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && overlay.style.display === 'flex') {
                    hidePopup();
                }
            });

            /* Optional: Exit-intent trigger
            document.addEventListener('mouseleave', function(e){
              if (e.clientY <= 0) {
                showPopup();
              }
            });
            */

        })();
    </script>

    <script src="https://schedule.clinicminds.com/assets/widget/widget.js" type="text/javascript"></script>
    <!-- <div id="snow"></div> -->

</body>

</html>