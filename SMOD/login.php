<html>
    <head>
        <title>Project: SMOD</title>
        <link rel="stylesheet" href="./byle.css">
    </head>
    <body>
        <h2>Log In.</h2>
        <form action="<?php echo htmlspecialchars("logcomp.php") ?>" method="post">
            Username: <input type="text" name="name"><br>
            Password: <input type="password" name="pass"><br>
            <input type="submit">
        </form>
    </body>
</html>