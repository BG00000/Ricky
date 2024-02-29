//--->disable scroll for animation duration!!<------


window.onload = () => { //loading animation

    const loadingAnimation = document.getElementById('loading-animation')
    const loadingCover = document.getElementById('loading-cover')

    let array = []
    let loadWord = 'Ricky.'

    loadingCover.style.backgroundColor = 'white'

    for(let i = 0; i < loadWord.length; i++) {
        array.push(loadWord[i])
    }

    function animateTyping () {
        array.forEach((element, index) => {
            let interval = 100
            setTimeout(() => {
                loadingAnimation.innerText += element
            }, index * interval)
        })
    }

    setTimeout(animateTyping, 80)

    function animateJump() {
        loadingAnimation.style.transform = "translateY(-200px)"
    }

    setTimeout(animateJump, 400)

    function finishAnimation() {
        loadingAnimation.style.transform = "translateY(-400px)"
        loadingAnimation.style.opacity = '0' 
        loadingCover.style.opacity = '0'
    }

    setTimeout(finishAnimation, 1000)

    function removeCover () {
        loadingCover.style.display = 'none'
    }

    setTimeout(removeCover, 1300)
}

