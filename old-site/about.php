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
    <title>Over ons | Skin & Vision Clinic: Ooglid- en injectable-oogartsenkliniek in Amsterdam</title>
    <meta name="description" content="Skin & Vision in Amsterdam biedt cosmetische & medische oogzorg. Behandelingen: Botox, bovenooglidcorrectie, onderooglidcorrectie, ptosis operatie, entropion & ectropion correctie. Maak een afspraak.">
    <meta name="keywords" content="Oogkliniek Amsterdam, Botox Amsterdam, ooglidcorrectie Amsterdam, bovenooglidcorrectie, onderooglidcorrectie, ptosis operatie, entropion correctie, ectropion correctie, oculoplastisch chirurg Amsterdam, cosmetische oogzorg, Skin & Vision">
    <meta name="author" content="Skin & Vision">

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Skin & Vision | Ooglid- en injectable-oogartsenkliniek in Amsterdam">
    <meta property="og:description" content="Botox, ooglidcorrectie, ptosis operatie & medische oogbehandelingen in Amsterdam. Vertrouwde specialisten bij Skin & Vision. Maak direct een afspraak.">
    <meta property="og:image" content="https://skinandvision.nl/images/logo/main-logo.png">
    <meta property="og:url" content="https://skinandvision.nl/about">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Skin & Vision | Ooglid- en injectable-oogartsenkliniek in Amsterdam">
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
                    <div class="page-header-box">

                        <h1 class="text-anime-style-3" data-cursor="-opaque">Over ons</h1>
                        <nav class="wow fadeInUp">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index">home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">over ons</li>
                            </ol>
                        </nav>
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
                        <h3 class="wow fadeInUp">over ons</h3>
                        <h2 class="text-anime-style-3" data-cursor="-opaque">Bij Skin &amp; Vision Clinic nemen we de tijd om u écht te leren kennen. Of u nu
                            bent doorverwezen voor een medische ooglidcorrectie, of zelf kiest voor een
                            ooglidcorrectie of rimpelbehandeling voor een frisse uitstraling, wij bieden zorg op
                            maat.</h2>
                    </div>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="about-us-content">
                        <div class="about-us-image">
                            <figure class="image-anime reveal">
                                <img src="images/skin-and-vision-about-us-img.jpg" alt="Skin & Vision Clinic About Us Image">
                            </figure>
                        </div>
                        <div class="about-us-list wow fadeInUp" data-wow-delay="0.2s">
                            <ul>
                                <li>Hoge slagingspercentages</li>
                                <li>Deskundige specialisten</li>
                                <li>Geen wachttijden</li>
                                <li>One Stop Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About Us Section End -->

    <div class="what-we-do bg-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="what-we-do-content">
                        <div class="section-title">
                            <h3 class="wow fadeInUp">Rustige, Persoonlijke Aanpak</h3>
                            <h2 class="text-anime-style-3" data-cursor="-opaque">Onze maatschappelijke missie is helder.</h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">
                                wij willen hoogwaardige oculoplastische
                                zorg in Nederland toegankelijker en beter maken. Dat doen we door intensieve
                                samenwerking met verwijzers, kennisdeling en continue verbetering van
                                zorgkwaliteit.
                            </p>
                        </div>

                        <div class="what-we-do-body">
                            <div class="client-review-item wow fadeInUp" data-wow-delay="0.4s">
                                <div class="client-review-rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half"></i>
                                </div>
                                <div class="client-review-content">
                                    <p><span>4.5 </span> Gebaseerd op 500+ beoordelingen</p>
                                </div>
                            </div>
                            <div class="client-review-item">
                                <div class="client-review-content">
                                    <p>10+ Ervaren Oogartsen</p>
                                </div>
                                <div class="client-review-images">
                                    <div class="client-image">
                                        <figure class="image-anime reveal">
                                            <img src="images/placeholder-male.jpg" alt="">
                                        </figure>
                                    </div>
                                    <div class="client-image">
                                        <figure class="image-anime reveal">
                                            <img src="images/placeholder-female.jpg" alt="">
                                        </figure>
                                    </div>
                                    <div class="client-image">
                                        <figure class="image-anime reveal">
                                            <img src="images/placeholder-female.jpg" alt="">
                                        </figure>
                                    </div>
                                    <div class="client-image">
                                        <figure class="image-anime reveal">
                                            <img src="images/placeholder-male.jpg" alt="">
                                        </figure>
                                    </div>
                                    <div class="client-image">
                                        <figure class="image-anime reveal">
                                            <img src="images/placeholder-male.jpg" alt="">
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="what-we-do-footer wow fadeInUp" data-wow-delay="0.6s">
                            <a href="contact" class="btn-default">Neem contact op</a>
                        </div>
                        <!-- What We Do Footer End -->
                    </div>
                    <!-- What We Do Content End -->
                </div>

                <div class="col-lg-6">
                    <!-- What We Do Image Start -->
                    <div class="what-we-do-image">
                        <figure class="image-anime reveal">
                            <img src="images/iStock.jpg" alt="Skin & Vision Clinic What We Do Image">
                        </figure>
                    </div>
                    <!-- What We Do Image End -->
                </div>
            </div>
        </div>
    </div>

    <!-- Our Commitment Section Start -->
    <div class="our-commitment">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <!-- Our Commitment Image Start -->
                    <div class="our-commitment-image">
                        <figure class="image-anime reveal">
                            <img src="images/dr.RoelJHMKloos.jpg" alt="Dokter Kloos, R.J.H.M.">
                        </figure>
                    </div>
                    <!-- Our Commitment Image End -->
                </div>

                <div class="col-lg-6">
                    <!-- Our Commitment Content Start -->
                    <div class="our-commitment-content">
                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h3 class="wow fadeInUp">Een Natuurlijke Uitstraling</h3>
                            <h2 class="text-anime-style-3" data-cursor="-opaque">Over Dokter Kloos</h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">
                                Dokter Kloos is oogarts, gespecialiseerd in oogchirurgie en cosmetische
                                behandelingen rond de ogen. Hij studeerde geneeskunde aan de Universiteit Leiden
                                en specialiseerde zich in oogheelkunde aan het VU Medisch Centrum in Amsterdam.
                            </p>
                            <p class="wow fadeInUp" data-wow-delay="0.4s">
                                Sinds 1996 werkt hij in vooraanstaande academische ziekenhuizen, waaronder het
                                AMC Amsterdam, UMC Utrecht, Rotterdam Eye Hospital en Maastricht UMC+.
                            </p>
                            <p class="wow fadeInUp" data-wow-delay="0.6s">
                                Hij behoort tot de oogartsen in Nederland die botulinetoxine (Botox) inzetten bij
                                oogheelkundige aandoeningen, zoals overmatig tranen en ooglidspasmen. In het
                                AMC was hij nauw betrokken bij de introductie van deze behandelingen.
                            </p>
                            <p class="wow fadeInUp" data-wow-delay="0.8s">
                                Naast zijn klinisch werk publiceert Dokter Kloos regelmatig in internationale medische
                                tijdschriften over ooglid- en orbitachirurgie en nieuwe operatietechnieken.
                            </p>
                            <p class="wow fadeInUp" data-wow-delay="1.0s">
                                Patiënten waarderen zijn rustige benadering, deskundigheid en oog voor een
                                natuurlijke uitstraling. Samen met zijn team begeleidt hij iedere patiënt zorgvuldig en
                                persoonlijk.
                            </p>

                            <p class="wow fadeInUp" data-wow-delay="1.0s" style="font-style: italic;">R.J.H.M. Kloos, oogarts</p>
                        </div>
                    </div>
                    <div class="commitment-btn wow fadeInUp" data-wow-delay="0.8s" style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;">
                        <a href="contact" class="btn-default">Neem contact op</a>
                    </div>
                    <!-- Our Commitment Content End -->
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