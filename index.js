// console.log("hey ...using Js development");
// console.log("Using js");

// let a=32;
// console.log("a="+a);
// //let is block scoped variable, it is only accessible inside the block where it is defined
// if(a>10){
//      let a=40;
//     console.log("a is inside block a="+a);
// }
// console.log("hi a is not inside block a="+a);


// function sum(a,b){
//     return a+b;
// }
// console.log("sum of 2 numbers is "+sum(230,30)); 



// const sum=(a,b)=>{
//     return a+b;
// }
// console.log("sum of 2 numbers is "+sum(12,30)); 

// const data=function(msg){
//     return "Hello, I m using JS"+msg;
// }
// console.log(data("and Node"));



//IIFE

// (()=>{console.log("Hey..using and CAlling by IIFE")})();



//callback
// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result = clbk(2,6);
//     console.log("Hey,Your result=" + result+"!! Well Done "+msg);

// }
// sumWithMsg(sum,"Rahul");

// function login(msg,error){
//     if(error){
//         console.log("Error is "+error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginHandler(username,password,clbk){
//     if(username=="Arj92799" && password=="123456"){
//         clbk("Login Success",null);
//     }
//     else{
//         clbk(null,"Username or password is incorrect");
//     }
// }
// loginHandler("Arj92799","123456",login);


// console.log("One");

// setTimeout(()=>{
//     console.log("Two")
// },1000)
// console.log("three")


// setTimeout(()=>{
//     console.log("one")
//     setTimeout(()=>{
//         console.log("two")
//         setTimeout(()=>{
//             console.log("three")
//          setTimeout(()=>{
//             console.log("four")
//             setTimeout(()=>{
//                 console.log("five")
//               setTimeout(()=>{
//                 console.log("six")
//                 setTimeout(()=>{
//                     console.log("seven")
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)
//     },1000)
// },1000)

// myPromise
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((msg) => {
//         console.log(msg);
//     })
//     .finally(() => {
//         console.log("All done");
//     });
// mypromise.then((msg)=>{
//     console.log(msg);
// }).catch((msg)=>{
//     console.log(msg);
// }).finally(()=>{
//     console.log("All done")
// })





// const mypromise=new Promise((resolve,reject)=>{
//     const username="Arj92799";
//     const password="123456";
//     if(username=="Arj92799" && password=="123456"){
//         resolve(" Success");
//     }
//     else{
//         reject("Username or password is incorrect");
//     }
// })
    

// async function handleData() {
//     try {
//         const msg = await mypromise;
//         console.log(msg);

//         if (msg === " Success") {
//             const orderPromise = new Promise((resolve, reject) => {
//                 const orderStatus = "accepted"; 

//                 if (orderStatus === "accepted") {
//                     resolve("Order Accepted");
//                 } else {
//                     reject("Order Declined");
//                 }
//             });

//             const orderMsg = await orderPromise;
//             console.log(orderMsg);
//         }

//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log("All done");
//     }
// }

// handleData();     

// function orderRecieve(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("order received");
//         },1000)
//     })
// }
// function orderPrepared(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("order prepared");
//         },1000)
//     })
// }
// function orderDispatched(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("order dispatched");
//         },1000)
//     })
// }
// function orderDelivered(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("order delivered");
//         },1000)
//     })
// }

// async function orderHandler(){
//     try{
//         const step1 = await orderRecieve();
//         console.log(step1);

//         const step2 = await orderPrepared();
//         console.log(step2);

//         const step3 = await orderDispatched();
//         console.log(step3);

//         const step4 = await orderDelivered();
//         console.log(step4);

//     }catch(err){
//         console.log(err);
//     }
// }

// orderHandler();
// orderRecieve().then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{

// }).finally(()=>{
//     console.log("Finally done");
// })
const button = document.getElementById("btn");
const container = document.getElementById("container");
console.log(button);

async function fetchData() {
    const serverData = await fetch('https://fakestoreapi.com/products');
    const jsonData = await serverData.json();
    // console.log(jsonData);
    container.innerHTML=JSON.stringify(`${jsonData}`);
}
button.addEventListener("click", fetchData);
// fetchData();


