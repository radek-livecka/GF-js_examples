$('#clicOn').click(function() {
    $('.count').html(function(i, val) { return val*1+1 });
});

$('#clicOff').click(function() {
    $('.count').html(function(i, val) { return val*1-1 });
});