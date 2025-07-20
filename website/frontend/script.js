function getDiagnosis() {
  const inputField = document.getElementById("symptom-input");
  const input = inputField.value.toLowerCase().trim();
  const symptoms = input.replace(/,/g, '').split(/\s+/);

  const resultSection = document.getElementById("result-section");
  const diseaseName = document.getElementById("disease-name");
  const testList = document.getElementById("test-list");
  const doctorType = document.getElementById("doctor-type");

  // Clear previous results
  diseaseName.textContent = "";
  testList.innerHTML = "";
  doctorType.textContent = "";
  resultSection.classList.add("hidden");

  if (input === "") {
    diseaseName.textContent = "Please enter some symptoms above to get suggestions.";
    return;
  }

  let mockDiagnosis = {
    disease: "General Viral Infection",
    tests: ["CBC (Complete Blood Count)", "Throat Swab", "Rapid Antigen Test"],
    doctor: "General Physician"
  };

  if (symptoms.includes("fever") && symptoms.includes("cough")) {
    mockDiagnosis = {
      disease: "Flu or COVID-19",
      tests: ["RT-PCR", "Chest X-Ray", "Blood Test"],
      doctor: "Pulmonologist"
    };
  } else if (symptoms.includes("headache") && symptoms.includes("nausea")) {
    mockDiagnosis = {
      disease: "Migraine",
      tests: ["Neurological Exam", "MRI"],
      doctor: "Neurologist"
    };
  } else if (
    (symptoms.includes("swollen") && symptoms.includes("feet")) ||
    (symptoms.includes("leg") && symptoms.includes("pain"))
  ) {
    mockDiagnosis = {
      disease: "Water Retention or Poor Circulation",
      tests: ["Kidney Function Test", "Doppler Ultrasound"],
      doctor: "Nephrologist"
    };
  }

  diseaseName.textContent = mockDiagnosis.disease;
  mockDiagnosis.tests.forEach(test => {
    const li = document.createElement("li");
    li.textContent = test;
    testList.appendChild(li);
  });
  doctorType.textContent = mockDiagnosis.doctor;
  resultSection.classList.remove("hidden");
}

function clearFields() {
  document.getElementById("symptom-input").value = "";
  document.getElementById("result-section").classList.add("hidden");
}

document.getElementById("symptom-input").addEventListener("input", () => {
  document.getElementById("result-section").classList.add("hidden");
});