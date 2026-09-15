console.log("******************************************");

let email = null;

console.log(email);
console.log(typeof(email));

email = "testing@gmail.com";
console.log(email);
console.log(typeof(email));




// "null is a primitive value, but typeof null returns object due to a historical bug in JavaScript. It was retained for backward compatibility."
// 2. If they ask for the technical reason

// You can say:

// "In JavaScript's early implementation, values were represented using type tags. The internal representation of null was associated with the object type, so typeof null ended up returning object. Since this behavior became part of the language, it was preserved for backward compatibility."

// How does the memory will work

// promptUserEmail()

