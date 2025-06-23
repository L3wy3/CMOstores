
function changePage(currentpage, direction){
    switch (direction) {
        case 0:
            newpage = 1;
            break;
        case 1:
            newpage = currentpage-1;
            break;
        case 2:
            newpage = currentpage+1;
            break;
        case 3:
            newpage = pageCount;
    }

    PaginationButtonUpdate(newpage);
    $.ajax({url: "https://jsonplaceholder.typicode.com/todos?_page="+newpage+"&_per_page=10", success: function(result){
        html ="";
        $.each( result, function( key, value ) { 
        html+= "<tr>"+
            "<th>"+value['id']+"</th>"+
            "<th class='text-capitalize'>"+value['title']+"</th>"+
            "<th class='text-capitalize'>"+value['completed']+"</th>"+
        +"</tr>"
        });
        $("#dataTable tbody").html(html);
    }});
}

function PaginationButtonUpdate(page) {
    if (page == 1) {
        pagination = "<button id='firstPage' onclick='changePage("+page+",0)' disabled>First</button><button id='previousPage' onclick='changePage("+page+",1)' disabled>Previous</button>";
    } else {
        pagination = "<button id='firstPage' onclick='changePage("+page+",0)'>First</button><button id='previousPage' onclick='changePage("+page+",1)'>Previous</button>";
    }
    if (page == pageCount) {
        pagination += "<button id='nextPage' onclick='changePage("+page+",2)' disabled>Next</button><button id='lastPage' onclick='changePage("+page+",3)' disabled>Last</button>";
    } else {
        pagination += "<button id='nextPage' onclick='changePage("+page+",2)'>Next</button><button id='lastPage' onclick='changePage("+page+",3)'>Last</button>";
    }
    $("#pagination").html(pagination);
}
$(document).ready(function() {
    page = 1;
    pageSize = 10;
    // Temporary hard coding in the results to get the number of pages for pagination
    resultCount = 200;
    pageCount = resultCount/pageSize;


    $.ajax({url: "https://jsonplaceholder.typicode.com/todos?_page="+page+"&_per_page=10", success: function(result){
        html ="";
        $.each( result, function( key, value ) { 
        html+= "<tr>"+
            "<th>"+value['id']+"</th>"+
            "<th class='text-capitalize'>"+value['title']+"</th>"+
            "<th class='text-capitalize'>"+value['completed']+"</th>"+
        +"</tr>"
        });
        $("#dataTable tbody").html(html);

        pagination = "<div id='pagination'><button id='firstPage' onclick='changePage("+page+",0)' disabled>First</button><button disabled id='previousPage' onclick='changePage("+page+",1)'>Previous</button>";
        pagination += "<button id='nextPage' onclick='changePage("+page+",2)'>Next</button><button id='lastPage' onclick='changePage("+page+",3)'>Last</button></div>";
        if (pageCount > 1) {
            $("#dataTable").append(pagination);
        }
    }
    });

});
