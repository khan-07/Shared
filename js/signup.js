$(document).ready(function() {
    
    
    $(".panel").click(function(){
        $(this).parent('div').fadeOut(500);
        
    });
    
    $(".panel").hover(function(){
        $(this).children(".panel-heading").css('opacity',0.8);
    }, function() {
        $(this).children(".panel-heading").css('opacity',1);   
    });
})