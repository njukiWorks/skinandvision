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
    <title>Contact Us - Skin and Vision Clinic: Eyelid and Injectable Eye Specialists Clinic in Amsterdam</title>
    <meta name="description" content="Skin & Vision Clinic in Amsterdam offers expert cosmetic & medical eye care. Treatments include Botox, eyelid correction (upper & lower), ptosis surgery, entropion & ectropion correction. Book your consultation today.">
    <meta name="keywords" content="Eye clinic Amsterdam, Botox Amsterdam, eyelid surgery Amsterdam, upper eyelid correction, lower eyelid correction, ptosis surgery, entropion correction, ectropion correction, oculoplastic surgeon Amsterdam, cosmetic eye care, Skin & Vision">
    <meta name="author" content="Skin & Vision Clinic">

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Skin & Vision Clinic | Eyelid and Injectable Eye Specialists Clinic in Amsterdam">
    <meta property="og:description" content="Botox, eyelid correction, ptosis surgery & medical eye treatments in Amsterdam. Trusted specialists at Skin & Vision Clinic. Book today.">
    <meta property="og:image" content="https://skinandvision.nl/images/logo/main-logo.png">
    <meta property="og:url" content="https://skinandvision.nl/contact-us">
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
                        <h1 class="text-anime-style-3" data-cursor="-opaque">Contact Us</h1>
                        <nav class="wow fadeInUp">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index">home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">contact us</li>
                            </ol>
                        </nav>
                    </div>
                    <!-- Page Header Box End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->


    <div class="page-contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <!-- Contact Us Content Start -->
                    <div class="contact-us-content">
                        <!-- Section Title Start -->
                        <div class="section-title">
                            <h3 class="wow fadeInUp">contact us</h3>
                            <h2 class="text-anime-style-3" data-cursor="-opaque">We're ready to help you better yourself</h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">Whether you have questions, would like to schedule an appointment, or would like more information about our treatments, please feel free to contact us. Our friendly and expert team is ready to assist you.</p>
                        </div>
                        <!-- Section Title End -->

                        <!-- Contact Us image Start -->
                        <div class="contact-us-image">
                            <figure class="image-anime reveal">
                                <img src="images/contact-us-image.jpg" alt="">
                            </figure>
                        </div>
                        <!-- Contact Us image End -->
                    </div>
                    <!-- Contact Us Content End -->
                </div>

                <div class="col-lg-6">
                    <!-- Contact Info List Start -->
                    <div class="contact-info-list">
                        <!-- Contact Info Item Start -->
                        <div class="contact-info-item wow fadeInUp">
                            <div class="icon-box">
                                <img src="images/icon-location.svg" alt="">
                            </div>
                            <div class="contact-info-content">
                                <h3>location</h3>
                                <p>Pietersbergweg 291, 1105 BM Amsterdam</p>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                            <div class="icon-box">
                                <img src="images/icon-phone.svg" alt="">
                            </div>
                            <div class="contact-info-content">
                                <h3>contact us</h3>
                                <p><a href="tel:+31646096641">+31646096641</a></p>
                                <h3>emergency contact</h3>
                                <p><a href="tel:+31646096641">+31646096641</a></p>
                                <!-- <p><a href="tel:+761852339">(+12) 761 852 339</a></p> -->
                            </div>
                        </div>
                        <!-- Contact Info Item End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                            <div class="icon-box">
                                <img src="images/icon-mail.svg" alt="">
                            </div>
                            <div class="contact-info-content">
                                <h3>email</h3>
                                <p><a href="mailto:info@skinandvision.nl">info@skinandvision.nl</a></p>
                                <!-- <p><a href="mailto:support@domain.com">support@domain.com</a></p> -->
                            </div>
                        </div>
                        <!-- Contact Info Item End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                            <div class="icon-box">
                                <img src="images/icon-clock-accent.svg" alt="">
                            </div>
                            <div class="contact-info-content">
                                <h3>Opening hours</h3>
                                <p>Monday - Friday ( 8am - 5pm )</p>
                                <p>Sunday - Closed</p>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->
                    </div>
                    <!-- Contact Info List Start -->
                </div>

                <div class="col-lg-12">
                    <!-- Contact Us Form Start -->
                    <div class="conatct-us-form">
                        <!-- Contact Form Start -->
                        <div class="contact-form">
                            <!-- Section Title Start -->
                            <div class="section-title">
                                <h2 class="text-anime-style-3" data-cursor="-opaque">Have any questions?</h2>
                            </div>
                            <!-- Section Title End -->

                            <!-- Contact Form Start -->
                            <form id="" action="../insert.php" method="POST" data-toggle="validator" class="wow fadeInUp">
                                <div class="row">
                                    <div class="form-group col-md-6 mb-4">
                                        <input type="text" name="fname" class="form-control" id="fname" placeholder="First Name" required>
                                        <div class="help-block with-errors"></div>
                                    </div>

                                    <div class="form-group col-md-6 mb-4">
                                        <input type="text" name="lname" class="form-control" id="lname" placeholder="Last Name" required>
                                        <div class="help-block with-errors"></div>
                                    </div>

                                    <div class="form-group col-md-6 mb-4">
                                        <input type="text" name="phone" class="form-control" id="phone" placeholder="Phone No." required>
                                        <div class="help-block with-errors"></div>
                                    </div>

                                    <div class="form-group col-md-6 mb-4">
                                        <input type="email" name="email" class="form-control" id="email" placeholder="Email Address" required>
                                        <div class="help-block with-errors"></div>
                                    </div>

                                    <!-- Date of Birth field -->
                                    <div class="form-group col-md-12 mb-4">
                                        <!-- <label for="dob" class="form-label">Date of Birth</label> -->
                                        <input type="date" name="dob" class="form-control" id="dob" required>
                                        <div class="help-block with-errors"></div>
                                    </div>

                                    <div class="form-group col-md-12 mb-4">
                                        <textarea name="message" class="form-control" id="message" rows="4" placeholder="Write Message..."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>

                                    <div class="form-group col-md-12 mb-4">
                                        <div class="g-recaptcha" data-sitekey="6LcepqsrAAAAAFhbEhp7Fyqt_NGxQKkam_wcKNbG"></div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-form-btn">
                                            <button type="submit" name="contact-us" class="btn-default btn-highlighted">
                                                <span>submit now</span>
                                            </button>
                                            <div id="msgSubmit" class="h3 hidden"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <!-- Contact Form End -->
                        </div>
                        <!-- Contact Form End -->

                        <!-- Google Map Iframe Start -->
                        <div class="google-map-iframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.98840265662!2d4.950618675867079!3d52.29806495263829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60b31c63ed17f%3A0x30398205164c0961!2sPietersbergweg%20291%2C%201105%20BM%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2ske!4v1755016190205!5m2!1sen!2ske" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <!-- Google Map Iframe End -->
                    </div>
                    <!-- Contact Us Form End -->
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
    <!-- Load reCAPTCHA API -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <script>
        // Get today's date and add 1 day
        const today = new Date();
        today.setDate(today.getDate() + 1);

        // Format to yyyy-mm-dd
        const minDate = today.toISOString().split('T')[0];

        // Set min attribute
        document.getElementById('date').setAttribute('min', minDate);
    </script>
</body>

</html>