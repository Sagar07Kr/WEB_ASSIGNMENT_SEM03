
let butn=document.querySelector("#butn");


//low version
let i=0;
butn.addEventListener("click",()=>{
     if(i%2==0){
        let body=document.querySelector("body");
        body.style.backgroundColor="rgb(0,0,0)";
        let h1=document.querySelector("h1");
        h1.style.color="white";
     }
     else{
        let body=document.querySelector("body");
        body.style.backgroundColor="rgb(255, 255, 255)";
        let h1=document.querySelector("h1");
        h1.style.color="black";
     }
     i++;
})




///ADVANCE VERSION
// butn.addEventListener("click",()=>{
//     let h1=document.querySelector("h1");
//     let v1=(Math.floor(Math.random()*225));
//     let v2=(Math.floor(Math.random()*225));
//     let v3=(Math.floor(Math.random()*225));
//     let body=document.querySelector("body");
//     body.style.backgroundColor=`rgb(${v1},${v2},${v3})`
    
// })
