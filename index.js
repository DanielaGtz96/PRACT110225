//let index = 1;

//while (index <=10){
//    console.log ('iteracion','index');
//    index ++
//} 

//for (let index = 1; index <= 20; index++){
//    console.log('iteracion', index)
//}

//const emojis = ['rojo','blanco','30','700','agua']

//for (let index =0; index < emojis.length; index++){
//    console.log ('iteracion', index);
//    console.log(emojis [index]);
//}

/*let usuarioMarca = prompt ('Ingresa la marca que buscas')
let usuarioColor = prompt ('Ingresa el color que buscas')

const autos =[
    { marca: 'toyota', modelo: 'corolla', color: 'azul'},
    { marca: 'ford', modelo: 'lobo', color: 'negro'},
    { marca: 'bmw', modelo: 'x4', color: 'blanco'},
    { marca: 'audi', modelo: 'a5', color: 'rojo'},
    { marca: 'chevrolet', modelo: 'silveralo', color: 'rojo'},
    { marca: 'mercedes benz', modelo: 'g63', color: 'azul'}
]

//FILTRAR X MARCA
let autoBuscado = null;

for(let index = 0; index < autos.length; index++){
    if (autos[index].marca === usuarioMarca){
        autoBuscado = autos [index]
        break;
    }
}

if (autoBuscado){
    console.log ('Auto encontrado', autoBuscado);
} else{
    console.log ('No se encontro la marca')
}

//FILTRAR X COLOR

const autosdecolor= []

for (let index = 0; index < autos.length; index++){
    if(autos[index].color === usuarioColor){
        autosdecolor.push(autos[index])
    }
}

console.log('Lista de autos de color:', autosdecolor)
*/

// Recorremos los números del 1 al 100
for (let mul = 1; mul <= 100; mul++) {
    // Verificamos si el número es múltiplo de 3 y de 5
    if (mul % 3 === 0 && mul % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Verificamos si el número es múltiplo de 3
    else if (mul % 3 === 0) {
        console.log("Fizz");
    }
    // Verificamos si el número es múltiplo de 5
    else if (mul % 5 === 0) {
        console.log("Buzz");
    }
    // Si no es múltiplo de 3 ni de 5, imprimimos el número
    else {
        console.log(mul);
    }
}