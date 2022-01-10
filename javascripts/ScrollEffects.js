gsap.registerPlugin(ScrollTrigger);

const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');
document.addEventListener('scroll', () =>
{
    if (window.scrollY > 20)
    {
        navbar.classList.add('nav-collapse');
        footer.classList.add('nav-collapse');
    }
    else
    {
        navbar.classList.remove('nav-collapse');
        footer.classList.remove('nav-collapse');
    }
})

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

const navSections = [
    document.getElementById("n-introduction"),
    document.getElementById("n-details"),
    document.getElementById("n-skills"),
    document.getElementById("n-projects"),
    document.getElementById("n-contact")
]
function navSetBold(i) {
    navSections.map((section) => section.classList.remove("selected"))
    navSections[i].classList.add("selected")
}
function darkenScrollbar(bool) {
    document.body.style.scrollbarFaceColor = bool ? '#252839' : '#0397D6';
}

ScrollTrigger.create({
    trigger: "#introduction",
    start: "top bottom",
    onEnter: () => { navSetBold(0) },

})
ScrollTrigger.create({
    trigger: "#details",
    start: "top center",
    onEnter: () => { navSetBold(1) },
    onLeaveBack: () => { navSetBold(0) },
})
ScrollTrigger.create({
    trigger: "#skills",
    start: "top center",
    onEnter: () => { navSetBold(2) },
    onLeaveBack: () => { navSetBold(1) },
})
ScrollTrigger.create({
    trigger: "#section-projects",
    start: "top center",
    onEnter: () => { navSetBold(3) },
    onLeaveBack: () => { navSetBold(2) },
})
ScrollTrigger.create({
    trigger: "#contact",
    start: "top center",
    onEnter: () => { navSetBold(4) },
    onLeaveBack: () => { navSetBold(3) },
})