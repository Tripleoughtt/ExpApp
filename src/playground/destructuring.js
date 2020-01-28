// console.log("destructuring");

// const person = {
//     firstName: 'Matt',
//     age: 21,
//     location: {
//         city: "SD",
//         weather:"sunny"
//     }
// }

// const {firstName:name = "bobby",age} = person;
// const {city:home,weather} = person.location;
// console.log(`${name} is ${age}`);
// console.log(`It is ${weather} in ${home}`);


// const book = {
//     title:"Ego is the Enemy",
//     author:"Ryan Holiday",
//     publisher: {
//         name:'Penguin'
//     }
// };


// const {name:publisherName = "Self-Published"} = book.publisher;
// console.log(publisherName);

const address = ['16190 Lofty Trail Drive', 'San Diego', "California"];

const [street, city, state = 'Nowhere'] = address;

console.log(`You live at ${street} ${city} ${state}`);

const item = ['Coffee', '2',3,5];

const [coffee, , price] = item

console.log(`A mediumn ${coffee} costs ${price}`)