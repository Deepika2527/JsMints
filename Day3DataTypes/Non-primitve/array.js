let arr = [1,2,3,89,null,true,{'a':567,"b":899},[34.78,90,100,234,"kittu"]]
console.log(arr);
console.log(arr[2]);
console.log(arr[7]);
console.log(arr[7][3]);

console.log("out of range", arr[10]);
console.log("Negative Indexing", arr[-2]);

arr[-1] = "updating";
console.log(arr);




console.log(typeof(arr));



// why js objects returns objetc
// Because an Array in JavaScript is a specialized kind of Object. JavaScript's specification defines Array instances as objects with special array-specific behavior. The typeof operator classifies Array values under the "object" result, so typeof arr returns "object"

