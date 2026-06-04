
// GESTIÓN DE DATOS CON OBJETOS, SETS Y MAPS EN JAVASCRIPT

// Archivo: gestion_datos.js

// TASK 1 - CREACIÓN DEL OBJETO DE PRODUCTOS

// // Creamos un arreglo de objetos con productos
// const productos = [
//   {
//     id: 1,
//     nombre: "Laptop",
//     precio: 2500000,
//     categoria: "Tecnología"
//   },
//   {
//     id: 2,
//     nombre: "Mouse",
//     precio: 80000,
//     categoria: "Accesorios"
//   },
//   {
//     id: 3,
//     nombre: "Teclado",
//     precio: 150000,
//     categoria: "Accesorios"
//   }
// ];

// // TASK 5 - VALIDACIÓN DE PRODUCTOS

// // Función para validar un producto
// function validarProducto(producto) {
//   return (
//     producto.id !== undefined &&
//     typeof producto.id === "number" &&
//     producto.nombre &&
//     typeof producto.nombre === "string" &&
//     producto.precio !== undefined &&
//     typeof producto.precio === "number" &&
//     producto.precio > 0
//   );
// }

// // Validamos todos los productos
// console.log("VALIDACIÓN DE PRODUCTOS");

// productos.forEach((producto) => {
//   if (validarProducto(producto)) {
//     console.log(`Producto válido: ${producto.nombre}`);
//   } else {
//     console.log("Producto inválido:", producto);
//   }
// });

// // TASK 2 - USO DE SET

// // Creamos un Set con números repetidos
// const numeros = new Set([1, 2, 3, 3, 4, 5, 5, 6]);

// console.log("\nSET ORIGINAL (SIN DUPLICADOS)");
// console.log(numeros);

// // Agregar un nuevo número
// numeros.add(10);

// console.log("\nSET DESPUÉS DE AGREGAR 10");
// console.log(numeros);

// // Verificar si existe un número
// console.log("\nVERIFICAR SI EXISTE EL NÚMERO 3");
// console.log(numeros.has(3)); // true

// // Eliminar un número
// numeros.delete(2);

// console.log("\nSET DESPUÉS DE ELIMINAR 2");
// console.log(numeros);

// // Recorrer Set con for...of
// console.log("\nRECORRIENDO EL SET");

// for (const numero of numeros) {
//   console.log(numero);
// }

// // TASK 3 - CREACIÓN DE MAP

// // Creamos un Map para relacionar categoría y producto
// const categoriasProductos = new Map();

// // Agregamos productos al Map
// productos.forEach((producto) => {
//   categoriasProductos.set(producto.categoria, producto.nombre);
// });

// console.log("\nMAP DE CATEGORÍAS Y PRODUCTOS");
// console.log(categoriasProductos);

// // TASK 4 - ITERACIÓN SOBRE ESTRUCTURAS

// // 1. for...in para recorrer propiedades de un objeto
// console.log("\nRECORRIENDO OBJETOS CON for...in");

// productos.forEach((producto) => {
//   console.log(`\nProducto ID: ${producto.id}`);

//   for (const propiedad in producto) {
//     console.log(`${propiedad}: ${producto[propiedad]}`);
//   }
// });

// // 2. for...of para recorrer el Set
// console.log("\nRECORRIENDO SET CON for...of");

// for (const numero of numeros) {
//   console.log(`Número: ${numero}`);
// }

// // 3. forEach() para recorrer el Map
// console.log("\n RECORRIENDO MAP CON forEach() ");

// categoriasProductos.forEach((valor, clave) => {
//   console.log(`Categoría: ${clave} → Producto: ${valor}`);
// });

// // USO DE MÉTODOS DE OBJETOS

// console.log("\n Object.keys() ");

// productos.forEach((producto) => {
//   console.log(Object.keys(producto));
// });

// console.log("\nObject.values() ");

// productos.forEach((producto) => {
//   console.log(Object.values(producto));
// });

// console.log("\nObject.entries()");

// productos.forEach((producto) => {
//   console.log(Object.entries(producto));
// });

// // PRUEBAS FINALES

