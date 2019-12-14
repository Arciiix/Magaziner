var checkboxes = new Array();
let removeIcon = document.getElementById("removeIcon");


checkboxes = document.querySelectorAll("input[type=checkbox]");

removeIcon.addEventListener("click", remove);
checkboxes.forEach(box =>
{   
    box.addEventListener("click", btn => select(btn));
});

let selected = new Array();
let whichIsSelected = new Array();

checkboxes.forEach(box => checkStatus(box));

function checkStatus(box)
{
    selected = [];
    whichIsSelected = [];

    for(let i = 0; i<checkboxes.length; i++)
    {
        if(checkboxes[i].checked === true)
        {
            selected.push(checkboxes[i].getAttribute('data-mysqlIndex'));
            whichIsSelected.push(i);
        }
    }




}

function select(box)
{
    checkStatus(box);
    let all = (box.target.parentNode.parentNode.children);
    if(box.target.checked === true)
    {
    for (var i = 0; i < all.length; i++) {
        all[i].style.border = "1.5px solid #f7395f";            //#cc3549
    }
    }
    else
    {
     for (var i = 0; i < all.length; i++) {
        all[i].style.border = "1px solid #9ea7af";
     }
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

 
        let json = JSON.stringify(selected);

        console.log(json);


    toRemove.forEach(elem => elem.parentNode.parentNode.remove());



}

