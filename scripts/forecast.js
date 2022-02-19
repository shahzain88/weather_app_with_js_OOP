
class Forcast {
    constructor() {
        this.apiKey = 'GThYagVKJM6N3BznG2PGcUOjRsMRdifR';
        this.weatherURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    };
    updateCity = async city => {


        const cityInfo = await this.getCity(city);
        const weather = await this.getWeather(cityInfo.Key);

        return { cityInfo, weather }
    };
    getWeather = async (cityKey) => {

        const quary = `${cityKey}?apikey=${this.apiKey}`;

        const response = await fetch(this.weatherURL + quary);
        const data = await response.json();
        return data[0];
    };
    getCity = async (city) => {
        const query = `?apikey=${this.apiKey}&q=${city}`


        const response = await fetch(this.cityURL + query);
        const data = await response.json();

        return data[0];

    };
}

// const apiKey = 'Ls7Y4cXwMcVWn4wSQG6id4JBwum5ztKJ';


// //get weather informations

// const getWeather = async (cityKey) => {

//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const quary = `${cityKey}?apikey=${apiKey}`;

//     const response = await fetch(base + quary);
//     const data = await response.json();
//     return data[0];


// }

// // get city informations
// const getCity = async (city) => {

//     const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
//     const query = `?apikey=${apiKey}&q=${city}`


//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];

// }
