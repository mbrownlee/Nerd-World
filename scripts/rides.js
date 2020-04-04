// rendering the 4 rides and users on them
const rideContainer = document.querySelector("#rideContainer")
const showMeRiders = () => {

    let allHeadings=""
    for (const ride of rideObjects) {
        allHeadings += `<h2>${ride.name}</h2>
        <ul>
            ${
                ride.riders.map(
                    (rider) => {
                        return `<li>${rider}</li>`
                    }
                )
            }
        </ul>
        `
    }
    
    console.log(allHeadings)
    rideContainer.innerHTML=allHeadings
}
showMeRiders()