
// I just wrote this to make my CSS look more clean ;)

// function handleButtonColors () {
//     const exploreButtonColors = [
//         '#ff593f',
//         '#ff753f',
//         '#ff9f3f',
//         '#B3D885',
//         '#88D798',
//         '#5DD5AB',
//         '#3CDBD3',
//         '#1EEDE4',
//         '#00FFF5'
//     ]
    
//     const exploreBarBottom = document.getElementById('explore-bar-bottom')
//     const exploreBarButtons = exploreBarBottom.querySelectorAll('button')
    
//     exploreBarButtons.forEach((element, index) => {
//         element.style.backgroundColor = exploreButtonColors[index]
//     })
// }

// handleButtonColors()

function handleExploreExpand () {
    const exploreExpand = document.querySelector('.explore-expand')
    const expandAboutRicky = document.getElementById('about-ricky-btn-expand')
    const exploreBarArea = document.getElementById('explore-bar-area')
    const expandNaughtAndNice = document.getElementById('naughty-and-nice-btn-expand')

    const exploreExpandInner = document.querySelector('.explore-expand-inner')

    //buttons (hover)

    const aboutRickyBtn = document.getElementById('about-ricky-btn')

    let navHoverElements = document.querySelectorAll('.nav-hover-element')

    //optimise expression repetition 

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

            //if mouse out of explore area AND element!!
        })
    })
}

handleExploreExpand()