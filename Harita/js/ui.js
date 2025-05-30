class UI {
  constructor() {
    this.weatherInfoSection = document.querySelector("#weatherInfoSection");
    this.dayButtons = document.querySelector("#daysButton");
  }

  getTodayWeather(day, city, degree) {
    this.weatherInfoSection.innerHTML = "";

    this.weatherInfoSection.innerHTML += `
    
    <div id="today-cards" class="row p-3 align-items-center order-0 ">
              <!--* LEFT -->
              <div class="col-6 col-md-4 order-0 px-2">
                <h4>${day.day}, ${day.date}</h4>
                <h5>${city},Türkiye</h5>
                <h1>${degree}°C</h1>
              </div>
              <!--* CENTER -->
              <div class="col-12 col-lg-5 order-2 order-lg-1 mt-3 mt-lg-0 px-2">
                <div id="todayCenter">
                  <!--* TODAY CENTER LEFT-->
                  <div class="todayCenterLeft">
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-droplet"></i>
                      <p>Nem:${day.humidity}</p>
                    </div>
                    <div class="d-flex gap-2 my-3">
                      <i class="fa-solid fa-moon"></i>
                      <p>Gece:${day.night}</p>
                    </div>
                   
                  </div>
                  <!--* TODAY CENTER MID-->
                  <div class="todayCenterMid">
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-temperature-arrow-up"></i>
                      <p>Max:${day.max}</p>
                    </div>
                    <div class="d-flex gap-2 my-3">
                      <i class="fa-solid fa-temperature-arrow-down"></i>
                      <p>Min:${day.min}</p>
                    </div>
                   
                  </div>
                  <!--* TODAY CENTER RIGHT-->
                  <div class="todayCenterRight">
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-temperature-arrow-up"></i>
                      <p>nem</p>
                    </div>
                    <div class="d-flex gap-2 my-3">
                      <i class="fa-solid fa-temperature-arrow-down"></i>
                      <p>nem</p>
                    </div>
                   
                  </div>
                </div>
              </div>
              <!--* RIGHT -->
              <div class="col-6 col-lg-3 order-1 order-lg-2 px-2">
                <div id="todayRight">
                  <div class="d-flex gap-2 align-items-center mb-2 pe-1">
                    <h4 class="pe-3">${day.description.toUpperCase()}</h4>
                  </div>
                  <img  src="${day.icon}" width="80px" alt="" />
                </div>
              </div>
            </div>
    
    `;
  }

  //today'ın aynı tasarımı olacak sadece verıler farklı olcak
  getTomorrowWeather(day, city, degree) {
    this.weatherInfoSection.innerHTML = "";
    this.weatherInfoSection.innerHTML += `
    
    <div id="today-cards" class="row p-3 align-items-center order-0 ">
              <!--* LEFT -->
              <div class="col-6 col-md-4 order-0 px-2">
                <h4>${day.day}, ${day.date}</h4>
                <h5>${city},Türkiye</h5>
                <h1>${degree}°C</h1>
              </div>
              <!--* CENTER -->
              <div class="col-12 col-lg-5 order-2 order-lg-1 mt-3 mt-lg-0 px-2">
                <div id="todayCenter">
                  <!--* TODAY CENTER LEFT-->
                  <div class="todayCenterLeft">
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-droplet"></i>
                      <p>Nem:${day.humidity}</p>
                    </div>
                    <div class="d-flex gap-2 my-3">
                      <i class="fa-solid fa-moon"></i>
                      <p>Gece:${day.night}</p>
                    </div>
                   
                  </div>
                  <!--* TODAY CENTER MID-->
                  <div class="todayCenterMid">
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-temperature-arrow-up"></i>
                      <p>Max:${day.max}</p>
                    </div>
                    <div class="d-flex gap-2 my-3">
                      <i class="fa-solid fa-temperature-arrow-down"></i>
                      <p>Min:${day.min}</p>
                    </div>
                   
                  </div>
                  <!--* TODAY CENTER RIGHT-->
                  <div class="todayCenterRight">
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-temperature-arrow-up"></i>
                      <p>nem</p>
                    </div>
                    <div class="d-flex gap-2 my-3">
                      <i class="fa-solid fa-temperature-arrow-down"></i>
                      <p>nem</p>
                    </div>
                   
                  </div>
                </div>
              </div>
              <!--* RIGHT -->
              <div class="col-6 col-lg-3 order-1 order-lg-2 px-2">
                <div id="todayRight">
                  <div class="d-flex gap-2 align-items-center mb-2 pe-1">
                    <h4 class="pe-3">${day.description.toUpperCase()}</h4>
                  </div>
                  <img  src="${day.icon}" width="80px" alt="" />
                </div>
              </div>
            </div>
    
    `;
  }

  //hafta ıcın  cardlar tasarlanacak
  getWeekWeather(day) {
    this.weatherInfoSection.innerHTML = "";
    this.weatherInfoSection.innerHTML += `
    
    <div id="today-cards" class="row p-3 align-items-center order-0 ">
        
      <div class="card " style="width: 10rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

   <div class="card " style="width: 10rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
   <div class="card " style="width: 10rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
   <div class="card " style="width: 10rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
   <div class="card " style="width: 10rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
   <div class="card " style="width: 10rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>


    </div>
    
    `;
  }
}

/*

<div id="today-cards" class="row p-3 align-items-center">
              <!--* LEFT -->
              <div class="col-6 col-md-4 order-0 px-2">
                <h4>Cuma,13 Agustos</h4>
                <h5>Manisa,Türkiye</h5>
                <h1>30°C</h1>
              </div>
              <!--* CENTER -->
              <div class="col-12 col-lg-5 order-2 order-lg-1 mt-3 mt-lg-0 px-2">
                <div id="todayCenter">
                  <!--* TODAY CENTER LEFT-->
                  <div class="todayCenterLeft">
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-droplet"></i>
                      <p>nem</p>
                    </div>
                    <div class="d-flex gap-2 my-3">
                      <i class="fa-solid fa-moon"></i>
                      <p>nem</p>
                    </div>
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-temperature-high"></i>
                      <p>nem</p>
                    </div>
                  </div>
                  <!--* TODAY CENTER MID-->
                  <div class="todayCenterMid">
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-temperature-arrow-up"></i>
                      <p>nem</p>
                    </div>
                    <div class="d-flex gap-2 my-3">
                      <i class="fa-solid fa-temperature-arrow-down"></i>
                      <p>nem</p>
                    </div>
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-chart-line"></i>
                      <p>nem</p>
                    </div>
                  </div>
                  <!--* TODAY CENTER RIGHT-->
                  <div class="todayCenterRight">
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-temperature-arrow-up"></i>
                      <p>nem</p>
                    </div>
                    <div class="d-flex gap-2 my-3">
                      <i class="fa-solid fa-temperature-arrow-down"></i>
                      <p>nem</p>
                    </div>
                    <div class="d-flex gap-2">
                      <i class="fa-solid fa-chart-line"></i>
                      <p>nem</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--* RIGHT -->
              <div class="col-6 col-lg-3 order-1 order-lg-2 px-2">
                <div id="todayRight">
                  <div class="d-flex gap-2 align-items-center mb-2 pe-1">
                    <i class="fa-solid fa-chart-line"></i>
                    <p>Status</p>
                  </div>
                  <img src="img/channels4_profile.jpg" width="80px" alt="" />
                </div>
              </div>
            </div>

*/
