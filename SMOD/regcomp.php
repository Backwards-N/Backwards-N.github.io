<!DOCTYPE html>
<html>
    <head>
        <title>Project: SMOD</title>
        <link rel="stylesheet" href="./byle.css">
    </head>
    <body>
        <p><?php
            $postName = $_POST["name"];
            $postPass = $_POST["pass"];
            
            // Create connection
            $conn = new mysqli("fdb15.awardspace.net", "2429146_multiverse", "YouBl1nd1d1ot", "2429146_multiverse");
            // Check connection
            if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            } 
            
            $sql = "INSERT INTO Users (Username, Password) VALUES ('$postName', '$postPass')";
            
            if ($conn->query($sql) === TRUE) {
                echo "You have been registered! <a href='login.php'>Log in here.</a>";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
            
            $conn->close();
            
        ?></p>
    </body>
</html>

