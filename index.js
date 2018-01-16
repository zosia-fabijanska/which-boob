function setup_colors() {
    var raw_colors = [
        '#6fb1bc',
        '#C3ADA5',
        
    ];
    if ($(window).width() <= 480) {
        raw_colors = ['#C7F8FE'];
    }

    var colors = [];
    for (var i=0; i<raw_colors.length; i++) {
        colors.push({
            color: raw_colors[i],
            position: $(window).height() * i
        });
    };

    $('body').colorScroll({
        colors: colors
    });
}

$(document).ready(function(){
  setup_colors();
});

$(window).resize(setup_colors);
