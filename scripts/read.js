var table = document.getElementById("tableContent");




fetch("scripts/server/get.php")
.then(res => res.text())
.then(res => 
{
if(res != "Error")
{
var responseArray = JSON.parse(res);
responseArray.forEach(elem => 
{
var id = elem[0];
var name = elem[1];
var category = elem[2];

var day = new Date(+elem[3]).getDate();
var dayFix = day > 9 ? day.toString() : `0${day}`;


var month = new Date(+elem[3]).getMonth() + 1;
var monthFix = month > 9 ? month.toString() : `0${month}`;


var date = `${dayFix}.${monthFix}.${new Date(+elem[3]).getFullYear()}`;
var row = document.createElement("tr");

var checkboxRow = document.createElement("td");
checkboxRow.classList.add("text-center");
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.dataset.mysqlIndex = id.toString();
checkboxRow.appendChild(checkbox);

var nameRow = document.createElement("td");
nameRow.classList.add("text-center");
nameRow.append(name);

var categoryRow = document.createElement("td");
categoryRow.classList.add("text-center");
categoryRow.append(category);

var dateRow = document.createElement("td");
dateRow.classList.add("text-center");
dateRow.append(date);


row.appendChild(checkboxRow);
row.appendChild(nameRow);
row.appendChild(categoryRow);
row.appendChild(dateRow);

table.appendChild(row);

})
}
else
{
    console.log("Error!");
    throw new Error("ERROR!");
}

});