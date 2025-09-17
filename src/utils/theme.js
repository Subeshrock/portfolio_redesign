// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    
    // Check for saved theme preference or use OS preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    
    // Update icons based on current theme
    if (currentTheme === 'dark') {
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
    }
    
    // Theme toggle button click handler
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        const newTheme = isDark ? 'dark' : 'light';
        
        localStorage.setItem('theme', newTheme);
        
        // Add rotation animation
        themeToggle.classList.add('rotate');
        setTimeout(() => {
            themeToggle.classList.remove('rotate');
        }, 1000);
        
        // Toggle icons
        if (isDark) {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        }
    });
});