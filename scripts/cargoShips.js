import { getCargoShips, getHaulers } from "./database.js"

const haulers = getHaulers()

export const CargoShipList = () => {
    const cargoShips = getCargoShips()

    let cargoShipsHTML = "<h2>Cargo Ships</h2><ul>"

    for (const cargoShip of cargoShips) {
        // Convert each cargoShip object to an <li> and append to the cargoShipsHTML string


        cargoShipsHTML += `<li data-type="cargoShip" 
                        data-id="${cargoShip.id}"
                        data-name="${cargoShip.name}"
                        data-haulerid="${cargoShip.haulerId}"
                        >${cargoShip.name}</li>`
    }

    cargoShipsHTML += "</ul>"

    return cargoShipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target

        // Was a shipping ship list item clicked?
                if (clickedItem.dataset.type === "cargoShip") {

            // Get the haulerId value of the shipping ship clicked
                    const haulerId = parseInt(clickedItem.dataset.haulerid)
                    const cargoShip = clickedItem.dataset.name
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
            for (const hauler of haulers) {
            
                // Does the haulerId foreign key match the id of the current hauler?
                if (hauler.id === haulerId){
                    // Reassign the value of `haulingShip` to the current hauler
             haulingShip = hauler
                }
            }
            // Show an alert to the user with this format...
            window.alert( `${cargoShip} is being hauled by ${haulingShip.name}`)
    
}
}
)