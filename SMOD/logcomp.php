<?php
    $postName = $_POST["name"];
    $postPass = $_POST["pass"];
    
    // Create connection
    $conn = new mysqli("fdb15.awardspace.net", "2429146_multiverse", "YouBl1nd1d1ot", "2429146_multiverse");
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    } 
    
    $sql = "SELECT Username FROM Users WHERE Username = '$postName' AND Password = '$postPass'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        setcookie("user", $postName, time() + (86400 * 7), "/");
	   $conn->close();
        header( 'Location: http://furthestring-149.dx.am/SMOD/accview.php');
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
    
?>