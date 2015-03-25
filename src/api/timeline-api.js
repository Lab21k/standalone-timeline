(function() {
    if ('Timeline' in window) {
        return;
    }

    window.Timeline = new Object();
    window.Timeline.DateTime = window.SimileAjax.DateTime;

    var desiredLocales = ['en'],
        defaultServerLocale = 'en',
        forceLocale = null;

    Timeline.urlPrefix = (typeof TimelineUrlPrefix !== 'undefined') ? TimelineUrlPrefix : '/dist/src/api/';

    var defaultClientLocale = defaultServerLocale;
    var defaultClientLocales = ('language' in navigator ? navigator.language : navigator.browserLanguage).split(';');

    Timeline.serverLocale = defaultServerLocale;
    Timeline.clientLocale = defaultClientLocale;
})();
