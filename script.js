var overlay = document.querySelector('.overlay')
var cityName = document.querySelector('#cityName')
var button = document.querySelector('#search')
var desc = document.querySelector('#desc')
var temp = document.querySelector('#temp')
var city = document.querySelector('#city')
var humid = document.querySelector('#humid')
var wind = document.querySelector('#wind')

button.addEventListener('click',()=>{
    if(cityName.value==='')
    {
        alert('Enter city name')
        return 
    }
    overlay.style.display='flex'
    setTimeout(async() => {
        let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=a61e32d0a7a1177a1fef784117373c6f`
        const res = await fetch(apiURL)
        const data = await res.json()
        if(data){
            overlay.style.display='none'
            if(data.cod==='404'){
                alert(data.message)
            } else{
                desc.innerHTML=data.weather[0].description
                temp.innerHTML=(data.main.temp - 273.15).toFixed(2)+'°C'
                city.innerHTML=data.name
                humid.innerHTML=data.main.humidity
                wind.innerHTML=data.wind.speed+' meter/sec'
            }
           
        }

    }, 500);
})


