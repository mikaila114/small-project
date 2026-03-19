const hamburger = document.querySelector('.hamburger');

const navLinks = document.querySelector('.nav-links');

const logo = document.querySelector('.logo');

const aside = document.querySelector('.aside');

const asideLogo = document.querySelector('.aside-logo');

const asideContainer = document.querySelector('aside');

const overlay = document.querySelector('.overlay');

let linksHTML = '';
let logoHTML = `<h1>Eng'r</h1>`;

let navLists = [
    'Home',
    'Services',
    'About'
];


navLists.forEach(list => {
    linksHTML += `<li><a href="">${list}</a></li>`;
    navLinks.innerHTML = linksHTML;
    aside.innerHTML = linksHTML;
}); 
asideLogo.innerHTML = logoHTML;
logo.innerHTML = logoHTML;
hamburger.addEventListener('click', () => {
     asideContainer.classList.toggle('active');
     overlay.classList.add('active');
});
overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    asideContainer.classList.remove('active');
});

   
