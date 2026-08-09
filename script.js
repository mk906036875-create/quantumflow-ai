/* =========================================================
   QUANTUMFLOW AI — INTERACTIVE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  console.log("QuantumFlow AI initialized successfully.");

});


/* =========================================================
   DEMO MODAL
   ========================================================= */

function openDemo() {

  const modal = document.getElementById("demoModal");

  if (!modal) return;

  modal.classList.add("show");

  document.body.style.overflow = "hidden";

}


function closeDemo() {

  const modal = document.getElementById("demoModal");

  if (!modal) return;

  modal.classList.remove("show");

  document.body.style.overflow = "";

}


/* Close modal when clicking outside */

document.addEventListener("click", (event) => {

  const modal = document.getElementById("demoModal");

  if (!modal) return;

  if (event.target === modal) {
    closeDemo();
  }

});


/* Close modal with ESC */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeDemo();
  }

});


/* =========================================================
   DEMO FORM
   ========================================================= */

function submitDemo() {

  const name =
    document.getElementById("demoName")?.value.trim();

  const email =
    document.getElementById("demoEmail")?.value.trim();

  const business =
    document.getElementById("demoBusiness")?.value.trim();


  if (!name || !email || !business) {

    showNotification(
      "Please complete all fields."
    );

    return;

  }


  if (!validateEmail(email)) {

    showNotification(
      "Please enter a valid business email."
    );

    return;

  }


  showNotification(
    `Thanks ${name}! Your demo request has been received.`
  );


  /* Reset form */

  document.getElementById("demoName").value = "";
  document.getElementById("demoEmail").value = "";
  document.getElementById("demoBusiness").value = "";


  setTimeout(() => {

    closeDemo();

  }, 1800);

}


/* =========================================================
   EMAIL VALIDATION
   ========================================================= */

function validateEmail(email) {

  const pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);

}


/* =========================================================
   AI REPLY GENERATOR
   ========================================================= */

function generateReply() {

  const replyBox =
    document.getElementById("aiReply");

  if (!replyBox) return;


  replyBox.classList.remove("hidden");


  replyBox.innerHTML = `

    <strong>✨ AI Generated Reply</strong>

    <p>
      Hi Sarah! Thanks for reaching out.
      I'd love to show you how QuantumFlow AI can
      automate your customer follow-ups and lead
      management. Would you be available for a
      quick 15-minute demo?
    </p>

    <div style="
      margin-top:12px;
      display:flex;
      gap:8px;
      flex-wrap:wrap;
    ">

      <button
        onclick="copyAIReply()"
        style="
          padding:8px 11px;
          border-radius:8px;
          border:1px solid rgba(167,139,250,.2);
          background:rgba(124,58,237,.12);
          color:#c4b5fd;
          cursor:pointer;
          font-size:11px;
        "
      >
        Copy Reply
      </button>

      <button
        onclick="showNotification('AI reply sent successfully')"
        style="
          padding:8px 11px;
          border-radius:8px;
          border:1px solid rgba(34,211,238,.2);
          background:rgba(34,211,238,.08);
          color:#67e8f9;
          cursor:pointer;
          font-size:11px;
        "
      >
        Send Reply
      </button>

    </div>

  `;


  showNotification(
    "AI reply generated successfully."
  );

}


/* =========================================================
   COPY AI REPLY
   ========================================================= */

function copyAIReply() {

  const text =
    `Hi Sarah! Thanks for reaching out.
I'd love to show you how QuantumFlow AI can
automate your customer follow-ups and lead
management. Would you be available for a
quick 15-minute demo?`;


  if (
    navigator.clipboard &&
    navigator.clipboard.writeText
  ) {

    navigator.clipboard
      .writeText(text)
      .then(() => {

        showNotification(
          "AI reply copied to clipboard."
        );

      })
      .catch(() => {

        showNotification(
          "Copy failed. Please try again."
        );

      });

  }

}


/* =========================================================
   NOTIFICATION SYSTEM
   ========================================================= */

let notificationTimer;


function showNotification(message) {

  const notification =
    document.getElementById("notification");

  if (!notification) return;


  notification.textContent = message;

  notification.classList.add("show");


  clearTimeout(notificationTimer);


  notificationTimer =
    setTimeout(() => {

      notification.classList.remove("show");

    }, 3000);

}


