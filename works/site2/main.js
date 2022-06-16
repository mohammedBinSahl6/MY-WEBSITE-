const menulink = document.getElementsByClassName('menu1')[0];
const homelink = document.getElementsByClassName('home1')[0];
console.log('hello there')
function click_on_menu(){
    menulink.style.color = 'black';
    menulink.classList.add('active');
    homelink.classList.remove('active');


}

menulink.onclick = click_on_menu;