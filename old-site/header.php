<?php
$currentPage = basename($_SERVER['PHP_SELF']);
$basePath = ($currentLang === 'en') ? '/en/' : '/';
?>

<!-- Topbar Section Start -->
<div class="topbar">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-9">
                <!-- Topbar Contact Information Start -->
                <div class="topbar-contact-info">
                    <ul>
                        <li><i class="fa-solid fa-phone"></i><a href="tel:+31646096641">+31646096641</a></li>
                        <li><i class="fa-solid fa-envelope"></i><a
                                href="mailto:info@skinandvision.nl">info@skinandvision.nl</a></li>
                        <li class="hide-tablet"><i class="fa-solid fa-location-dot"></i>Pietersbergweg 291, 1105 BM
                            Amsterdam</li>
                    </ul>
                </div>
                <!-- Topbar Contact Information End -->
            </div>

            <div class="col-md-3">
                <!-- Topbar Social Links Start -->
                <div class="topbar-social-links">
                    <ul>
                        <li><a href="https://x.com/skinandvision" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/skinandvision" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/skin_and_vision/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>
                <!-- Topbar Social Links End -->
            </div>
        </div>
    </div>
</div>
<!-- Topbar Section End -->

<!-- Header Start -->
<header class="main-header">
    <div class="header-sticky">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <!-- Logo Start -->
                <a class="navbar-brand" href="index.php">
                    <img src="images/logo/main-logo-no-bg.png" alt="Skin & Vision Clinic Logo">
                </a>
                <!-- Logo End -->

                <!-- Main Menu Start -->
                <div class="collapse navbar-collapse main-menu">
                    <div class="nav-menu-wrapper">
                        <ul class="navbar-nav mr-auto" id="menu">
                            <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="about">Over ons</a></li>
                            <li class="nav-item"><a class="nav-link" href="treatments">Behandelingen</a></li>
                            <li class="nav-item"><a class="nav-link" href="insurance-coverage-claims">Vergoeding & Declaratie</a></li>
                            <li class="nav-item"><a class="nav-link" href="referrals">Voor Verwijzers</a></li>
                            <li class="nav-item"><a class="nav-link" href="rates">Tarieven</a></li>
                            <li class="nav-item"><a class="nav-link" href="news">Nieuws</a></li>


                            <li class="nav-item"><a class="nav-link" href="reviews">Ervaringen</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact-us">Contact</a></li>
                            <li class="nav-item highlighted-menu">
                                <!-- Clinicminds Scheduler begin -->
                                <a href="https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo" class="clinicminds-scheduler-button" data-button-text-color="#fff" data-button-background-color="#ff8835">Boek afspraak</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Language Switcher Start -->
                    <div class="language-switcher ml-3">
                        <a href="<?php echo $basePath . $currentPage . '?lang=nl'; ?>" class="btn btn-sm <?php echo ($currentLang === 'nl') ? 'active-lang' : ''; ?>">NL</a>
                        <a href="<?php echo $basePath . $currentPage . '?lang=en'; ?>" class="btn btn-sm <?php echo ($currentLang === 'en') ? 'active-lang' : ''; ?>">EN</a>
                    </div>
                    <!-- Language Switcher End -->

                    <!-- Header Btn Start -->
                    <div class="header-btn">
                        <!-- Clinicminds Scheduler begin -->
                        <a href="https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&amp;hide-logo" class="clinicminds-scheduler-button clinicminds-scheduler-button-style-default clinicminds-scheduler-button-inline" data-button-text-color="#fff" data-button-background-color="#ff8835" data-initialized="true" target="_blank" style="color: rgb(255, 255, 255); background-color: rgb(255, 136, 53);padding: 12px 24px;border-radius: 50px;">Boek afspraak</a>
                    </div>
                    <!-- Clinicminds Scheduler end -->
                    <!-- Header Btn End -->
                </div>
                <!-- Main Menu End -->
                <div class="navbar-toggle"></div>
            </div>
        </nav>
        <div class="responsive-menu"></div>
    </div>
</header>
<!-- Header End -->