<?php include_once __DIR__ . '/lang.php'; ?>
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
    <title>Tarieven - Skin & Vision Clinic: Ooglid- en injectable-oogartsenkliniek in Amsterdam</title>
    <meta name="description" content="Skin & Vision Clinic in Amsterdam biedt cosmetische & medische oogzorg. Behandelingen: Botox, bovenooglidcorrectie, onderooglidcorrectie, ptosis operatie, entropion & ectropion correctie. Maak een afspraak.">
    <meta name="keywords" content="Oogkliniek Amsterdam, Botox Amsterdam, ooglidcorrectie Amsterdam, bovenooglidcorrectie, onderooglidcorrectie, ptosis operatie, entropion correctie, ectropion correctie, oculoplastisch chirurg Amsterdam, cosmetische oogzorg, Skin & Vision, Skin & Vision Clinic">
    <meta name="author" content="Skin & Vision Clinic">

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Skin & Vision Clinic | Ooglid- en injectable-oogartsenkliniek in Amsterdam">
    <meta property="og:description" content="Botox, ooglidcorrectie, ptosis operatie & medische oogbehandelingen in Amsterdam. Vertrouwde specialisten bij Skin & Vision. Maak direct een afspraak.">
    <meta property="og:image" content="https://skinandvision.nl/images/logo/main-logo.png">
    <meta property="og:url" content="https://skinandvision.nl">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Skin & Vision Clinic | Ooglid- en injectable-oogartsenkliniek in Amsterdam">
    <meta name="twitter:description" content="Gespecialiseerd in Botox, ooglidcorrectie, ptosis operatie & medische oogbehandelingen in Amsterdam. Maak vandaag nog een afspraak.">
    <meta name="twitter:image" content="https://skinandvision.nl/images/logo/main-logo.png">

    <!-- Favicon Icon -->
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
    <!-- Google Fonts Css-->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;family=Marcellus&amp;display=swap" rel="stylesheet">
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
    <style>
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

    <!-- Page Header Start -->
    <div class="page-header ">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <!-- Page Header Box Start -->
                    <div class="page-header-box">
                        <h1 class="text-anime-style-3" data-cursor="-opaque">Tarieven</h1>
                        <nav class="wow fadeInUp">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index">home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">tarieven</li>
                            </ol>
                        </nav>
                    </div>
                    <!-- Page Header Box End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->


    <div class="page-service-single">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="page-single-sidebar">
                        <div class="page-single-image">
                            <figure class="image-anime reveal">
                                <img src="images/botox-rates-img.jpg" alt="Skin & Vision Clinic Botox Rates">
                            </figure>
                        </div>
                        <div class="service-entry">
                            <div class="service-entry">
                                <h2 class="text-anime-style-3">Overzicht Botulinetoxine (Botox)</h2>
                                <p class="wow fadeInUp">
                                    Bij Skin & Vision Clinic staat persoonlijke zorg voorop. Botulinetoxine (Botox) wordt zowel voor cosmetische als medische doeleinden gebruikt en vereist altijd een persoonlijk behandelplan.
                                    Omdat de benodigde dosis en het aantal behandelingszones per persoon verschillen, kan de uiteindelijke prijs afwijken van de tarieven die op onze website staan vermeld.
                                    Tijdens een consult bespreekt de arts uw klachten, wensen en medische geschiedenis. Op basis hiervan ontvangt u een transparante en persoonlijke offerte, afgestemd op uw behandelplan.
                                </p>
                            </div>
                        </div>
                        <div class="page-single-image">
                            <figure class="image-anime reveal">
                                <img src="images/surgical-treatment-img.jpg" alt="Skin & Vision Clinic Surgical Treatments">
                            </figure>
                        </div>
                        <div class="service-entry">
                            <h2 class="text-anime-style-3">Overzicht Chirurgische Behandelingen</h2>
                            <p class="wow fadeInUp">
                                Bij Skin & Vision Clinic geloven we in persoonlijke zorg. Omdat ieder gezicht uniek is en elke situatie een individueel behandelplan vereist, kunnen de prijzen afwijken van de richtlijnen die op onze website staan vermeld.
                                Tijdens het consult bespreekt onze arts uw wensen, medische geschiedenis en de beste aanpak voor een natuurlijk en veilig resultaat.
                                Op basis hiervan ontvangt u een transparante offerte, volledig afgestemd op uw behandeling.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="service-single-content">
                        <div class="page-catagery-list wow fadeInUp">
                            <h3>Botox – Behandeling met botulinumtoxine type A</h3>
                            <ul class="treatment-price-list">
                                <li><span>Baby Botox ½ zone (frons, voorhoofd of kraaienpootjes)</span><span class="price">€80,00</span></li>
                                <li><span>Botox 1 zone (frons, voorhoofd of kraaienpootjes)</span><span class="price">€150,00</span></li>
                                <li><span>Botox 2 zones (frons, voorhoofd of kraaienpootjes)</span><span class="price">€290,00</span></li>
                                <li><span>Botox 3 zones (frons, voorhoofd en kraaienpootjes)</span><span class="price">€440,00</span></li>
                                <li><span>Epiphora (overmatige tranenproductie)</span><span class="price">€80,00</span></li>
                                <li><span>Botox wenkbrauwlift</span><span class="price">€80,00</span></li>
                                <li><span>Botox lijntjes op de neus (konijnenlijntjes)</span><span class="price">€80,00</span></li>
                                <!-- <li><span>Botox glimlach met tandvlees (gummy smile)</span><span class="price">€90,00</span></li> -->
                                <li><span>Botox kuiltjes in de kin</span><span class="price">€80,00</span></li>
                                <!-- <li><span>Botox (hangende) mondhoeken</span><span class="price">€90,00</span></li> -->
                                <!-- <li><span>Botox migraine/hoofdpijn (vanaf)</span><span class="price">€160,00</span></li> -->
                                <li><span>Botox masseter (tandenknarsen / kaakklemmen)</span><span class="price">€290,00</span></li>
                                <li><span>Blefarospasme (onwillekeurige ooglidbewegingen)</span><span class="price">€290,00</span></li>
                                <!-- <li><span>Botox oksels (tegen overmatig zweten) – standaard</span><span class="price">€425,00</span></li> -->
                                <li><span>Hemifaciale spasmen (spierkrampen aan één kant van het gezicht)</span><span class="price">€440,00</span></li>
                            </ul>

                        </div>
                        <div class="page-catagery-list wow fadeInUp">
                            <h3>Innovatieve Botoxbehandeling met Relfydess</h3>
                            <ul class="treatment-price-list">
                                <li><span>Baby Botox ½ zone (frons, voorhoofd of kraaienpootjes)</span><span class="price">€130,00</span></li>
                                <li><span>Botox 1 zone (frons, voorhoofd of kraaienpootjes)</span><span class="price">€200,00</span></li>
                                <li><span>Botox 2 zones (frons, voorhoofd of kraaienpootjes)</span><span class="price">€340,00</span></li>
                                <li><span>Botox 3 zones (frons, voorhoofd en kraaienpootjes)</span><span class="price">€490,00</span></li>
                                <li><span>Epiphora (overmatige tranenproductie)</span><span class="price">€100,00</span></li>
                                <li><span>Botox wenkbrauwlift</span><span class="price">€130,00</span></li>
                                <li><span>Botox lijntjes op de neus (konijnenlijntjes)</span><span class="price">€130,00</span></li>
                                <!-- <li><span>Botox glimlach met tandvlees (gummy smile)</span><span class="price">€120,00</span></li> -->
                                <li><span>Botox kuiltjes in de kin</span><span class="price">€130,00</span></li>
                                <!-- <li><span>Botox (hangende) mondhoeken</span><span class="price">€120,00</span></li> -->
                                <!-- <li><span>Botox migraine/hoofdpijn (vanaf)</span><span class="price">€190,00</span></li> -->
                                <li><span>Botox masseter (tandenknarsen / kaakklemmen)</span><span class="price">€340,00</span></li>
                                <!-- <li><span>Botox oksels (tegen overmatig zweten) – standaard</span><span class="price">€455,00</span></li> -->
                            </ul>
                        </div>

                        <div class="page-catagery-list wow fadeInUp">
                            <h3>Cosmetische chirurgie</h3>
                            <ul class="treatment-price-list">
                                <li><span>Bovenooglidcorrectie (blepharoplastiek) voor beide ogen</span><span class="price"> €800</span></li>
                                <li><span>Onderooglidcorrectie</span><span class="price">€1000,00</span></li>
                                <li><span>Ptosisoperatie per oog</span><span class="price"> €1000</span></li>
                                <li><span>Ptosisoperatie voor beide ogen</span><span class="price"> €1500</span></li>
                                <li><span>Combinatie van boven- en onderooglidcorrectie</span><span class="price">€1700,00</span></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

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
    <script src="https://schedule.clinicminds.com/assets/widget/widget.js" type="text/javascript"></script>
</body>

</html>