

let button=document.querySelector("#butn");

button.addEventListener("click",()=>{
    let task=document.querySelector("#input_value");
    let h3=document.createElement("h3");
    h3.innerHTML=task.value;
    let div=document.querySelector("#LIST_OF_TASk");
    div.appendChild(h3);
    task.value="";
})


