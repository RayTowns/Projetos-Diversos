let carsModels = [
    {
        id: 1,
        marca: 'vw',
        ano: 2018,
        portas: 4,
        modelo: 'polo',
        km: 5000
    },

    {
        id: 2,
        marca: 'citroen',
        ano: 2020,
        portas: 4,
        modelo: 'cactus',
        km: 10500
    },

    {
        id: 3,
        marca: 'vw',
        ano: 2015,
        portas: 2,
        modelo: 'new beatle',
        km: 5000
    },

    {
        id: 4,
        marca: 'fiat',
        ano: 2022,
        portas: 4,
        modelo: 'argos',
        km: 2000
    }
]

function getCars(){
    return carsModels
}

export default getCars()