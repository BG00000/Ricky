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

   
   localStorage.setItem("theme", "dark")
   const themeInput = document.querySelector(".theme-input")
   const html = document.querySelector("html")



   // Check the browser preferred color scheme, and sets the defaultTheme based of that
   const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
   const defaultTheme = prefersDarkMode ? "dark" : "light";
   const preferredTheme = localStorage.getItem("theme")

   // Check if the localStorage item is set, if not set it to the default theme
   if (!preferredTheme) {
      localStorage.setItem("theme", defaultTheme);
   }

   html.dataset.theme = preferredTheme || defaultTheme;


   // Theme toggle handler
   themeInput.addEventListener("click", () => {
      // Check if the saved theme in localStorage is  "dark"
      const isDarkTheme = localStorage.getItem("theme") === "dark";
      // Chooses the opposite theme of the current selected one
      const newTheme = isDarkTheme ? "light" : "dark"
      // Changes the theme to the newTheme
      localStorage.setItem("theme", newTheme);
      html.dataset.theme = newTheme;
      console.log(localStorage.getItem("theme"))
   });
}

handleThemes()

//cookies - JSON - 

function handleCSSFiles() {
   const landingCSSLink = document.getElementById("landingCSSLink")
   const printBtn = document.getElementById("print-btn")

   printBtn.addEventListener("click", () => {
      if(landingCSSLink.href = "styleLanding.css") {
         landingCSSLink.setAttribute("href", "styleLandingAlt.css")
         console.log("hello")
      } else if (landingCSSLink.href = "styleLandingAlt.css") {
         landingCSSLink.setAttribute("href", "styleLanding.css")
         console.log("hello22")
      }
   })
}

handleCSSFiles()

let hrNum = Math.floor(Math.random() * 100 + 100) //needs to be outside the scope of handleVitalsHr() so it isn't triggered by setInterval()
let respNum = Math.floor(Math.random() * 25 + 10)

function handleVitalsHrandRespiration() {
   const hrText = document.getElementById("hr-text")
   const respText = document.getElementById("respiration-text")

   let randNum = Math.floor(Math.random() * 5) 

   if(randNum % 2 === 0) {
      hrText.innerText = hrNum + randNum
      respText.innerText = respNum + randNum
   } else {
      hrText.innerText = hrNum - randNum
      respText.innerText = respNum - randNum
   }
}

setInterval(handleVitalsHrandRespiration, 500)

function handleAsleepOrAwake() {
   const asleepOrAwake = document.getElementById("asleep-or-awake")

   let randNum = Math.random() 

   if(randNum >= 0 && randNum < 0.8) {
      asleepOrAwake.innerText = "Currently Awake"
   } else if (randNum >= 0.8) {
      asleepOrAwake.innerText = "Currently Sleeping"
   }
}

handleAsleepOrAwake()

function handleCurrentMood() {
   const currentMood = document.getElementById("current-mood")

   let randNum = Math.random()

   if(randNum >= 0 && randNum < 0.2) {
      currentMood.innerText = "ANGRY"
   } else if (randNum >= 0.2 && randNum < 0.4) {
      currentMood.innerText = "Happy"
   } else if (randNum >= 0.4 && randNum < 0.6) {
      currentMood.innerText = "Hungry"
   } else if (randNum >= 0.6 && randNum < 0.7) {
      currentMood.innerText = "Scared"
   } else if (randNum >= 0.7 && randNum <= 1) {
      currentMood.innerText = "Playful"
   }
}

setInterval(handleCurrentMood, Math.floor(Math.random() * 4000 + 4000))

