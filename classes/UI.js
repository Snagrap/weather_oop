class UI{
	constructor(){
		this.description = document.querySelector("#description");
		this.temp = document.querySelector("#temp");
		this.city = document.querySelector("#location");
		this.feelsLike = document.querySelector("#feels-like");
		this.tempMin = document.querySelector("#temp-min");
		this.tempMax = document.querySelector("#temp-max");
		this.wind = document.querySelector("#wind");
	}
	drawWeather( data ){
		let description = data.weather[0].description;
		let celcius = Math.round(parseFloat(data.main.temp)-273.15);
		let feelsLike = Math.round(parseFloat(data.main.feels_like)-273.15);
		let tempMin = Math.round(parseFloat(data.main.temp_min)-273.15)
		let tempMax = Math.round(parseFloat(data.main.temp_max)-273.15)
		let wind = data.wind.speed;
		
		this.description.innerHTML=description;
		this.temp.innerHTML=celcius+"&deg;";
		this.feelsLike.innerHTML = "Feels like " + feelsLike + "&deg";
		this.tempMin.innerHTML = "Lowest " + tempMin + "&deg";
		this.tempMax.innerHTML = "Highest " + tempMax + "&deg";
		this.wind.innerHTML = wind + "m/s";
		this.city.innerHTML=data.name;
	}
}