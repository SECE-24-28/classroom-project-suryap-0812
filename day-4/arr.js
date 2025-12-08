// let ob1 = { "name":"Naruto", "age":17, "power":"Nine-Tails"};
// let ob2 = { "name":"Sasuke", "age":17, "power":"Sharingan"};

// for (let i in ob1){
//     console.log(i);
// }

let func = { sna:"Helo", age:25, dem:()=>{
    return "Hello World";
}};

for (let j in func){
    console.log(j);
}

console.log(func.dem());

let arr = [[10, 20, 30, 40, 50],
           [60, 70, 80, 90, 100],
           [110, 120, 130, 140, 150]
        ];
arr.forEach((e)=> {
    console.log(e);
})