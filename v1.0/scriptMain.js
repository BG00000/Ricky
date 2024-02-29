
//I generate the buttons here since I struggled to make them responsive to screen size changes in the way I wanted with them in html



function resizeFn() {

    const targetVW = [900, 800, 700, 600, 500, 400]

    let j = 0

    const exploreButtonNames = ['About Ricky', 'Naughty & Nice', 'Fashion', 'Vitals', 'Likes & Dislikes', 'Gallery', 'Interview', 'Pedigree', 'Friends']

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
    
    for (let i = 0; i <= 8; i++) {

        const exploreBarBottom = document.getElementById('explore-bar-bottom')
    
        const exploreBarButtons = document.createElement('button')
        exploreBarButtons.id = i
        exploreBarButtons.innerText = exploreButtonNames[i]
        exploreBarButtons.style.backgroundColor = exploreButtonColors[i]
        exploreBarBottom.appendChild(exploreBarButtons)
    
        if (window.innerWidth <= targetVW[j]) {
            
        }

        .style.backgroundColor = 
    }

}

window.addEventListener('resize', resizeFn, true)

resizeFn()








