Array.from(document.getElementsByClassName('autoresize')).forEach(function (element) {
    element.style.boxSizing = 'border-box';
    element.style.resize = 'none';
    var offset = element.offsetHeight - element.clientHeight;
    document.addEventListener('input', function (event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
    });
});