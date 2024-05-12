function handleNandn() {
    const pLost = document.querySelectorAll(".p-lost")
    const pGain = document.querySelectorAll(".p-gain")
    const htmlGain = document.querySelector(".html-gain")
    const htmlLost = document.querySelector(".html-lost")
    const htmlNet = document.querySelector(".html-net")
    const nandnStandingResult = document.querySelector(".nandn-standing-result")
    const currentPosition = document.querySelector(".current-position")
    
    let lostArr = []
    let gainArr = []

    let lostSum = 0
    let gainSum = 0
    let net = 0

    pLost.forEach((el) => {
        lostArr.push(parseInt(el.innerHTML))
    })

    for(let i = 0; i < lostArr.length; i ++) {
        lostSum += lostArr[i]
    }

    pGain.forEach((el) => {
        gainArr.push(parseInt(el.innerHTML))
    })

    for(let i = 0; i < gainArr.length; i ++) {
        gainSum += gainArr[i]
    }

    net = gainSum - lostSum

    if(net > 0) {
        nandnStandingResult.innerText = "Yes."
        nandnStandingResult.style.color = "var(--niceGreen)"
        currentPosition.style.color = "var(--niceGreen)"
    } else {
        nandnStandingResult.innerText = "No."
        nandnStandingResult.style.color = "var(--naughtyRed)"
        currentPosition.style.color = "var(--naughtyRed)"
    }

    htmlGain.innerText = gainSum
    htmlLost.innerText = lostSum
    htmlNet.innerText = net
}

handleNandn()