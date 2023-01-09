<?php
  $data = json_decode(file_get_contents("php://input"),true);

  if ( !isset($_POST) || !isset($data) ) {
      echo "<h1>Error</h1>\n
      <p>Accessing this page is not allowed.</p>";
      exit;
  }

	if ( isset($_POST) && isset($data) && $_SERVER['HTTP_ORIGIN'] == "https://tayabraza.github.io" ) {
    
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

		$to = "tayabraza@gmail.com";
		$subject = "Booking form submitted - 247 Property Fix";
		$message = "Dear Administrator,". "<br><br>" . "The details of the Booking form filled on 247 Property Fix website are as follows:". "<br><br><br>";
		$headers .= "From: info@247propertyfix.co.uk" . "\r\n";

		foreach ($data as $key => $value) {
			$message .= "$key: $value<br><br>";
		}

		$message .= "<br>Regards,<br><br>247 Property Fix Team";
    
		mail( $to, $subject, $message, $headers, "-finfo@247propertyfix.co.uk" );
	}
?>

