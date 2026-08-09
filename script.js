 /* =========================================================
   QUANTUMFLOW AI
   ONE-CLICK AI AUTOMATION DEMO
   ========================================================= */

let isRunning = false;

let leads = 0;
let qualified = 0;
let automations = 0;


/* =========================
   DEMO LEADS
   ========================= */

const demoLeads = [
  {
    name: "John Davis",
    initials: "JD",
    business: "Davis Digital Agency",
    email: "john@davisdigital.com",
    score: 94
  },
  {
    name: "Sarah Miller",
    initials: "SM",
    business: "Miller Growth Studio",
    email: "sarah@millergrowth.com",
    score: 91
  },
  {
    name: "Michael Brown",
    initials: "MB",
    business: "Brown Marketing Co.",
    email: "michael@brownmarketing.com",
    score: 88
  },
  {
    name: "Emily Wilson",
    initials: "EW",
    business: "Wilson Creative",
    email: "emily@wilsoncreative.com",
    score: 96
  }
];


/* =========================
   FOLLOW-UP MESSAGES
   ========================= */

const followUpMessages = [
  "Hi! Thanks for your interest. Our AI automation system can help your business capture and qualify leads automatically. Would you like to see a quick demo?",

  "Hi! We noticed your business could benefit from automated lead follow-ups. QuantumFlow AI can help reduce manual work and improve response time. Would you like to learn more?",

  "Hello! Your lead has been successfully qualified by our AI system. We can automatically manage follow-ups and CRM updates for your team. Let's connect!"
];


/* =========================
   ELEMENTS
   ========================= */

const runBtn = document.getElementById("runBtn");

const progressBar = document.getElementById("progressBar");

const workflowStatus =
  document.getElementById("workflowStatus");

const successBox =
  document.getElementById("successBox");

const leadAvatar =
  document.getElementById("leadAvatar");

const leadName =
  document.getElementById("leadName");

const leadBusiness =
  document.getElementById("leadBusiness");

const leadEmail =
  document.getElementById("leadEmail");

const leadScore =
  document.getElementById("leadScore");

const messageBox =
  document.getElementById("messageBox");

const leadsCount =
  document.getElementById("leadsCount");

const qualifiedCount =
  document.getElementById("qualifiedCount");

const automationCount =
  document.getElementById("automationCount");


/* =========================
   STEP ELEMENTS
   ========================= */

const steps = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3"),
  document.getElementById("step4")
];


/* =========================
   UTILITY
   ========================= */

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}


/* =========================
   RESET WORKFLOW
   ========================= */

function resetWorkflow() {

  steps.forEach(step => {

    if (!step) return;

    step.classList.remove(
      "active",
      "complete"
    );

    const small = step.querySelector("small");
    const check = step.querySelector(".check");

    if (small) {
      small.textContent = "Waiting...";
    }

    if (check) {
      check.textContent = "○";
    }

  });

  progressBar.style.width = "0%";

  workflowStatus.textContent = "Ready";

  workflowStatus.classList.remove(
    "running",
    "complete"
  );

  successBox.classList.remove("show");
}


/* =========================
   ACTIVATE STEP
   ========================= */

async function runStep(
  step,
  activeText,
  completeText,
  progress
) {

  if (!step) return;

  const small = step.querySelector("small");
  const check = step.querySelector(".check");

  step.classList.add("active");

  if (small) {
    small.textContent = activeText;
  }

  if (check) {
    check.textContent = "◌";
  }

  progressBar.style.width = progress + "%";

  await wait(1100);

  step.classList.remove("active");
  step.classList.add("complete");

  if (small) {
    small.textContent = completeText;
  }

  if (check) {
    check.textContent = "✓";
  }

}


/* =========================
   CREATE LEAD
   ========================= */

function generateLead() {

  const lead =
    demoLeads[
      Math.floor(
        Math.random() * demoLeads.length
      )
    ];

  leadAvatar.textContent = lead.initials;

  leadName.textContent = lead.name;

  leadBusiness.textContent =
    lead.business;

  leadEmail.textContent =
    lead.email;

  leadScore.textContent =
    lead.score;

  return lead;
}


/* =========================
   UPDATE COUNTERS
   ========================= */

function updateCounters() {

  leadsCount.textContent = leads;

  qualifiedCount.textContent =
    qualified;

  automationCount.textContent =
    automations;

}


/* =========================
   AI MESSAGE
   ========================= */

function showFollowUp() {

  const message =
    followUpMessages[
      Math.floor(
        Math.random() *
        followUpMessages.length
      )
    ];

  messageBox.innerHTML = `
    <span>🤖</span>
    <p>${message}</p>
  `;

}


/* =========================
   MAIN AUTOMATION
   ========================= */

async function runAutomation() {

  if (isRunning) {
    return;
  }

  isRunning = true;

  runBtn.classList.add("running");

  runBtn.textContent =
    "⚙️ AI Automation Running...";

  resetWorkflow();

  workflowStatus.textContent =
    "Running";

  workflowStatus.classList.add(
    "running"
  );


  /* --------------------------------
     STEP 1 — LEAD CAPTURE
     -------------------------------- */

  const lead =
    generateLead();

  await runStep(
    steps[0],
    "Capturing lead...",
    "Lead captured",
    25
  );

  leads++;

  updateCounters();


  /* --------------------------------
     STEP 2 — AI SCORING
     -------------------------------- */

  await runStep(
    steps[1],
    "Analyzing lead...",
    "Lead qualified",
    50
  );

  qualified++;

  updateCounters();


  /* --------------------------------
     STEP 3 — AI FOLLOW-UP
     -------------------------------- */

  showFollowUp();

  await runStep(
    steps[2],
    "Generating AI message...",
    "Follow-up sent",
    75
  );


  /* --------------------------------
     STEP 4 — CRM UPDATE
     -------------------------------- */

  await runStep(
    steps[3],
    "Updating CRM...",
    "CRM updated",
    100
  );

  automations++;

  updateCounters();


  /* --------------------------------
     COMPLETE
     -------------------------------- */

  workflowStatus.textContent =
    "Complete";

  workflowStatus.classList.remove(
    "running"
  );

  workflowStatus.classList.add(
    "complete"
  );

  runBtn.textContent =
    "✓ Automation Complete";

  successBox.classList.add("show");


  await wait(800);

  runBtn.textContent =
    "🚀 Run AI Automation";

  runBtn.classList.remove(
    "running"
  );

  isRunning = false;

}


/* =========================
   INITIAL STATE
   ========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateCounters();

    resetWorkflow();

    if (successBox) {
      successBox.classList.remove(
        "show"
      );
    }

  }
);
