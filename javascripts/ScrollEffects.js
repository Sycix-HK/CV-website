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
})
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