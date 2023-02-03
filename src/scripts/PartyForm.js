import { sendReservation } from "./dataAccess.js"


export const PartyForm = () => {
    let html = `
        <div class="field">
            <div class="label">
            <label for="name">Name</label>
            </div>
            <div>
            <input type="text" name="userName" class="input" />
            </div>
        </div>
        <div class="field">
            <div class="label">
            <label for="childName">Child's Name</label>
            </div>
            <div>
            <input type="text" name="childName" class="input" />
            </div>
        </div>
        <div class="field">
            <div class="label">
            <label for="numOfChildren">Estimated # Of Attendees</label>
            </div>
            <div>
            <input type="number" name="numOfChildren" class="input" />
            </div>
        </div>
        <div class="field">
            <div class="label">
            <label for="partyAddress">Address of Party</label>
            </div>
            <div>
            <input type="text" name="partyAddress" class="input" />
            </div>
        </div>
        <div class="field">
            <div class="label">
            <label for="eventDate">Event Date</label>
            </div>
            <div>
           <input type="date" name="eventDate" class="input" />
            </div>
        </div>
        <div class="field">
            <div class="label">
            <label for="eventDuration">Duration of Event (Hours)</label>
             </div>
            <div>
            <input type="number" name="eventDuration" class="input" />
           </div>
       </div>


        <button class="button" id="submitRequest">Book A Reservation</button>
    `

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='userName']").value
        const nameOfChild = document.querySelector("input[name='childName']").value
        const numOfAttendees = document.querySelector("input[name='numOfChildren']").value
        const address = document.querySelector("input[name='partyAddress']").value
        const eventDate = document.querySelector("input[name='eventDate']").value
        const eventDuration = document.querySelector("input[name='eventDuration']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            name: userName,
            childName: nameOfChild,
            numOfChildren: numOfAttendees,
            partyAddress: address,
            dateOfReso: eventDate,
            numOfHours: eventDuration
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})