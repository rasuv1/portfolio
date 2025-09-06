

let navbar=document.querySelector('nav');

const menuIcon=document.querySelector('#menu-icon');

menuIcon.textContent = "menu";
menuIcon.onclick=()=>{
  
  menuIcon.textContent=menuIcon.textContent === "menu" ? "close" : "menu";
  
  navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
      });
      
    }
  });
  let header =document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>100);
  
  navbar.classList.remove('active');
  menuIcon.textContent="menu";
};
