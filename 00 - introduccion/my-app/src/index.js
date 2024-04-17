import { heroes, heros } from "./data/heros";
/* console.log("Hello World");

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
console.log(city); */

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
 
const arry = [1, 2, 3, 4];
const [, , pos3] = arry;

console.log(pos3);

const arry2 = () => {
  return ["ABC", 123];
};

const [, numbers] = arry2();

console.log(numbers);*/

/*console.log(heroes);

 const getHero = (id) => {
  return heroes.find((hero) => {
    if (hero.id == id) {
      return true;
    }
    return false;
  });
}; 
const getHero = (id) => {
  return heroes.find((hero) => hero.id == id);
};

console.log(getHero(1));*/

const getHero = (id) => {
  return heroes.find((hero) => hero.id == id);
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2 segundos después");
    const hero = getHero(2);
    resolve(hero);
  }, 2000);
});

promise
  .then((hero) => {
    console.log("Then promesa");
    console.table(hero);
  })
  .catch((err) => console.warn(err));
