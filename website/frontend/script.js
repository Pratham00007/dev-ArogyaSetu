document.addEventListener("DOMContentLoaded", () => {
  const symptomSelect = document.getElementById("symptom");
  const suggestionsList = document.getElementById("suggestions");

  fetch("symptomTestData.json")
    .then(response => response.json())
    .then(data => {
      // Add symptoms to dropdown
      Object.keys(data).forEach(symptom => {
        const option = document.createElement("option");
        option.value = symptom;
        option.textContent = symptom;
        symptomSelect.appendChild(option);
      });

      // On change, show tests
      symptomSelect.addEventListener("change", () => {
        const selected = symptomSelect.value;
        suggestionsList.innerHTML = "";

        if (selected && data[selected]) {
          data[selected].forEach(test => {
            const li = document.createElement("li");
            li.textContent = test;
            suggestionsList.appendChild(li);
          });
        }
      });
    })
    .catch(err => {
      console.error("Failed to load JSON:", err);
    });
});
