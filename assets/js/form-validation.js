document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.querySelector("#contactForm input[type='submit']");

    submitButton.disabled = true;

    function validateForm() {
        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let message = messageInput.value.trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name !== "" && emailPattern.test(email) && message !== "") {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    nameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    messageInput.addEventListener("input", validateForm);

    // Prevenir envío si algo está mal (por seguridad extra)
    form.addEventListener("submit", function (event) {
        if (submitButton.disabled) {
            event.preventDefault();
        }
    });
});
