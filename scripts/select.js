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
}

function remove()
{
    checkStatus();

    console.log(selected); //ktory index w mysqlu ma ten wiersz (bedzie przypisywany ten atryb podczas pobierania elementow, a jest on potrzebny do usuniecia danej rzeczy)
    console.log(whichIsSelected); //ktory z kolei wiersz z dokumentu jest wybrany, powiedzmy wybiermay drugi wiersz wiec tam jest 1, bo tableta zaczyna sie od 0
    //podczas usuwania tej rzeczy najlepiej odniesc sie do checkboxa numer whichIsSelected i usunac jego rodzica rodzica (dziadka), czyli wiersz tabeli
}
