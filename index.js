document.querySelectorAll(".contactForm").forEach((formElement) => {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = [...formElement.children].find(isEmailInputElement).value;

    formElement.appendChild(getSignedUpAlert(email));
  });
});

function getSignedUpAlert(email) {
  const alertElement = document.createElement("div");
  alertElement.innerHTML = `<p class="signedup-alert">Signed up${
    email ? " with " + `<b>${email}</b>` : ""
  }!</p>`;

  return alertElement;
}

function isEmailInputElement(element) {
  return (element.class = "email-input");
}
