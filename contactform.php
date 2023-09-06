<?php
    if(isset($_POST['submit']))
    {
        $name = $_POST['visitor_name']; // Get Name value from HTML Form
        $email_id = $_POST['visitor_email']; // Get Email Value
        //$mobile_no = $_POST['mobile']; // Get Mobile No
        //$city_name = $_POST['city']; // Get city Name
        $Subject = $_POST['visitor_contact']; // Get subject 
        $msg = $_POST['visitor_message']; // Get Message Value
         
        // $to = "shivsg03@gmail.com"; // You can change here your Email
        $to = "bhmwebandart@gmail.com"; // You can change here your Email
        $subject = "'$name' has been sent a mail"; // This is your subject
         
        // HTML Message Starts here
        $message ="
        <html>
            <body>
                <table style='width:600px;'>
                    <tbody>
                        <tr>
                            <td style='width:150px'><strong>Name: </strong></td>
                            <td style='width:400px'>$name</td>
                        </tr>
                        <tr>
                            <td style='width:150px'><strong>Email ID: </strong></td>
                            <td style='width:400px'>$email_id</td>
                        </tr>
                      
					
                        <tr>
                            <td style='width:150px'><strong>Subject: </strong></td>
                            <td style='width:400px'>$Subject</td>
                        </tr>						
                        <tr>
                            <td style='width:150px'><strong>Message: </strong></td>
                            <td style='width:400px'>$msg</td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
        ";
        // HTML Message Ends here
         
        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
 
        // More headers
        $headers .= 'From: Woder Style India Pvt. Ltd. <bhmwebandart@gmail.com>' . "\r\n"; // Give an email id on which you want get a reply. User will get a mail from this email id
        $headers .= 'Cc: bhmwebandart@gmail.com' . "\r\n"; // If you want add cc
        $headers .= 'Bcc: bhmwebandart@gmail.com' . "\r\n"; // If you want add Bcc
         //echo"test";
        if(mail($to,$subject,$message,$headers)){
            // Message if mail has been sent
			echo "<script>
			alert('Massage has been sent Successfully');
			window.location.href='index.html';
			</script>";
			
//echo "Massage has been sent Successfully";
//header("Location: index.html");
        }
 
        else{
            // Message if mail has been not sent
            echo "<script>
                    alert('EMAIL FAILED');
                </script>";
        }
    }
?>
