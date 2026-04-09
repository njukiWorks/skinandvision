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
    <title>Medical Treatment - Skin & Vision Clinic: Eyelid and Injectable Eye Specialists Clinic in Amsterdam</title>
    <meta name="description" content="Skin & Vision Clinic in Amsterdam offers expert cosmetic & medical eye care. Treatments include Botox, eyelid correction (upper & lower), ptosis surgery, entropion & ectropion correction. Book your consultation today.">
    <meta name="keywords" content="Eye clinic Amsterdam, Botox Amsterdam, eyelid surgery Amsterdam, upper eyelid correction, lower eyelid correction, ptosis surgery, entropion correction, ectropion correction, oculoplastic surgeon Amsterdam, cosmetic eye care, Skin & Vision">
    <meta name="author" content="Skin & Vision Clinic">

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Skin & Vision Clinic | Eyelid and Injectable Eye Specialists Clinic in Amsterdam">
    <meta property="og:description" content="Botox, eyelid correction, ptosis surgery & medical eye treatments in Amsterdam. Trusted specialists at Skin & Vision Clinic. Book today.">
    <meta property="og:image" content="https://skinandvision.nl/images/logo/main-logo.png">
    <meta property="og:url" content="https://skinandvision.nl/medical-treatments">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Skin & Vision | Eyelid and Injectable Eye Specialists Clinic in Amsterdam">
    <meta name="twitter:description" content="Specialized in Botox, eyelid surgery, ptosis correction & medical eye treatments in Amsterdam. Book a consultation today.">
    <meta name="twitter:image" content="https://skinandvision.nl/images/logo/main-logo.png">
    <!-- Favicon Icon -->
    <link rel="shortcut icon" type="image/png" href="images/favicon.png">
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
                        <h1 class="text-anime-style-3" data-cursor="-opaque">Medical Treatments</h1>
                        <nav class="wow fadeInUp">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index">home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">treatments</li>
                            </ol>
                        </nav>
                    </div>
                    <!-- Page Header Box End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->


    <div class="page-case-study">
        <div class="container">
            <div class="row">


                <div class="col-lg-4 col-md-6">
                    <div class="case-study-item wow fadeInUp" data-wow-delay="0.8s">
                        <div class="case-study-image">
                            <a href="entropion-correction" data-cursor-text="View">
                                <figure class="image-anime">
                                    <img src="images/entropion-correction.jpg" alt="">
                                </figure>
                            </a>
                        </div>
                        <div class="case-study-item-body">
                            <div class="case-study-content">
                                <h2><a href="entropion-correction">Entropion correction</a></h2>
                            </div>
                            <div class="case-study-btn">
                                <a href="entropion-correction" class="readmore-btn">read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="case-study-item wow fadeInUp" data-wow-delay="1s">
                        <div class="case-study-image">
                            <a href="ectropion-correction" data-cursor-text="View">
                                <figure class="image-anime">
                                    <img src="images/ectropion-correction.jpg" alt="">
                                </figure>
                            </a>
                        </div>
                        <div class="case-study-item-body">
                            <div class="case-study-content">
                                <h2><a href="ectropion-correction">Ectropion correction</a></h2>
                            </div>
                            <div class="case-study-btn">
                                <a href="ectropion-correction" class="readmore-btn">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">

                    <div class="case-study-item wow fadeInUp">
                        <div class="case-study-image">
                            <a href="botox-treatments" data-cursor-text="View">
                                <figure class="image-anime">
                                    <img src="images/botox-image-3.jpg" alt="Botulinum Toxin Treatments Skin & Vision Clinic">
                                </figure>
                            </a>
                        </div>
                        <div class="case-study-item-body">
                            <div class="case-study-content">
                                <h2><a href="botox-treatments">Botulinum Toxin (Botox)</a></h2>
                            </div>
                            <div class="case-study-btn">
                                <a href="botox-treatments" class="readmore-btn">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="case-study-item wow fadeInUp" data-wow-delay="0.6s">
                        <div class="case-study-image">
                            <a href="ptosis-surgery" data-cursor-text="View">
                                <figure class="image-anime">
                                    <img src="images/ptosis-surgery.jpg" alt="">
                                </figure>
                            </a>
                        </div>
                        <div class="case-study-item-body">
                            <div class="case-study-content">
                                <h2><a href="ptosis-surgery">Ptosis Surgery</a></h2>
                            </div>
                            <div class="case-study-btn">
                                <a href="ptosis-surgery" class="readmore-btn">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Case Study End -->

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
</body>

</html>