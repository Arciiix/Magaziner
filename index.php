<!DOCTYPE html>
<html lang="pl">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Magazynier</title>

    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>

<h1 id = 'mainHeader'>Magazynier

<label title="Dodaj nową rzecz" onClick = "window.location.href = 'add.php'"><i alt="Dodaj" id = "addIcon" style="margin-right: 20px; float: right; font-size: 60px"class="fa fa-plus-square" aria-hidden="true"></i> </label>
<label title="Usuń wybrane rzeczy"> <i id="removeIcon" class="fa fa-trash" style="margin-right: 20px; float: right; font-size: 60px"aria-hidden="true"></i></label>
</h1>

<table class="table-fill">
<thead>
<tr>
<th></th>
<th class="text-center">Nazwa</th>
<th class="text-center">Kategoria</th>
<th class="text-center">Data ważności</th>
</tr>
</thead>
<tbody class="table-hover">
<tr>
<td class="text-center"><input type="checkbox" data-mysqlIndex = "4"/></td>
<td class="text-center">Tutaj ma byc nazwa</td>
<td class="text-center">Tutaj ma byc Kategoria</td>
<td class="text-center">Tutaj ma byc data waznosci</td>
</tr>
<tr>
<td class="text-center"><input type="checkbox" data-mysqlIndex = "5"/></td>
<td class="text-center">Tutaj ma byc nazwa</td>
<td class="text-center">Tutaj ma byc Kategoria</td>
<td class="text-center">Tutaj ma byc data waznosci</td>
</tr>
<tr>
<td class="text-center"><input type="checkbox" data-mysqlIndex = "6"/></td>
<td class="text-center">Tutaj ma byc nazwa</td>
<td class="text-center">Tutaj ma byc Kategoria</td>
<td class="text-center">Tutaj ma byc data waznosci</td>
</tr>
<tr>
<td class="text-center"><input type="checkbox" data-mysqlIndex = "6"/></td>
<td class="text-center">Tutaj ma byc nazwa</td>
<td class="text-center">Tutaj ma byc Kategoria</td>
<td class="text-center">Tutaj ma byc data waznosci</td>
</tr>
</tbody>
</table>


<script type="text/javascript" src="scripts/select.js"></script>

</body>
</html>