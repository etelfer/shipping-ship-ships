import { getCargoShips } from "./database.js"


export const CargoShipList = () => {
    const cargoShips = getCargoShips()

    let cargoShipsHTML = "<h2>Cargo Ships</h2><ul>"

    for (const cargoShip of cargoShips) {
        // Convert each cargoShip object to an <li> and append to the cargoShipsHTML string


        cargoShipsHTML += `<li data-type="cargoShip" 
                        data-id="${cargoShip.id}"
                        data-haulerid="${cargoShip.haulerId}"
                        >${cargoShip.name}</li>`
    }

    cargoShipsHTML += "</ul>"

    return cargoShipsHTML
}