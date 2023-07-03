

document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);

    let firstName = params.get('firstName');
    let lastName = params.get('lastName');
    let age = params.get('age');
    let weight = parseFloat(params.get('weight')) * 0.453592;
    let height = parseFloat(params.get('height')) * 0.3048;
    let gender = params.get('gender');
    let score = params.get('score'); 

      // calculate BMI
      let BMI = weight / Math.pow(height, 2);
    
    
      // Calculate new score based on BMI
      if (BMI < 18.5) {
          score *= 0.9; // adjust score for underweight
      } else if (BMI >= 18.5 && BMI <= 24.9) {
          score *= 1.0; // keep score the same for healthy weight
      } else if (BMI >= 25 && BMI <= 29.9) {
          score *= 0.8; // adjust score for overweight
      } else {
          score *= 0.7; // adjust score for obesity
      }

    document.getElementById('firstName').innerText = firstName;
    document.getElementById('lastName').innerText = lastName;
    document.getElementById('age').innerText = age;
    document.getElementById('weight').innerText = weight.toFixed(2);
    document.getElementById('height').innerText = height.toFixed(2);
    document.getElementById('gender').innerText = gender;
    document.getElementById("BMI").innerText = BMI.toFixed(2);
    document.getElementById("score").innerText = score; 
   
});






