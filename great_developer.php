<?php

	$servername="mysql.portfolio.great-developer.com";
	$username="g2hyqzns";
	$password="b?qcuDEc";

	$conn = mysql_connect($servername,$username,$password);

	if(!$conn){
		die("Connection failed: " . mysql_connect_error());
	}

	echo("connected successfully");


?>