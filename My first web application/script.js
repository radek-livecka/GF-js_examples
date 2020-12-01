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

// $('#photo').attr('src', data[1].photo);
// $('#photo-title').text(data.title);
// $('#photo-description').text(data.description);

let currentPhoto = 0;
$("#photo").attr("src", imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);

let loadPhoto = function (photoNumber) {
    $("#photo").attr("src", imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    
};

loadPhoto(currentPhoto);

$("#larrow").on("click", function() {
    if (currentPhoto > 0) {
        currentPhoto --;
    } else {
        currentPhoto = 12;
    }
    loadPhoto(currentPhoto);
});

$("#rarrow").on("click", function() {
    if (currentPhoto < 12) {
        currentPhoto ++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});