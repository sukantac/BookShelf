var bookShelf = {
    "booktitle": "",
    "author": "",
    "page": "",
    "pdate": "",
    inputValueFetch: inputValueFetch
};
var title=[];
var addbutton = document.getElementsByClassName('btn');

window.onload = initialise();

function initialise() {
    addbutton[0].addEventListener('click', bookShelf.inputValueFetch);
    // document.getElementsByClassName('table')[0].innerHTML += "<tr><td>" + bookDetails + "</td></tr>";
    var bookDetails = localStorage.getItem("Booktitle");
    var authorname = localStorage.getItem("Author");
    var pagenumber = localStorage.getItem("Page");
    var publicationdate = localStorage.getItem("Publishdate");
    document.getElementsByClassName('table')[0].innerHTML += "<tr><td>" + bookDetails + "</td><td>" + authorname + "</td><td>" + pagenumber + "</td><td>" + publicationdate + "</td></tr>";
}
// var parseInput = function(){
//     this.booktitle = document.getElementById('booktitle').value;
//     this.author = document.getElementById('author').value;
//     this.page = document.getElementById('page').value;
//     this.publishdate = document.getElementById('publishdate').value;
// }
// var parsing = new parseInput();

function inputValueFetch() {

    this.booktitle = document.getElementById('booktitle').value;
    title.push(this.booktitle);
    console.log(title);
    this.author = document.getElementById('author').value;
    this.page = document.getElementById('page').value;
    this.publishdate = document.getElementById('publishdate').value;

  //  var myString= JSON.stringify(title);

    localStorage.setItem("Booktitle", title);
    localStorage.setItem("Author", this.author);
    localStorage.setItem("Page", this.page);
    localStorage.setItem("Publishdate", this.publishdate);
    document.getElementById('booktitle').value = '';
    document.getElementById('author').value = '';
    document.getElementById('page').value = '';
    document.getElementById('publishdate').value = '';
    //  console.log(Booktitle);

    //  $('.table').append("<tr><td>" + booktitle + "</td><td>" + author + "</td><td>" + page + "</td><td>" + pdate + "</td></tr>");
    // document.getElementsByClassName('table')[0].innerHTML += "<tr><td>" + this.booktitle + "</td><td>" + this.author + "</td><td>" + this.page + "</td><td>" + this.pdate + "</td></tr>"
    document.getElementsByClassName('table')[0].innerHTML += "<tr><td>" + title + "</td><td>" + this.author + "</td><td>" + this.page + "</td><td>" + this.publishdate + "</td></tr>";
    // console.log(booktitle);

    // localstorageValueSet(this.booktitle);
}
