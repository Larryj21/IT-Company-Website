<?php   
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        require("./mailing/mailfunction.php");

        
        $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
        $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $message = htmlspecialchars($_POST["message"]);

        $errors = [];

        
        if (empty($name)) $errors[] = "Name is required.";
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "A valid email is required.";
        if (empty($message)) $errors[] = "Message cannot be empty.";

       
        if (empty($errors)) {
            $body = "<ul>
                        <li>Name: $name</li>
                        <li>Phone: $phone</li>
                        <li>Email: $email</li>
                        <li>Message: $message</li>
                    </ul>";

            $status = mailfunction("", "MoonCloud Tech", $body);

            if ($status) {
                echo '<center><h1>Thanks! We will contact you soon.</h1><a href="contact.php">Back to form</a></center>';
                exit; 
            } else {
                $errors[] = "Error sending message! Please try again.";
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Us</title>
    <style>
        .error-box { color: red; border: 1px solid red; padding: 10px; margin-bottom: 20px; }
        form { max-width: 400px; margin: 20px auto; display: flex; flex-direction: column; gap: 10px; }
        input, textarea { padding: 8px; }
    </style>
</head>
<body>

    <form action="contact.php" method="POST">
        <h2>Contact Us</h2>

        <?php if (!empty($errors)): ?>
            <div class="error-box">
                <?php foreach ($errors as $error) echo "<p>$error</p>"; ?>
            </div>
        <?php endif; ?>

        <input type="text" name="name" placeholder="Full Name" required 
               value="<?php echo isset($name) ? $name : ''; ?>">
        
        <input type="email" name="email" placeholder="Email" required 
               value="<?php echo isset($email) ? $email : ''; ?>">
        
        <input type="tel" name="phone" placeholder="Phone (Optional)" 
               value="<?php echo isset($phone) ? $phone : ''; ?>">
        
        <textarea name="message" placeholder="Your Message" required><?php echo isset($message) ? $message : ''; ?></textarea>
        
        <button type="submit">Send Message</button>
    </form>

</body>
</html>