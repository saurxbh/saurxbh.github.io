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
}


export default footerFunctionalities;
