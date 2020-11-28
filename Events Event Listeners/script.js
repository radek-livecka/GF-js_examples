$("#click1").click(() => { 
    console.log('Yeah, you clicked me');
    
});

$("#click2").click(()=> { 
    $("#click1").text("změna vole");
    
});

$("#click3").click(()=> { 
    $("button").css("background-color", "red");
    
});

