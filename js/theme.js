document.addEventListener('DOMContentLoaded', function () {
    function getFilenameFromURL() {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        var filenameWithoutExtension = page.split(".")[0]; // Remove the file extension
        return filenameWithoutExtension;
    }

    function loadCSS(filename) {
        var existingLink = document.querySelector('link[rel="stylesheet"]');
        if (existingLink) {
            document.head.removeChild(existingLink);
        }

        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = filename;

        document.head.appendChild(link);
    }

    function applyTheme(theme) {
        var filename = getFilenameFromURL();
        var cssFileName = 'css/' + filename + '-' + theme + '.css';
        console.log( 'css/' + filename + '-' + theme + '.css')
        loadCSS(cssFileName);

        var button = document.getElementById('changeButton');
        if (theme === 'dark') {
            button.innerHTML = '☾';
        } else {
            button.innerHTML = '❂';
        }
    }

    var savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    function toggleTheme() {
        var newTheme = (savedTheme === 'light') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
        savedTheme = newTheme;
    }

    var button = document.getElementById('changeButton');
    if (button) {
        button.addEventListener('click', toggleTheme);
    } else {
        console.error('Button with id "changeButton" not found.');
    }
});