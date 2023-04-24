const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f4a063d174msh1c038647245b9dap13d8dfjsn05231f901fdb",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};



const getweather = async (city) => {
  cityName.innerHTML = city;
  await fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
    )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_speed.innerHTML = response.wind_speed;
      
      return;
      
    }
    )
    .catch((err) => console.error(err));
    return;
  };
  getweather("Haryana");
  const names = ["Haryana", "Delhi", "Karnal", "Mumbai", "Kolkata", "Gurugram"]
  
  
names.map(async(city) => {
    var x = document.getElementById(city)
    if (x) {
    
    
        var a = document.createElement("td");
        var b = document.createElement("td");
        var c = document.createElement("td");
        var d = document.createElement("td");
        var e = document.createElement("td");
        var f = document.createElement("td");
        var g = document.createElement("td");
        var h = document.createElement("td");
        var i = document.createElement("td");
    
        x.appendChild(a)
        x.appendChild(b)
        x.appendChild(c)
        x.appendChild(d)
        x.appendChild(e)
        x.appendChild(f)
        x.appendChild(g)
        x.appendChild(h)
        x.appendChild(i)
    
        await fetch(
            "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
            options
          )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
        
            a.innerHTML = response.cloud_pct;
            b.innerHTML = response.feels_like;
            c.innerHTML = response.humidity;
            d.innerHTML = response.max_temp;
            e.innerHTML = response.min_temp;
            f.innerHTML = response.sunrise;
            g.innerHTML = response.sunset;
            h.innerHTML = response.temp;
            i.innerHTML = response.wind_speed;
        
        
              }
              )
              .catch((err) => console.error(err));
        
          }
          else {
              console.log("nothing found")
  }
})


submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);
});
