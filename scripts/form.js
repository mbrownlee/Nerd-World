// code for managing user interaction
let allOptions=""
for (const ride of rideObjects) {
    allOptions += `<option>${ride.name}</option>`
}
console.log(allOptions)
const riderName = document.querySelector("#name")
const selectReference = document.querySelector("#rideSelect")
const selectButton = document.querySelector("#submit")
selectReference.innerHTML=allOptions

selectButton.addEventListener("click", () => {
    const enteredName = riderName.value
    const selectedRide = selectReference.value
    const foundRide = rideObjects.find(
        (currentRide) => {
            if (currentRide.name === selectedRide) {
                return true
            }
            else {
                return false
            }
            console.log(currentRide)
        }
    )
    foundRide.riders.push(enteredName)
    console.log(rideObjects)
    showMeRiders()
})

