// Ensure bcrypt.js is loaded before execution
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js";
script.onload = () => console.log("bcrypt.js loaded successfully.");
document.head.appendChild(script);

// Utility Function: Validate Email
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email.toLowerCase());
}

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

// ========================= Authentication Handlers =========================
function setupAuthHandlers() {
  handleSignUp();
  handleLogin();
  handleLogout();
  handleForgotPassword();
  autoFillRememberedUser();
}

// Handle User Sign Up
function handleSignUp() {
  const signupForm = document.getElementById("signup-form");
  if (!signupForm) return;

  signupForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (!username || !email || !password) return alert("Please fill in all fields.");
    if (!validateEmail(email)) return alert("Please enter a valid email.");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === email)) return alert("Email already exists.");

    try {
      if (typeof bcrypt !== "undefined") {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        users.push({ username, email, password: hashedPassword });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign Up Successful! You can now log in.");
        window.location.href = "index.html";
      } else {
        throw new Error("bcrypt.js not loaded.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred. Please try again.");
    }
  });
}

// Handle User Login
function handleLogin() {
  const loginForm = document.getElementById("login-form");
  if (!loginForm) return;

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const usernameOrEmail = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("remember-me")?.checked;

    if (!usernameOrEmail || !password) return alert("Enter username/email and password.");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === usernameOrEmail || u.username === usernameOrEmail);

    if (user && typeof bcrypt !== "undefined") {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        alert("Login Successful!");
        if (rememberMe) {
          localStorage.setItem("rememberedUser", JSON.stringify(user));
        } else {
          localStorage.removeItem("rememberedUser");
        }
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password.");
      }
    } else {
      alert("Invalid username or password.");
    }
  });
}

// Auto-fill Remembered User
function autoFillRememberedUser() {
  const rememberedUser = JSON.parse(localStorage.getItem("rememberedUser"));
  if (rememberedUser) {
    document.getElementById("username")?.value = rememberedUser.email || rememberedUser.username;
    if (document.getElementById("remember-me")) {
      document.getElementById("remember-me").checked = true;
    }
  }
}

// Handle Logout
function handleLogout() {
  const logoutButton = document.getElementById("logout");
  if (!logoutButton) return;

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("rememberedUser");
    alert("You have been logged out.");
    window.location.href = "login.html";
  });
}

// Handle Forgot Password
function handleForgotPassword() {
  const forgotPasswordForm = document.getElementById("forgot-password-form");
  if (!forgotPasswordForm) return;

  forgotPasswordForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    validateEmail(email) ? alert("Password reset link sent!") : alert("Enter a valid email.");
  });
}

// ========================= Theme Toggle =========================
function setupThemeToggle() {
  const icon = document.getElementById("icon");
  if (!icon) return;

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    icon.src = "images/sun.png";
  }

  icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    icon.src = document.body.classList.contains("dark-theme") ? "images/sun.png" : "images/moon.png";
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
  };
}

// ========================= Subscription Handler =========================
function setupSubscriptionHandler() {
  const subscribeButton = document.querySelector(".footer-subscribe button");
  if (!subscribeButton) return;

  subscribeButton.addEventListener("click", () => {
    const email = document.querySelector(".footer-subscribe input").value;
    email ? alert(`Thank you for subscribing with ${email}`) : alert("Enter a valid email.");
  });
}

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

// ========================= Map Zoom & Pan =========================
function setupMapZoomHandler() {
  const map = document.getElementById("ghanaMap");
  let scale = 1;

  if (!map) return;

  document.addEventListener("wheel", (event) => {
    event.preventDefault();
    scale = Math.min(Math.max(0.5, scale + event.deltaY * -0.001), 3);
    map.style.transform = `scale(${scale})`;
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
