// let show = true;
// const menuContent = document.querySelector('.content');
// const menuToggle = menuContent.querySelector('.menu-toggle');


// menuToggle.addEventListener('click', () => {

//     document.body.style.overflow = show ? 'hidden' : 'initial'

//     menuContent.classList.toggle('on',show);
//     show = !show;

   
// })

const menuContent = document.querySelector('.content');
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.menu-lista a');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on');
    document.body.style.overflow = menuContent.classList.contains('on') ? 'hidden' : 'initial';
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Redireciona para a página do link e fecha o menu
        window.location.href = link.href;
        menuContent.classList.remove('on');
        document.body.style.overflow = 'initial';
    });
});