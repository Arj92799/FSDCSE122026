const mypromise=new Promise((resolve,reject)=>{
    const username="Arj92799";
    const password="123456";
    if(username=="Arj92799" && password=="123456"){
        resolve("Login Success");
    }
    else{
        reject("Username or password is incorrect");
    }
})
