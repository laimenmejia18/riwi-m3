
let producto = {
    id : 1,
    nombre : "cualquiercosa",
    precio : 100
};

const nose = new Set([1,2,3,4,5,6,6]);

console.log(nose);

Set.add(7);
Set.delete(2);

for (const numero of nose){
    cosole.log(numero);
}


const myMap = new Map();
myMap.set("clave1", "valor1");
myMap.set("clave2", "valor2");

console.log(myMap.get("clave1"));
console.log(myMap.has("clave2"));
myMap.delete("clave1");
console.log(myMap.has("clave1"));

