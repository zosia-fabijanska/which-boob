$(function() {
    //store element
    const zosiaElement = $(".zosia-section");
    $(window).scroll(function() {
        if ($(this).scrollTop() <= 400) {
            zosiaElement.css("background", "#6fb1bc");
        } else if ($(this).scrollTop() <= 900) {
            zosiaElement.css("background", "#e67e22");
        } else if ($(this).scrollTop() <= 1400) {
            zosiaElement.css("background", "#8e44ad");
        } else if ($(this).scrollTop() <= 1900) {
            zosiaElement.css("background", "#3498db");
        } else if ($(this).scrollTop() <= 2500) {
            zosiaElement.css("background", "#2ecc71");
        }
    });
});
