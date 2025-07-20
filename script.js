function getDiagnosis() {
  const inputField = document.getElementById("symptom-input");
  const input = inputField.value.toLowerCase().trim();
  const resultSection = document.getElementById("result-section");
  const diseaseName = document.getElementById("disease-name");
  const testList = document.getElementById("test-list");
  const doctorType = document.getElementById("doctor-type");

  // Clear previous results
  diseaseName.textContent = "";
  testList.innerHTML = "";
  doctorType.textContent = "";
  resultSection.style.display = "none";

  // If no input
  if (input === "") {
    diseaseName.textContent = "Please enter some symptoms above to get suggestions.";
    return;
  }

  let mockDiagnosis = {
    disease: "General Viral Infection",
    tests: ["CBC (Complete Blood Count)", "Throat Swab", "Rapid Antigen Test"],
    doctor: "General Physician"
  };

  if (input.includes("fever") && input.includes("cough")) {
    mockDiagnosis = {
      disease: "Flu or COVID-19",
      tests: ["RT-PCR", "Chest X-Ray", "Blood Test"],
      doctor: "Pulmonologist"
    };
  } else if (input.includes("headache") && input.includes("nausea")) {
    mockDiagnosis = {
      disease: "Migraine",
      tests: ["Neurological Exam", "MRI"],
      doctor: "Neurologist"
    };
  } else if (input.includes("swollen feet") || input.includes("leg pain")) {
    mockDiagnosis = {
      disease: "Water Retention or Poor Circulation",
      tests: ["Kidney Function Test", "Doppler Ultrasound"],
      doctor: "Nephrologist"
    };
  }

  // Show results
  diseaseName.textContent = mockDiagnosis.disease;
  mockDiagnosis.tests.forEach(test => {
    const li = document.createElement("li");
    li.textContent = test;
    testList.appendChild(li);
  });
  doctorType.textContent = mockDiagnosis.doctor;
  resultSection.style.display = "block";
}

// Clear button functionality
function clearFields() {
  document.getElementById("symptom-input").value = "";
  document.getElementById("result-section").style.display = "none";
}

// Auto-clear result section on new typing
document.getElementById("symptom-input").addEventListener("input", () => {
  document.getElementById("result-section").style.display = "none";
});
