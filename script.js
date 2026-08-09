let running = false;

let leads = 0;
let qualified = 0;
let automations = 0;

const runBtn = document.getElementById("runBtn");
const progressBar = document.getElementById("progressBar");
const workflowStatus = document.getElementById("workflowStatus");

const leadsCount = document.getElementById("leadsCount");
const qualifiedCount = document.getElementById("qualifiedCount");
const automationCount = document.getElementById("automationCount");

const leadName = document.getElementById("leadName");
const leadBusiness = document.getElementById("leadBusiness");
const leadEmail = document.getElementById("leadEmail");
const leadAvatar = document.getElementById("leadAvatar");
const leadScore = document.getElementById("leadScore");

const messageBox = document.getElementById("messageBox");
const successBox = document.getElementById("successBox");

const steps = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3"),
  document.getElementById("step4")
];

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function resetSteps() {
  steps.forEach(step => {
    step.classList.remove("active", "done");

    step.querySelector("small").textContent = "Waiting...";
    step.querySelector(".check").textContent = "○";
  });
}

function activateStep(index, text) {
  const step = steps[index];

  step.classList.add("active");
  step.querySelector("small").textContent = text;
}

function completeStep(index) {
  const step = steps[index];

  step.classList.remove("active");
  step.classList.add("done");

  step.querySelector("small").textContent = "Completed";
  step.querySelector(".check").textContent = "✓";
}

async function runAutomation() {

  if (running) return;

  running = true;

  runBtn.disabled = true;
  runBtn.textContent = "⚡ Running...";

  successBox.style.display = "none";

  resetSteps();

  progressBar.style.width = "0%";
  workflowStatus.textContent = "Processing";

  /* =========================
     STEP 1 — LEAD CAPTURE
  ========================= */

  activateStep(0, "Capturing new lead...");

  progressBar.style.width = "20%";

  await wait(1000);

  const names = [
    "John Davis",
    "Sarah Miller",
    "Michael Brown",
    "Emily Wilson",
    "David Johnson"
  ];

  const businesses = [
    "Growth Labs",
    "Nova Digital",
    "Bright Solutions",
    "FutureScale",
    "Prime Business"
  ];

  const randomIndex =
    Math.floor(Math.random() * names.length);

  const name = names[randomIndex];
  const business = businesses[randomIndex];

  const email =
    name.toLowerCase()
      .replace(" ", ".") +
    "@example.com";

  leadName.textContent = name;
  leadBusiness.textContent = business;
  leadEmail.textContent = email;

  leadAvatar.textContent =
    name
      .split(" ")
      .map(word => word[0])
      .join("");

  leads++;

  leadsCount.textContent = leads;

  completeStep(0);


  /* =========================
     STEP 2 — AI SCORE
  ========================= */

  activateStep(1, "AI analyzing lead...");

  progressBar.style.width = "45%";

  await wait(1200);

  const score =
    Math.floor(Math.random() * 16) + 80;

  leadScore.textContent = score;

  qualified++;

  qualifiedCount.textContent = qualified;

  completeStep(1);


  /* =========================
     STEP 3 — AI FOLLOW-UP
  ========================= */

  activateStep(
    2,
    "Generating personalized message..."
  );

  progressBar.style.width = "70%";

  await wait(1200);

  messageBox.innerHTML = `
    <span>🤖</span>

    <p>
      Hi ${name.split(" ")[0]}, thanks for your interest.
      Our AI automation system can help ${business}
      capture and qualify leads automatically.
      Would you like to see a quick demo?
    </p>
  `;

  completeStep(2);


  /* =========================
     STEP 4 — CRM UPDATE
  ========================= */

  activateStep(3, "Updating CRM...");

  progressBar.style.width = "90%";

  await wait(1200);

  automations++;

  automationCount.textContent = automations;

  completeStep(3);

  progressBar.style.width = "100%";

  workflowStatus.textContent = "Completed";

  await wait(500);


  /* =========================
     SUCCESS
  ========================= */

  successBox.style.display = "block";

  runBtn.disabled = false;

  runBtn.textContent =
    "🚀 Run AI Automation";

  running = false;
}


/* ONE CLICK BUTTON */

runBtn.addEventListener(
  "click",
  runAutomation
);
