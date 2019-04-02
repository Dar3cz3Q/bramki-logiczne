function progress() {
    var container = document.querySelector('body'),
        readprogressplace = document.querySelector('header'),
        windowHeight = window.innerHeight,
        containerHeight = container.clientHeight,
        maxScroll = (containerHeight - windowHeight),
        progress = document.createElement('progress');

    progress.classList.add('progress');
    progress.value = 0;
    progress.max = maxScroll;

    readprogressplace.appendChild(progress);

    var calculateProgress = function () {
        progress.value = window.scrollY;
    };

    var throttle = function (callback, limit) {
        var wait = false;
        return function () {
            if (!wait) {
                callback();
                wait = true;
                setTimeout(function () {
                    wait = false;
                }, limit);
            }
        };
    };

    var debounce = function (callback, time) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                callback.apply(context, args);
            }, time || 200);
        };
    };

    window.addEventListener('scroll', throttle(calculateProgress, 100));
    window.addEventListener('scroll', debounce(calculateProgress, 200));
}