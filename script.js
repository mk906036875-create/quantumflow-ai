 function runAutomation() {

  const button = document.getElementById("runBtn");
  const status = document.getElementById("workflowStatus");
  const progress = document.getElementById("progressBar");

  const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3"),
    document.getElementById("step4")
  ];

  const successBox = document.getElementById("successBox");

  // Reset
  steps.forEach(step => {
    step.classList.remove("active", "done");

    const small = step.querySelector("small");
    const check = step.querySelector(".check");

    small.textContent = "Waiting...";
    check.textContent = "○";
  });

  successBox.style.display = "none";

  button.disabled = true;
  button.textContent = "⚡ Running AI Automation...";

  status.textContent = "Running";
  progress.style.width = "0%";

  // Lead data
  setTimeout(() => {

    const lead = {
      name: "John Davis",
      business: "Tech Solutions Inc.",
      email: "john@techsolutions.com",
      score: 92
    };

    document.getElementById("leadAvatar").textContent = "JD";
    document.getElementById("leadName").textContent = lead.name;
    document.getElementById("leadBusiness").textContent = lead.business;
    document.getElementById("leadEmail").textContent = lead.email;
    document.getElementById("leadScore").textContent = lead.score;

    document.getElementById("leadsCount").textContent = "1";

    runStep(0, "Lead captured", 25);

  }, 700);


  function runStep(index, message, percentage) {

    if (index > 0) {
      steps[index - 1].classList.remove("active");
      steps[index - 1].classList.add("done");

      steps[index - 1]
        .querySelector(".check")
        .textContent = "✓";
    }

    if (index >= steps.length) {
      completeAutomation();
      return;
    }

    const step = steps[index];

    step.classList.add("active");

    step.querySelector("small").textContent = message;

    progress.style.width = percentage + "%";

    setTimeout(() => {

      if (index === 0) {
        runStep(1, "AI score generated: 92/100", 50);
      }

      else if (index === 1) {
        document.getElementById("qualifiedCount").textContent = "1";
        runStep(2, "Personalized message generated", 75);
      }

      else if (index === 2) {

        document.getElementById("messageBox").innerHTML = `
          <span>🤖</span>
          <p>
            Hi John, thanks for your interest.
            Our AI automation solution can help
            streamline your business workflow.
            Would you like to see a quick demo?
          </p>
        `;

        runStep(3, "CRM record updated", 100);
      }

      else {
        completeAutomation();
      }

    }, 1200);
  }


  function completeAutomation() {

    steps[3].classList.remove("active");
    steps[3].classList.add("done");

    steps[3]
      .querySelector(".check")
      .textContent = "✓";

    progress.style.width = "100%";

    status.textContent = "Completed";

    document.getElementById("automationCount").textContent = "1";

    button.disabled = false;
    button.textContent = "🚀 Run AI Automation";

    successBox.style.display = "flex";

  }

 }
