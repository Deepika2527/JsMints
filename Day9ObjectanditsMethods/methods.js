let user = {
    name: "Deepika",
    age: 25,
    city: "Hyderabad"
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
user.company = "Abc"
console.log(user);
Object.freeze(user)
user.role = "developer"
console.log(user);




