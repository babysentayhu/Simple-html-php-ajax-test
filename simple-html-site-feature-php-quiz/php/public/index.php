<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// getting the request method sent in to the proxy
function getRequestMethod() {
    return $_SERVER["REQUEST_METHOD"]; 
}
$response = "";
switch (getRequestMethod()) {
  case 'GET':
    $response = get_request();
    break;
  case 'POST':
    // Post request handler goes here
    break;
  default:
    echo "No request ";
    return;
}

function get_request(){
    $url = "https://jsonplaceholder.typicode.com/comments?postId=3";
    $responce = file_get_contents($url);
    return  $responce;
}
echo $response;
