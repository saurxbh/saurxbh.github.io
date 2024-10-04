const toggleTheme = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    // State
    const theme = localStorage.getItem('theme');

    // On Mount
    theme && document.body.classList.add(theme);

    // Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    }

    // Event
    themeToggleBtns.forEach(button => button.addEventListener('click', handleThemeToggle));
}

export default toggleTheme;