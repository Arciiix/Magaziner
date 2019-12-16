<?php


require_once "database.php";


$name = $_POST['name'];
$category = $_POST['category'];
$date = $_POST['date'];


$connection = @new mysqli($host, $user, $password, $base);

if ($connection->connect_errno!=0)
{
    echo "Error";

}
else
{
    if($result = $connection->query("INSERT INTO products (id, name, category, date) VALUES (NULL, '$name', '$category', '$date')"))
    {
        echo "Good";
    }
    else
    {
        echo "Error";
    }

$connection->close();

}

?>
