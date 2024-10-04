const mobileNav = () => {  
    const headerButton = document.querySelector('.header__bars');
    const mobileNav =  document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // State
    let isMobileNavOpen = false;
    
    headerButton.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'instant',
            });
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });

    var viewport = window.matchMedia("(min-width: 768px)");
    viewport.addEventListener('change', () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    })
}

export default mobileNav;