 /* Javascript for IframeWithAnonymousIDXBlock. */
function IframeWithAnonymousIDXBlock(runtime, element) {

    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
    
    $('.save-button', element).bind('click', function() {
        var data = {
            'iframe_url': $('#iframe_url').val(),
        };

        $.post(handlerUrl, JSON.stringify(data)).complete(function() {
            window.location.reload(false);
        });
    });

    $('.cancel-button', element).bind('click', function() {
        runtime.notify('cancel', {});
    });
}
