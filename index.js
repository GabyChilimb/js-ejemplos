
function ejercicio1(){
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
        
    }
}
function ejercicio2() {
   let valores = [true, 5, false, "hola", "adios",2];
        if (valores[3].length < valores[4].length){
            console.log(valores[0]);
            console.log("adios es mayor que hola.");
        }else{
            console.log(valores[2]);
            console.log("No se cumple la consigna.");

        }
            console.log(valores[1] + valores[5])
            console.log(valores[1] - valores[5])
            console.log(valores[1] * valores[5])
            console.log(valores[1] / valores[5])
}
function ejercicio3(){
    var numero1= 5;
    var numero2= 8;
    if(numero1<numero2) {
        console.log("numero1 no es mayor que numero2");
        }
        if(numero2>0) {
        console.log("numero2 es positivo");
        }
        if(numero1 <0) {
        console.log("numero1 es negativo o distinto de cero");
        }
        if(numero1 +1 <numero2) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
        }
}

function ejercicio4(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E', 'T'];

let dni = document.querySelector("#dni").value;
let letrauser = document



if(dni > 0 && dni < 99999999) {
let nletra = dni % 23;

let letra = letras[nletra];

if(letra == letrauser){
    console.log("Las letras son iguales")


    console.log("La letra de tu DNI es:  "+ letra);

 }
 else{
    console.log("Es incorrecto")
 }
}
}


function ejercicio5(){

    let factor = prompt("ingrese un numero para calcular el factorial");

    let producto = 1;
    for (let i = 1; i <= factor; i++){
        producto=producto * i;
    }
    console.log("el factorial de" + factor + " es: "+producto);
}

function ejercicio6(){
    var numero= prompt("Inrgese un numero para determinar si es par o impar");
    var resto= numero%2;

    if(resto == 0 ){
        console.log("el numero es par");
    }
    else if(numero==0){
        console.log("El numero introducido es invalido");
    }

    else{
        console.log("el numero es impar");
    }
}