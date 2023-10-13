

const post=document.getElementById('post-content')
const locout =document.getElementById('loc')
const regout=document.getElementById('reg')
const  dateout=document.getElementById('datetime')
const getcontainer=document.getElementById('post-content');
const form=document.getElementById('form')
const temp=document.getElementById('temp')
const hum=document.getElementById('hum')
const ws=document.getElementById('ws');
const wd=document.getElementById('wd');

const no =document.getElementById('no');


window.onload=()=>{
    cur_loc();
};

async function getdetail(inputdata){
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${inputdata}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0a8fa857ebmshd16aefd7432c30dp1ff5dejsna37bafaca5cd',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
      const  data = await response.json();
        console.log(data);

      temp.value=data.current.temp_c+"°C";
      hum.value=data.current.humidity+" %"; 
      wd.value=data.current.wind_degree;
      ws.value=data.current.wind_kph+"km/h";
       dateout.value=data.location.localtime
       locout.value =data.location.name
       regout.value=data.location.region
     
        
    } catch (error) {
        console.error(error);
    }
    

  

}



const cur_loc=()=>{
   
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((Position)=>{
        const latitude=Position.coords.latitude;
        const longitude=Position.coords.longitude;
        console.log(latitude+ " " +longitude)
       
       
        const inputdata =`${latitude},${longitude}`;
        
     getdetail(inputdata);
    
     


    });
    }
    else {
        alert("Geolocation is not supported by this browser.");
       
    }

}

