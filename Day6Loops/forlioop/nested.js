// for(let i=1;i<=4;i++){
//     // console.log("Inside i", i);
    
//     for (let j=1; j<=4;j++){
//         // console.log("Inside j", j);
        
//         console.log(i , ":", j);
        
//     }
// }
// console.log("Example 2");
// for(let i1=1;i1<=4;i1++){
//     // console.log("Inside i1", i1);
    
//     for (let j1=1; j1<=i1;j1++){
//         // console.log("Inside j1", j1);
        
//         console.log(i1 , ":", j1);
        
//     }
// }

//exmaple 3

for (let a = 1; a <= 3; a++) {

    for (let b = 1; b <= 4; b++) {

        console.log("Hello");
        // console.log("Hello",a,b);

    }

}

// outer loop
// │
// ├── create row
// │
// ├── inner loop
// │    ├── add *
// │    ├── add *
// │    ├── add *
// │    ├── add *
// │    └── add *
// │
// └── print row
// "" → "*" → "**" → "***" → "****" → "*****"
                                            //  ↓
                                        //    PRINT


//example 4
console.log("Example 4");

for (let i2 = 1; i2 <= 3; i2++) {

    // let row = "";

    for (let j2 = 1; j2 <= 5; j2++) {
        let row = "";

        row += "*";
        console.log(row);
        

    }

    // console.log(row);
}

// outer loop

// └── inner loop
//      │
//      ├── create row
//      ├── add *
//      └── print
     
//      ├── create NEW row
//      ├── add *
//      └── print
     
//      ├── create NEW row
//      ├── add *
//      └── print
