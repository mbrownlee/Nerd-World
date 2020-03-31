// rendering the 4 rides and users on them
const rideContainer = document.querySelector("#rideContainer")

let allHeadings=""
for (const ride of rides) {
    allHeadings += `<h2>${ride}</h2>`
}

console.log(allHeadings)
rideContainer.innerHTML=allHeadings