$(document).ready(function(){
    ScrollReveal().reveal('#skills', { delay: 600 });
    ScrollReveal().reveal('#work', { delay: 600 });
    // aboutMe
    ScrollReveal().reveal('#aboutMe', { delay: 400 });
    ScrollReveal().reveal('#information', { delay: 200 });
    $(".drawer").click(function(){
      alert("coming gerre")
      let overlay=document.getElementById("overlayNav");
      overlay.classList.add("displayFlex");
    })
})

const handleClick=()=>{
  // alert("coming here")
  let overlay=document.getElementById("overlayNav");
  if(overlay.style.display!='flex'){
  overlay.style.display='flex';
  }else{
    overlay.style.display='none';
  }
}





var swiper = new Swiper(".ProjectSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 400,
    loop:true,
    autoplay:true,
    parrallax:true, 
    mousewheel: {
        invert: true,
      },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        720: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          },
      }
  });
