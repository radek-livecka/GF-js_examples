let imagesData = [{
    photo: './images/0.jpg',
    title: 'Malá Finka',
    description: 'What happened here, why is this a very nice image'
},
{
    photo: './images/1.jpg',
    title: 'Marz Carbon',
    description: 'What happened here, why is this a very nice image'
},{
    photo: './images/2.jpg',
    title: 'Skinner Carbon',
    description: 'What happened here, why is this a very nice image'
},
{
    photo: './images/3.jpg',
    title: "Wayn's world Carbon",
    description: 'What happened here, why is this a very nice image'
},{
    photo: './images/4.jpg',
    title: 'Folding prototype',
    description: 'What happened here, why is this a very nice image'
},
{
    photo: './images/5.jpg',
    title: 'Folding prototype',
    description: 'What happened here, why is this a very nice image'
},
{
    photo: './images/6.jpg',
    title: 'Marz N690',
    description: 'What happened here, why is this a very nice image'
},
{
    photo: './images/7.jpg',
    title: 'Marz D2',
    description: 'What happened here, why is this a very nice image'
},{
    photo: './images/8.jpg',
    title: 'Marz mini',
    description: 'What happened here, why is this a very nice image'
},
{
    photo: './images/9.jpg',
    title: 'Marz mini',
    description: 'What happened here, why is this a very nice image'
},{
    photo: './images/10.jpg',
    title: 'Marz mini',
    description: 'What happened here, why is this a very nice image'
},
{
    photo: './images/11.jpg',
    title: 'Kukri Damascus Carbon',
    description: 'What happened here, why is this a very nice image'
},
{
    photo: './images/12.jpg',
    title: 'Kukri Damascus Carbon',
    description: 'What happened here, why is this a very nice image'
}]


imagesData.forEach((blbost, key) => {
    //console.log(`key value: ${key} | blbost Name:`, blbost);
    // console.log(imagesData[key].photo);
    
    $(".thumbnail").append(`<div class="thmb" data-number="${key}"><img id="${key}"</div>`);
    $(`#${key}`).attr("src", imagesData[key].photo);
    
  });

  //$(`data-number=${polozka}`).on(`click`, function() {
  //    currentPhoto = `${polozka}`;
  //});

  $(".thmb").on("click", function() {
      var dataNumber = $(this).attr("data-number");
      $("#photo").attr("src", imagesData[dataNumber].photo);
  })


let currentPhoto = 0;


let loadPhoto = function (photoNumber) {
    $("#photo").attr("src", imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    $(`[data-number="${photoNumber}"]`).removeClass("thmb").addClass("thmbsel");
    console.log(photoNumber);
    
};

loadPhoto(currentPhoto);

let posunVlevo = function(){
/* $("#larrow").on("click", function() { */
    if (currentPhoto > 0) {
        currentPhoto --;
    } else {
        currentPhoto = 12;
    }
    loadPhoto(currentPhoto);
    /* $(".img").fadeOut(1600).fadeIn(1600); */
};

$("#larrow").on("click", posunVlevo);


let posunVpravo = function(){
/* $("#rarrow").on("click", function() { */
    if (currentPhoto < 12) {
        currentPhoto ++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
};

$("#rarrow").on("click", posunVpravo);

let leftArrow = function(){
    (keyCode || which) === 37;
};

let rightArrow = function(){
    (keyCode || which) === 39;
};

$(document).keydown(function(){
    // left arrow
    if (leftArrow)
    {   
       $(posunVlevo);
    }
    // right arrow
    else 
    {
        {if (rightArrow)
        $(posunVpravo);}
    }   
});