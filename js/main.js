$(document).ready(function() {
    page = 1;
    $.ajax({url: "https://jsonplaceholder.typicode.com/todos?_page="+page+"&_per_page=10", success: function(result){
        $('#pageCount').html(result);
        html ="";
        $.each( result, function( key, value ) { 
        html+= "<tr>"+
            "<th>"+value['id']+"</th>"+
            "<th class='text-capitalize'>"+value['title']+"</th>"+
            "<th class='text-capitalize'>"+value['completed']+"</th>"+
        +"</tr>"
        });
        $("#dataTable tbody").html(html);
    }
});
});