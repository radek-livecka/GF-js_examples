

// grab input add item to <p>
$(".addItem").on("click", function(){
    // $(".toDoList").html(`<p>${addedItem}</p>`)
    var addedItem = $("#inpt").val();
    $(".toDoList").append(`<p class="item"> ${(addedItem)} </p>`);
});

// mark finished item
$(document).on("click", "p", function(){
    $(this).toggleClass("skrtnuto");
});


// delete item