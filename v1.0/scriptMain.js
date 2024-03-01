
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
    const expandAboutRicky = document.getElementById('expand-about-ricky')

    //buttons (hover)

    const aboutRickyBtn = document.getElementById('about-ricky-btn')


    aboutRickyBtn.addEventListener('mouseover', () => {
        exploreExpand.style.display = 'flex'
        expandAboutRicky.style.display = 'flex'
    })

    exploreExpand.addEventListener('mouseover', () => {
        exploreExpand.style.display = 'flex'
        expandAboutRicky.style.display = 'flex'
    })

    aboutRickyBtn.addEventListener('mouseout', () => {
        exploreExpand.style.display = 'none'
        expandAboutRicky.style.display = 'none'
    })

    exploreExpand.addEventListener('mouseout', () => {
        exploreExpand.style.display = 'none'
        expandAboutRicky.style.display = 'none'
    })


}

handleExploreExpand()