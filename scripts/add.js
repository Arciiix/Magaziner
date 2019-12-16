var submit = document.getElementById("submitBtn");

submit.addEventListener("click",add);
document.addEventListener("keyup", event => 
{
if(event.key === "Enter")
{
    add();
}
});

function add()
{
var name = document.getElementById("name").value;
var category = document.getElementById("category").value;
var date = document.getElementById("date").value;


var validation = true;

//name
if(name === "")
{
    validation = false;
    document.getElementById("name").style.borderBottom = "1.9px solid #de2c50";
}

//category
if(category === "")
{
    validation = false;
    document.getElementById("category").style.borderBottom = "1.9px solid #de2c50";
}

var dateHelp = date.split(".")
var expireDate = new Date(dateHelp[2], dateHelp[1] - 1, dateHelp[0])

//expire date
if(isNaN(expireDate))
{
    validation = false;
    document.getElementById("date").style.borderBottom = "1.9px solid #de2c50";
}


if(validation != false)
{
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("date", expireDate.getTime());

    fetch("scripts/server/insert.php",
    {
    method: "POST",
    body: formData
    })
    .then(res => res.text())
    .then(res =>
        {
            if(res === "Good")
            {
                document.getElementById("header").style.color = "#1fb876";
            }
            else
            {
                document.getElementById("header").style.color = "#c72c53";
                console.log("ERROR!");
            }
        })
}



}