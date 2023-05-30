let opcionUno = 0, opcionDos = 0, opcionTres = 0, opcionCuatro = 0, opcionCinco = 0, opcionSeis = 0;
let masVeces = 0, menosVeces = 0, ejecuciones = 0;
let menu;

function ordenarNumeros() {
    let numeroUno = Number(prompt('Ingrese un número: '))
    let numeroDos = Number(prompt('Ingrese un número: '))
    let numeroTres = Number(prompt('Ingrese un número: '))
    if (numeroUno < numeroDos) {
        if (numeroUno < numeroTres) {
            if (numeroDos < numeroTres) {
                console.log(`menor a mayor:\n${numeroUno}\n${numeroDos}\n${numeroTres}`);
                console.log(`mayor a menor:\n${numeroTres}\n${numeroDos}\n${numeroUno}`);
            } else {
                console.log(`menor a mayor:\n${numeroUno}\n${numeroTres}\n${numeroDos}`);
                console.log(`mayor a menor:\n${numeroDos}\n${numeroTres}\n${numeroUno}`);
            }
        }
    } else if (numeroDos < numeroTres) {
        if (numeroUno < numeroTres) {
            console.log(`menor a mayor:\n${numeroDos}\n${numeroUno}\n${numeroTres}`);
            console.log(`mayor a menor:\n${numeroTres}\n${numeroUno}\n${numeroDos}`);
        } else {
            console.log(`menor a mayor:\n${numeroDos}\n${numeroTres}\n${numeroUno}`);
            console.log(`mayor a menor:\n${numeroUno}\n${numeroTres}\n${numeroDos}`);
        }
    } else if (numeroTres < numeroUno) {
        if (numeroUno < numeroDos) {
            console.log(`menor a mayor:\n${numeroTres}\n${numeroUno}\n${numeroDos}`);
            console.log(`mayor a menor:\n${numeroDos}\n${numeroUno}\n${numeroTres}`);
        } else {
            console.log(`menor a mayor:\n${numeroTres}\n${numeroDos}\n${numeroUno}`);
            console.log(`mayor a menor:\n${numeroUno}\n${numeroDos}\n${numeroTres}`);
        }
    }
}

const areaCirculo = () => {
    let radio = Number(prompt('Ingrese el radio: (en cm)'))
    let area = 3.1416 * (radio ** 2)
    console.log('El área de la circunferencia es: ' + parseInt(area) + 'cm');
}

const triangulos = () => {
    let ladoUno = Number(prompt('Ingrese la medida un lado: (en cm)'))
    let ladoDos = Number(prompt('Ingrese la medida un lado: (en cm)'))
    let ladoTres = Number(prompt('Ingrese la medida un lado: (en cm)'))
    if (ladoUno != ladoDos && ladoUno != ladoTres && ladoDos != ladoTres) {
        console.log(`Es un triángulo escaleno`);
    } else if (ladoUno == ladoDos && ladoUno != ladoTres) {
        console.log(`Es un triángulo isósceles`);
    } else if (ladoUno == ladoTres && ladoUno != ladoDos) {
        console.log(`Es un triángulo isósceles`);
    } else if (ladoDos == ladoTres && ladoDos != ladoUno) {
        console.log(`Es un triángulo isósceles`);
    } else if (ladoUno == ladoDos && ladoUno == ladoTres && ladoDos == ladoTres) {
        console.log(`Es un triángulo equilatero`);
    }
}

const numerosAmigos = () => {
    let primerNumero = Number(prompt('Ingrese un número: '))
    let segundoNumero = Number(prompt('Ingrese un número: '))
    let acumuladorUno = 0, acumuladorDos = 0;
    for (let i = 1; i < primerNumero; i++) {
        if (primerNumero % i == 0 && primerNumero > 0) {
            acumuladorUno += i
        }
    }
    for (let k = 1; k < segundoNumero; k++) {
        if (segundoNumero % k == 0 && segundoNumero > 0) {
            acumuladorDos += k
        }
    }
    if (acumuladorUno == segundoNumero && acumuladorDos == primerNumero) {
        console.log(`${primerNumero} y ${segundoNumero} son números amigos`);
    } else {
        console.log(`${primerNumero} y ${segundoNumero} no son números amigos`);
    }
}
do {
    menu = Number(prompt('Menu\n1- Ordenar números\n2- Área de una circunferencia\n3- Tipos de triángulo\n4- Números amigos\n5- Génerar valor de compra\n6- Nota de un estudiante\n7- Cerrar'))
    switch (menu) {
        case 1:
            ordenarNumeros()
            opcionUno++
            break;
        case 2:
            areaCirculo()
            opcionDos++
            break;
        case 3:
            triangulos()
            opcionTres++
            break;
        case 4:
            numerosAmigos()
            opcionCuatro++
            break;
        case 5:

            opcionCinco++
            break;
        case 6:
            opcionSeis++
            break;
    }
} while (menu >= 1 && menu < 7);

console.log(`Número de ejecuciones:\nEjercicio 1: ${opcionUno}\nEjercicio 2: ${opcionDos}\nEjercicio 3: ${opcionTres}`);
console.log(`Ejercicio 4: ${opcionCuatro}\nEjercicio 5: ${opcionCinco}\nEjercicio 6: ${opcionSeis}`);
