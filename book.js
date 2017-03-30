var count = 0;
$(document).ready(function() {
    addBook();
});

function addBook() {
    $('.btn').click(function() {
        count++;

        var Booktitle = $('#btl').val();
        author = $('#auth').val();
        page = $('#pg').val();
        pdate = $('#pd').val();
        $("#btl").val('');
        $('#auth').val('');
        $('#pg').val('');
        $('#pd').val('');
        //  console.log(Booktitle);



        // if (window.localStorage) {
        //
        //     // Save data to the current local store
        //
        //     localStorage.setItem("bookname",Booktitle );
        //
        //     // Access some stored data
        //     console.log("bookname = " + localStorage.getItem("bookname"));
        //
        // } else {
        //     console.log("local storage not supported");
        // }

          $('.table').append("<tr><td>" + Booktitle + "</td><td>" + author + "</td><td>" + page + "</td><td>" + pdate + "</td></tr>");
    });

}
