const mobbutn = document.querySelector('.mobile-button');
const mobileNav = document.querySelector('.mobile-nav');
mobbutn.addEventListener('click', function() {
    mobileNav.classList.toggle('mobile-nav-active');
    mobbutn.classList.toggle('mobile-button-close');
})