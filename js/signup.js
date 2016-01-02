$(document).ready(function() {
    $(".panel").click(function(){
        alert($(this).data("genre") + " has been added to your interests");
        $(this).fadeOut(500);
    });
})