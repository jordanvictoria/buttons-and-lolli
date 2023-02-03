import { getClowns, getReservations, saveCompletion, deleteRequest, getCompletions } from "./dataAccess.js"






const convertReservationToListElement = (reso) => {
    let html = ""
    const completions = getCompletions()
    const assignedClown = completions.find(completion => parseInt(completion.resoId) === reso.id)
    if (assignedClown) {
        html += `<li id="${reso.id}" /> ${reso.childName}'s Party - ${reso.dateOfReso}
        <button class="request__delete"
            id="reso--${reso.id}">
            Delete
        </button>
    </li>`
     } else { 
    const clowns = getClowns()
    html += `<li id="${reso.id}" /> ${reso.childName}'s Party - ${reso.dateOfReso}
        <select class="clowns" id="clowns">
            <option value="">Choose</option>
                ${
                    clowns.map(
                        clown => {
                            return `<option value="${reso.id}--${clown.id}">${clown.name}</option>`
                        }
                    ).join("")
                }
        </select>
        <button class="request__delete"
            id="reso--${reso.id}">
            Delete
        </button>
    </li>`
            }
    return html
}



const newArr = (reso) => {
    const completions = getCompletions()
    const assignedClown = completions.find(completion => parseInt(completion.resoId) === reso.id)
    if (assignedClown) {
        reso.clownAssigned = true;
        return reso
    } else {
        reso.clownAssigned = false;
        return reso
    }
}



export const Reservations = () => {
    const reservations = getReservations()
    const clownAssignment = reservations.map(newArr)
    const sortedByDate = clownAssignment.sort((a, b) => {
        let da = new Date(a.dateOfReso);
        let db = new Date(b.dateOfReso);
        return da - db;
    })

    const sortedByClown = sortedByDate.sort((a, b) => a.clownAssigned - b.clownAssigned)

    const reservationList = sortedByClown.map(convertReservationToListElement).join("")
    let html = `
        <ul>
            ${reservationList}
        </ul>
    `

    return html
}











const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reso--")) {
        const [,resoId] = click.target.id.split("--")
        deleteRequest(parseInt(resoId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [resoId, clownId] = event.target.value.split("--")
            const completion = { 
            }

            completion.resoId = resoId 
            completion.clownId = clownId
            completion.date_created = Date.now()
           
            saveCompletion(completion)

        }
    }
)