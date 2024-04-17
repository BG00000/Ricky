function galleryHover() {
    let galleryDiv = document.querySelectorAll('.gallery-div')

    galleryDiv.forEach((element) => {
        element.addEventListener('mouseover', () => {
            let descriptionID = document.getElementById(element.id + '-d')
            //I use opacity instead of display so I can use transition effects
            descriptionID.style.opacity = 1
        })

        element.addEventListener('mouseout', () => {
            let descriptionID = document.getElementById(element.id + '-d')
            descriptionID.style.opacity = 0
        })
    })
}

galleryHover()