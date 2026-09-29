function greet(){
    console.log("This is function declartion");
    
}
greet()
console.log("------------------");
console.log(greet);
console.log("------------------");
console.log("no return", greet());
//here there are 2 oupts because we used console again first is log statement in the function and The function has no explicit return statement, so its return value is undefined
// The first Hello is printed by the function.
// The second undefined is the value produced by the function and printed by the outer console.log
console.log("------------------");
console.log(typeof(greet)); //function
console.log("------------------");


console.log("------------------");
console.log(typeof(greet())); 
//again 2 outputs, log(becaue greet()) and then typeof(greet()) is "undefined"(not faded undefined) because tyoeof(uundefined = "undefined" in a string )


