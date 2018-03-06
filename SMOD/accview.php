<!DOCTYPE html>

<html>
    <head>
        <title>Project: SMOD</title>
        <link rel="stylesheet" href="./byle.css">
        <script src=classpect_registry.js></script>
    </head>
    <body>
        <p><a href="index.html">Home.</a></p>
        <h1>Account Viewer</h1>
        <?php
            if (!empty($_COOKIE['user'])) {
                echo "<p>You are currently logged in as: " . $_COOKIE['user'] . "</p>";
                echo "<h2>Players you own:</h2>";
            $instanceUsername = $_COOKIE['user'];
            
            // Create connection
            $conn = new mysqli("fdb15.awardspace.net", "2429146_multiverse", "YouBl1nd1d1ot", "2429146_multiverse");
            // Check connection
            if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            } 
            
            $sql = "SELECT id FROM Users WHERE Username = '$instanceUsername'";
            $result = $conn->query($sql)->fetch_object()->id;
            
            $sql = "SELECT * FROM Players WHERE UserID = '$result'";
            $playerList = $conn->query($sql);
            
            if($playerList->num_rows > 0) {
                while($row=$playerList->fetch_assoc()) {
                    echo "<p class='playerDisplay'>" . $row['Name'] .
                    ", <script type='text/javascript'>tempC = getClassByID(" . $row['Class'] . ");
                    document.write(tempC.sin);</script>
                    of <script type='text/javascript'>tempA = getAspectByID(" . $row['Aspect'] . ");
                    document.write(tempA.sin)</script> : Level " . $row['Level'] .
                    "<br>Mangrit: <script type'text/javascript'>tempS = calculateStatAtLevel(" . $row['Level'] . ", tempC.manGrit, tempA.manGrit,
                    " . $row['Mangrit'] . "); document.write(tempS);</script>" .
                    "&nbsp;&nbsp;Speed: <script type'text/javascript'>tempS = calculateStatAtLevel(" . $row['Level'] . ", tempC.speed, tempA.speed,
                    " . $row['Speed'] . "); document.write(tempS);</script>" .
                    "<br>Stealth: <script type'text/javascript'>tempS = calculateStatAtLevel(" . $row['Level'] . ", tempC.stealth, tempA.stealth,
                    " . $row['Stealth'] . "); document.write(tempS);</script>" .
                    "&nbsp;&nbsp;Willpower: <script type'text/javascript'>tempS = calculateStatAtLevel(" . $row['Level'] . ", tempC.willPower, tempA.willPower,
                    " . $row['Will'] . "); document.write(tempS);</script>" .
                    "<br>Good Luck: <script type'text/javascript'>tempS = calculateStatAtLevel(" . $row['Level'] . ", tempC.goodLuck, tempA.goodLuck,
                    " . $row['GLuck'] . "); document.write(tempS);</script>" .
                    "&nbsp;&nbsp;Bad Luck: <script type'text/javascript'>tempS = calculateStatAtLevel(" . $row['Level'] . ", tempC.badLuck, tempA.badLuck,
                    " . $row['BLuck'] . "); document.write(tempS);</script>" .
                    "<br>Home Multiverse:
                    " . $row['MultiID'] .
                    "<br>Active Session: 
                    " . $row['SessionID'] .
                    "</p>";
                }
            } else {
                echo "<p>No players found!</p>";
            }
            
            $conn->close();
            
            } else {
                echo "<p>You are not logged in!</p>";
            }
            
            
        ?>
    </body>
</html>