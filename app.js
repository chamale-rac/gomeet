const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

const header = document.querySelector('.header.container')

const cta = document.querySelector('.unique .box .cta');
const display_cont = document.querySelector('.icons .icons-bar .icons-list ul');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach(item=>{
    item.addEventListener('click',() =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

cta.addEventListener('click',()=>{
    cta.classList.toggle('active');
    display_cont.classList.toggle('active');
});


function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("TAG DE DISCORD COPIADO AL PORTAPAPELES: " + copyText.value);
  }


