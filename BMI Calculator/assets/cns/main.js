/* Accesing the elements */
let weightIn = document.querySelector("#userWeight")
let heightIn = document.querySelector("#userHeight")
let button = document.querySelector("button")
let bmiOut = document.querySelector("h3")
let bmiType = document.querySelector("h4")

/* Invoking click function for button*/
button.addEventListener("click", calBMI);


/* Function for working of BMI cal (no age and male female section) */
function calBMI() {
    /* Converts input into numeric value - help from web */
    let weight = parseFloat(weightIn.value);
    let height = parseFloat(heightIn.value) / 100;
    let bmiCal = (weight / (height * height)).toFixed(1);
    let userBMI = bmiOut.innerText = `Your BMI is ${bmiCal}`

    if (bmiCal < 18.5) {
        userBMI;
        bmiType.innerText = `Underweight`;
        bmiType.style.color = "red";
    } else if (bmiCal >= 18.5 && bmiCal <= 24.9) {
        userBMI;
        bmiType.innerText = `Normal`;
        bmiType.style.color = "green";
    } else if (bmiCal >= 25.0 && bmiCal <= 29.9) {
        userBMI;
        bmiType.innerText = `Overweight`;
        bmiType.style.color = "red";
    } else if (bmiCal >= 30.0) {
        userBMI;
        bmiType.innerText = `Obesity`;
        bmiType.style.color = "red";
    }
}
/* End of JS */

