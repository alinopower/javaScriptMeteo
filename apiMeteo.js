var ApiKey = 'ce6acc2773b30c6b6d7880a0ca24c050';
var lang = 'fr'
// appel de l'api openweather avec la ville passé en paramètre
var apiCall = function(cityName){
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric&lang=${lang}`;
    fetch(url).then(response => response.json().then(data => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = '<i class="fas fa-thermometer-half"></i>' + data.main.temp + '°';
        document.querySelector('#humidity').innerHTML = '<i class="fa-solid fa-droplet"></i>' + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = '<i class="fa-solid fa-wind"></i>' + data.wind.speed + 'km/h';
    })).catch(err => {
        console.log('ERREUR : '+ err)
    })
}

// Ecoute de l' input 
document.querySelector('form').addEventListener('submit', function (event){
    event.preventDefault();
    var city = document.querySelector('#inputCity').value;
    apiCall(city)
})

// appel de l'input au chargement de la page avec la ville par defaut
apiCall('Bruxelles');