const toDoInputElem = document.getElementById("toDoInput");
const notesInputElem = document.getElementById("notesInput");

const submitToDoButton = document.getElementById("submitToDoButton");

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');

    for (let i = 0; i < deleteButtons.length; i++){
        const element = deleteButtons[i];
        element.addEventListener('click', (e) => {
            // remove card that the button was on
            // Could have used body query selector to see if the button I clicked contained certain class name.
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            cardToDelete.remove();
        })
    }
}


const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
};

submitToDoButton.addEventListener ("click", (e) => {
    e.preventDefault();                                         //gets rid of browser defaults!

    const buildNewToDoCard = (toDo, notes) => {
        let domString = `<div class="card w-25 m-2">
        <div class="card-body">
          <h5 class="card-title">${toDo}</h5>
          <p class="card-text">${notes}</p>
          <a href="#" class="btn btn-danger deleteButton">Delete this shit.</a>
        </div>
      </div>`;


        printToDom(domString, 'toDoCards');
        activateDeletes();
    } ;

    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});
