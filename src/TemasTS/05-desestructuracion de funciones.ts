

export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:'Sony erickson',
    precio:1298
}
const tablet:Producto={
    desc:'Ipad Air',
    precio:2583
}
function calcularIva(productos:Producto[]):number{
    let total= 0;
    productos.forEach((producto)=>{
        total+=producto.precio
    })
    return total*0.16
}
const articulo1=[telefono,tablet];
const iva1=calcularIva(articulo1)
console.log(`IVA: ${iva1}`)

export function calcularIva2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return[tatal,total1*0.16];
}
const articulo2=[telefono,tablet];
const [total,iva]=calcularIva2(articulo2);
console.log(`Total: ${total}`);
console.log(`IVA ${iva}`)