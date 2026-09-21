/* Mobil Menu */
    const navicon = document.querySelector('.navicon');
    const mobileMenu = document.querySelector('.mobile-menu');

    navicon.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });