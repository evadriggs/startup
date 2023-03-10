// Feeding the pet//

function feedMe() {
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
  
  
  const button = document.getElementById("food-button");
  const result = document.getElementById("result");
  
  button.addEventListener("click", () => {
    button.textContent = "Eating...";
  
    feedMe()
      .then(message => {
        result.textContent = message;
      })
      .catch(error => {
        result.textContent = error;
      })
      .finally(() => {
        button.textContent = "Feed me!";
      });
  });

// Pet Evolution //
function evolve() {
    
}