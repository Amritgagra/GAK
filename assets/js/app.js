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

const formBtn = document.querySelector('.btn__form');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const mobileMenu = document.querySelector('.navbar-toggler');
const closeBtn = document.querySelector('.btn-close');
mobileMenu.addEventListener('click',function(){
  header.classList.add('active')
})
closeBtn.addEventListener('click',function(){
  header.classList.remove('active')
})
formBtn.addEventListener("click",function(){
  if(body.classList.contains('modal-open')) {
    body.classList.add('overflow-auto')
    body.classList.add('p-0')
  }
  else {
    body.classList.remove('overflow-auto')
    body.classList.remove('p-0')
  }
})


gsap.registerPlugin(ScrollTrigger);
gsap.set('.resource__text span', { width: 0 })

gsap.timeline({
    scrollTrigger:{
      trigger: '.resource',
      scrub:.3,
      start:"top 25%",
      end:"50% 20%",
    }
 })
  .to('.resource__text span', {
  width:'100%', 
  duration:1, ease:'none',
  stagger:1
})



