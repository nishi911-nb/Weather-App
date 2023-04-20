const key = 'RJos3AFGyp1DhffMWisoChPEw7mJdFiE';

const getCity = async(city) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(url + query);
    const cityData = response.json();

    return cityData;
}

const getWeather = async(id) => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query = `?apikey=${key}`;

    const response = await fetch(url + query);
    const weatherData = response.json();

    return weatherData;
}