const api_key="dafd2482b96ea5e8b1d6f8d3d9893059";
async function getData(){
    let city=document.getElementById("city").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let res= await fetch(url);
    let data=await res.json();
    append (data);
    console.log(data); 
}
function append(data){
    let container=document.getElementById("container");
    container.innerHTML=null;
   

    let h3=document.createElement("h3");
    h3.innerText=data.name;
    
    let p1=document.createElement("p");
    p1.innerText=`Max. temp:${data.main.temp_max}`;

    let p2=document.createElement("p");
    p2.innerText=`Min. Temp:${data.main.temp_min}`;

    let p3=document.createElement("p");
    p3.innerText=`wind-deg:${data.wind.deg}`;

    let p=document.createElement("p");
    p.innerText=`wind-gust:${data.wind.gust}`;

    let h=document.createElement("p");
    h.innerText=`wind-speed:${data.wind.speed}`;

    let p4=document.createElement("p");
    p4.innerText=`Sunrise:${data.sys.sunrise}`;

    let p5=document.createElement("p");
    p5.innerText=`Sunset:${data.sys.sunset}`;

    let c1=document.createElement("p");
    c1.innerText=`Clouds-all:${data.clouds.all}`;
    
    container.append(h3,p1,p2,p3,p4,p5,p,h,c1);

    let iframe=document.getElementById("gmap_canvas");
    iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`; 
}
    
 
