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
