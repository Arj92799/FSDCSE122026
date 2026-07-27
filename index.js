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

function login(msg,error){
    if(error){
        console.log("Error is "+error);
    }
    else{
        console.log(msg);
    }
}

function loginHandler(username,password,clbk){
    if(username=="Arj92799" && password=="123456"){
        clbk("Login Success",null);
    }
    else{
        clbk(null,"Username or password is incorrect");
    }
}
loginHandler("Arj92799","123456",login);