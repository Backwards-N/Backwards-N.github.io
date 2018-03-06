<!DOCTYPE html>
<html>
    <head>
        <title>Project: SMOD</title>
        <link rel="stylesheet" href="./byle.css">
    </head>
    <body>
    <p><?php
            $pName    = $_POST["name"];
            $pGender  = $_POST["gender"];
            $pClass   = $_POST["class"];
            $pAspect  = $_POST["aspect"];
            $pGrit    = $_POST["grit"];
            $pSpeed   = $_POST["speed"];
            $pStealth = $_POST["stealth"];
            $pgLuck   = $_POST["gluck"];
            $pbLuck   = $_POST["bluck"];
            $pWill    = $_POST["will"];
            if (!empty($_COOKIE['user'])) {
                $accname = $_COOKIE['user'];
                
                // Create connection
                $conn = new mysqli("fdb15.awardspace.net", "2429146_multiverse", "YouBl1nd1d1ot", "2429146_multiverse");
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
                
                $pId = $conn->query("SELECT id FROM Users WHERE Username = '$accname'")->fetch_object()->id;
                
                $sql = "INSERT INTO Players (Name, Gender, Class, Aspect, Mangrit, Speed, Stealth, GLuck, BLuck, Will, Level, UserID) VALUES ('$pName', '$pGender', '$pClass', '$pAspect', '$pGrit', '$pSpeed', '$pStealth', '$pgLuck', '$pbLuck', '$pWill', '1', '$pId')";
                
                if ($conn->query($sql) === TRUE) {
                    echo "Sucess! Your player will now appear in the <a href='accview.php'>account viewer.</a>";
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
                
                $conn->close();
            } else {
                echo "You are not logged in!";
            }
        ?></p>
    </body>
</html>

