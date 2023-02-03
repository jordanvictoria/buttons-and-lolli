const reservationState = {
    reservations: [],
    clowns: [],
    completions: []
    }


    const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (resos) => {
                // Store the external state in application state
                reservationState.reservations = resos
            }
        )
}
 


export const getReservations = () => {
    return reservationState.reservations.map(reso => ({...reso}))
}




const mainContainer = document.querySelector("#container")




export const sendReservation = (reso) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reso)
    }


    return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}












export const deleteRequest = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

















export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                reservationState.clowns = data
            }
        )
}



export const getClowns = () => {
    return reservationState.clowns.map(clown => ({...clown}))
}
















export const saveCompletion = (completion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }

    return fetch(`${API}/completions`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}






export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completionsData) => {
                // Store the external state in application state
                reservationState.completions = completionsData
            }
        )
}




export const getCompletions = () => {
    return reservationState.completions.map(complete => ({...complete}))
}