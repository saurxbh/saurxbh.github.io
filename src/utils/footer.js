const footerFunctionalities = () => {
    let year = new Date().getFullYear();
    document.getElementById('year').textContent = year;

    const links = Array.from(document.getElementsByClassName('footer__sm'));
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('fa-inverse');
        });

        link.addEventListener('mouseout', () => {
            link.classList.remove('fa-inverse');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Assuming the scroll behavior triggered by # has already happened
        window.history.replaceState(null, null, window.location.pathname);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    });
    
}


export default footerFunctionalities;
