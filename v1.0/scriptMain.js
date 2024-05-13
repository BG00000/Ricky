function handleExploreExpand() {
    const exploreExpand = document.getElementById('explore-expand')
    const navHoverElements = document.querySelectorAll('.nav-hover-element')

    //handle mouse over event
    
    navHoverElements.forEach((element) => {
       element.addEventListener('mouseover', () => {
          exploreExpand.style.display = 'flex'
          element.style.color = "var(--prettyPink)"
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
          element.style.color = 'var(--navText)'
          exploreExpand.onmouseover = () => {
             exploreExpand.style.display = 'flex'
             testItem.style.display = 'flex'
             element.style.color = 'var(--prettyPink)'
          }
          exploreExpand.onmouseout = () => {
             exploreExpand.style.display = 'none'
             testItem.style.display = 'none'
             element.style.color = 'var(--navText)'
          }
       })
    })
}
   
handleExploreExpand()
 
function handleExplorePill() {
    const explorePill = document.getElementById('explore-pill')
    explorePill.addEventListener('mouseover', () => {
       explorePill.innerText = 'Still under construction, sorry!'
    })
    explorePill.addEventListener('mouseout', () => {
       explorePill.innerText = 'Explore'
    })
}

handleExplorePill()

function handleThemes() {
   document.documentElement.classList.add("light-theme")
}

handleThemes()