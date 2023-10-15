//gsap is a global obj to take from gsap
//from- props are considered as initial values
//to - props are considered to be final values
//Gsap - 2 methods to animate elements (from, to)
//gsap.(to,from)('element',{
//    x: 500,
//    y: 500,
//    duration: time,
//    delay: time,
//    backgroundColor: color
//    rotate: '360deg',
//    scale: 1
//    stagger: 0.1
//    repeat:-1 (infinite repetation)
//})

//gsap timeline(properties..)

//

// gsap.to('#box',{
//     duration: 3,
//     x: 1000,
//     delay:1,
//     backgroundColor: "blue",
//     rotate:'180',
//     scale:0.7
// })

// gsap.from('#box',{
//     duration: 3,
//     x: 1000,
//     delay:1,
//     backgroundColor: "blue",
//     rotate:'180',
//     scale:0.7
// })

// gsap.to("h1",{
//     x:600,
//     color:"orange",
//     duration:2,
//     delay:1
// })

// gsap.to("h2",{
//     x:600,
//     color:"salmon",
//     duration:2,
//     delay:2
// })

// gsap.to("h3",{
//     x:600,
//     color:"black",
//     duration:2,
//     delay:3
// })


// gsap.to("h1",{
//     x:600,
//     color:"orange",
//     duration:2,
//     stagger:2,
//     repeat:-1,
//     yoyo:true
// })

const tl=gsap.timeline({
    repeat:-1,
    repeatDelay:2,
    yoyo:true
})
tl.to("h1",{
    x:600,
    color:"orange",
    duration:2,
}).to("h2",{
    x:600,
    color:"salmon",
    duration:2,
}).to("h3",{
    x:600,
    color:"black",
    duration:2,
})