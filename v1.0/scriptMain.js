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