// console.log("\nLISTA COMPLETA DE PRODUCTOS");
// console.log(productos);

// console.log("\nLISTA DE PRODUCTOS ÚNICOS (SET");
// console.log([...numeros]);

// console.log("\nCATEGORÍAS Y NOMBRES DE PRODUCTOS");

// categoriasProductos.forEach((nombre, categoria) => {
//   console.log(`${categoria}: ${nombre}`);
//});

// creacion de objeto
const producto = {
    id : "123456",
    nombre: "rolex",
    precio: "15.000"
}
console.log(producto)
for(const prenda in producto){
    console.log(`${prenda}: ${producto[prenda]}`);
}
 //creacion mi set
const grupo = new Set([5,6,7]);
 grupo.add(1);
 grupo.add(2);
 grupo.add(3);
 grupo.add(3);
 grupo.add(8);


console.log(grupo.has(2))
console.log(grupo.add(9))
grupo.delete(1)
console.log(grupo);

for (const numero of grupo){
     console.log(numero);
}   
// creacion de un map tipo clave valor

const productoMap = new Map();
productoMap.set('ropa','hugo boss');
productoMap.set('calzado','lacoste');
productoMap.set('talla','42');
console.log(productoMap)
console.log(productoMap.get('ropa'));

productoMap.forEach((prendas, marcas) => {
    console.log(`tenemos estas ${marcas} de esta marca ${prendas}`);

});

// validaciones 

// validacion de un producto
function validarProducto(producto){
    if (typeof producto.nombre !== 'string'){
        throw new Error('El nombre debe ser un texto');
    }
    if (typeof producto.id !== 'number'){
        throw new Error('el id debe ser un numero');
    }
    return true;
}


const miProducto = {nombre:'rolex', id:123456};
validarProducto(miProducto);

console.log (miProducto);

// validacion de un set

function validarSet(grupo) {
  if ( grupo.size === 0) {
    throw new Error('El Set está vacío');
  } else {
    console.log(`El Set tiene ${grupo.size} productos únicos`); // ✅ .size no ${set}
  }
  return true;
}
console.log(validarSet(grupo));

// validacion de un map

// ── Estructura de productos en el Map ──
// Clave: "categoria:id" → Valor: objeto producto
const productoMaap = new Map();

// ── Función de validación ──
function validarProducto(producto) {
  const errores = [];

  // Validar ID
  if (!producto.id || typeof producto.id !== 'string' || producto.id.trim() === '') {
    errores.push('ID inválido o vacío');
  }

  // Validar nombre
  if (!producto.nombre || typeof producto.nombre !== 'string' || producto.nombre.trim() === '') {
    errores.push('Nombre inválido o vacío');
  }

  // Validar precio
  if (typeof producto.precio !== 'number' || isNaN(producto.precio) || producto.precio <= 0) {
    errores.push('Precio debe ser un número mayor a 0');
  }

  return errores; // [] = sin errores = producto válido
}

// ── Agregar productos al Map (tu código adaptado) ──
const datos = [
  { id: 'P001', categoria: 'ropa',    nombre: 'Hugo Boss', precio: 350000 },
  { id: 'P002', categoria: 'calzado', nombre: 'Lacoste',   precio: 420000 },
  { id: 'P003', categoria: 'talla',   nombre: '42',        precio: -10   }, // ← precio inválido
  { id: 'P004', categoria: 'ropa',    nombre: '',          precio: 0     }, // ← nombre y precio inválidos
];

datos.forEach(p => {
  productoMap.set(`${p.categoria}:${p.id}`, p);
});

// ── Recorrer con forEach y mostrar categorías + nombres (tu tarea) ──
console.log('Map completo:', productoMap);
console.log('Producto ropa:P001:', productoMap.get('ropa:P001'));

productoMap.forEach((producto, clave) => {
  const errores = validarProducto(producto);

  if (errores.length === 0) {
    console.log(`✔ Categoría: ${producto.categoria} | Nombre: ${producto.nombre} | Precio: $${producto.precio}`);
  } else {
    console.log(`✖ Categoría: ${producto.categoria} | Nombre: "${producto.nombre}" → ERRORES: ${errores.join(', ')}`);
  }
});