<?php

ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);
ini_set('error_log', __DIR__ . '/php-error.log');

use Phppot\Member;

require_once __DIR__ . '/Model/Member.php';
session_start();

$member = new Member();

// Google reCAPTCHA secret key
$recaptcha_secret = "6LcepqsrAAAAAIVmxJZEa3pjr0ZeXhydo-P27lUm";

// Function to verify reCAPTCHA
function verifyCaptcha($recaptcha_secret)
{
    if (!isset($_POST['g-recaptcha-response']) || empty($_POST['g-recaptcha-response'])) {
        return false;
    }

    $recaptcha_response = $_POST['g-recaptcha-response'];
    $verify_url = "https://www.google.com/recaptcha/api/siteverify";

    $response = file_get_contents($verify_url . "?secret=" . $recaptcha_secret . "&response=" . $recaptcha_response);
    $responseKeys = json_decode($response, true);

    return isset($responseKeys["success"]) && $responseKeys["success"] === true;
}

if (isset($_POST['book-appointment'])) {
    if (!verifyCaptcha($recaptcha_secret)) {
        echo "<script>alert('Captcha verification failed. Please try again.'); window.location.href = 'book-appointment.php';</script>";
        exit();
    }

    $services = isset($_POST['services']) && is_array($_POST['services'])
        ? implode(', ', array_map('htmlspecialchars', $_POST['services']))
        : '';

    $appointmentData = [
        'fname' => htmlspecialchars(trim($_POST['fname']), ENT_QUOTES),
        'lname' => htmlspecialchars(trim($_POST['lname']), ENT_QUOTES),
        'email' => filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL),
        'phone' => htmlspecialchars(trim($_POST['phone']), ENT_QUOTES),
        'services' => $services,
        'appointment_date' => htmlspecialchars(trim($_POST['date']), ENT_QUOTES),
    ];

    $insertId = $member->insertAppointment($appointmentData);

    if ($insertId) {
        header("Location: send-email.php?idappointment=$insertId");
        exit();
    } else {
        echo "<script>alert('Error submitting your appointment. Please try again later!'); window.location.href = 'book-appointment.php';</script>";
    }
} else if (isset($_POST['contact-us'])) {
    if (!verifyCaptcha($recaptcha_secret)) {
        echo "<script>alert('Captcha verification failed. Please try again.'); window.location.href = 'contact-us.php';</script>";
        exit();
    }

    $contactUsData = [
        'fname' => htmlspecialchars(trim($_POST['fname']), ENT_QUOTES),
        'lname' => htmlspecialchars(trim($_POST['lname']), ENT_QUOTES),
        'phone' => htmlspecialchars(trim($_POST['phone']), ENT_QUOTES),
        'email' => filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL),
        'dob' => htmlspecialchars(trim($_POST['dob']), ENT_QUOTES),
        'message' => htmlspecialchars(trim($_POST['message']), ENT_QUOTES),
    ];

    $insertId = $member->insertContactUsData($contactUsData);

    if ($insertId) {
        header("Location: send-email.php?idcontactus=$insertId");
        exit();
    } else {
        echo "<script>alert('Error submitting your message. Please try again later!'); window.location.href = 'contact-us.php';</script>";
    }
} else if (isset($_POST['submit-reviews'])) {
    if (!verifyCaptcha($recaptcha_secret)) {
        echo "<script>alert('Captcha verification failed. Please try again.'); window.location.href = 'reviews.php';</script>";
        exit();
    }

    $reviewsData = [
        'fname' => htmlspecialchars(trim($_POST['fname']), ENT_QUOTES),
        'lname' => htmlspecialchars(trim($_POST['lname']), ENT_QUOTES),
        'email' => filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL),
        'phone' => htmlspecialchars(trim($_POST['phone']), ENT_QUOTES),
        'message' => htmlspecialchars(trim($_POST['message']), ENT_QUOTES),
    ];

    $insertId = $member->insertReviewsData($reviewsData);

    if ($insertId) {
        header("Location: send-email.php?idreviews=$insertId");
        exit();
    } else {
        echo "<script>alert('Error submitting your message. Please try again later!'); window.location.href = 'reviews.php';</script>";
    }
} else if (isset($_POST['submit-newsletter'])) {

    $newsletterData = [
        'email' => filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL),
    ];

    $insertId = $member->insertNewsletterData($newsletterData);

    if ($insertId) {
        header("Location: send-email.php?news=$insertId");
        exit();
    } else {
        echo "<script>alert('Error submitting your message. Please try again later!'); window.location.href = 'index.php';</script>";
    }
}
