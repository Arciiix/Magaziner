var checkboxes = new Array();
let removeIcon = document.getElementById("removeIcon");




removeIcon.addEventListener("click", remove);

setTimeout(() =>
{
checkboxes = document.querySelectorAll("input[type=checkbox]");
checkboxes.forEach(box =>
{   
    box.addEventListener("click", btn => select(btn));
});
checkboxes.forEach(box => checkStatus(box));
}, 3000);

let selected = new Array();
let whichIsSelected = new Array();



function checkStatus(box)
{
    selected = [];
    whichIsSelected = [];

    for(let i = 0; i<checkboxes.length; i++)
    {
        if(checkboxes[i].checked === true)
        {
            selected.push(checkboxes[i].getAttribute('data-mysql-index'));
            whichIsSelected.push(i);
        }
    }




}

function select(box)
{
    checkStatus(box);
    let row =  box.target.parentNode.parentNode;
    if(box.target.checked === true)
    {
    row.style.opacity = "0.25";
    } else
    {
        row.style.opacity = "1";
    }




}

function remove()
{
    checkStatus();

    let toRemove = new Array();

    whichIsSelected.forEach(elem =>
        {
            toRemove.push(checkboxes[elem]);
        })

 

        var removeList = selected.join("a");

        const formData = new FormData();
        formData.append('toremove',removeList);


        fetch("scripts/server/delete.php",
        {
            method: "POST",
            body: formData
        }).then(res => res.text())
        .then(res =>
            {
                if(res === "Error")
                {
                    console.log("ERROR!");
                }
            });


    toRemove.forEach(elem => elem.parentNode.parentNode.remove());



}


