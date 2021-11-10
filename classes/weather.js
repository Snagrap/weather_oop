class Weather{
	constructor(city){
		this.key = "a6e7cf1127ed1dde18d06df7b57d7c7b";
		this.city = city;
	}
	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responseData = await response.json()
		return responseData;
	}
	changeCity(city){
		this.city = city;
	}
}