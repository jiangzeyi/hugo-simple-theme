class Theme {
    constructor() {
        // 在构造函数中绑定事件
        this.init();
    }

    init() {
        // 在 init 方法中绑定事件
        document.getElementById('theme-toggle').addEventListener('click', () => {
            let darkMode = localStorage.getItem('theme') === 'dark';
            localStorage.setItem('theme', darkMode ? 'light' : 'dark');
            this.themeToggle();
        });
    }

    themeToggle() {
        let darkMode = localStorage.getItem('theme') === 'dark';
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        document.body.classList.remove('hidden');
    }
}

export { Theme };