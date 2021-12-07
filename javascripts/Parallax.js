const items = document.querySelectorAll('.parallax');

items.forEach(element => {
    const speed = element.getAttribute('parallax-speed');
    document.addEventListener('mousemove', (e) => 
    {
        const x = (window.innerWidth - e.pageX*speed)/150
        const y = (window.innerHeight - e.pageY*speed)/150
        element.style.transform = `translate(${x}px, ${y}px)`
    })
});