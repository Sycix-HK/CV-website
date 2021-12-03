const buttons = [
    {
        elementId: '#f-phone',
        text: "+36 30 232 7022"
    },
    {
        elementId: '#f-email',
        text: "hoffmann.kristof00@gmail.com"
    },
    {
        elementId: '#f-discord',
        text: "Sycix#4674"
    }
]

buttons.map(button => {
    document.getElementById(button.elementId).addEventListener('click', () => {
        try
        {
            navigator.clipboard.writeText(button.text);
            feedback = window.location.pathname.endsWith("/hu/") ? "Másolva a vágólapra" : "Copied to clipboard"
        }
        catch
        {
            feedback = window.location.pathname.endsWith("/hu/") ? "Hibás másolás" : "Copy failed"
        }
        let p = document.createElement('p')
        document.getElementById(button.elementId).appendChild(p)
        p.style.transition = "1.1s",
        p.style.ease = 'easeOutCubic'
        p.innerText = feedback
        p.style.transform = `translateY(-2vh)`
        p.style.opacity = 0
        p.style.pointerEvents = 'none'
        p.style.marginLeft = 'auto'
        p.style.marginRight = 'auto'
        p.style.position = 'absolute'
        setTimeout(() => {
            p.style.transform = `translateY(-7vh)`
            p.style.opacity = 100;
        }, 1);
        setTimeout(() => {
            p.style.opacity = 0;
            setTimeout(() => {
                //p.remove()
            }, 1100);
        }, 700);
        
    })
})