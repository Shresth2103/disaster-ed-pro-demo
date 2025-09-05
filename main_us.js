/*<div id="demoModal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal('demoModal')">&times;</span>
    <h2 style="color: #667eea; margin-bottom: 1rem;">🔥 Fire Safety Simulation</h2>
    <p style="margin-bottom: 1rem;"><strong>Scenario:</strong> You're in your classroom when the fire alarm rings. What's your first action?</p>
    <div class="quiz-container">
      <div class="quiz-option" onclick="selectOption(this, false)">🏃‍♂️ Run to the nearest exit immediately</div>
      <div class="quiz-option" onclick="selectOption(this, false)">📱 Call your parents first</div>
      <div class="quiz-option" onclick="selectOption(this, true)">✋ Stop, listen to teacher's instructions, and follow evacuation protocol</div>
      <div class="quiz-option" onclick="selectOption(this, false)">🎒 Pack your belongings quickly</div>
    </div>
    <div id="quiz-feedback" style="margin-top: 1rem; font-weight: bold; display: none;"></div>
    <button class="btn" onclick="nextSimulation()" style="margin-top: 1rem; display: none;" id="nextBtn">Next Scenario →</button>
  </div>
</div>


*/

const questions = [
  {
    title: "🔥 Fire Safety Simulation",
    scenario: "You're in your classroom when the fire alarm rings. What's your first action?",
    options: [
      { text: "🏃‍♂️ Run to the nearest exit immediately", correct: false },
      { text: "📱 Call your parents first", correct: false },
      { text: "✋ Stop, listen to teacher's instructions, and follow evacuation protocol", correct: true },
      { text: "🎒 Pack your belongings quickly", correct: false }
    ]
  },
  {
    title: "🌪️ Earthquake Drill",
    scenario: "The ground starts shaking during class. What should you do first?",
    options: [
      { text: "🏃 Run outside quickly", correct: false },
      { text: "🪑 Drop, Cover, and Hold under a desk", correct: true },
      { text: "📞 Call your parents", correct: false },
      { text: "📚 Continue writing notes", correct: false }
    ]
  },
  {
    title: "🌊 Flood Safety",
    scenario: "Heavy rain causes water to rise quickly in your area. What’s the safest action?",
    options: [
      { text: "🚗 Try to drive through flooded streets", correct: false },
      { text: "⬆️ Move to higher ground immediately", correct: true },
      { text: "📱 Post updates on social media", correct: false },
      { text: "🛌 Stay inside your room and wait", correct: false }
    ]
  },
  {
    title: "⚡ Electrical Safety",
    scenario: "You notice a wire sparking after a storm. What should you do?",
    options: [
      { text: "💡 Try to fix it yourself", correct: false },
      { text: "📞 Inform an adult/authority immediately", correct: true },
      { text: "💧 Pour water to stop sparks", correct: false },
      { text: "👀 Ignore it", correct: false }
    ]
  }
];

let currentQuestion = 0;
let selectedAnswer = null;

function loadQuestion(index) {
  const q = questions[index];
  const modalContent = document.getElementById("modalContent");
  selectedAnswer = null;

  modalContent.innerHTML = `
    <span class="close" onclick="closeModal('demoModal')">&times;</span>
    <h3 style="color:#888;">Scenario ${index + 1} of ${questions.length}</h3>
    <h2 style="color: #667eea; margin-bottom: 1rem;">${q.title}</h2>
    <p style="margin-bottom: 1rem;"><strong>Scenario:</strong> ${q.scenario}</p>
    <div class="quiz-container">
      ${q.options.map((opt, i) => 
        `<div class="quiz-option" onclick="selectOption(this, ${opt.correct}, '${opt.text.replace(/'/g,"&#39;")}')">${opt.text}</div>`
      ).join("")}
    </div>
    <div id="quiz-feedback" style="margin-top: 1rem; font-weight: bold; display: none;"></div>
    <button class="btn" onclick="nextSimulation()" style="margin-top: 1rem;" id="nextBtn">Next Scenario →</button>
  `;
}

function nextSimulation() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion(currentQuestion);
  } else {
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `
      <h2 style="color: #4caf50;">🎉 Congratulations!</h2>
      <p>You’ve completed all the disaster management scenarios.</p>
      <button class="btn close_btn" onclick="closeModal('demoModal')">Close</button>
    `;
  }
}

function selectOption(element, isCorrect, answerText) {
  const feedback = document.getElementById("quiz-feedback");
  feedback.style.display = "block";

  // Reset highlight
  document.querySelectorAll(".quiz-option").forEach(opt => {
    opt.style.background = "";
    opt.style.color = "";
  });

  // Highlight picked answer
  element.style.background = isCorrect ? "#c8f7c5" : "#f7c5c5";
  element.style.color = "#000";

  // Store chosen answer
  selectedAnswer = answerText;

  if (isCorrect) {
    feedback.style.color = "green";
    feedback.textContent = `✅ Correct! You chose: ${answerText}`;
  } else {
    feedback.style.color = "red";
    feedback.textContent = `❌ Not the safest action. You chose: ${answerText}`;
  }
}

// Load first question when modal opens
loadQuestion(currentQuestion);