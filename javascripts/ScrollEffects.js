gsap.registerPlugin(ScrollTrigger);

function getCenter(element) {
    return {
        centerX: (element.getBoundingClientRect().left + element.offsetWidth / 2),
        centerY: (element.getBoundingClientRect().top + element.offsetHeight / 2)
    };
}
function refreshAll()
{
    if (window.innerWidth /window.innerHeight > 1355 / 1309){
        gsap.to("canvas#canvas",
            {
                scrollTrigger:
                {
                    trigger: "#desc",
                    start: "top 30%",
                    endTrigger: "#details",
                    end: "top 30%",
                    scrub: true,
                    ease: "power1"
                },
                rotation: 0,
                scale: 3,
                y: -0.480 * window.innerHeight
            })
    
        const scale = 0.95
        let correctionY = (document.querySelector("#cardsocket").getBoundingClientRect().top - document.querySelector("#cardsocket").getBoundingClientRect().bottom) * (1 - scale) / 2
        let correctionX = (document.querySelector("#cardsocket").getBoundingClientRect().left - document.querySelector("#card").getBoundingClientRect().left) * (1 - scale) / 2
    
        let moveCardByY = (document.querySelector("#cardsocket").getBoundingClientRect().top - document.querySelector("#card").getBoundingClientRect().top) + correctionY
        let moveCardByX = window.innerHeight < 1300 ? 0 : (document.querySelector("#cardsocket").getBoundingClientRect().left - document.querySelector("#card").getBoundingClientRect().left) + correctionX
    
        /*let moveCardByY = getCenter( document.querySelector("#cardsocket") ).centerY - getCenter( document.querySelector("#card") ).centerY + correctionY
        let moveCardByX = getCenter( document.querySelector("#cardsocket") ).centerX - getCenter( document.querySelector("#card") ).centerX + correctionX
            */
    
        gsap.to("#card",
            {
                scrollTrigger:
                {
                    trigger: "#details",
                    start: "top 50%",
                    toggleActions: "play pause resume reverse",
                    ease: "power2"
                },
                y: moveCardByY,
                x: moveCardByX
            })
    
    
        gsap.to("#card",
            {
                scrollTrigger:
                {
                    trigger: "#details",
                    start: "top 40%",
                    end: "top 15%",
                    scrub: true,
                },
                css: { "transform": "scale(0.95)", "filter": "drop-shadow(black 0px 0px 0px)" },
            })
    }
    
    gsap.to("#details",
        {
            scrollTrigger:
            {
                trigger: "#details",
                start: "top 20%",
                end: "bottom 0%",
                toggleClass: "colored"
            },
        })
    
    // Skills
    
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
    
    // Projects
    
    gsap.to("#projects-underline",
        {
            scrollTrigger:
            {
                trigger: "#projects-underline",
                start: "center 94%",
                end: "center center",
                scrub: true,
                ease: "power1"
            },
            width: "20vh"
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
    
    /*
    setTimeout(() => {
        document.querySelectorAll(".cover").forEach(element => {
            gsap.to(element,
                {
                    scrollTrigger: 
                    {
                        trigger: element.parentNode,
                        start: "top 90%",
                        endTrigger: element.parentNode,
                        end: "top 20%",
                        scrub: true,
                        ease: "power1",
                        markers: true
                    },
                    rotation: 120,
                    scale: 3,
                    x: -0.888*screen.height
                })
    });}, 1);*/
    
    const navSections = [
        document.getElementById("#n-introduction"),
        document.getElementById("#n-details"),
        document.getElementById("#n-skills"),
        document.getElementById("#n-projects"),
        document.getElementById("#n-contact")
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
}
refreshAll();
if (!window.matchMedia('(max-width: 700px)').matches) {
    window.addEventListener('resize', () => {window.location.reload();});
}
