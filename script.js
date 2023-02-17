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

    //setTable(newBook)
    loop()

}


const newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>Title</th><th>Author</th> <th></th></thead>";
target.appendChild(newTable)


// function setTable(x) {

//     insert = newTable.insertRow()

//     insert.innerHTML = `<tr> <button id = "delete"> Delete</button> <td> ${x.title} </td> <td> ${x.author} </td> </tr>`

// }

exp.addEventListener("click", remove)

function remove() {
    myLibrary.pop()
    console.log("remove works", myLibrary)
    var rowCount = newTable.rows.length;

    newTable.deleteRow(rowCount - 1);
}


function loop() {

    for (let book of myLibrary) {

        console.log(book)

        insert = newTable.insertRow()

        insert.innerHTML = `<tr> <button id = "delete" data-number = ${book}> Delete</button> <td> ${book.title} </td> <td> ${book.author} </td> </tr>`
        //console.log(button.dataset.number)
    }

}




form.addEventListener("submit", add)

// //////////////
// setTable(book1)
// setTable(book2)
loop(book1)