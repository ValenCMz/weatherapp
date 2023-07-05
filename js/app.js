"use strict"


const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.whater-box');
const weatherDetails = document.querySelector('.container-characteristics');
const error404 = document.querySelector('.not-found');


// 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
// 'https://api.apenweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey};



search.addEventListener('click', () => {
    let city = document.querySelector('#input_seach').value;
    const APIKey = 'e34253a97fbf0792ad5dda5f0f8f081f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

    if (city === '') {
        return;
    }

    fetch(apiUrl).then(response => response.json()).then(json => {
        if (json.cod === '404') {

            container.style.height = '404px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.add('fadeIn');
        const image = document.querySelector('.whater-box img');
        const temperature = document.querySelector('.whater-box .temperature');
        const desciption = document.querySelector('.whater-box .description');
        const humidity = document.querySelector('.container-characteristics .humidity span');
        const wind = document.querySelector('.container-characteristics .wind span');

        console.log(json);

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'img/clear.png';
                break;
            case 'Rain':
                image.src = '/img/rain.png';
                break;
            case 'Snow':
                image.src = '/img/snow.png';
                break;
            case 'Clouds':
                image.src = '/img/cloud.png';
                break;
            case 'Haze':
                image.src = '/img/haze.png';
                break;
            default:
                image.src = '';
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        desciption.innerHTML = `${json.weather[0].desciption}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';

    })
});

// search.addEventListener('click', functionSearch());

// async function functionSearch() {

//     const APIKey = 'e34253a97fbf0792ad5dda5f0f8f081f';
//     const apiUrl = `https://api.apenweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

//     const city = document.querySelector('search-box input');

//     if (city === '') {
//         return;
//     }

//     try {
//         let response = await fetch(apiUrl);
//         if (response.ok) {
//             let t = await response.text()
//             error404.style.display = 'none';
//             error404.classList.add('fadeIn');
//             const image = document.querySelector('.weather-box img');
//             const temperature = document.querySelector('.wheater-box .temperature');
//             const desciption = document.querySelector('.weather-box .description');
//             const humidity = document.querySelector('.container-characteristics .humidity span');
//             const wind = document.querySelector('.container-characteristics .wind span');

//             switch (response.weather[0].main) {
//                 case 'Clear':
//                     image.src = 'img/clear.png';
//             }

//         }
//         else if (response.cod === '404') {
//             container.style.height = '404px';
//             weatherBox.style.display = 'none';
//             weatherDetails.style.display = 'none';
//             error404.style.display = 'block';
//             error404.classList.add('fadeIn');
//             return;
//         }

//     } catch (error) {
//         console.log("error");
//     }


// }