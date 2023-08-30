<?php
header("Content-Type: application/json");

// Get the URL of the RSS feed to proxy
$url = $_GET["url"];

// Fetch the RSS feed
$xml = file_get_contents($url);

// Parse the XML and return as JSON
$data = simplexml_load_string($xml);
$json = json_encode($data);
echo $json;
?>
