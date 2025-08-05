document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMsg = document.getElementById("formResponse");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Send data to Google Apps Script Web App
        fetch("https://script.google.com/macros/s/AKfycbzHgjjNcsapueLrlxajitCX-OsljA3-Nfphrifg5k-ruYiVkkXx65Vqv02Zua5N6QNx/exec", {
            method: "POST",
            mode: "no-cors",  // ✅ Prevents browser from blocking the request
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.name.value.trim(),
                email: this.email.value.trim(),
                message: this.message.value.trim()
            })
        })
        .then(() => {
            // We can't read the response in no-cors mode, so assume success
            responseMsg.style.display = "block";
            responseMsg.style.color = "green";
            responseMsg.textContent = "Message sent successfully!";
            this.reset();
        })
        .catch(() => {
            responseMsg.style.display = "block";
            responseMsg.style.color = "red";
            responseMsg.textContent = "Error sending message!";
        });
    });
});
