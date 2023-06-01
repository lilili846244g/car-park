const toggleButton = document.getElementById('toggleButton');
const quota = document.querySelector('.quota');

toggleButton.addEventListener('click', () => {

  gsap.to(".big-logo", 0.5,{
        y:"-10vh",
       width:"60%",
       ease: 'easeIn'
       
    })
    gsap.to(".choose-rent-part",0.5, {
        y:"-14vh",
        ease: 'easeIn'
      
    })
   
  
    gsap.to(quota,0.5, {
        y:"-14vh",
        ease: 'easeIn',
        display: 'block'
    });
});