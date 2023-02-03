import { fetchCompletions, fetchReservations, fetchClowns } from "./dataAccess.js"
import { ClownsForRent } from "./ClownsForRent.js"



const mainContainer = document.querySelector("#container")




mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)






const render = () => {
    fetchReservations()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = ClownsForRent()
            }
        )
}

render()