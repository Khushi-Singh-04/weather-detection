const city=document.querySelector("#city");
const temp=document.querySelector("#temp");
const desc=document.querySelector("#desc");
const btn=document.querySelector("#btn");
const wIcon=document.querySelector("#wIcon");

btn.addEventListener('click',function(){
    const input = document.querySelector("#input-field").value.trim();
    if (input === "") {
        alert("Please enter a city name!");
        return;
    }
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=2f489ec2edf525e79a8ceef6d5af694b`
    fetch(url).then(function(abc){
        return abc.json();
    })
    .then(function(result){
        console.log(result);
        city.innerHTML=result.name;
        temp.innerHTML="Temperature : "+Math.floor(result.main.temp-273.1)+"°C";
        desc.innerHTML="Description : " +result.weather[0].description;
        const icon=`https://openweathermap.org/img/w/${result.weather[0].icon}.png`;
        wIcon.innerHTML=`<img src="${icon}" alt="weather icon">`;
    })
    .catch(function(error){
        city.innerHTML="<span class='error'>City Not Found</span>";
        temp.innerHTML="Temperature : _";
        desc.innerHTML="Description : _";
    })
})