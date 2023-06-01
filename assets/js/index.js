const toggleButton = document.getElementById('toggleButton');
const quota = document.querySelector('.quota');

toggleButton.addEventListener('click', () => {

  gsap.to(".big-logo", {
        y:"-10vh",
       width:"64%",
       ease: 'easeOutExpo'
       
    })
    gsap.to(".choose-rent-part", {
        y:"-14vh",
        ease: 'easeOutExpo'
      
    })
    gsap.to(".quota-box", {
        y:"-14vh",
        ease: 'easeOutExpo'
      
    })
    gsap.to(quota, {
        display: 'block'
    });
});