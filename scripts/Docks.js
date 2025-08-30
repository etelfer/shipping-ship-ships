import { getDocks, getHaulers } from "./database.js"

const haulers = getHaulers()

export const DockList = () => {
    const docks = getDocks()

    document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target

        if (clickedItem.dataset.type === "dock"){

        const dockId = parseInt(clickedItem.dataset.id)
        const dockLocation = clickedItem.dataset.location
        const servicedHaulers = []

            for (const hauler of haulers) {
                if (hauler.dockId === dockId) {
                servicedHaulers.push(hauler.name)
            }
        }
        if (servicedHaulers.length === 0) {
            window.alert (`The ${dockLocation} dock is currently unloading nothing`)
        }
        else {
        window.alert(`The ${dockLocation} dock is currently unloading ${servicedHaulers}`)
         }
    }
}
)

    let docksHTML = "<h2>Docks</h2><ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string


        docksHTML += `<li data-type="dock" 
                        data-id="${dock.id}"
                        data-location="${dock.location}"
                        data-volume="${dock.volume}"
                        >${dock.location} can hold ${dock.volume} million tons of cargo.</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}