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

