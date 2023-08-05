//rfce is a code for the 



import React from 'react'
import axios from 'axios'
// import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'



function Home(){
    const[data,setData]=useState({
        celcius:285,
        name:'London',
        humidity:10,
        speed:2,
        image:"/Images/cloud.png"


    })
    const [name,setName]=useState('');
    const [error,setError]=useState('');
    
    
        const handleClick=()=>{
            if (name!==""){
                const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=1b5d4fbd96d3be022edbbc02c20bfe88`
                axios.get(apiUrl)
                .then(res=>{
                    let imagePath="";
                    if(res.data.weather[0].main==="Clouds"){
                        imagePath="/Images/cloud.png"
                    }
                    else if(res.data.weather[0].main==="Clear"){
                        imagePath="/Images/cloud.png"
                    }
                    else if(res.data.weather[0].main==="Rain"){
                        imagePath="/Images/rain.png"
                    }
                    else if(res.data.weather[0].main==="Drizzle"){
                        imagePath="/Images/drizzel.png"
                    }
                    else if(res.data.weather[0].main==="Mist"){
                        imagePath="/Images/mist.png"
                    }
                    else{
                        imagePath="/Images/cloud.png"
                    }
                
                    console.log(res.data)
                    setData({...data,celcius:res.data.main.temp,name:res.data.name,humidity:res.data.main.humidity,speed:res.data.wind.speed,image:imagePath})
                    setError('');
                })
                
                // .catch(err=> console.log(err));
                .catch(err=>{
                    if (err.response.status===404){
                        setError("Invalid City Name")

                    }
                    else{
                        setError('');
                    }
                    console.log(err)

                });
                        
            }
            
        }
    return (
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" border-radius="50%" width="30px" placeholder='Enter the city name' onChange={e=>setName(e.target.value)} />
                    <button border-radius="50%"><img src='/Images/search.png' onClick={handleClick} alt=""/></button>
                </div>
                <div className="error">
                    <p>{error}</p>
                </div>
            <div className="winfo">
                <img src={data.image} width="100px" height="80px"  align-items="center"
                alt="" />
                <h1>{Math.round(data.celcius-273.15)}°C</h1>
                <h2>{data.name}</h2>
                <div className="details">
                    <div className="col">
                        <img src="/Images/hummidity.png"  alt=""/>
                        <div className ="humidity">
                            <p>{Math.round(data.humidity)}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src="/Images/wind.png" alt=""/>
                        <div className="wind">
                            <p>{Math.round(data.speed)}km/h</p>
                            <p>Wind</p>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            </div>
       
    )
}
export default Home;