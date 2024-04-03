toggleTheme();

document.getElementById('theme-toggle').addEventListener('click', function () {
    updateDarkModeLocalStorage();
    toggleTheme();
});
function toggleTheme() {
    let darkMode = localStorage.getItem('theme') === 'dark';
    if (darkMode) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

function updateDarkModeLocalStorage() {
    let darkMode = localStorage.getItem('theme') === 'dark';
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
}
