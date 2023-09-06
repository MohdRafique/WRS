<?php
  
if($_POST) {
    $visitor_name = "";
    $visitor_email = "";
    $visitor_contact = "";
    // $concerned_department = "";
    $visitor_message = "";
    $email_body = " ";
      
    // if(isset($_POST['visitor_name'])) {
    //     $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
    //     $email_body .= "<div>
    //                        <label><b>Visitor Name:</b></label>&nbsp;<span>".$visitor_name."</span>
    //                     </div>";
    // }
 
    // if(isset($_POST['visitor_email'])) {
    //     $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
    //     $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    //     $email_body .= "<div>
    //                        <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
    //                     </div>";
    // }
      
    // if(isset($_POST['visitor_contact'])) {
    //     $visitor_contact = filter_var($_POST['visitor_contact'], FILTER_SANITIZE_STRING);
    //     $email_body .= "<div>
    //                        <label><b>Reason For Contacting Us:</b></label>&nbsp;<span>".$visitor_contact."</span>
    //                     </div>";
    // }
      
    // if(isset($_POST['concerned_department'])) {
    //     $concerned_department = filter_var($_POST['concerned_department'], FILTER_SANITIZE_STRING);
    //     $email_body .= "<div>
    //                        <label><b>Concerned Department:</b></label>&nbsp;<span>".$concerned_department."</span>
    //                     </div>";
    // }
      
    // if(isset($_POST['visitor_message'])) {
    //     $visitor_message = htmlspecialchars($_POST['visitor_message']);
    //     $email_body .= "<div>
    //                        <label><b>Visitor Message:</b></label>
    //                        <div>".$visitor_message."</div>
    //                     </div>";
    // }
    $recipient = "shamstabrez26@gmail.com" ; 
    $subject = "'$visitor_name' has been sent a mail"; // This is your subject
    echo $visitor_name;
    echo $visitor_email;
    echo $visitor_contact;
    echo $visitor_message;

    // if($concerned_department == "billing") {
    //     $recipient = "billing@domain.com";
    // }
    // else if($concerned_department == "marketing") {
    //     $recipient = "marketing@domain.com";
    // }
    // else if($concerned_department == "technical support") {
    //     $recipient = "tech.support@domain.com";
    // }
    // else {
    //     $recipient = "contact@domain.com";
    // }
      
    $email_body .= "</div>";
 
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
      
    if(mail($recipient, $subject, $email_body, $headers)) {
        echo "<script>
                    alert('Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.');
                </script>";
        //header("Location: index.php");
        //echo "<p>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.</p>";
    } else {
        echo "<script>
                    alert('We are sorry but the email did not go through.');
                </script>";
        //header("Location: index.php");
        //echo '<p>We are sorry but the email did not go through.</p>';
    }
      
} else {
    echo '<p>Something went wrong</p>';
    //header("Location: index.php");
}
?>