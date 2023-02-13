const bookFormInput = document.querySelectorAll("fieldset > input");
const form = document.querySelector("form")
const target = document.getElementById("target")
const title1 = document.getElementById("title")
const author1 = document.getElementById("author")
const pages1 = document.getElementById("pages")
const exp = document.getElementById("exp")

const myLibrary = [{ title: "this", author: "is", pages: "it" }]
const book1 = new Books("LOTR", "TOLKIEN", 300)
const book2 = new Books("Starwars", "G Lucas", 200)
book1.info()
myLibrary.push(book1)
myLibrary.push(book2)


function Books(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function () {
        console.log(this.title, this.author, this.pages)
    }
}

// function addArray() {
//     if (inputFirstName.value || inputLastName.value != "") {
//         fname.push(inputFirstName.value);
//         lname.push(inputLastName.value);

//         inputFirstName.value = "";
//         inputLastName.value = "";
//         results.innerHTML = "";
//     }
// }



function add(event) {
    event.preventDefault
    titleVal = title1.value
    authorVal = author1.value
    pagesVal = pages1.value

    const newBook = new Books(titleVal, authorVal, pagesVal)
    myLibrary.push(newBook)
    // console.log(myLibrary, "add works")

    setTable(newBook)
}


const newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>Title</th><th>Author</th> <th></th></thead>";
target.appendChild(newTable)


function setTable(x) {
    const newRow = document.createElement("tr");
    const tdPlayer = document.createElement("td");
    const tdScore = document.createElement("td");
    const delButton = document.createElement("button")
    delButton.setAttribute("id", "exp")
    tdPlayer.textContent = x.title;
    tdScore.textContent = x.author;
    delButton.textContent = "Delete"

    newRow.appendChild(tdPlayer);
    newRow.appendChild(tdScore);
    newTable.appendChild(newRow);
    newRow.appendChild(delButton)
    console.log(x)



}

exp.addEventListener("click", remove)

function remove() {
    myLibrary.pop()
    console.log("remove works", myLibrary)
    var rowCount = newTable.rows.length;

    newTable.deleteRow(rowCount - 1);
}


// function loop() {
//     for (let book of myLibrary) {
//         console.log(book, "ping ping")
//         setTable(book)
//     }
// }


function tester() {
    return myLibrary
}
console.log(tester())

form.addEventListener("submit", add)
setTable(book1)
setTable(book2)