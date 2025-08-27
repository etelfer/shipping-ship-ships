import { getHaulers } from "./database.js"


export const HaulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {


        haulersHTML += `<li data-type="hauler" 
                        data-id="${hauler.id}"
                        data-dockid="${hauler.dockId}"
                        >${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}