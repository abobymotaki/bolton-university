document.addEventListener('DOMContentLoaded', function () {
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
        var cssFileName = 'css/header-' + theme + '.css';
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

document.addEventListener('DOMContentLoaded', function () {
    function getElementById() {
        
    }
});