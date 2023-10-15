//ScrollTrigger Pulgin - TO activate activation on scroll

gsap.from('#page1 .box',{
    scale:0,
    rotate:'360deg',
    duration:3.4,
    delay:1,
})

gsap.from('#page2 .box',{
    scale:0,
    rotate:'360deg',
    duration:3.4,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start:'top 60%',
        end:'top 30%',
        scrub:3,
        // markers:true,
    },
})