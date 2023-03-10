
//Variables
const button = document.getElementById("food-button");
const result = document.getElementById("result");
const stages = ['#egg', '#caterpillar', '#pupa', '#moth'];
var current_stage = 0;

//Setting pet name 
function setName() {
    var petName = localStorage.getItem('userName');
    const petNameRow = document.getElementById("pet-name");
    petNameRow.textContent = petName;
}
// Feeding the pet
function feedMe() {
    result.textContent = "I'm hungry!"
    const meter = document.getElementById("meter")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() < 0.8;
        if (success) {
          resolve("Yum! Thank you!");
        } else {
          reject("Ugh I'm full. Just give me a sec"); 
        }
      }, 2000); 
    });
  }
  
  feedMe()
    .then(message => {
      console.log(message); 
    })
    .catch(error => {
      console.log(error); 
    });
    
  button.addEventListener("click", () => {
    button.textContent = "Eating...";
  
    feedMe()
      .then(message => {
        meter.setAttribute('value', parseInt(meter.getAttribute('value')) + 25);
        if (meter.getAttribute('value') >= 100) {
            evolve()
          } 
        result.textContent = message;
      })
      .catch(error => {
        result.textContent = error;
      })
      .finally(() => {
        button.textContent = "Feed me!";
      });
  });

// Pet Evolution 
function evolve() {
//change sprite
  if (current_stage < 3) {
  var stage = stages[current_stage];
  var pet = document.querySelector(stage);
  pet.style.display = 'none';
  current_stage ++;
  stage = stages[current_stage];
  var pet = document.querySelector(stage);
  pet.style.display = 'flex';
  }
//reset hunger
  meter.setAttribute('value', 0)
//increase age NOT WORKING!!!!
  var age = document.getElementById("age");
  age.innerHTML = parseInt(age.innerHTML) + 1;
}

setName()