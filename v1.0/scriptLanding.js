function handleScrollPrompt () {
    const scrollPrompt = document.getElementById('scroll-prompt')

    window.addEventListener('scroll', () => {

        scrollInfo = window.scrollY / 1000

        if(scrollInfo === 0) {
            scrollPrompt.style.opacity = 1
        } else if(scrollInfo > 0) {
            scrollPrompt.style.opacity = `${1 - 1.5 * (scrollInfo)}`
        }

        //I don't want it to run in the background if the user scrolls far

        if(scrollInfo > 1200) {
            scrollPrompt.style.display = "none"
        } else if(scrollInfo < 1200) {
            scrollPrompt.style.display = "inline"
        }
    })
}

handleScrollPrompt()