<?php
    $servername="mysql.portfolio.great-developer.com";
    $username="g2hyqzns";
	$password="b?qcuDEc";
    $database="great_developer_mysql";
	$name = $title = $company = $email = $message = "";
    global $connection;

    $connection = mysqli_connect($servername,$username,$password,$database);
    if($connection){
        echo "connected";
    }
    else {
        die("failed");
    }
    
    if(isset($_POST['submit'])){
        $Name = $_POST['Name'];
        $Title = $_POST['Title'];
        $Company = $_POST['Company'];
        $Email = $_POST['Email'];
        $Message = $_POST['Message'];
        $Name = mysqli_real_escape_string($connection, $Name);
        $Title = mysqli_real_escape_string($connection, $Title);
        $Company = mysqli_real_escape_string($connection, $Company);
        $Email = mysqli_real_escape_string($connection, $Email);
        $Message = mysqli_real_escape_string($connection, $Message);
        
        $query = "INSERT INTO Contacts(Name, Title, Company, Email, Message) VALUES('$Name','$Title','$Company','$Email','$Message')";
        $result = mysqli_query($connection,$query);
    }

    mysqli_close($connection);
    
    ?>