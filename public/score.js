//score.js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    let totalPossibleScore = 9.8; 

    // Check physical activity
    let physicalActivity = document.querySelector('input[name="day"]:checked').id;
    if (physicalActivity === 'day56') {
        score += 1;
    } else if (physicalActivity === 'day34') {
        score += 0.75;
    } else if (physicalActivity === 'day12') {
        score += 0.5;
    }
    else if (physicalActivity === 'day01') {
        score += 0.2;
    }

    // Check calories
    let calories = document.querySelector('input[name="calories"]:checked').id;
    if (calories === 'calories1') {
        score += 0.5;
    } else if (calories === 'calories2') {
        score += 1;
    }
    else if (calories === 'calories3') {
        score += 0.8;
    }
    else if (calories === 'calories4') {
        score += 0.5;
    }

    // Check diet
    let diet = document.querySelector('input[name="diet"]:checked').id;
    if (diet === 'dietExcellent') {
        score += 1;
    } else if (diet === 'dietGood') {
        score += 0.75;
    } 
    else if (diet === 'dietAverage') {
        score += 0.5;
    }
    else if (diet === 'dietPoor') {
        score += 0.2;
    }
    

    // Check smoking status
    let smoke = document.querySelector('input[name="smoke"]:checked').id;
    if (smoke === 'smokeNo') {
        score += 1;
    } else if (smoke === 'smokeYes') {
        score += 0.5;
    }

    // Check alcohol consumption
    let alcohol = document.querySelector('input[name="alcohol"]:checked').id;
    if (alcohol === 'alcoholNo' || alcohol === 'alcoholRarely') {
        score += 1;
    } else if (alcohol === 'alcoholSometimes') {
        score += 0.7;
    }
    else if (alcohol === 'alcoholYes2') {
        score += 0.5;
        
    } 
    else if (alcohol === 'alcoholYes1') {
        score += 0.1;
    }


    // Check sleep duration
    let sleep = document.querySelector('input[name="sleep"]:checked').id;
    if (sleep === 'sleep7-8' || sleep ==='sleepMore8') {
        score += 1;
    } else if (sleep === 'sleep5-6' ) {
        score += 0.5;
    }
    else if (sleep === 'sleepLess5') {
        score += 0.2;
    }
 
    

    // Check stress level
    let stress = document.querySelector('input[name="stress"]:checked').id;
    if (stress === 'stressLow') {
        score += 1;
    } else if (stress === 'stressMedium') {
        score += 0.5;
    }
    else if (stress === 'stressHigh') {
        score += 0.2;
    }
    

    // Check family history of chronic illnesses
    let familyHistory = document.querySelector('input[name="familyHistory"]:checked').id;
    if (familyHistory === 'familyHistoryNo') {
        score += 1;
    }
    else if (familyHistory === 'familyHistoryYes') {
        score += 0.5;
    }

    // Check water intake
    let water = document.querySelector('input[name="water"]:checked').id;
    if (water === 'water7-8' || water === 'waterMore8') {
        score += 1;
    } else if (water === 'water4-6') {
        score += 0.5;
    }
    else if (water === 'waterLess4') {
        score += 0.2;
    }

   // Capture additional fields
   let firstName = document.querySelector('input[name="firstName"]').value;
   let lastName = document.querySelector('input[name="lastName"]').value;
   let age = document.querySelector('input[name="age"]').value;
   let weight = document.querySelector('input[name="weight"]').value;
   let height = document.querySelector('input[name="height"]').value;
   let gender = document.querySelector('input[name="gender"]:checked').value;

   let percentageScore = (score / totalPossibleScore) * 100;
  

   // Create a new URL
   let resultsUrl = new URL('result.html', window.location.origin);
   
   // Add the score as a URL parameter
   resultsUrl.searchParams.append('score', percentageScore);
   
   // Add additional parameters for displaying in result.html
   resultsUrl.searchParams.append('firstName', firstName);
   resultsUrl.searchParams.append('lastName', lastName);
   resultsUrl.searchParams.append('age', age);
   resultsUrl.searchParams.append('weight', weight);
   resultsUrl.searchParams.append('height', height);
   resultsUrl.searchParams.append('gender', gender);

   // Redirect to the results page with the score and additional parameters in the URL
   window.location.href = resultsUrl;

   console.log(`Your health score is: ${percentageScore}%`);
    
});
