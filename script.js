/*var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer","Dot Net Developer","MERN Stack Developer","YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});

var typed = new Typed('.multiple-text', {
    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 30
  });*/

  //toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

  //scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


  window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            //active navbar links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="'+id+'"]').classList.add('active');

            });
        }
        
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    //remove toggle icon and navbar when on click

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
