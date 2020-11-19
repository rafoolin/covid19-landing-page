// Initialize the icon and images based on the theme
document.addEventListener("DOMContentLoaded", () => {
    resetIcon();
    resetImageSrc();
});


/**
 * Initialize theme
 */
function initTheme() {
    var theme = localStorage.getItem('theme');
    theme = theme !== null ? theme : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
};


/**
 * Switch theme to Dark/Light
 */
function switchTheme() {
    if (localStorage.getItem('theme') == 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    resetImageSrc();
    resetIcon();
}


/**
 * Switch theme Icon based on the Dark/Light theme
 */
function resetIcon() {
    if (localStorage.getItem('theme') == 'dark') {
        // theme icon set moon
        document.getElementById("theme-icon").className = "fa fa-moon-o";
    } else {
        // theme icon
        document.getElementById("theme-icon").className = "fa fa-sun-o";
    }
}

/**
 * Re-config image src based on the dark/light theme
 */
function resetImageSrc() {
    // change img src
    let themeStr = localStorage.getItem('theme');

    // logo
    document.getElementById("logo-img").src = `assets/images/${themeStr}_logo.png`;

    // symptoms image
    document.getElementById("symptoms-image").src = `assets/images/${themeStr}_symptoms.png`;

    // Prevention & Advice image
    document.getElementById("advice-img-01").src = `assets/images/${themeStr}_01.svg`;
    document.getElementById("advice-img-02").src = `assets/images/${themeStr}_02.svg`;
    document.getElementById("advice-img-03").src = `assets/images/${themeStr}_03.svg`;

    // Protect Others image
    document.getElementById("protect-img-01").src = `assets/images/${themeStr}_protect_01.svg`;
    document.getElementById("protect-img-02").src = `assets/images/${themeStr}_protect_02.svg`;
    document.getElementById("protect-img-03").src = `assets/images/${themeStr}_protect_03.svg`;
}
/**
 * Open navigation bar
 */
function openNav() {
    document.getElementById("side-bar").style.width = "100%";
}

/**
 * Close navigation bar
 */
function closeNav() {
    document.getElementById("side-bar").style.width = "0";
}