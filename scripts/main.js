// invoking functions imported from destinations and guests that will inject HTML into the DOM
import { DockList } from "./Docks.js";
import { HaulerList } from "./shipHaulers.js";
import { CargoShipList } from "./cargoShips.js";

const docksHTML = DockList();
const haulersHTML = HaulerList();
const cargoShipsHTML = CargoShipList();

document.querySelector(".docks").innerHTML = docksHTML;
document.querySelector(".haulers").innerHTML = haulersHTML;
document.querySelector(".cargoShips").innerHTML = cargoShipsHTML;
