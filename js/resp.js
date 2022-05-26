burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', () => {
    navlist.classList.toggle('vcls');
    rightnav.classList.toggle('vcls');
    navbar.classList.toggle('heightnav');
})