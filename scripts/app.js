const cityForm = document.querySelector(".change-location");
const card = document.querySelector(".card")
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const forcast = new Forcast();


const updateUI = data => {

    // const cityInfo = data.cityInfo;
    // const weather = data.weather;

    //destructure the object ..
    const { cityInfo, weather } = data;


    details.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    // update night day and icon 

    //card
    // let timeSrc = null;
    // if (weather.IsDayTime) {
    //     timeSrc = "./img/day.svg";
    // } else {
    //     timeSur = "./img/night.svg";
    // }

    // ternery oparator

    const timeSrc = weather.IsDayTime ? "./img/day.svg" : "./img/night.svg";
    //icon
    const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;

    time.setAttribute("src", timeSrc);
    icon.setAttribute("src", iconSrc);
    // remove d-none to display it
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }

}

// const updateCity = async city => {


//     const cityInfo = await getCity(city);
//     const weather = await getWeather(cityInfo.Key);

//     return { cityInfo, weather }
// }



cityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // get the city input
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update to new ui
    forcast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));


    // set local storage
    localStorage.setItem("city", city);
})



if (localStorage.getItem("city")) {
    forcast.updateCity(localStorage.city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

}
