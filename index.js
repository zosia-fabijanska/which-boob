$(function() {
    //store element
    const zosiaElement = $(".zosia-section");
    $(window).scroll(function() {
        if ($(this).scrollTop() <= 400) {
            zosiaElement.css("background", "#6fb1bc");
        } else if ($(this).scrollTop() <= 900) {
            zosiaElement.css("background", "#94f7d3");
        } else if ($(this).scrollTop() <= 1400) {
            zosiaElement.css("background", "#fcdc8a");
        } else if ($(this).scrollTop() <= 1900) {
            zosiaElement.css("background", "#f4a4a4");
        } else if ($(this).scrollTop() <= 2500) {
            zosiaElement.css("background", "#dd98f2");
        }
    });
});
