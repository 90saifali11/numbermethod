var input = document.getElementById("input");
var result = document.getElementById("result");
function round(){
    var inputResult = Math.round(input.value)
    result.innerHTML = inputResult;
}

var randomResult = document.getElementById('randomResult')
function random(){
    var random_result = Math.random();
    randomResult.innerText= Math.round(random_result * 10)
    
}
var str = document.getElementById('str');
var number = document.getElementById('number');

function convertToNumber() {
    var str_value = str.value;
    var str_result;

    // Check if the string contains a decimal point
    if (str_value.includes('.')) {
        // Convert the string to a decimal number using parseFloat
        str_result = parseFloat(str_value);
    } else {
        // Convert the string to an integer using parseInt
        str_result = parseInt(str_value, 10);
    }

    // Check if the conversion resulted in NaN
    if (isNaN(str_result)) {
        number.innerText = 'NaN'; // Display NaN if the string cannot be converted into a valid number
    } else {
        number.innerText = str_result; // Display the converted number
    }
}


