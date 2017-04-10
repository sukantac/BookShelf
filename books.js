var addbutton = document.getElementsByClassName('btn'),
    bookobj;
var allRecord = [];
var removebutton;

function Book() {}

function GetterSetter() {}
window.addEventListener('load', init);

function init() {
    bookobj = new Book();
    getterSetter = new GetterSetter();
    addbutton[0].addEventListener('click', getterSetter.store);
    getterSetter.retrieve();
    removebutton = document.getElementsByClassName('btn-danger');
    for (var k = 0; k < removebutton.length; k++) {
        removebutton[k].removeEventListener('click', confirmDelete);
        removebutton[k].addEventListener('click', confirmDelete);
    }

}
Book.prototype.book = {};
Book.prototype.setTitle = function(title, Book) {
    this.book.title = title;
}
Book.prototype.setAuthor = function(author, Book) {
    this.book.author = author;
}
Book.prototype.setPage = function(page, Book) {
    this.book.page = page;
}
Book.prototype.setPublish = function(publish, Book) {
    this.book.publish = publish;
}
Book.prototype.setIdentity = function(identity, Book) {
    this.book.identity = identity;
}


GetterSetter.prototype.store = function() {
    this.rowId = Date.now();
    this.bookTitle = document.getElementById('booktitle').value;

    this.author = document.getElementById('author').value;

    this.page = document.getElementById('page').value;

    this.publishDate = document.getElementById('publishdate').value;

    document.getElementById('booktitle').value = "";
    document.getElementById('author').value = "";
    document.getElementById('page').value = "";
    document.getElementById('publishdate').value = "";
    bookobj.setTitle(this.bookTitle, bookobj);
    bookobj.setAuthor(this.author, bookobj);
    bookobj.setPage(this.page, bookobj);
    bookobj.setPublish(this.publishDate, bookobj);
    bookobj.setIdentity(this.rowId, bookobj);
    allRecord.push(bookobj.book);
    localStorage.setItem("mainArray", JSON.stringify(allRecord));
    tableCreation([bookobj.book]);
    removebutton = document.getElementsByClassName('btn-danger');
    for (var k = 0; k < removebutton.length; k++) {
        removebutton[k].removeEventListener('click', confirmDelete);
        removebutton[k].addEventListener('click', confirmDelete);
    }
    bookobj.book = {};
}

GetterSetter.prototype.retrieve = function() {
    allRecord = JSON.parse(localStorage.getItem('mainArray')) ? JSON.parse(localStorage.getItem('mainArray')) : [];
    if (allRecord.length) {

        tableCreation(allRecord);
    }
}

function tableCreation(bookDeatils) {
    for (var i = 0; i < bookDeatils.length; i++) {
        document.querySelectorAll('table>tbody')[0].innerHTML += "<tr><td>" + bookDeatils[i].title +
            "</td><td>" + bookDeatils[i].author + "</td><td>" + bookDeatils[i].page +
            "</td><td>" + bookDeatils[i].publish +
            "</td><td><button  class='btn btn-danger'  id='book" + bookDeatils[i].identity + "'>" + "remove" + "</button></td></tr>";
    }

}

function confirmDelete() {
    var storage = JSON.parse(localStorage.getItem('mainArray'));
    var r = confirm("Sure to delete");
    if (r === true) {
        for (var z = 0; z < storage.length; z++) {
            var buttonId = "book" + storage[z].identity;
            if (buttonId === this.id) {

                allRecord.splice(z, 1);
                localStorage.setItem("mainArray", JSON.stringify(allRecord));
                this.parentNode.parentNode.remove();
            }
        }
    }
}
