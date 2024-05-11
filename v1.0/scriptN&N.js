function handleNandn() {
    const pLost = document.querySelectorAll(".p-lost")
    const pGain = document.querySelectorAll(".p-gain")
    
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

    net = lostSum + gainSum

    console.log(lostArr)
    console.log(gainArr)
    console.log(lostSum)
    console.log(gainSum)
    console.log(net)
}

handleNandn()