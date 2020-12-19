 function displayTemperature(response){
     console.log(response.data.main.temp);
 } 
 let apiKey= "1b8abfcfd13f6be4d6f095c6de05ba7f";
 let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}&units=metric`;

 console.log(apiUrl); 
 axios.get(apiUrl).then(displayTemperature);