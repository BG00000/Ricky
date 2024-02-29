
// I just wrote this to make my CSS look more clean ;)

const exploreButtonColors = [
    '#ff593f',
    '#ff753f',
    '#ff9f3f',
    '#B3D885',
    '#88D798',
    '#5DD5AB',
    '#3CDBD3',
    '#1EEDE4',
    '#00FFF5'
]

const exploreBarBottom = document.getElementById('explore-bar-bottom')
const exploreBarButtons = exploreBarBottom.querySelectorAll('button')

exploreBarButtons.forEach((element, index) => {
    element.style.backgroundColor = exploreButtonColors[index]
})