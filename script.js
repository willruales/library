const bookFormInput = document.querySelectorAll("fieldset > input");
const form = document.querySelector("form")
const target = document.querySelector(".target")
const title1 = document.getElementById("title")
const author1 = document.getElementById("author")
const pages1 = document.getElementById("pages")
const exp = document.getElementById("exp")
const newTable = document.querySelector(".newTable");

//const myLibrary = [{ title: "this", author: "is", pages: "it" }]
// const book1 = new Books("LOTR", "TOLKIEN", 300)
// const book2 = new Books("Starwars", "G Lucas", 200)
// book1.info()
// myLibrary.push(book1)
// myLibrary.push(book2)
myLibrary = []



class Books {
    constructor(title, author, pages,) {
        this.title = title
        this.author = author
        this.pages = pages
        this.info = function () {
            console.log(this.title, this.author, this.pages)
        }
    }
}

function add(event) {
    event.preventDefault
    titleVal = title1.value
    authorVal = author1.value
    pagesVal = pages1.value

    const newBook = new Books(titleVal, authorVal, pagesVal)
    myLibrary.push(newBook)
    // insert = newTable.insertRow()
    setTable()

}


function setTable() {

    let body = document.querySelector('tbody')
    body.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("tr");
        bookEl.innerHTML = `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>
          <button id="delete" data-number="${i}" onclick="ping(${i})">Delete</button>
        </td>
      </tr>`;
        body.appendChild(bookEl);
    }
}
function ping(index) {
    // //target.innerHTML = ""
    // let show = event.target.dataset.number
    // let num = parseInt(show)

    // console.log(typeof num)
    // myLibrary.pop(num)
    // //console.log(myLibrary, "shows")
    // //newTable.deleteRow(num + 1)
    myLibrary.splice(index, 1)

    console.log(typeof index, index, myLibrary)
    setTable()
}

exp.addEventListener("click", remove)

function remove() {
    myLibrary.pop()
    // console.log("remove works", myLibrary)
    // var rowCount = newTable.rows.length;

    // newTable.deleteRow(rowCount - 1);
    setTable(myLibrary)
}



form.addEventListener("submit", add)