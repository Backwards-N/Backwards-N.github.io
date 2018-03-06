<!DOCTYPE html>
<html>
    <head>
        <title>Userlist</title>
        <link rel="stylesheet" href="./byle.css">
    </head>
    <body>
        <p><a href="index.html">Home.</a></p>
        <p><?php 
        
            // Create connection
            $conn = new mysqli("fdb15.awardspace.net", "2429146_multiverse", "YouBl1nd1d1ot", "2429146_multiverse");
            // Check connection
            if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            } 
            
            $sql = "SELECT id, Username FROM Users";
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                echo "id: " . $row["id"]. " - Name: " . $row["Username"]. " " . "<br>";
                }
            } else {
                echo "0 results";
            }

            $conn->close();
        ?></p>
    </body>
</html>