

document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);

    let firstName = params.get('firstName');
    let lastName = params.get('lastName');
    let age = params.get('age');
    let weight = params.get('weight');
    let height = params.get('height');
    let gender = params.get('gender');
    let score = params.get('score'); 

    document.getElementById('firstName').innerText = firstName;
    document.getElementById('lastName').innerText = lastName;
    document.getElementById('age').innerText = age;
    document.getElementById('weight').innerText = weight;
    document.getElementById('height').innerText = height;
    document.getElementById('gender').innerText = gender;

    document.getElementById("score").innerText = score; 
   
});






