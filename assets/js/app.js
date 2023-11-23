const banner = document.querySelector('.banner');
const header =  document.querySelector('.header')
if(banner) {
  window.onscroll = function() {scrollFunction(banner.offsetHeight)};
  function scrollFunction(scollHeight) {
    if (document.body.scrollTop > scollHeight  || document.documentElement.scrollTop > scollHeight ) {
      header.classList.add('header--active')
    } else {
      header.classList.remove('header--active')
    }
  }
}



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 4.4,
    },
    992: {
      slidesPerView: 3.4,
    },
    768: {
      slidesPerView: 2.4,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    }

  }
});
var swiper2 = new Swiper(".logo-swiper", {
  slidesPerView: 4.4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 4.4,
    },
    992: {
      slidesPerView: 3.4,
    },
    320: {
      slidesPerView: 1.8,
    }

  }
});

$('.schulleben-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<div class='nav-button owl-prev'><img src='assets/images/slider-prev.svg'/></div>", "<div class='nav-button owl-next'><img src='assets/images/slider-next.svg'/></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");

searchIcon.addEventListener("click", function () {
  if (searchBar.style.display === "none" || searchBar.style.display === "") {
    searchBar.style.display = "block";
    searchIcon.style.display = "none";
  } else {
    searchBar.style.display = "none";
  }
});
// School life - details--page
var swiper = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let faces = document.querySelector('.faces')
if(faces) {
  gsap.registerPlugin(ScrollTrigger)
  
  let mm = gsap.matchMedia(),
  breakPoint = 992;

mm.add({
isDesktop: `(min-width: ${breakPoint}px)`,
isMobile: `(max-width: ${breakPoint - 1}px)`,
reduceMotion: "(prefers-reduced-motion: reduce)"

}, (context) => {
let { isDesktop, isMobile, reduceMotion } = context.conditions;

let tl = gsap.timeline({
  scrollTrigger: {
      trigger:'.faces',
      start:isDesktop ? 'top top' : '50% center' ,
      end:isDesktop ? '100% end' : '160% end',
      scrub:true,
      ease: 'linear',
      pin:true,
  }
});
gsap.set('.scroll-text',{
x:isDesktop ? "70vw" : "50vw",
// rotate:isDesktop ? 340 : 340,
})
tl.to('.scroll-text', {
duration:2,
x:isDesktop ? "-150vw" : "-150vw",
})
})
  }

  let faces1 = document.querySelector('.faces1')
if(faces1) {
  gsap.registerPlugin(ScrollTrigger)
  
  let mm = gsap.matchMedia(),
  breakPoint = 576;

mm.add({
isDesktop: `(min-width: ${breakPoint}px)`,
isMobile: `(max-width: ${breakPoint - 1}px)`,
reduceMotion: "(prefers-reduced-motion: reduce)"

}, (context) => {
let { isDesktop, isMobile, reduceMotion } = context.conditions;

let tl = gsap.timeline({
  scrollTrigger: {
      trigger:'.faces1',
      start:isDesktop ? 'top center' : '50% center' ,
      end:isDesktop ? '100% end' : '100% end',
      scrub:true,
      ease: 'linear',
      pin:true,
  }
});
gsap.set('.scroll-text1',{
x:isDesktop ? "70vw" : "50vw",
})
tl.to('.scroll-text1', {
duration:2,
x:isDesktop ? "-150vw" : "-213vw",
})
})
  }
