function handleExploreExpand () {
    const exploreExpand = document.getElementById('explore-expand')
    const navHoverElements = document.querySelectorAll('.nav-hover-element')
    const exploreBarArea = document.getElementById('explore-bar-area')

    //handle mouse over event
    navHoverElements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            exploreExpand.style.display = 'flex'
    
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

            exploreExpand.onmouseover = () => {
                exploreExpand.style.display = 'flex'
                testItem.style.display = 'flex'
            }

            exploreExpand.onmouseout = () => {
                exploreExpand.style.display = 'none'
                testItem.style.display = 'none'
                
            }
        })
    })
}

handleExploreExpand()