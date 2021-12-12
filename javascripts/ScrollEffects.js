gsap.registerPlugin(ScrollTrigger);

/*
function getCenter(element) {
    return {
        centerX: (element.getBoundingClientRect().left + element.offsetWidth / 2),
        centerY: (element.getBoundingClientRect().top + element.offsetHeight / 2)
    };
}

gsap.to('#canvas',
{ 
    scrollTrigger:
    {
        trigger: "#desc",
        start: "top 30%",
        endTrigger: "#details",
        end: "top 30%",
        scrub: true,
        ease: "power1",
        markers: true,
        invalidateOnRefresh: true
    },
    rotation: 0,
    scale: 3,
    y: -0.250 * window.innerHeight
})/**/

//let moveCardByY = getCenter(document.querySelector("#cardsocket")) - getCenter(document.querySelector("#card"));
ScrollTrigger.matchMedia({
    "(min-aspect-ratio: 854/1050)": () => {
        gsap.to("#int-card",
        {
            scrollTrigger:
            {
                trigger: "#details",
                start: "top 80%",
                toggleActions: "play pause resume reverse",
                //scrub: true,
                ease: "power2"
            },
            y: -0.7 * window.innerHeight
        }),
        gsap.to('#canvas',
        {
            scrollTrigger:
            {
                trigger: "#details",
                start: "top 80%",
                toggleActions: "play pause resume reverse",
                ease: "power2"
            },
            x: -0.6 * window.innerWidth
        })
    },
});
gsap.to("#det-card",
{
    scrollTrigger:
    {
        trigger: "#details",
        start: "top 80%",
        toggleActions: "play pause resume reverse",
        //scrub: true,
        ease: "power2"
    },
    y: 0
})
gsap.to("#det-card",
{
    scrollTrigger:
    {
        trigger: "#details",
        start: "top 60%",
        end: "top 30%",
        scrub: true,
    },
    scale: 1
})

gsap.to("#det-card",
{
    scrollTrigger:
    {
        trigger: "#details",
        start: "top 60%",
        end: "top 10%",
        scrub: true,
    },
    css: { "filter": "drop-shadow(black 0px 0px 0px)" }
})

gsap.to("#details",
{
    scrollTrigger:
    {
        trigger: "#details",
        toggleActions: "play pause resume reverse",
        start: "top 20%",
        toggleClass: "colored"
    }
})

gsap.to("#skills-underline",
{
    scrollTrigger:
    {
        trigger: "#skills-underline",
        start: "center 94%",
        end: "center center",
        scrub: true,
        ease: "power1"
    },
    width: "20vh"
})
setTimeout(() => {
    document.querySelectorAll(".skill").forEach(element => {
        gsap.to(element,
            {
                scrollTrigger:
                {
                    trigger: element,
                    start: "center bottom",
                    toggleClass: "show",
                }
            })
    });
}, 1);

gsap.to("#projects-underline",
{
    scrollTrigger:
    {
        trigger: "#projects-underline",
        start: "center 96%",
        end: "center center",
        scrub: true,
        ease: "power1"
    },
    width: "26vh"
})

setTimeout(() => {
    document.querySelectorAll(".p-desc").forEach(element => {
        gsap.to(element,
            {
                scrollTrigger:
                {
                    trigger: element,
                    start: "center 94%",
                    toggleClass: "show",
                }
            })
    });
}, 1);
setTimeout(() => {
    document.querySelectorAll(".p-details").forEach(element => {
        gsap.to(element,
            {
                scrollTrigger:
                {
                    trigger: element,
                    start: "center 90%",
                    toggleClass: "show",
                }
            })
    });
}, 1);

setTimeout(() => {
    document.querySelectorAll(".project-sm ").forEach(element => {
        gsap.to(element,
            {
                scrollTrigger:
                {
                    trigger: element,
                    start: "top bottom",
                    toggleClass: "show",
                }
            })
    });
}, 1);