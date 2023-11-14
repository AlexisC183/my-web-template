$(document).ready(function(){
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $("a").on("mouseenter", function() {
            $(this).css("text-decoration", "underline");
        }).on("mouseleave", function() {
            $(this).css("text-decoration", "none");
        });
    }
});