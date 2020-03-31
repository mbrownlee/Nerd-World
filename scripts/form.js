// code for managing user interaction
let allOptions=""
for (const ride of rides) {
    allOptions += `<option>${ride}</option>`
}
console.log(allOptions)
const selectReference = document.querySelector("#rideSelect")
const selectButton = document.querySelector("#submit")
selectReference.innerHTML=allOptions

selectButton.addEventListener("click", () => {
    console.log("user clicked button")
})