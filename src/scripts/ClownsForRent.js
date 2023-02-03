import { PartyForm } from "./PartyForm.js"
import { Reservations } from "./Reservations.js"

export const ClownsForRent = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${PartyForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Reservations()}
        </section>
    `
}