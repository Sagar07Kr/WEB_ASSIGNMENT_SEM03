
let input_box=document.querySelector("#input");
let btn=document.querySelector("#btn");
let div=document.querySelector("#maincont")
btn.addEventListener("click",()=>{
  div.innerHTML = "";  
  let user=input_box.value;
  fetch(`https://api.github.com/users/${user}`)
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(user => {
    let div_img=document.createElement("div");
    let img=document.createElement("img");
    img.src=user.avatar_url;
    div_img.appendChild(img);
    div.appendChild(div_img);
    
    let h2=document.createElement("h2");
    h2.innerHTML=`UserName : ${user.login}`
    div.appendChild(h2);

    let h3=document.createElement("h3");
    h3.innerHTML=`Id : ${user.id}`
    div.appendChild(h3);

    let a=document.createElement("a");
    a.href=`${user.html_url}`;
    a.innerHTML="Profile Link";
    div.appendChild(a);

    let h4=document.createElement("h4");
    h4.innerHTML=`NO OF PUBLIC REPO : ${user.public_repos}`;
    div.appendChild(h4);
  })
  .catch(error => {
    console.error('There was a problem fetching the user:', error);
  })
})
