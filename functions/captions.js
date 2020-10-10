var captions = $(".caption");
var dots = $(".dot");
var captionIndex = 0;

function setActiveCaption(index) {
    $(".active-caption").removeClass("active-caption");
    $(".active-dot").removeClass("active-dot");
    captions.eq(index).addClass('active-caption');
    dots.eq(index).addClass("active-dot");
}

function rotateCaptions() {
    var index = captionIndex % captions.length;
    captions.eq(index)
        .fadeIn(2000, setActiveCaption(index))
        .delay(2000)
        .fadeOut(2000, rotateCaptions);
    captionIndex++;
}

function initCaptions() {
    captions.eq(0).addClass('active-caption');
    dots.eq(0).addClass('active-dot');
    rotateCaptions();
}

initCaptions();