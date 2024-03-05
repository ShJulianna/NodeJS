import * as readline from 'readline/promises';



const TOKEN = process.env.TOKEN

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
        "apikey": TOKEN
    }
};


const getWeather = (city) => {
    return fetch(`http://api.weatherstack.com/current?access_key=${TOKEN}&query=${city}`, requestOptions)

}


const startApp = function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line',  (line) => {
        getWeather(line)
            .then(response => response.text())
            .then(result => {
                const weather = JSON.parse(result)
                console.log(`City: ${weather.location.name} (${weather.location.country}).`)
                console.log(`Temperature: ${weather.current.temperature || 'no data'} dg. Feels like: ${weather.current.feelslike || 'no data'}. ${weather.current.weather_descriptions[0] || 'no data'}.`)
                console.log(`Wind speed: ${weather.current.wind_speed || 'no data'}. Pressure ${weather.current.pressure || 'no data'}.`)

            })
            .catch(error => console.log('Error', "There is no such city"));

        rl.close()

    })
}

console.log("Print a city")
startApp()