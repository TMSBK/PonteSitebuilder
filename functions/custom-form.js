var characterCount = $("#character-count");
var inputs = $(".form-control");
var messageTextArea = $("#text-input");
var placeholder = '';

function remainingCharactersOf(textArea) {
    var maxLength = $(textArea).attr("maxlength");
    var currentLength = $(textArea).val().length;
    return maxLength - currentLength;
}

function changeTextAreaValueWith(remainingCharacters) {
    characterCount.html("maximum 200 karakter - " + remainingCharacters + " maradt");
}

messageTextArea.on("input", function(){
    changeTextAreaValueWith(remainingCharactersOf(this));
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