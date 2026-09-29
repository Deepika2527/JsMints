//way 1 using litreal

let obj = {
    name: "Deepika",
    age : 24,
    work: "It/Developer"
}
console.log(obj);

//way 2 using constructor way
let obj1 = new Object();
obj1.name = "Bonkers";
obj1.age = 4;
console.log(obj1);
obj1.name = "Bonkers❤️"
console.log(obj1);

//ways -3 using fucntion

function User(name,age){
    this.name = name;
    this.age = age
}
let User1 = new User("Chintu",3);
let User2 = new User("Chamochaaa",4);
console.log(User);
console.log(User1);
console.log(User2);

//way 4  using Es6

class NewClass{
    constructor(role,exp){
        this.role = role;
        this.exp = exp
    }
}

let newclass1 = new NewClass('developer',4);
let newclass2 = new NewClass('developer',4)
console.log(newclass1 , newclass2);



// let User_Obj = Object.create();
// User_Obj.name = "Tester1";
// User_Obj.age = 6
// console.log(User_Obj);







