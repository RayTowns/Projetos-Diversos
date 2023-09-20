import cars from './cars.js';

let toFilter = cars.filter((cars)=> {
    return cars.portas === 2
})

console.log(toFilter)

//document.getElementById('main').innerHTML = toFilter.length + '<br> são os carros que possuem 02 portas'

let kmRodados = cars.reduce((prev, next) =>{
    return {km: prev.km + next.km}
})

//document.getElementById('main').innerHTML = kmRodados.km + '<br> é o total dos Km Rodados pelos 04 carros selecionados'

let milhasRodadas = cars.map((cars)=> {
    return (cars.km)/1.6
})

document.getElementById('main').innerHTML = milhasRodadas + '<br> é o total em milhas rodadas pelos 04 carros selecionados.'