
function convertTemperature() {
    // Get the values entered by the user
    let temperature = parseFloat(document.getElementById("temperature").value);
    let inputUnit = document.getElementById("inputUnit").value;
    let targetUnit = document.getElementById("targetUnit").value;

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    // Convert the temperature based on the selected units
    let convertedTemp;

    // Celsius conversions
    if (inputUnit === "Celsius" && targetUnit === "Fahrenheit") {
        convertedTemp = (temperature * 9/5) + 32;
    } else if (inputUnit === "Celsius" && targetUnit === "Kelvin") {
        convertedTemp = temperature + 273.15;
    } else if (inputUnit === "Celsius" && targetUnit === "Celsius") {
        convertedTemp = temperature;
    }

    // Fahrenheit conversions
    else if (inputUnit === "Fahrenheit" && targetUnit === "Celsius") {
        convertedTemp = (temperature - 32) * 5/9;
    } else if (inputUnit === "Fahrenheit" && targetUnit === "Kelvin") {
        convertedTemp = ((temperature - 32) * 5/9) + 273.15;
    } else if (inputUnit === "Fahrenheit" && targetUnit === "Fahrenheit") {
        convertedTemp = temperature;
    }

    // Kelvin conversions
    else if (inputUnit === "Kelvin" && targetUnit === "Celsius") {
        convertedTemp = temperature - 273.15;
    } else if (inputUnit === "Kelvin" && targetUnit === "Fahrenheit") {
        convertedTemp = ((temperature - 273.15) * 9/5) + 32;
    } else if (inputUnit === "Kelvin" && targetUnit === "Kelvin") {
        convertedTemp = temperature;
    }

    // Display the result
    document.getElementById("result").textContent = temperature + " " + inputUnit + " is equal to " + convertedTemp.toFixed(2) + " " + targetUnit;
}