import { getHaulers, getCargoShips } from "./database.js"

const cargoShips = getCargoShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "hauler"){

        const haulerId = parseInt(itemClicked.dataset.id)

        let hauledShips = 0

            for (const ship of cargoShips) {
                if (ship.haulerId === haulerId) {
                    hauledShips++ 
            }
         }
        window.alert(`This hauler is carrying ${hauledShips} cargo ships.`)

    }
}
)


export const HaulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<h2>Ship Haulers</h2><ul>"

    for (const hauler of haulers) {


        haulersHTML += `<li data-type="hauler" 
                        data-id="${hauler.id}"
                        data-dockid="${hauler.dockId}"
                        >${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}