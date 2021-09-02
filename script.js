const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-links');
let open = false;

burger.addEventListener('click' , () => {
    if(!open){
        burger.classList.add('clicked');
        links.classList.add('clicked');
        open = true;
    }
    else{
        burger.classList.remove('clicked');
        links.classList.remove('clicked');
        open = false;
    }
});