function initLocomotiveWithGSAPScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger)

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true,
    })
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on('scroll', ScrollTrigger.update)

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy('.main', {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            }
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector('.main').style.transform
            ? 'transform'
            : 'fixed',
    })

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh()
}

initLocomotiveWithGSAPScrollTrigger()

let myCursor = document.querySelector('.cursor')
let mainVideo = document.querySelector('#hero-video video')

document.addEventListener('mousemove', (mouseEvent) => {
    myCursor.style.top = mouseEvent.pageY + 5 + 'px'
    myCursor.style.left = mouseEvent.pageX + 5 + 'px'
})

mainVideo.addEventListener('mouseenter', (mouseEvent) => {
    myCursor.style.width = '120px'
    myCursor.style.height = '30px'
    myCursor.style.color = '#111'
    myCursor.style.background = '#edbfff'
    myCursor.style.borderRadius = '10px'
    myCursor.style.mixBlendMode = 'normal'
    myCursor.textContent = 'Mouse Enter'
    myCursor.style.textAlign = 'center'
    myCursor.style.lineHeight = '30px'
    myCursor.style.fontWeight = '100'
})

mainVideo.addEventListener('click', (mouseEvent) => {
    if (mainVideo.paused) mainVideo.play()
    else mainVideo.pause()
})

mainVideo.addEventListener('mouseleave', (mouseEvent) => {
    myCursor.style = {
        height: '2vw',
        width: '2vw',
        borderRadius: '50%',
        position: 'fixed',
        backgroundColor: '#edbfff',
        zIndex: '9999',
        mixBlendMode: 'difference',
    }
    myCursor.style.top = mouseEvent.pageY + 20 + 'px'
    myCursor.style.left = mouseEvent.pageX + 20 + 'px'
    myCursor.textContent = ''
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#hero--message--one',
        scroller: '.main',
        scrub: 3,
        start: 'top 25%',
        end: 'top 0%',
        // markers: true,
    },
})

tl.from(
    '#hero--message--one',
    {
        x: '-4vw',
    },
    'anim'
)

tl.from(
    '#hero--message--two',
    {
        x: '4vw',
    },
    'anim'
)

tl.to(
    '#hero-video video',
    {
        width: '90%',
    },
    'anim'
)

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        scroller: '.main',
        scrub: 3,
        start: 'top 40%',
        end: 'top 45%',
        // markers: true,
    },
})

tl2.to('.main', {
    backgroundColor: '#fff',
})

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '#process',
        scroller: '.main',
        scrub: 3,
        start: 'top 40%',
        end: 'top 45%',
        // markers: true,
    },
})

tl3.to('.main', {
    backgroundColor: '#0f0d0d',
})

var clientList = document.querySelectorAll('.clients--box')
clientList.forEach((client) => {
    client.addEventListener('mouseenter', () => {
        const clientImage = client.getAttribute('data-image')
        myCursor.style.width = '470px'
        myCursor.style.height = '380px'
        myCursor.style.borderRadius = '0px'
        myCursor.style.backgroundImage = `url(${clientImage})`
        myCursor.style.zIndex = '10'
        myCursor.style.mixBlendMode = 'normal'
    })
    client.addEventListener('mouseleave', () => {
        myCursor.style.height = '2vw'
        myCursor.style.width = '2vw'
        myCursor.style.borderRadius = '50%'
        myCursor.style.backgroundImage = 'none'
        myCursor.style.zIndex = '8'
        myCursor.style.mixBlendMode = 'difference'
    })
})

const navbar = document.querySelector('#nav')
const allNavLinks = document.querySelectorAll('.nav--link')
const allMarqueeSpans = document.querySelectorAll('marquee span')
const marquee = document.querySelector('marquee')
const purple = document.querySelector('#purple')

allNavLinks.forEach((link) => {
    link.addEventListener('mouseenter', (mouseEvent) => {
        purple.style.height = '100%'
        purple.style.opacity = '1'
        marquee.style.display = 'block'
        allMarqueeSpans.forEach((span) => {
            span.innerHTML = link.textContent
        })
    })
})

navbar.addEventListener('mouseleave', (mouseEvent) => {
    purple.style.height = '0'
    purple.style.opacity = '0'
    marquee.style.display = 'none'
})
