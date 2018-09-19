const toDoInputElem = document.getElementById("toDoInput");
const notesInputElem = document.getElementById("notesInput");

const submitToDoButton = document.getElementById("submitToDoButton");

submitToDoButton.addEventListener ("click", (e) => {
    e.preventDefault();                                         //gets rid of browser defaults!

    const printToDom = (stringToPrint, whereToPrint) => {
        document.getElementById(whereToPrint).innerHTML += stringToPrint;
    };

    const buildNewToDoCard = (toDo, notes) => {
        let domString = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${toDo}</h5>
          <p class="card-text">${notes}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;


        printToDom(domString, 'toDoCards')
    } ;

    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
    console.log("to do: ", toDoInputElem.value);
    console.log("notes: ", notesInputElem.value);
});
