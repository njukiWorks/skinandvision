<?php

namespace Phppot;

class Member
{
    private $ds;

    function __construct()
    {
        require_once __DIR__ . '/../lib/DataSource.php';
        $this->ds = new \Phppot\DataSource();
    }

    public function insertAppointment($appointmentData)
    {
        $sql = "INSERT INTO appointments (fname, lname, email, phone, services, appointment_date) VALUES (?, ?, ?, ?, ?, ?)";
        $paramType = "ssssss";
        $paramArray = [
            $appointmentData['fname'],
            $appointmentData['lname'],
            $appointmentData['email'],
            $appointmentData['phone'],
            $appointmentData['services'],
            $appointmentData['appointment_date']
        ];
        return $this->ds->insert($sql, $paramType, $paramArray);
    }
    public function insertContactUsData($contactUsData)
    {
        $sql = "INSERT INTO contact_us (fname, lname, phone, email, dob, message) VALUES (?, ?, ?, ?, ?, ?)";
        $paramType = "ssssss";
        $paramArray = [
            $contactUsData['fname'],
            $contactUsData['lname'],
            $contactUsData['phone'],
            $contactUsData['email'],
            $contactUsData['dob'],
            $contactUsData['message']
        ];
        return $this->ds->insert($sql, $paramType, $paramArray);
    }
    public function insertReviewsData($reviewsData)
    {
        $sql = "INSERT INTO reviews (fname, lname, email, phone, message) VALUES (?, ?, ?, ?, ?)";
        $paramType = "sssss";
        $paramArray = [
            $reviewsData['fname'],
            $reviewsData['lname'],
            $reviewsData['email'],
            $reviewsData['phone'],
            $reviewsData['message']
        ];
        return $this->ds->insert($sql, $paramType, $paramArray);
    }

    public function insertNewsletterData($newsletterData)
    {
        $sql = "INSERT INTO newsletter_subscribers (email) VALUES (?)";
        $paramType = "s";
        $paramArray = [
            $newsletterData['email']
        ];
        return $this->ds->insert($sql, $paramType, $paramArray);
    }
}
