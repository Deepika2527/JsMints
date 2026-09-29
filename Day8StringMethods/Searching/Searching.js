let s = "Learning javascript is fun";

console.log(s.length);
console.log("-------------------------Index of-------------------------");

console.log(s.indexOf('a'));
console.log(s.indexOf('i'));
console.log(s.indexOf('i',6));
console.log(s.indexOf('i',-8));
console.log(s.indexOf(' '));
console.log(s.indexOf('y'));


console.log("-----------------lastIndexOf-----------------------");
let st = "hello im ok, are you ok, hello...h";
console.log(st.lastIndexOf('hello'));
console.log(st.lastIndexOf('h'));
console.log(st.lastIndexOf('h',-1));
console.log(st.lastIndexOf('h',-4));

console.log("-----------------includes----------------------------")
let str = "deepika@gmail.com";
console.log(str.includes("@"));
console.log(str.includes("#"));

let message = "I am learning JavaScript";

console.log(message.includes("Python"));

let name = "Deepika";

console.log(name.includes("D"));
console.log('searching multiple words');
let mesage = "I am learning JavaScript";

console.log(mesage.includes("learning JavaScript"));

console.log("Includes with index");
let text = "JavaScript";
console.log(text.includes("J", 1));
let product = "Samsung Galaxy S25";
let search = "galaxy";
console.log(product.includes(search));
let result = product.toLowerCase().includes(search.toLowerCase());

console.log(result);


let products = [
    "iPhone 17",
    "Samsung Galaxy",
    "Google Pixel",
    "OnePlus 13"
];

let searh = "phone";
products.toLowerCase().includes(searh.toLowerCase())

console.log("------------------------Starts with--------------------");
let url = "https://example.com";

if (url.startsWith("https://")) {
    console.log("Secure URL");
}
let urll = "https://example.com";

if (urll.startsWith("https://")) {
    console.log("Secure URL");
}

let fileName = "profile.jpg";

console.log(fileName.endsWith(".png"));

let txt = "Hello JavaScript";

console.log(txt.startsWith("JavaScript", 6));
// does not mean:

// Find JavaScript somewhere after position 6.

// It means:

// Starting at position 6, does the string begin with "JavaScript"?
//endswith
let s1 = "Hello JavaScript";

console.log(s1.endsWith("Hello", 5)); 
//true as legth is metioned as 5










