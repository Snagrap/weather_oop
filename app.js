const form = document.querySelector("form");
form.addEventListener("submit", newCity);

const weather = new Weather("Sus");

const ui = new UI();

function newCity(){
	const CityInput = document.querySelector("#change-city").value;
	weather.changeCity(CityInput);
	getWeather();
	event.preventDefault();
}
	
function getWeather(){
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error));
}

