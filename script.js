const bookFormInput = document.querySelectorAll("fieldset > input");
const form = document.querySelector("form")
const target = document.getElementById("target")
const title1 = document.getElementById("title")
const author1 = document.getElementById("author")
const pages1 = document.getElementById("pages")

const myLibrary = [{ title: "this", author: "is", pages: "it" }]
const book1 = new Books("LOTR", "TOLKIEN", 300)
book1.info()
myLibrary.push(book1)


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
    console.log(myLibrary, "add works")


}


const newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>Player</th><th>Score</th></thead>";
target.appendChild(newTable)

for (let book of myLibrary) {
    const newRow = document.createElement("tr");
    const tdPlayer = document.createElement("td");
    const tdScore = document.createElement("td");
    tdPlayer.textContent = book.title;
    tdScore.textContent = book.author;
    newRow.appendChild(tdPlayer);
    newRow.appendChild(tdScore);
    newTable.appendChild(newRow);
}


form.addEventListener("submit", add)
