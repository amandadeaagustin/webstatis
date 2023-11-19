/*JavaScript*/

/*Sidebar hamburger menu akan buka dan tutup*/
function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/*Slideshow-container product*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*Text Berjalan*/
/*navbar*/
let header = document.querySelector('#navbar');
let navbar = document.querySelector('.navbar a.i, dropdown .li')

const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: true
});

sr.reveal('.navbar', { delay: 200, orign: 'left' });
sr.reveal('.sidebar', { delay: 500, orign: 'right' });
sr.reveal('.button', { delay: 600, orign: 'out' });

/*Heading dan paragraf*/
sr.reveal('.h1', { delay: 600, orign: 'out' });
sr.reveal('.content .p2', { delay: 700, orign: 'right' });

/*Box-container dan gallery*/
sr.reveal('.box', { delay: 70, orign: 'right' });
sr.reveal('.gallery img', { delay: 70, orign: 'right' });

/*Script untuk menu pemesanan via whatsapp*/
function sendwhatsapp() {
  var phonenumber = "+6289637833847";

  var nama = document.querySelector('.nama').value;
  var email = document.querySelector('.email').value;
  var asal = document.querySelector('.asal').value;
  var whatsapp = document.querySelector('.whatsapp').value;
  var cetak = document.querySelector('.cetak').value;
  var antarjemput = document.querySelector('.antarjemput').value;
  var pesan = document.querySelector('.pesan').value;

  var url = "https://wa.me/" + phonenumber + "?text="
    + "*Nama :* " + nama + "%0a"
    + "*Email :* " + email + "%0a"
    + "*Asal Instansi :* " + asal + "%0a"
    + "*No. Telepon/Whatsapp :* " + whatsapp + "%0a"
    + "*Cetak :* " + cetak + "%0a"
    + "*Antar/Jemput :* " + antarjemput + "%0a"
    + "*Pesan :* " + pesan + "%0a"

  window.open(url, '_blank').focus();
}




