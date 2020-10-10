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

inputs.focusin(function() {
    var label = $("label[for='" + $(this).attr('id') + "']");
    placeholder = $(this).attr('placeholder');
    $(this).attr('placeholder','');
    label.css('display','block');
});

inputs.focusout(function() {
    var label = $("label[for='" + $(this).attr('id') + "']");
    $(this).attr('placeholder', placeholder);
    label.css('display','none');
});