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




// let faces = document.querySelector('.faces')
// if(faces) {
//   gsap.registerPlugin(ScrollTrigger)
  
//   let mm = gsap.matchMedia(),
//   breakPoint = 992;

// mm.add({
// isDesktop: `(min-width: ${breakPoint}px)`,
// isMobile: `(max-width: ${breakPoint - 1}px)`,
// reduceMotion: "(prefers-reduced-motion: reduce)"

// }, (context) => {
// let { isDesktop, isMobile, reduceMotion } = context.conditions;

// let tl = gsap.timeline({
//   scrollTrigger: {
//       trigger:'.faces',
//       start:isDesktop ? 'top top' : '50% center' ,
//       end:isDesktop ? '100% end' : '160% end',
//       scrub:true,
//       ease: 'linear',
//       pin:true,
//   }
// });
// gsap.set('.scroll-text',{
// x:isDesktop ? "70vw" : "50vw",
// // rotate:isDesktop ? 340 : 340,
// })
// tl.to('.scroll-text', {
// duration:2,
// x:isDesktop ? "-150vw" : "-150vw",
// })
// })
//   }

//   let faces1 = document.querySelector('.faces1')
// if(faces1) {
//   gsap.registerPlugin(ScrollTrigger)
  
//   let mm = gsap.matchMedia(),
//   breakPoint = 576;

// mm.add({
// isDesktop: `(min-width: ${breakPoint}px)`,
// isMobile: `(max-width: ${breakPoint - 1}px)`,
// reduceMotion: "(prefers-reduced-motion: reduce)"

// }, (context) => {
// let { isDesktop, isMobile, reduceMotion } = context.conditions;

// let tl = gsap.timeline({
//   scrollTrigger: {
//       trigger:'.faces1',
//       start:isDesktop ? 'top center' : '50% center' ,
//       end:isDesktop ? '100% end' : '100% end',
//       scrub:true,
//       ease: 'linear',
//       pin:true,
//   }
// });
// gsap.set('.scroll-text1',{
// x:isDesktop ? "70vw" : "50vw",
// })
// tl.to('.scroll-text1', {
// duration:2,
// x:isDesktop ? "-150vw" : "-213vw",
// })
// })
//   }
