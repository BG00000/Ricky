function handleExploreExpand () {
    const exploreExpand = document.getElementById('explore-expand')
    const navHoverElements = document.querySelectorAll('.nav-hover-element')

    //handle mouse over event
    navHoverElements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            exploreExpand.style.display = 'flex'
            element.style.color = "var(--themeBlue)"
    
            let testItem = document.getElementById(element.id + '-expand')
            testItem.style.display = 'flex'

        })
    })

    //handle mouse out event
    navHoverElements.forEach((element) => {
        element.addEventListener('mouseout', () => {
            
            exploreExpand.style.display = 'none'

            let testItem = document.getElementById(element.id + '-expand')
            testItem.style.display = 'none'
            element.style.color = 'var(--navText)'

            exploreExpand.onmouseover = () => {
                exploreExpand.style.display = 'flex'
                testItem.style.display = 'flex'
                element.style.color = 'var(--themeBlue)'

            }

            exploreExpand.onmouseout = () => {
                exploreExpand.style.display = 'none'
                testItem.style.display = 'none'
                element.style.color = 'var(--navText)'
            }
        })
    })
}

handleExploreExpand()

function handleSubmitForm() {
    const submitBtn = document.getElementById('form-submit-btn')
    const resetBtn = document.getElementById('form-reset-btn')
    const submitMessage = document.getElementById('submit-message')
    submitBtn.addEventListener('click', () => {
    submitMessage.style.display = 'flex'

    submitBtn.style.display = 'none'
    resetBtn.style.display = 'none'
    })
}

handleSubmitForm()