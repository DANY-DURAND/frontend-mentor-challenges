const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const current = document.getElementById('current');
const currentHours = document.getElementById('current-hours'); 

const timeStamp = document.getElementById('timestamp');
const previousTime = document.getElementById('previous');
const hoursTxt = document.getElementById('hours');

let data = 'http://127.0.0.1:5501/time-tracking-dashboard-main/data.json'

fetch(data)
        .then((response)=>{
            if(!response.ok){
            console.log('Oops! Something went wrong.');   
        }
        return response.json()
        })
        .then((data)=>{
            console.log(data)
        })