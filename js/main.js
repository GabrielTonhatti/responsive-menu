// ==== EXPANDER MENU =====
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId);
    let navbar = document.getElementById(navbarId);
    let bodyPadding = document.getElementById(bodyId);

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')
            bodyPadding.classList.toggle('body-pd')
        }, false);
    }
}

showMenu('nav-toggle', 'navbar', 'body-pd');

// ==== LINK ACTIVE ====
const linkColor = document.querySelectorAll('.nav__link');
function colorLink() {
    linkColor.forEach(elemento => elemento.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(elemento => elemento.addEventListener('click', colorLink, false));

// ==== COLLAPSE MENU ====
const linkCollapse = document.getElementsByClassName('collapse__link');

for (let i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function() {
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    } ,false)
}