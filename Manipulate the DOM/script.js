let names = ["Karel", "Pepa", "Jan", "Radek"]

names.forEach(jmeno => {
    $("body").append(`<ul class="${jmeno}">${jmeno}</ul>`);
    if (jmeno === "Radek") {
        $(document).css("font-weight", "strong");
    }
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $("body").append(`<div id="new"></div>`);  

  $("#new").append(`<h1>${additionalBlock.title}</h1>`);

  $("#new").append(`<p>${additionalBlock.text}</p>`);