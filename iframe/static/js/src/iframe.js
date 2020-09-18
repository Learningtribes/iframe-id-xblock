/* Javascript for IframeWithAnonymousIDXBlock. */
function IframeWithAnonymousIDXBlock(runtime, element) {

    var handlerUrl = runtime.handlerUrl(element, 'publish_completion');

    window.onload = function() {
        setTimeout(function() {
            var data = {
                'completion': 1.0,
            };
            $.post(handlerUrl, JSON.stringify(data)).complete(function() {});
        }, 1000);
    };

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}
