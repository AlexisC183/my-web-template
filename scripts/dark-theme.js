$(document).ready(function(){
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $("input[type='button'], input[type='submit']").on("mouseenter", function() {
            $(this).css({
                "background" : "white",
                "border-color" : "black",
                "color" : "black"
            });
        }).on("mouseleave", function() {
            $(this).css({
                "background" : "black",
                "border-color" : "white",
                "color" : "white"
            });
        });
    }
});