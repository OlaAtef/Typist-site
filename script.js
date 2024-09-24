
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

var submit_inp =document.getElementById('submit-inp');

var sidemenu = document.getElementById("sidemenu");


//About Tab Links............
function opentab( tabname ){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// show Menu Bar........
document.querySelector('#menu-icon').onclick = () =>{
    sidemenu.classList.toggle('active');
}

document.querySelector('#close-menu').onclick = () =>{
    sidemenu.classList.remove('active');
}

// Switch Mode The Website..........
const toggle_mode = document.querySelector('#toggle-mode');
toggle_mode.addEventListener('click', (e) =>{
const current_mode = document.body.dataset.mode;

if(current_mode === 'dark'){
    document.documentElement.style.setProperty('--first-color', '#000000');
    document.documentElement.style.setProperty('--third-color', '#fff');
const current_mode = document.body.dataset.mode = 'light';
// e.target.innerHTML = '<i class="fa-solid fa-bars"></i> ';
} else if (current_mode === 'light'){
    document.documentElement.style.setProperty('--first-color', '#fff');
    document.documentElement.style.setProperty('--third-color', '#000000');
const current_mode = document.body.dataset.mode = 'dark';
// e.target.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}
});

    window.onscroll = ()=>{
        ScroollHeader();
    }

let Header = document.getElementById('fixed-nav');
let x = 0;
 
function ScroollHeader(){
    if(window.pageYOffset > x){
        Header.classList.add('FixedHeader');
    }else{
        Header.classList.remove('FixedHeader');
    }
}


