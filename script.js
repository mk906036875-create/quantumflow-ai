 function runAutomation() {

  const button = document.getElementById("runBtn");
  const status = document.getElementById("workflowStatus");
  const progress = document.getElementById("progressBar");

  const name = document.getElementById("inputName").value.trim();
  const business = document.getElementById("inputBusiness").value.trim();
  const email = document.getElementById("inputEmail").value.trim();

  // Check Lead Input
  if (!name || !business || !email) {
    alert("Please enter Lead Name, Business Name and Email.");
    return;
  }

  const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3"),
    document.getElementById("step4")
  ];

  button.disabled = true;
  button.textContent = "⚡ Running AI Automation...";
  status.textContent = "Running";
  progress.style.width = "0%";

  steps.forEach(step => {
    step.classList.remove("active", "done");
    step.querySelector("small").textContent = "Waiting...";
    step.querySelector(".check").textContent = "○";
  });

  document.getElementById("successBox").style.display = "none";


  // Lead Capture
  setTimeout(() => {

    document.getElementById("leadAvatar").textContent =
      name.substring(0, 2).toUpperCase();

    document.getElementById("leadName").textContent = name;
    document.getElementById("leadBusiness").textContent = business;
    document.getElementById("leadEmail").textContent = email;

    document.getElementById("leadsCount").textContent = "1";

    completeStep(0, "Lead captured ✓", 25);

  }, 500);


  function completeStep(index, text, percent) {

    const step = steps[index];

    step.classList.add("active");

    step.querySelector("small").textContent = text;
    step.querySelector(".check").textContent = "✓";

    progress.style.width = percent + "%";


    setTimeout(() => {

      step.classList.remove("active");
      step.classList.add("done");


      // AI Lead Score
      if (index === 0) {

        completeStep(
          1,
          "AI Score: 92/100 ✓",
          50
        );

      }


      // Qualified Lead
      else if (index === 1) {

        document.getElementById("leadScore").textContent = "92";
        document.getElementById("qualifiedCount").textContent = "1";

        completeStep(
          2,
          "Personalized follow-up generated ✓",
          75
        );

      }


      // AI Follow-up
      else if (index === 2) {

        document.getElementById("messageBox").innerHTML = `
          <span>🤖</span>
          <p>
            Hi ${name}, thanks for your interest.
            Our AI automation solution can help
            streamline ${business}.
            Would you like to see a quick demo?
          </p>
        `;

        completeStep(
          3,
          "CRM record updated ✓",
          100
        );

      }


      // Complete
      else {

        status.textContent = "Completed";

        document.getElementById("automationCount").textContent = "1";

        document.getElementById("successBox").style.display = "flex";

        button.disabled = false;
        button.textContent = "🚀 Run AI Automation";

      }

    }, 1200);
  }

         }
