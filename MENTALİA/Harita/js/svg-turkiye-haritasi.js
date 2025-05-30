/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

const weatherData = new WeatherData();
// const userInterface = new UI();

function svgturkiyeharitasi() {
  const element = document.querySelector("#svg-turkiye-haritasi");
  const info = document.querySelector(".il-isimleri");

  element.addEventListener("mouseover", function (event) {
    if (
      event.target.tagName === "path" &&
      event.target.parentNode.id !== "guney-kibris"
    ) {
      info.innerHTML = [
        "<div>",
        event.target.parentNode.getAttribute("data-iladi"),
        "</div>",
      ].join("");
    }
  });

  element.addEventListener("mousemove", function (event) {
    info.style.top = event.pageY + 25 + "px";
    info.style.left = event.pageX + "px";
  });

  element.addEventListener("mouseout", function (event) {
    info.innerHTML = "";
  });

  element.addEventListener("click", function (event) {
    if (event.target.tagName === "path") {
      const parent = event.target.parentNode;
      const id = parent.getAttribute("id");

      if (id === "guney-kibris") {
        return;
      }

      //*haritaya basıldıgında, basılan elementın attribute'une ulasacak data-iladi adlı attribute'e
      const cityName = parent.getAttribute("data-iladi");

      weatherData.getWeatherData(cityName).then((data) => {
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

      window.location.href =
        "#" + id + "-" + parent.getAttribute("data-plakakodu");
    }
  });
}
