 document.addEventListener("DOMContentLoaded", () => {
  const runButton = document.querySelector("#runAutomation");

  if (!runButton) return;

  runButton.addEventListener("click", () => {
    runButton.disabled = true;
    runButton.textContent = "⚡ Running AI Automation...";

    const steps = [
      "🔍 Analyzing new lead...",
      "🤖 AI Lead Score generated: 92/100",
      "✉️ AI follow-up message created...",
      "💾 CRM record updated...",
      "✅ Automation completed successfully!"
    ];

    let i = 0;

    const interval = setInterval(() => {
      runButton.textContent = steps[i];
      i++;

      if (i === steps.length) {
        clearInterval(interval);

        setTimeout(() => {
          runButton.disabled = false;
          runButton.textContent = "🚀 Run AI Automation";
        }, 1500);
      }
    }, 1000);
  });
});
