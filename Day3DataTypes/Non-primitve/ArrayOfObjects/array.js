let users = [
  {
    id: 1,
    name: "deepika",
    age: 30,
  },
  {
    id: 2,
    name: "bonkers",
    age: 4,
  },
  {
    id: 3,
    name: "shiva",
    age: "infinite",
  },
   {
    id: 4,
    name: "Subby",
    age: "39",
  },
];
console.log(users);
console.log(users.length);
console.log(users[0]);
console.log(users[0].name);
console.log(users[0]["name"]);
// console.log(users[property]);

// users[0].name ="Name";
// console.log(users);
let key = "name";
console.log(users[0][key]);
console.log(users[1][key]);
let key1 ="age";
console.log(users[0].key1);

// Here by using dot notation we cant acees the property by assiging it to the key but in bracketNotation we can do tha that is the differende

//Retrieving the value
console.log("************Updating the value********************");
console.log("using dot notation:", users[0].name);
users[0].name = "Deepika";
console.log( users[0].name);
console.log("using Bracket notation:");
let key_name2 = "name";

console.log(users[1][key_name2]);
users[1][key_name2] = "Bonkers";
console.log(users[1][key_name2]);

//dynamic update
let key_age2 = "age";
console.log(users[1][key_age2]);
let value_age2= 3;
console.log(users);
console.log(users[1][key_age2])


//removing/deleting an object
delete users[3]
console.log(users);
console.log(users.length);




















