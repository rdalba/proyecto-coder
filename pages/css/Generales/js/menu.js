let btnMenu = document.getElementById('btn-menu');
let mainNav = document.getElementById('main-nav');
btnMenu.classListener('click', function(){
    mainNav.classList.toggle('mostrar');
})