const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const information = document.querySelector('.card-body');
const time = document.querySelector('img.time');

const updateUI = async (data) => {
    const cityInfo = data.cityDetails;
    const weatherInfo = data.weatherDetails;

    information.innerHTML = 
    `<p class="location">${cityInfo[0].EnglishName}</p>
    <p class="weather">${weatherInfo[0].WeatherText}</p>
    <p class="temperature">${weatherInfo[0].Temperature.Metric.Value} <span>&deg C</span></p>`;

    card.style.display = 'block';

    let dayTime = null;
    if(weatherInfo[0].IsDayTime){
        dayTime = 'https://www.luxfermeltechnologies.com/wp-content/uploads/2021/09/Aerospace-background-600x420.jpg';
    }else{
        dayTime = 'https://live.staticflickr.com/5550/10351999594_d717a92a4e_n.jpg';
    }
    time.setAttribute('src', dayTime);
};

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails[0].Key);

    return {cityDetails,weatherDetails};
};

cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityForm.city.value;
    cityForm.reset();

    updateCity(city).then(data => {
       updateUI(data);
    }).catch(err => {
        console.log(err);
    })
});