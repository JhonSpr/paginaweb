

<?php

$server = 'localhost';
$username = 'id19171005_jhon';
$password = 'jhonreyes2017HD@';
$database = 'id19171005_paginaweb';

try {
  $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
  die('Connection Failed: ' . $e->getMessage());
}

?>