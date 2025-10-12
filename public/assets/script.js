function showCurrentPath() {
    document.addEventListener('DOMContentLoaded' ,() => {
        document.querySelectorAll('.nav-links > ul > li > a').forEach(link => {
            const isActive = link.getAttribute('href') === window.location.pathname
            link.classList.toggle('active' ,isActive)
            if (isActive) {
                link.setAttribute('disabled', 'disabled');
                link.style.pointerEvents = 'none';
                link.style.opacity = '0.6';
            } else {
                link.removeAttribute('disabled');
                link.style.pointerEvents = '';
                link.style.opacity = '';
            }
        })
    })
}
showCurrentPath()