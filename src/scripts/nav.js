// Menu for android 

const menuActiviator = document.querySelector('.activator');
const navigation = document.querySelector('.navigation');
const menuIcon = document.querySelector('.menu-icon')
menuActiviator.addEventListener('click', ()=>{
    navigation.classList.toggle('active')
    menuIcon.textContent = menuIcon.textContent == 'keyboard_arrow_right' ? 'keyboard_arrow_left' : 'keyboard_arrow_right'
})

// Active state code. DO NOT EDIT!

const navLinks = document.querySelectorAll('.navigation .links-list .links');
navLinks.forEach( navLink => {
    let currentWindowLocation = window.location.href.toString().toLowerCase();
    let navigationName = navLink.id
    if(currentWindowLocation.includes(navigationName)){
        navLink.classList.add('active')
    }
})


// Scrolling effect 
const header =  document.querySelector('#header')
window.addEventListener('scroll', ()=>{
    // Change color black to the one that works
    window.scrollY > 100 ? header.style.backgroundColor = "black" : header.style.backgroundColor = "transparent"
})

//header.style.width = window.innerWidth+'px';
