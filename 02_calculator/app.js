
let dig=document.querySelectorAll(".dig");
let s="";
dig.forEach(ele => {
    ele.addEventListener("click",()=>{
        let input=document.querySelector("input");
        s=s+ele.innerText;
        input.value=s;
    })
});

let ops=document.querySelectorAll(".ops");

ops.forEach(opss=>{
    opss.addEventListener("click",()=>{
        let input=document.querySelector("input");
        let text=opss.innerText;
        if(text=="AC"){
            input.value="0";
            s="";
        }
        else if(text=="DEL"){
            s=s.slice(0,-1);
            input.value=s;
        }
        else if(text=='='){
            let ans=eval(s);
            input.value=ans;
            s="";
        }
        else{
            s=s+text;
            input.value=s;
        }
    })
})