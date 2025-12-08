console.log("one");

setTimeout(()=>{
    console.log("two");
    setTimeout(()=>{
        console.log("four");
    }, 2000);
}, 1000);
setTimeout(()=>{
    console.log("three");
}, 4000);