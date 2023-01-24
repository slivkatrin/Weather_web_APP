/*
const input = document.querySelector('input');
const button = document.querySelector('button');
const error = document.querySelector('error');
const date = document.querySelector('.date');
const img = document.querySelector('.img');
const feelsTemperature = document.querySelector('.feelsTemperature');
const cityName = document.querySelector('.cityName');
const presure = document.querySelector('.presure');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const temperature = document.querySelector('.temperature');
const temperatureDescription = document.querySelector('.temperatureDescription');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=c86e1624053c94620cc9f87084538ade';
const apiUnits = '&units=metrics';
const apiLang = '$lang=pl';

const checkWeather = () => {
    const apiCity = input.value || "Barcelona" //если не подаст город то барселона
    const URL = apiLink + apiCity + apiKey + apiUnits + apiLang;
    console.log(URL);

    axios.get(URL).then(response => {
        console.log(response.data);
        temperature.textContent = `${Math.floor(response.data.main.temp)} °C`

        img.src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;

        temperatureDescription.textContent = `${response.data.weather[0].description}`;

        date.textContent = `${new Date().toString().slice(4,10)}, ${new Date().toString().slice(16,21)}`;
        cityName.textContent = `${response.data.name}, ${response.data.sys.country}`;
        feelsTemperature.textContent = `${Math.floor(response.data.main.feels_like)} °C`; //zaokr 
        presure.textContent = `${response.data.main.pressure} hPa`;
        humidity.textContent = `${response.data.main.humidity} %`;
        windSpeed.textContent = `${response.data.wind.speed} m/s`;
        error.textContent = '';

    }).catch(error => {
        if(error.response.data.cod === '404') {
            error.textContent = 'nie ma miasta';
        } else {
            error.textContent = "pierdol sie";
        }
            [cityName, temperature, feelsTemperature].forEach(el => {
                el.textContent = '';
            })
            img.src = '';
    }).finally()
    input.value = '';
}
button.addEventListener('click', checkWeather)
*/
const input = document.querySelector('#pogoda_inp');
const button = document.querySelector('#pogoda');
const error = document.querySelector('.error');
const date = document.querySelector('.date');
const cityName = document.querySelector('.cityName');
const img = document.querySelector('img');
const temperatureDescription = document.querySelector('.temperatureDescription');
const temperature = document.querySelector('.temperature');
const feelsTemperature = document.querySelector('.feelsTemperature');
const pressure = document.querySelector('.presure');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=8785e915c19523828870b8fefd9121db';
const apiUnits = '&units=metric';
const apiLand = '&lang=pl';

const checkWeather = () => {
    const apiCity = input.value || "Barcelona";
    const URL = apiLink + apiCity + apiKey + apiUnits + apiLand;
    console.log(URL);

    axios.get(URL).then(response => {
        console.log(response.data);
        //poprawic odczytywanie godzin
        temperature.textContent = `${Math.floor(response.data.main.temp)}`
        img.src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
        temperatureDescription.textContent =`${response.data.weather[0].description}`;
        date.textContent =`${new Date().toString().slice(4, 10)}, ${new Date().toString().slice(16, 21)}`
        cityName.textContent = `${response.data.name}, ${response.data.sys.country}`
        feelsTemperature.textContent = `${Math.floor(response.data.main.feels_like)} C`
        pressure.textContent = `${response.data.main.pressure} hPa`
        humidity.textContent = `${response.data.main.humidity} %`
        windSpeed.textContent = `${response.data.wind.speed} m/s`
        error.textContent = '';
    }).catch(error =>{
            if(error.response.data.cod === '404'){
                error.textContent = "Nie ma takiego miasta"
            } else{
                error.textContent = "Wystapil inny problem"
            }

            [cityName, temperature, feelsTemperature, temperatureDescription, pressure, humidity, windSpeed, date].forEach(el => {
                el.textContent = '';
            })
            img.src='';
    }).finally(() => {
        input.value = '';
    })
}

button.addEventListener('click', checkWeather)



