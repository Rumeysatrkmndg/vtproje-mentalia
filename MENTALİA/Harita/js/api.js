// {params.il}
// key apikey 5Qf4DGLInqxGPzQZc7QvOu:4h7lQfER4TS7JJcdcEPj7P
class WeatherData {
  constructor() {
    this.url =
      "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=";

    this.requestOption = {
      method: "GET",
      headers: {
        Authorization: "apikey 5Qf4DGLInqxGPzQZc7QvOu:4h7lQfER4TS7JJcdcEPj7P",
      },
    };
  }

  async getWeatherData(city) {
    try {
      const data = await (
        await fetch(`${this.url}${city}`, this.requestOption)
      ).json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
