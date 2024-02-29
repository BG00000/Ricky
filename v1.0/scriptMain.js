
// I just wrote this to make my CSS look more clean ;)

const exploreButtonColors = [
    '#b8ff7d',
    '#b8ff7d',
    '#b8ff7d',
    '#7dffc2',
    '#b8ff7d',
    '#b8ff7d',
    '#b8ff7d',
    '#b8ff7d',
    '#7dffc2'
]

const exploreBarBottom = document.getElementById('explore-bar-bottom')
const exploreBarButtons = exploreBarBottom.querySelectorAll('button')

exploreBarButtons.forEach((element, index) => {
    element.style.backgroundColor = exploreButtonColors[index]
})