// Ensure bcrypt.js is loaded before execution
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js";
script.onload = () => console.log("bcrypt.js loaded successfully.");
document.head.appendChild(script);

// Wait for DOM to fully load before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  setupAuthHandlers();
  setupThemeToggle();
  setupSubscriptionHandler();
  setupContactFormHandler();
  setupMapZoomHandler();
  setupRecipeGrid();
  setupSearchFunctionality();
});

// ========================= Contact Form Handler =========================
function setupContactFormHandler() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) return alert("All fields are required.");
    if (!validateEmail(email)) return alert("Enter a valid email.");
    alert("Your message has been successfully sent!");
    this.reset();
  });
}

// ========================= Search Functionality =========================
function setupSearchFunctionality() {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  if (!searchInput || !searchButton) return;

  searchButton.addEventListener("click", filterRecipes);
  searchInput.addEventListener("input", filterRecipes);

  function filterRecipes() {
    document.querySelectorAll(".recipe-card").forEach((card) => {
      card.style.display = card.textContent.toLowerCase().includes(searchInput.value.toLowerCase()) ? "block" : "none";
    });
  }
}

// ========================= Dark Mode Toggle =========================
const checkbox = document.getElementById("checkbox");
const body = document.body;

if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  }
});






const dummyData = [
  { title: "How to Make Pizza", category: "recipe", date: "2025-04-01" },
  { title: "Healthy Eating Tips", category: "tips", date: "2025-03-20" },
  { title: "Blog: My Kitchen Journey", category: "blog", date: "2025-03-01" },
  { title: "How to Bake Bread", category: "recipe", date: "2025-04-04" },
];

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const query = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categorySelect").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const sort = document.getElementById("sortSelect").value;

  let results = dummyData.filter(item => {
    const matchesQuery = item.title.toLowerCase().includes(query);
    const matchesCategory = !category || item.category === category;
    const matchesStart = !startDate || item.date >= startDate;
    const matchesEnd = !endDate || item.date <= endDate;
    return matchesQuery && matchesCategory && matchesStart && matchesEnd;
  });

  if (sort === "date") {
    results.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sort === "title") {
    results.sort((a, b) => a.title.localeCompare(b.title));
  }

  displayResults(results);
});

function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(item => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `<strong>${item.title}</strong><br>Category: ${item.category}<br>Date: ${item.date}`;
    resultsDiv.appendChild(div);
  });
}
