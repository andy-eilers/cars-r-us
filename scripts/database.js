const database = {
    colors: [    
        { id: 1, color: "Silver", price: 250 },
        { id: 2, color: "Midnight Blue", price: 120 },
        { id: 3, color: "Firebrick Red", price: 175 },
        { id: 4, color: "Spring Green", price: 225 },
    ],
    interiors: [
        { id: 1, color: "Beige", material: "Fabric", price: 450 },
        { id: 2, color: "Charcoal", material: "Fabric", price: 525 },
        { id: 3, color: "White", material: "Leather", price: 775 },
        { id: 4, color: "Black", material: "Leather", price: 850 },
    ],
    technologies: [
        { id: 1, name: "Basic Package",  equipment: "Sound", price: 650 },
        { id: 2, name: "Navigation Package",  equipment: "Navigation", price: 675 },
        { id: 3, name: "Visibility Package",  equipment: "Cameras", price: 459 },
        { id: 4, name: "Ultra Package",  equipment: "Navigation and Cameras", price: 1000 },
    ],
    wheels: [
        { id: 1, size_inches: 17, type: "Radial", color: "Silver", price: 650 },
        { id: 2, size_inches: 17, type: "Radial", color: "Black", price: 700 },
        { id: 3, size_inches: 18, type: "Spoke", color: "Silver", price: 850 },
        { id: 4, size_inches: 18, type: "Spoke", color: "Black", price: 900 },
    ],
    customOrders: [
        {
            id: 1,
            colorId: 4,
            technologyId: 4,
            wheelId: 2,
            timestamp: 8675309
        }
    ]
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}