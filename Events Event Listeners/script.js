$("#click1").click(() => { 
    console.log('Yeah, you clicked me');
    
});

$("#click2").click(()=> { 
    $("#click1").text("změna vole");
    
});

$("#click3").click(()=> { 
    $("button").css("background-color", "red");
    
});

/* $("#click4").click(()=> { 
    $("button").css("background-color", $( "#input-val" ).val());
    
}); */

$("#click4").one("click", function() { 
    $("button").css("background-color", $( "#input-val" ).val());
    
});

