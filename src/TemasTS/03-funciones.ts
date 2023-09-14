
//Funciones

//funcion 1
function sumar(a:number,b:number):number{
    return a+b;
}
const resultado=sumar(4,6);

console.log(resultado);

//funcion 2
function multiplicar(n1:number, otronumero:number, base:number=3):number{
    let tem=n1*base;
     return tem;
}

console.log(multiplicar(3,5));

//funcion 3
interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;

}
function calcular(mascota:Mascotas, x:number):void{

    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascotas={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ', this.edad);
    },
}
calcular(nuevaMascota, 3);