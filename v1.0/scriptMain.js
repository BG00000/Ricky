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


function handleThemes() {

   const themeInput = document.querySelector(".theme-input")
   const html = document.querySelector("html")

   const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
   const defaultTheme = prefersDarkMode ? "dark" : "light";
   const preferredTheme = localStorage.getItem("theme")

   if (!preferredTheme) {
      localStorage.setItem("theme", defaultTheme);
   }

   html.dataset.theme = preferredTheme || defaultTheme;

   themeInput.addEventListener("click", () => {
      const isDarkTheme = localStorage.getItem("theme") === "dark";
      const newTheme = isDarkTheme ? "light" : "dark"
      localStorage.setItem("theme", newTheme);
      html.dataset.theme = newTheme;
      console.log(localStorage.getItem("theme"))
   });
}

handleThemes()


function handleCSSFiles() {

   const printBtn = document.getElementById("print-btn")

   const landingCSSLink = document.getElementById("landingCSSLink")

   printBtn.addEventListener("click", () => {
      if (landingCSSLink.getAttribute("href") === "styleLanding.css") {
         landingCSSLink.setAttribute("href", "styleAlt.css")
      } else {
         landingCSSLink.setAttribute("href", "styleLanding.css")
      }
   })
}

// handleCSSFiles()


