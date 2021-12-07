gsap.registerPlugin(ScrollTrigger);

function getCenter(element) {
    return {
        centerX: (element.getBoundingClientRect().left + element.offsetWidth / 2),
        centerY: (element.getBoundingClientRect().top + element.offsetHeight / 2)
    };
}

/*
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

let moveCardByY = getCenter(document.querySelector("#cardsocket")) - getCenter(document.querySelector("#card"));

gsap.to("#card",
{
    scrollTrigger:
    {
        trigger: "#details",
        start: "top 80%",
        toggleActions: "play pause resume reverse",
        scrub: true,
        ease: "power2"
    },
    x: moveCardByY,
    y: -0.9 * window.innerHeight
})