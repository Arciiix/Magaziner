<?php


require_once "database.php";

$connection = @new mysqli($host, $user, $password, $base);

if ($connection->connect_errno!=0)
{
    echo "Error";

}
else
{
    if($result = $connection->query("SELECT * FROM products ORDER BY date ASC"))
    {
        $products = array();

        for($i = 0; $i<$result->num_rows; $i++)
        {
            $row = $result->fetch_assoc();
            $tempArray = array(
                $row['id'],
                $row['name'],
                $row['category'],
                $row['date']
            );
            array_push($products, $tempArray);
            unset($tempArray);
        }
        echo json_encode($products);
        $result->free_result();
    }
    else
    {
        echo "error";
    }
}

$connection->close();



?>