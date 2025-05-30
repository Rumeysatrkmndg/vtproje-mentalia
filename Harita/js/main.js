const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

const todayButton = document.querySelector("#todayButton");
const tomorrowButton = document.querySelector("#tomorrowButton");
const weeklyButton = document.querySelector("#weeklyButton");

const data = new WeatherData();
const ui = new UI();

function runEventListeners() {
  searchForm.addEventListener("submit", getDataFromApi);
}
runEventListeners();

function getDataFromApi(e) {
  e.preventDefault();
  const city = searchInput.value.trim();

  //* API'mizi yazdıgımız API class'ının fonksiyonundan verimizi çektik
  data.getWeatherData(city).then((data) => {
    //!submit oldugu gibi de bugün'verilerini göstersin diye buraya da yazdık

    const day = data.result[0];
    const cityName = capitalizeFirstLetter(data.city); //!baş harfini büyüten metodumuzu kullandık
    const degree = Number(data.result[0].degree).toFixed();
    ui.getTodayWeather(day, cityName, degree);

    todayButton.addEventListener("click", () => {
      const day = data.result[0];
      const cityName = capitalizeFirstLetter(data.city); //!baş harfini büyüten metodumuzu kullandık
      const degree = Number(data.result[0].degree).toFixed();
      ui.getTodayWeather(day, cityName, degree);
    });

    tomorrowButton.addEventListener("click", () => {
      const day = data.result[1];
      const cityName = capitalizeFirstLetter(data.city); //!baş harfini büyüten metodumuzu kullandık
      const degree = Number(data.result[1].degree).toFixed();
      ui.getTomorrowWeather(day, cityName, degree);
    });

    weeklyButton.addEventListener("click", () => {
      ui.getWeekWeather();
    });
  });
}

function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return str;
  }
  let text = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return text;
}
