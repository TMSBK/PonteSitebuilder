var characterCount = $("#character-count");
var inputs = $(".form-control");
var messageTextArea = $("#text-input");
var placeholder = '';

messageTextArea.on("input", function(){
    var maxLength = $(this).attr("maxlength");
    var currentLength = $(this).val().length;
    var remainingCharacters = maxLength - currentLength;
    characterCount.html("maximum 200 karakter - " + remainingCharacters + " maradt");
});

function getLabelOf(element) {
    return $("label[for='" + $(element).attr('id') + "']");
}

function hidePlaceholder(element) {
    $(element).attr('placeholder','');
}

function storePlaceholderValue(element) {
    placeholder = $(element).attr('placeholder');
}

function revealPlaceholder(element) {
    $(element).attr('placeholder', placeholder);
}

function hideLabel(element) {
    getLabelOf(element).css('display','none');
}

function revealLabel(element) {
    getLabelOf(element).css('display','block');
}

inputs.focusin(function() {
    storePlaceholderValue(this)
    hidePlaceholder(this);
    revealLabel(this);
});

inputs.focusout(function() {
    revealPlaceholder(this);
    hideLabel(this);
});