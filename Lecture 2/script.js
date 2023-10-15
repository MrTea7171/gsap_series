const tl=gsap.timeline({});

tl.from('#nav .nav--logo,#nav .nav--links,#nav .nav-actions',{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})

tl.from('#main h1',{
    y:100,
    opacity:0,
    stagger:0.3
})

tl.from('#main>img,#main>h5',{
    scale:0,
    opacity:0,
    stagger:0.5
})

tl.to("#main>h5",{
    y:20,
    duration:1,
    repeat:-1,
    yoyo:true,
})



