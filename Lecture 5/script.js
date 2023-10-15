var tl = gsap.timeline()

function IncreaseNumbers() {
    let count = 0
    const header = document.querySelector('#loader h1')
    const increaseLoader = setInterval(function () {
        count = count + Math.floor(Math.random() * 10)
        if (count > 100) {
            count = 100
            clearInterval(increaseLoader)
        }

        header.innerHTML = count + '%'
    }, 100)
}

tl.to('#loader h1', {
    scale: 1.5,
    delay: 0.5,
    duration: 2,
    onStart: IncreaseNumbers(),
})

tl.to('#loader', {
    top: '-100vh',
    duration: 1,
})

gsap.to('#page1 h1', {
    transform: 'translateX(-80%)',
    fontWeight: '100',
    scrollTrigger: {
        trigger: '#page1',
        scroller: 'body',
        scrub: 1.5,
        start: 'top 0%',
        end: 'top -200%',
        pin: true,
    },
})
