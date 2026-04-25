// Helper function
function $(selector) {
  return document.querySelector(selector);
}

// Theme management
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const btn = $("#themeBtn");
  if (btn) btn.textContent = theme === "light" ? "🌞" : "🌙";
}

// Greeting based on time
function getTimeGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning 👋";
  if (hour < 18) return "Good afternoon 👋";
  return "Good evening 👋";
}

// Greeting with saved name
function greetUser() {
  const input = $("#nameInput");
  const message = $("#greetMessage");

  const name = input.value.trim();

  if (!name) {
    message.textContent = "Please enter your name.";
    return;
  }

  localStorage.setItem("visitorName", name);
  message.textContent = `Welcome, ${name}! 👋`;
}

// Project filter
function filterProjects(category) {
  const projects = document.querySelectorAll(".local-project");
  const message = $("#filterMessage");
  let visibleCount = 0;

  projects.forEach((project) => {
    const projectCategory = project.dataset.category;

    if (category === "all" || projectCategory === category) {
      project.style.display = "grid";
      visibleCount++;
    } else {
      project.style.display = "none";
    }
  });

  if (message) {
    message.textContent =
      visibleCount > 0
        ? `Showing ${visibleCount} project(s).`
        : "No projects found for this category.";
  }
}

// GitHub API integration (IMPROVED VERSION)
async function loadGitHubProjects() {
  const container = $("#github-projects");

  if (!container) return;

  container.innerHTML = "<p>Loading GitHub projects...</p>";

  try {
    const response = await fetch("https://api.github.com/users/ewkhalifa/repos");

    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    const repos = await response.json();

    const visibleRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 4);

    if (visibleRepos.length === 0) {
      container.innerHTML = "<p>No GitHub projects found.</p>";
      return;
    }

    container.innerHTML = "";

    visibleRepos.forEach((repo) => {
      const project = document.createElement("article");
      project.className = "project";

      project.innerHTML = `
        <div class="project-body">
          <h3>${repo.name.replaceAll("-", " ")}</h3>
          <p>${repo.description || "A portfolio repository showcasing my coursework and development progress."}</p>

          <div class="repo-meta">
            <span><strong>Language:</strong> ${repo.language || "Not specified"}</span>
            <span><strong>Updated:</strong> ${new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>

          <a class="btn ghost repo-link" href="${repo.html_url}" target="_blank" rel="noopener">
            View on GitHub
          </a>
        </div>
      `;

      container.appendChild(project);
    });
  } catch (error) {
    container.innerHTML =
      "<p>⚠️ Could not load GitHub projects. Please try again later.</p>";
  }
}

// Page setup
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Time greeting
  const greetingEl = $("#greeting");
  if (greetingEl) greetingEl.textContent = getTimeGreeting();

  // Load theme
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme || "dark");

  const themeBtn = $("#themeBtn");
  themeBtn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });

  // Load saved name
  const savedName = localStorage.getItem("visitorName");
  const greetMessage = $("#greetMessage");

  if (savedName && greetMessage) {
    greetMessage.textContent = `Welcome back, ${savedName}! 👋`;
  }

  // Mobile nav
  const navToggle = $(".nav-toggle");
  const navLinks = $("#nav-links");

  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks?.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });

  // Form validation
  const form = $("#contactForm");
  const status = $("#formStatus");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
    if (status) status.textContent = "";

    const name = $("#name").value.trim();
    const email = $("#email").value.trim();
    const message = $("#message").value.trim();

    let valid = true;

    if (!name) {
      valid = false;
      document.querySelector('[data-for="name"]').textContent =
        "Please enter your name.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      valid = false;
      document.querySelector('[data-for="email"]').textContent =
        "Please enter a valid email address.";
    }

    if (!message || message.length < 10) {
      valid = false;
      document.querySelector('[data-for="message"]').textContent =
        "Please enter a message with at least 10 characters.";
    }

    if (!valid) return;

    form.reset();
    if (status) {
      status.textContent = "✅ Message validated successfully. No backend connected.";
    }
  });

  // Load GitHub API
  loadGitHubProjects();
});
