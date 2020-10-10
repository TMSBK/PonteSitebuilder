var captions = $(".caption");
var dots = $(".dot");
var captionIndex = 0;

function removeActiveClasses() {
    $(".active-caption").removeClass("active-caption");
    $(".active-dot").removeClass("active-dot");
}

function addingActiveClassesTo(captionIndex) {
    captions.eq(captionIndex).addClass('active-caption');
    dots.eq(captionIndex).addClass("active-dot");
}

function setActiveCaption(captionIndex) {
    removeActiveClasses();
    addingActiveClassesTo(captionIndex)
}

function rotateCaptions() {
    var nextCaptionIndex = captionIndex % captions.length;
    captions.eq(nextCaptionIndex)
        .fadeIn(2000, setActiveCaption(nextCaptionIndex))
        .delay(2000)
        .fadeOut(2000, rotateCaptions);
    captionIndex++;
}

function initCaptions(captionIndex) {
    captions.eq(captionIndex).addClass('active-caption');
    dots.eq(captionIndex).addClass('active-dot');
    rotateCaptions();
}

initCaptions(0);