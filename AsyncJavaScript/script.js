// Example of asynchronus JS
// setTimeout

// console.log("Hay");
// setTimeout(function(){
//     console.log("hay2");
// }, 2000);

//console.log("hay3");
// Callback
// callback is always a function
// fetch
// axios
// promises
var ans = new Promise((res, reg) => {
    var n = Math.floor(Math.random() * 10);
    if(n < 5){
        return res();
    }
    else{
        return reg();
    }
});

ans.then(function(){
    console.log("below!!");
})
.catch(function(){
    console.log("above!!!");
})
// setInterval
