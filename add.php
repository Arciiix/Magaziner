<!DOCTYPE html>
<html lang="pl">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Magazynier - dodaj</title>

    <link rel="stylesheet" type="text/css" href="css/add.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>

<center>

<h1 id="header" >Dodaj produkt</h1>

<div id = "addingForm">

<label>
<span>Nazwa</span>
</br>
<input id="name" type="text" />
</label>

</br>

<label>
<span>Kategoria</span>
</br>
<input id = "category" type="text" />
</label>
</br>

<label>
<span>Data ważności (dzień.miesiąc.rok)</span>
</br>
<input id="date" type="text" />
</label>
</br>

<center>
<label>
<button id="submitBtn" >Dodaj</button>
</label>
</center>
</div>


</center>


<script type="text/javascript" src="scripts/add.js"></script>

</body>
</html>