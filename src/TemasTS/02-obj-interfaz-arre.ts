

interface IAlumno{
    matricula?: number; //el signo hace que sea opcional
    nombre: string;
    edad: number;
    email: string;
}



const alumno:IAlumno={
    nombre:'roberto',
    edad:35,
    email:'rcardiel@gmail.com',
}

console.table(alumno)

//Arreglo

let mascotas=['perro', 'gato', 'perico'];

mascotas[1]='nuevo gato';
mascotas.push() //Push es para actualizar
console.log(mascotas);

let tem:(number|string)[]=[];
tem.push(11);
tem.push('Nombre');
console.log(tem);