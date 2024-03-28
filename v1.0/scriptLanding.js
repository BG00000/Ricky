function handleScrollPrompt () {
    const scrollPrompt = document.getElementById('scroll-prompt')

    window.addEventListener('scroll', () => {

        scrollInfo = window.scrollY / 1000
        arrowOpacity = 1 - 3 * (scrollInfo)

        if(scrollInfo === 0) {
            scrollPrompt.style.opacity = 1
        } else if(scrollInfo > 0) {
            scrollPrompt.style.opacity = `${arrowOpacity}`
        }

        //I don't want it to run in the background if the user scrolls far

        if(arrowOpacity < 0) {
            scrollPrompt.style.display = "none"
            scrollPrompt.style.opacity = 0
        } else if(arrowOpacity > 0) {
            scrollPrompt.style.display = "inline"
        }
    })
}

handleScrollPrompt()
