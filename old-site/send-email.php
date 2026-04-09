<?php
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);
ini_set('error_log', __DIR__ . '/php-error.log');

require_once './Model/Member.php';
require_once './lib/DataSource.php';

require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/src/SMTP.php';
require_once __DIR__ . '/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Phppot\DataSource;

$ds = new DataSource();

function sendEmail($to, $cc, $replyTo, $subject, $emailBody, $successMsg)
{
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.mijndomein.nl';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@skinandvision.nl';
        $mail->Password   = 'skinandvisioninfo.2025';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom('info@skinandvision.nl', 'Skin & Vision');
        $mail->addAddress($to);
        if (!empty($cc)) $mail->addCC($cc);
        if (!empty($replyTo)) $mail->addReplyTo($replyTo);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $emailBody;

        $mail->send();

        echo "
        <html>
        <head>
            <meta http-equiv='refresh' content='5;url=index.php'>
            <style>
                body {font-family: Arial; background-color: #f9f9f9; display:flex; justify-content:center; align-items:center; height:100vh;}
                .message-box {background:#e6ffed; border:1px solid #b2f2bb; color:#2f9e44; padding:20px 30px; border-radius:8px; font-size:18px; box-shadow:0 2px 8px rgba(0,0,0,0.05); text-align:center;}
            </style>
        </head>
        <body>
            <div class='message-box'>
                ✅ {$successMsg}<br>
                U wordt zo dadelijk doorgestuurd…
            </div>
        </body>
        </html>";
    } catch (Exception $e) {
        echo "<script>alert('E-mail kon niet worden verzonden. Error: {$mail->ErrorInfo}'); window.location.href = 'index.php';</script>";
    }
}

function buildEmailHTML($title, $fields)
{
    $rows = '';
    foreach ($fields as $label => $value) {
        // Allow HTML only for "Selected Services"
        if ($label === "Selected Services") {
            $safeValue = !empty($value) ? $value : 'Not Provided';
        } else {
            $safeValue = !empty($value) ? nl2br(htmlspecialchars($value)) : 'Not Provided';
        }

        $rows .= "
            <tr>
                <td style='padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;'>$label</td>
                <td style='padding:10px;border:1px solid #ddd;'>$safeValue</td>
            </tr>";
    }

    return "
    <html>
    <body style='font-family:Arial,sans-serif;margin:0;padding:0;background:#f4f4f4;'>
        <div style='max-width:600px;margin:20px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);'>
            
            <!-- Logo -->
            <div style='text-align:center;padding:20px;background:#fff;'>
                <img src='https://legata.ke/skinandvision/images/logo/main-logo-copy.png' alt='Skin & Vision' style='max-width:180px;height:auto;'>
            </div>
            
            <!-- Title -->
            <div style='background:#2f9e44;color:#fff;padding:15px 20px;font-size:20px;font-weight:bold;'>$title</div>
            
            <!-- Table -->
            <table cellpadding='0' cellspacing='0' style='width:100%;border-collapse:collapse;'>$rows</table>
        </div>
    </body>
    </html>";
}

// ------------------- Appointment Email -------------------
if (!empty($_GET['idappointment'])) {
    $idappointment = (int) $_GET['idappointment'];
    $query = "SELECT * FROM appointments WHERE id = ?";
    $result = $ds->select($query, "i", [$idappointment]);

    if (!empty($result)) {
        $data = $result[0];

        // Convert services string to bullet list
        $servicesArray = explode(',', $data['services']);
        $servicesList = "<ul>";
        foreach ($servicesArray as $service) {
            $servicesList .= "<li>" . htmlspecialchars(trim($service)) . "</li>";
        }
        $servicesList .= "</ul>";

        $emailBody = buildEmailHTML("New Appointment Booking", [
            "Name" => $data['fname'] . " " . $data['lname'],
            "Email" => $data['email'],
            "Phone" => $data['phone'],
            "Selected Services" => $servicesList, // show bullet list
            "Appointment Date" => $data['appointment_date']
        ]);

        sendEmail(
            'info@skinandvision.nl',
            '',
            $data['email'],
            "New Appointment Booking from {$data['fname']} {$data['lname']}",
            $emailBody,
            "Afspraak succesvol geboekt! Wij nemen spoedig contact met u op!"
        );
    } else {
        echo "<script>alert('Error! Appointment not found.'); window.location.href = 'index.php';</script>";
    }
}


// ------------------- Contact Us Email -------------------
if (!empty($_GET['idcontactus'])) {
    $idcontactus = (int) $_GET['idcontactus'];
    $query = "SELECT * FROM contact_us WHERE id = ?";
    $result = $ds->select($query, "i", [$idcontactus]);

    if (!empty($result)) {
        $data = $result[0];
        $emailBody = buildEmailHTML("New Contact Us Message", [
            "Name" => $data['fname'] . " " . $data['lname'],
            "Email" => $data['email'],
            "Phone" => $data['phone'],
            "Date of Birth" => $data['dob'],
            "Message" => $data['message']
        ]);

        sendEmail(
            'info@skinandvision.nl',
            '',
            $data['email'],
            "New Contact Us Message from {$data['fname']} {$data['lname']}",
            $emailBody,
            "Gefeliciteerd! Bericht succesvol verzonden!"
        );
    } else {
        echo "<script>alert('Error! Contact message not found.'); window.location.href = 'contact-us.php';</script>";
    }
}
// ------------------- Reviews Email -------------------
if (!empty($_GET['idreviews'])) {
    $idreviews = (int) $_GET['idreviews'];
    $query = "SELECT * FROM reviews WHERE id = ?";
    $result = $ds->select($query, "i", [$idreviews]);

    if (!empty($result)) {
        $data = $result[0];
        $emailBody = buildEmailHTML("New Review Message", [
            "Name" => $data['fname'] . " " . $data['lname'],
            "Email" => $data['email'],
            "Phone" => $data['phone'],
            "Message" => $data['message']
        ]);

        sendEmail(
            'info@skinandvision.nl',
            '',
            $data['email'],
            "New Review from {$data['fname']} {$data['lname']}",
            $emailBody,
            "Bedankt voor uw feedback!"
        );
    } else {
        echo "<script>alert('Fout! Beoordelingsbericht niet gevonden.'); window.location.href = 'reviews.php';</script>";
    }
}
// ------------------- Newsletter Subscribers -------------------
if (!empty($_GET['news'])) {
    $news = (int) $_GET['news'];
    $query = "SELECT * FROM newsletter_subscribers WHERE id = ?";
    $result = $ds->select($query, "i", [$news]);

    if (!empty($result)) {
        $data = $result[0];
        $emailBody = buildEmailHTML("New Newsletter Subscriber", [
            "Email" => $data['email']
        ]);

        sendEmail(
            'info@skinandvision.nl',
            '',
            $data['email'],
            "New newsletter request",
            $emailBody,
            "Gefeliciteerd! U bent succesvol geabonneerd op onze nieuwsbrief!"
        );
    } else {
        echo "<script>alert('Fout! Op dit moment kan het abonnement niet worden verwerkt. Probeer het later opnieuw!'); window.location.href = 'index.php';</script>";
    }
}
