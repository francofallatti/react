console.log("Hello World");

const persona = {
  nombre: "Fran",
  apellido: "Fallatti",
  edad: 23,
  address: {
    city: "Bs As",
  },
};

const {
  nombre,
  apellido,
  address: { city },
} = persona;
console.log(nombre);
console.log(apellido);
console.log(city);

/*
// Crear clones de objetos
const persona2 = { ...persona };
persona2.apellido = "Messi";

console.log({ persona });
console.log({ persona2 }); */

// Arrays

/* const arry = [1, 2, 3, 4];
const arry2 = [...arry, 5];

const arry3 = arry2.map(function (number) {
  return number * 2;
});

// Ppush modifica el objeto
//arry.push(1);

console.log(arry);
console.log(arry2);
console.log(arry3);
 */
