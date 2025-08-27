const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
    {
        id: 1,
        name: "Atlantic Haulers",
        dockId: 2
    },
    {
        id: 2,
        name: "Coastal Freight",
        dockId: 4
    },
    {
        id: 3,
        name: "River Runners",
        dockId: 1
    },
    {
        id: 4,
        name: "Pacific Shipping",
        dockId: 2
    },
    {
        id: 5,
        name: "Gulf Cargo",
        dockId: 3
    }
],
    cargoShips: [
    {
        id: 1,
        name: "Esso Atlantic",
        haulerId: 3
    },
    {
        id: 2,
        name: "Triton",
        haulerId: 2
    },
    {
        id: 3,
        name: "Neptune",
        haulerId: 1
    },
    {
        id: 4,
        name: "Abyssal",
        haulerId: 4
    }
]
}

export const getDocks = () => {
    return structuredClone(database.docks);
}

export const getHaulers = () => {
    return structuredClone(database.haulers);
}

export const getCargoShips = () => {
    return structuredClone(database.cargoShips);
}