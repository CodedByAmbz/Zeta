(function ($) {
  "use strict";

  // PRE LOADER
$(window).load(function(){
  $('.preloader').fadeOut(1000); // set duration in brackets    
});


// MENU
$('.navbar-collapse a').on('click',function(){
  $(".navbar-collapse").collapse('hide');
});

$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
});


// PARALLAX EFFECT
$.stellar({
  horizontalScrolling: false,
}); 


// ABOUT SLIDER
$('.owl-carousel').owlCarousel({
  animateOut: 'fadeOut',
  items: 1,
  loop: true,
  autoplayHoverPause: false,
  autoplay: true,
  smartSpeed: 1000,
});


// SMOOTHSCROLL
$(function() {
  $('.custom-navbar a').on('click', function(event) {
    var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
        event.preventDefault();
  });
});  
})(jQuery);
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
x.className += " responsive";
} else {
x.className = "topnav";
}
}

document.addEventListener('DOMContentLoaded', function() {
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
let currentIndex = 0;

galleryImages.forEach((image, index) => {
image.addEventListener('click', () => {
lightbox.style.display = 'block';
lightboxContent.src = image.src;
currentIndex = index;
});
});

window.closeLightbox = function() {
lightbox.style.display = 'none';
};

window.changeSlide = function(direction) {
currentIndex += direction;
if (currentIndex < 0) {
currentIndex = galleryImages.length - 1;
} else if (currentIndex >= galleryImages.length) {
currentIndex = 0;
}
lightboxContent.src = galleryImages[currentIndex].src;
};
})