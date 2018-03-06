<!DOCTYPE html>

<html>
	<body>
		<p>
<?php
	if(!isset($_COOKIE['user'])) {
    echo "user is not set!";
	} else {
    echo "user is set!<br>";
    echo "Value is: " . $_COOKIE['user'];
	}
?>
		</p>
	</body>
</html>