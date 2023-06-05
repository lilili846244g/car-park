const toggleButton = document.getElementById('toggleButton');


toggleButton.addEventListener('click', () => {

  gsap.to(".big-logo", 0.5,{
        y:"-10vh",
       width:"54%",
       height: "18vh",
       ease: 'easeIn'
    })
    gsap.to(".choose-rent-part",0.5, {
        y:"-14.5vh",
        ease: 'easeIn'
    })
    gsap.to(".quota",0.5, {
        y:"-14vh",
        ease: 'easeIn',
        display: 'block'
    });
});