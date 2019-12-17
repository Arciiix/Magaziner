<?php
require_once "database.php";

$toRemove = $_POST['toremove'];


$connection = @new mysqli($host, $user, $password, $base);

$query = str_replace("a",",",$toRemove);



if ($connection->connect_errno!=0)
{
    echo "Error";

}
else
{
    if($result = $connection->query("DELETE from products WHERE id IN (".$query.");"))
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