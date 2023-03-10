function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    const petNameRow = document.querySelector("tr:contains('Pet Name')");
    petNameRow.querySelector("td:last-child").textContent = nameEl.value;
    window.location.href = "pet.html";
  }