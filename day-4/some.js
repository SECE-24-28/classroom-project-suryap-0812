let stu = [
    {sna:"Alice", age:52, course:"Math"},
    {sna:"Bob", age:24, course:"Physics"},
    {sna:"Charlie", age:23, course:"Chemistry"}
]

let res = stu.some((st)=>{
    return st.age > 25;
})

let ev = stu.every((st)=>{
    return st.age > 25;
})
console.log(res); 
console.log(ev); 
    
