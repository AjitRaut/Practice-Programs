var convertTemperature = function(celsius) {
    let kelwin = celsius + 273.15;
    let fahrenheit= celsius * 1.80 + 32.00
    let arr=[];
     arr.push(kelwin,fahrenheit)
     return arr

    
};
let celsius = 36.50
console.log(convertTemperature(celsius))