/* =========================================================
   DASHBOARD SCROLL
   ========================================================= */

function scrollToDashboard() {

  const dashboard =
    document.getElementById("dashboard");

  if (!dashboard) return;


  dashboard.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });


  showNotification(
    "Opening AI Lead Dashboard..."
  );

}


/* =========================================================
   NAVIGATION
   ========================================================= */

document.querySelectorAll(
  '.navbar a[href^="#"]'
).forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId =
      this.getAttribute("href");

    const target =
      document.querySelector(targetId);

    if (!target) return;


    event.preventDefault();


    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================================================
   ACTIVE DASHBOARD MENU
   ========================================================= */

document.querySelectorAll(
  ".sidebar a"
).forEach(item => {

  item.addEventListener("click", function() {

    document
      .querySelectorAll(".sidebar a")
      .forEach(link => {

        link.classList.remove("active");

      });


    this.classList.add("active");


    showNotification(
      `${this.textContent.trim()} selected`
    );

  });

});


/* =========================================================
   NEW AUTOMATION
   ========================================================= */

document.addEventListener("click", (event) => {

  const button =
    event.target.closest(".primary-btn");

  if (!button) return;


  const text =
    button.textContent.trim();


  if (
    text.includes("New Automation")
  ) {

    showNotification(
      "Automation workflow created successfully."
    );

  }

});


/* =========================================================
   LEAD INTERACTIONS
   ========================================================= */

document.querySelectorAll(
  ".lead-row button"
).forEach(button => {

  button.addEventListener("click", () => {

    showNotification(
      "AI is preparing a personalized reply..."
    );

  });

});


/* =========================================================
   SIMPLE NUMBER ANIMATION
   ========================================================= */

function animateNumber(
  element,
  target,
  duration = 1200
) {

  if (!element) return;


  const start = 0;

  const startTime =
    performance.now();


  function update(currentTime) {

    const progress =
      Math.min(
        (currentTime - startTime) / duration,
        1
      );


    const value =
      Math.floor(
        start +
        (target - start) *
        easeOut(progress)
      );


    element.textContent =
      value.toLocaleString();


    if (progress < 1) {

      requestAnimationFrame(update);

    }

  }


  requestAnimationFrame(update);

}


function easeOut(t) {

  return 1 - Math.pow(1 - t, 3);

}


/* =========================================================
   DASHBOARD COUNTERS
   ========================================================= */

function startDashboardCounters() {

  const metrics =
    document.querySelectorAll(
      ".metric h2"
    );


  if (!metrics.length) return;


  const values = [
    1248,
    684,
    186,
    84290
  ];


  metrics.forEach((element, index) => {

    if (index === 3) {

      animateMoney(
        element,
        values[index]
      );

    } else {

      animateNumber(
        element,
        values[index]
      );

    }

  });

}


function animateMoney(
  element,
  target,
  duration = 1400
) {

  const startTime =
    performance.now();


  function update(currentTime) {

    const progress =
      Math.min(
        (currentTime - startTime) / duration,
        1
      );


    const value =
      Math.floor(
        target *
        easeOut(progress)
      );


    element.textContent =
      "$" +
      value.toLocaleString();


    if (progress < 1) {

      requestAnimationFrame(update);

    }

  }


  requestAnimationFrame(update);

}


/* =========================================================
   INTERSECTION OBSERVER
   ========================================================= */

const dashboardSection =
  document.querySelector(
    ".dashboard-section"
  );


if (dashboardSection) {

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (
            entry.isIntersecting
          ) {

            startDashboardCounters();

            observer.disconnect();

          }

        });

      },
      {
        threshold: 0.25
      }
    );


  observer.observe(
    dashboardSection
  );

}


/* =========================================================
   KEYBOARD SHORTCUT
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    /*
      Press D to open demo
    */

    if (
      event.key.toLowerCase() === "d" &&
      !event.target.matches("input, textarea")
    ) {

      openDemo();

    }

  }
);


/* =========================================================
   CONSOLE BRANDING
   ========================================================= */

console.log(
  "%c QuantumFlow AI ",
  "background:#7c3aed;color:white;font-size:18px;font-weight:bold;padding:8px 14px;border-radius:8px;"
);

console.log(
  "%c AI Automation Platform initialized ",
  "color:#22d3ee;font-size:12px;"
);
