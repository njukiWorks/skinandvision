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
    <meta name="description" content=" Skin & Vision Clinic: Medische & Cosmetische Oogzorg in Amsterdam">
    <meta name="keywords" content="Skin & Vision Clinic: Ooglid- en injectable-oogartsenkliniek in Amsterdam">
    <meta name="author" content="Skin & Vision Clinic">
    <!-- Page Title -->
    <title>Vergoeding & Declaratie - Skin & Vision Clinic: Ooglid- en injectable-oogartsenkliniek in Amsterdam</title>
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
                        <h1 class="text-anime-style-3" data-cursor="-opaque">Vergoeding & Declaratie</h1>
                        <nav class="wow fadeInUp">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index">home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Vergoeding & Declaratie</li>
                            </ol>
                        </nav>
                    </div>
                    <!-- Page Header Box End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->


    <div class="our-commitment">
        <div class="container">
            <div class="row align-items-center">
                <!-- <div class="col-lg-6">
                    <div class="our-commitment-image">
                        <figure class="image-anime reveal">
                            <img src="images/cosmetic-treatment.jpg" alt="Skin & Vision Clinic Behandelingen">
                        </figure>
                    </div>
                </div> -->

                <div class="col-lg-12">
                    <div class="our-commitment-content">
                        <div class="section-title">
                            <h3 class="wow fadeInUp">Onze Behandelingen</h3>
                            <h2 class="text-anime-style-3" data-cursor="-opaque">Medische zorg bij Skin &amp; Vision Clinics – ook zonder contract gewoon vergoed</h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">
                                Uw medische behandeling bij Skin &amp; Vision Clinics wordt – bij medische indicatie
                                én verwijzing door uw huisarts of medisch specialist – gewoon vergoed door alle
                                zorgverzekeraars. U hoeft zich dus geen zorgen te maken: ook zonder contract kunt
                                u bij ons terecht voor verzekerde zorg.
                            </p>
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