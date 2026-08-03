
let input_box=document.querySelector("input");

let butn=document.querySelector("button");

let apiKey="e51ce0d9b50a89608f4db686c2706452";

let div=document.querySelector("#main_cont");

butn.addEventListener("click",()=>{
    let city=input_box.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    div.innerHTML="";
    
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.querySelector("#wind");
    div.appendChild(div1);
    div.appendChild(div2);
    div3.innerHTML="";
    let city=document.createElement("h2");
    city.innerHTML=`${data.name}`;
    div1.appendChild(city);

    let weather=document.createElement("h2");
    weather.innerHTML=`${data.weather[0].description}`;
    div1.appendChild(weather);

    let temp=document.createElement("h2");
    temp.innerHTML=`Temp : ${data.main.temp}°C`;
    div1.appendChild(temp);
    
    let feelLike=document.createElement("h2");
    feelLike.innerHTML=`Feel Like : ${data.main.feels_like}°C`;
    div2.appendChild(feelLike);

    let maxTemp=document.createElement("h2");
    maxTemp.innerHTML=`MaxTemp: ${data.main.temp_max}°C`;
    div2.appendChild(maxTemp);

    let minTemp=document.createElement("h2");
    minTemp.innerHTML=`MinTemp : ${data.main.temp_min}°C`;
    div2.appendChild(minTemp);
   
    let pre=document.createElement("h2");
    pre.innerHTML=`Pressure : ${data.main.pressure} hPa`
    div3.appendChild(pre);

    let hum=document.createElement("h2");
    hum.innerHTML=`Humidity : ${data.main.humidity}%`;
    div3.appendChild(hum);

    let wind=document.createElement("h2");
    wind.innerHTML=`Wind Speed : ${data.wind.speed} m/s`
    div3.appendChild(wind);

  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
})



