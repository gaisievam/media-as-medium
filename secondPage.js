document.addEventListener('DOMContentLoaded', () => {
    const savedTitle = localStorage.getItem('selectedTitle');
    if (savedTitle) {
        document.querySelector('.titleOfText').textContent = savedTitle;
    }
    localStorage.clear();
});
