
var allRecord = [];

var addbutton = document.getElementsByClassName('btn');


 // console.log(removebutton);
window.onload = initialise();
//Initialize when window is loading/refreshing
function initialise() {
    addbutton[0].addEventListener('click', inputValueFetch);

    allRecord = JSON.parse(localStorage.getItem('mainArray')) ? JSON.parse(localStorage.getItem('mainArray')) : [];

    for (var i = 0; i < allRecord.length; i++) {
        document.getElementsByClassName('table')[0].innerHTML += "<tr><td>" + allRecord[i].booktitle + "</td><td>" + allRecord[i].author + "</td><td>" + allRecord[i].page + "</td><td>" + allRecord[i].pdate + "</td><td><button  class='btn btn-danger'>" + "remove" + "</button></td></tr>";
    }
}
//Parsing Input
function inputValueFetch() {
  var tableRecord = {
      "booktitle": "",
      "author": "",
      "page": "",
      "pdate": ""
  };
    booktitle = document.getElementById('booktitle').value;
    author = document.getElementById('author').value;
    page = document.getElementById('page').value;
    publishdate = document.getElementById('publishdate').value;

    document.getElementById('booktitle').value = '';
    document.getElementById('author').value = '';
    document.getElementById('page').value = '';
    document.getElementById('publishdate').value = '';

    document.getElementsByClassName('table')[0].innerHTML += "<tr><td>" + booktitle + "</td><td>" + author + "</td><td>" + page + "</td><td>" + publishdate + "</td><td><button  class='btn btn-danger'>" + "remove" + "</button></td><td><button  class='btn btn-danger'>" + "remove" + "</button></td></tr>";
var removebutton=document.getElementsByClassName('btn-danger');
    tableRecord.booktitle =  booktitle;
    tableRecord.author =author;
    tableRecord.page = page;
    tableRecord.pdate = publishdate;
    allRecord.push(tableRecord);
    localStorage.setItem("mainArray", JSON.stringify(allRecord));
    for(var i=0;i<removebutton.length;i++){
    removebutton[i].addEventListener('click', confirmDelete);
  }





}
  function confirmDelete(){
    var txt;
    var r = confirm("Press a button!");
    if (r === true) {
      // localStorage.removeItem()
    } else {
        txt = "You pressed Cancel!";
    }

  }
