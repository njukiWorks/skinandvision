<?php
header('Content-Type: application/json');

require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/src/SMTP.php';
require_once __DIR__ . '/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name   = htmlspecialchars(trim($_POST['name'] ?? ''));
    $rating = intval($_POST['rating'] ?? 5);
    $review = htmlspecialchars(trim($_POST['review'] ?? ''));
    $date   = date('Y-m-d');

    if ($name && $review && $rating >= 1 && $rating <= 5) {
        // Save review to JSON
        $file    = __DIR__ . '/reviews.json';
        $reviews = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
        $reviews[] = compact('name', 'rating', 'review', 'date');
        file_put_contents($file, json_encode($reviews, JSON_PRETTY_PRINT));

        // Send notification email
        $stars = str_repeat('★', $rating) . str_repeat('☆', 5 - $rating);
        $emailBody = "
        <html>
        <body style='font-family:Arial,sans-serif;margin:0;padding:0;background:#f4f4f4;'>
            <div style='max-width:600px;margin:20px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);'>
                <div style='text-align:center;padding:20px;background:#fff;'>
                    <img src='https://legata.ke/skinandvision/images/logo/main-logo-copy.png' alt='Skin &amp; Vision' style='max-width:180px;height:auto;'>
                </div>
                <div style='background:#2f9e44;color:#fff;padding:15px 20px;font-size:20px;font-weight:bold;'>Nieuwe beoordeling ontvangen</div>
                <table cellpadding='0' cellspacing='0' style='width:100%;border-collapse:collapse;'>
                    <tr>
                        <td style='padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;width:35%;'>Naam</td>
                        <td style='padding:10px;border:1px solid #ddd;'>" . htmlspecialchars($name) . "</td>
                    </tr>
                    <tr>
                        <td style='padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;'>Beoordeling</td>
                        <td style='padding:10px;border:1px solid #ddd;font-size:1.2em;color:#f5a623;'>{$stars} ({$rating}/5)</td>
                    </tr>
                    <tr>
                        <td style='padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;'>Tekst</td>
                        <td style='padding:10px;border:1px solid #ddd;'>" . nl2br(htmlspecialchars($review)) . "</td>
                    </tr>
                    <tr>
                        <td style='padding:10px;border:1px solid #ddd;background:#f7f7f7;font-weight:bold;'>Datum</td>
                        <td style='padding:10px;border:1px solid #ddd;'>{$date}</td>
                    </tr>
                </table>
            </div>
        </body>
        </html>";

        try {
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->Host       = 'smtp.mijndomein.nl';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'info@skinandvision.nl';
            $mail->Password   = 'skinandvisioninfo.2025';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            $mail->setFrom('info@skinandvision.nl', 'Skin & Vision');
            $mail->addAddress('info@skinandvision.nl');

            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8';
            $mail->Subject = "Nieuwe beoordeling van {$name} ({$rating}/5 sterren)";
            $mail->Body    = $emailBody;

            $mail->send();
        } catch (Exception $e) {
            // Email failed — log silently, do not block the response
            error_log('Review notification email failed: ' . $mail->ErrorInfo);
        }

        echo json_encode(['success' => true]);
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid input']);
    }
}
?>
