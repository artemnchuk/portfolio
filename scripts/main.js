// scripts/main.js
document.getElementById("see-more").addEventListener("click", function () {
  alert("Displaying more projects...");
  //
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (name && email && message) {
      alert("Form submitted successfully!");
      //  API)
    } else {
      alert("Please fill out all fields.");
    }
  });

const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

// check theme in LocalStorage
const currentTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(`${currentTheme}-theme`);

if (currentTheme === "dark") {
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "light");
  }
});
