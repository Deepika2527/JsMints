let users = ["Ravi", "Anu", "John", "Priya"];

for(i=0;i<=users.length-1;i++){
    console.log(`Sending Emails to ${i}`);
    console.log(`Sending Emails to ${users[i]}`);
    
}


//
console.log("Checking the prices that are above 1000");
let prices = [1200,1000,999,800,5000,4300,2902];
for(let p=0;p<prices.length;p++){
    if(prices[p]>1000){
        console.log(p,prices[p]);
        
    }
}
//example 3
console.log("Finfing Particluar user");
let user = ["Ravi", "Anu", "John", "Priya"];

for (let i = 0; i < user.length; i++) {

    if (user[i] === "John") {
        console.log("User found");
    }

}

//example 4
console.log("Aapplying discoun");
let price = [1000, 2000, 3000];

for (let i = 0; i < price.length; i++) {

    price[i] = price[i] * 0.9;

}

console.log(price);
//example 5
console.log("Using Array of objects");
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 1000 }
];


