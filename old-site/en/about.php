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
    <title>About Us - Skin & Vision Clinic: Eyelid and Injectable Eye Specialists Clinic in Amsterdam</title>
    <meta name="description" content="Skin & Vision Clinic in Amsterdam offers expert cosmetic & medical eye care. Treatments include Botox, eyelid correction (upper & lower), ptosis surgery, entropion & ectropion correction. Book your consultation today.">
    <meta name="keywords" content="Eye clinic Amsterdam, Botox Amsterdam, eyelid surgery Amsterdam, upper eyelid correction, lower eyelid correction, ptosis surgery, entropion correction, ectropion correction, oculoplastic surgeon Amsterdam, cosmetic eye care, Skin & Vision">
    <meta name="author" content="Skin & Vision Clinic">

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Skin & Vision Clinic | Eyelid and Injectable Eye Specialists Clinic in Amsterdam">
    <meta property="og:description" content="Botox, eyelid correction, ptosis surgery & medical eye treatments in Amsterdam. Trusted specialists at Skin & Vision Clinic. Book today.">
    <meta property="og:image" content="https://skinandvision.nl/images/logo/main-logo.png">
    <meta property="og:url" content="https://skinandvision.nl/about">
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
                        <div class="christmas-lights">
                            <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Christmas-PNG/Christmas_Lights_PNG_Clipart-74048572.png?m=1629788184" alt="Garland">
                        </div>
                        <h1 class="text-anime-style-3" data-cursor="-opaque">About us</h1>
                        <nav class="wow fadeInUp">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index">home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">about us</li>
                            </ol>
                        </nav>
                    </div>
                    <!-- Page Header Box End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- About Us Section Start -->
    <div class="about-us">
        <div class="container">
            <div class="row section-row">
                <div class="col-lg-12">
                    <!-- Section Title Start -->
                    <div class="section-title section-title-center">
                        <h3 class="wow fadeInUp">about Us</h3>
                        <h2 class="text-anime-style-3" data-cursor="-opaque">At Skin &amp; Vision Clinic, we take the time to truly get to know you. Whether you
                            are referred for a medical eyelid correction, or you choose an eyelid correction or
                            wrinkle treatment for a refreshed appearance, we provide tailored care. </h2>
                    </div>
                    <!-- Section Title End -->
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-12">
                    <!-- About Us Content Start -->
                    <div class="about-us-content">
                        <!-- About Us Image Start -->
                        <div class="about-us-image">
                            <figure class="image-anime reveal">
                                <img src="images/skin-and-vision-about-us-img.jpg" alt="Skin & Vision About Us Image">
                            </figure>
                        </div>
                        <!-- About Us Image End -->

                        <!-- About Us List Start -->
                        <div class="about-us-list wow fadeInUp" data-wow-delay="0.2s">
                            <ul>
                                <li>High success rates</li>
                                <li>Expert specialists</li>
                                <li>Zero Waiting Times</li>
                                <li>One Stop Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="what-we-do bg-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="what-we-do-content">
                        <div class="section-title">
                            <h3 class="wow fadeInUp">Calm, Personal, Approach</h3>
                            <h2 class="text-anime-style-3" data-cursor="-opaque">Our societal mission is clear.</h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">We aim to make high-quality oculoplastic care more
                                accessible and better in the Netherlands. We achieve this through intensive
                                collaboration with referrers, knowledge sharing, and continuous improvement of care
                                quality.</p>
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
                                    <p><span>4.5 </span> Based on 500+ Reviews</p>
                                </div>
                            </div>
                            <div class="client-review-item">
                                <div class="client-review-content">
                                    <p>10+ Experienced Ophthalmologists</p>
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

                        <!-- What We Do Footer Start -->
                        <div class="what-we-do-footer wow fadeInUp" data-wow-delay="0.6s">
                            <a href="contact" class="btn-default">contact us</a>
                        </div>
                        <!-- What We Do Footer End -->
                    </div>
                    <!-- What We Do Content End -->
                </div>

                <div class="col-lg-6">
                    <!-- What We Do Image Start -->
                    <div class="what-we-do-image">
                        <figure class="image-anime reveal">
                            <img src="images/iStock.jpg" alt="Skin & Vision What We Do Image">
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
                            <img src="images/dr.RoelJHMKloos.jpg" alt="Doctor Kloos, R.J.H.M">
                        </figure>
                    </div>
                    <!-- Our Commitment Image End -->
                </div>

                <div class="col-lg-6">
                    <!-- Our Commitment Content Start -->
                    <div class="our-commitment-content">
                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h3 class="wow fadeInUp">A Natural Look</h3>
                            <h2 class="text-anime-style-3" data-cursor="-opaque">About Doctor Kloos</h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">Doctor Kloos is an ophthalmologist specialized in eye surgery and cosmetic
                                treatments around the eyes. He studied medicine at Leiden University and completed
                                his ophthalmology training at VU University Medical Center in Amsterdam.</p>
                            <p class="wow fadeInUp" data-wow-delay="0.4s">Since 1996, he has worked at leading academic hospitals, including Amsterdam
                                UMC, University Medical Center Utrecht, Rotterdam Eye Hospital, and Maastricht
                                UMC+.</p>
                            <p class="wow fadeInUp" data-wow-delay="0.6s">In addition to his clinical work, Doctor Kloos has published extensively in international
                                medical journals on eyelid and orbital surgery, as well as innovative surgical
                                techniques.</p>
                            <p class="wow fadeInUp" data-wow-delay="0.8s">Patients appreciate his calm approach, expertise, and commitment to preserving a
                                natural appearance. Together with his team, he provides every patient with personal
                                and careful guidance.</p>

                            <p class="wow fadeInUp" data-wow-delay="1.0s" style="font-style: italic;">R.J.H.M. Kloos, ophthalmologist</p>
                        </div>
                    </div>
                    <div class="commitment-btn wow fadeInUp" data-wow-delay="1.2s" style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;">
                        <a href="contact" class="btn-default">Get in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Our Commitment Section End -->


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