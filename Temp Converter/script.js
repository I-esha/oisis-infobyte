function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var convertFrom = document.getElementById("convertFrom").value;
    var convertTo = document.getElementById("convertTo").value;
    var resultElement = document.getElementById("result");

    if (convertFrom === convertTo) {
        resultElement.innerHTML = "Please select different units to convert.";
        return;
    }

    if (isNaN(inputTemp)) {
        resultElement.innerHTML = "Please enter a valid temperature.";
        return;
    }

    var convertedTemp;

    if (convertFrom === "celsius") {
        if (convertTo === "fahrenheit") {
            convertedTemp = (inputTemp * 9 / 5) + 32;
            resultElement.innerHTML = inputTemp + "°C = " + convertedTemp + "°F";
        } else if (convertTo === "kelvin") {
            convertedTemp = parseFloat(inputTemp) + 273.15;
            resultElement.innerHTML = inputTemp + "°C = " + convertedTemp + "K";
        }
    } else if (convertFrom === "fahrenheit") {
        if (convertTo === "celsius") {
            convertedTemp = (inputTemp - 32) * 5 / 9;
            resultElement.innerHTML = inputTemp + "°F = " + convertedTemp + "°C";
        } else if (convertTo === "kelvin") {
            convertedTemp = (inputTemp - 32) * 5 / 9 + 273.15;
            resultElement.innerHTML = inputTemp + "°F = " + convertedTemp + "K";
        }
    } else if (convertFrom === "kelvin") {
        if (convertTo === "celsius") {
            convertedTemp = parseFloat(inputTemp) - 273.15;
            resultElement.innerHTML = inputTemp + "K = " + convertedTemp + "°C";
        } else if (convertTo === "fahrenheit") {
            convertedTemp = (parseFloat(inputTemp) - 273.15) * 9 / 5 + 32;
            resultElement.innerHTML = inputTemp + "K = " + convertedTemp + "°F";
        }
    }
}