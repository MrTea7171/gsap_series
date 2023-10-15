const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
})

function circleMouseMotionFuction() {
    const circleMouseFollower = document.querySelector('#myMouse')
    let defaultScale = 1
    const lastMoustionPosRec = {
        x: 0,
        y: 0,
    }
    let timeout
    window.addEventListener('mousemove', (e) => {
        clearTimeout(timeout)
        const diffX = e.clientX - lastMoustionPosRec.x
        const diffY = e.clientY - lastMoustionPosRec.y

        lastMoustionPosRec.x = e.clientX
        lastMoustionPosRec.y = e.clientY

        let scaleX = gsap.utils.clamp(0.8, 1.2, diffX)
        let scaleY = gsap.utils.clamp(0.8, 1.2, diffY)

        circleMouseFollower.style.transform = `translate(${e.clientX + 5}px, ${
            e.clientY + 5
        }px) scale(${scaleX}, ${scaleY})`

        timeout = setTimeout(function () {
            // The mouse has stopped moving.
            circleMouseFollower.style.transform = `translate(${
                e.clientX + 5
            }px, ${e.clientY + 5}px) scale(${defaultScale}, ${defaultScale})`
        }, 100) // Adjust the time interval as needed.
    })
}

const heroPageAnimation = () => {
    const tl = gsap.timeline({
        ease: Expo.easeInOut,
    })

    tl.from('#nav', {
        y: 10,
        opacity: 0,
        duration: 2,
    })
        .to('.boundingelm', {
            transform: 'translateY(0)',
            duration: 1.5,
            stagger: 0.2,
        })
        .from('#hero-footer', {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
        })
}

const clientPageAnimation = () => {
    const companies = document.querySelectorAll('.experience--company')
    companies.forEach((company) => {
        const companyImg = company.querySelector('img')
        const circleMouseFollower = document.querySelector('#myMouse')
        let rotate = 0

        const handleMove = (e) => {
            const h1 = company.querySelector('h1')
            console.log(h1.textContent)
            const y = e.clientY - company.getBoundingClientRect().top
            const x = e.clientX
            const diffX = x - rotate
            rotate = x
            let rotateDiff = gsap.utils.clamp(-20, 20, diffX)

            gsap.to(companyImg, {
                top: y,
                left: x,
                opacity: 1,
                rotate: rotateDiff * 0.8,
                transform: 'translate(-50%, -50%)',
                ease: Power3,
            })
        }

        company.addEventListener('mouseover', (e) => {
            circleMouseFollower.classList.remove('minicircle')
            circleMouseFollower.classList.add('megacircle')
            circleMouseFollower.textContent = 'View'
            companyImg.style.display = 'block'
            company.addEventListener('mousemove', handleMove)
        })

        company.addEventListener('mouseleave', (e) => {
            company.removeEventListener('mousemove', handleMove)
            gsap.to(companyImg, {
                opacity: 0,
                ease: Power3,
                duration: 0.3,
            })
            companyImg.style.display = 'none'
            circleMouseFollower.textContent = ''
            circleMouseFollower.classList.remove('megacircle')
            circleMouseFollower.classList.add('minicircle')
        })
    })
}

circleMouseMotionFuction()
heroPageAnimation()
clientPageAnimation()
