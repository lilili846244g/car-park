const toggleButton = document.getElementById('toggleButton');
const quota = document.querySelector('.quota');

toggleButton.addEventListener('click', () => {

  gsap.to(".big-logo", 0.5,{
        y:"-10vh",
       width:"64%",
       ease: 'easeOutExpo'
       
    })
    gsap.to(".choose-rent-part",0.5, {
        y:"-14vh",
        ease: 'easeOutExpo'
      
    })
   
  
    gsap.to(quota,0.5, {
        y:"-14vh",
        ease: 'easeOutExpo',
        display: 'block'
    });
});