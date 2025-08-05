document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMsg = document.getElementById("formResponse");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        fetch("https://script.google.com/macros/s/AKfycbzHgjjNcsapueLrlxajitCX-OsljA3-Nfphrifg5k-ruYiVkkXx65Vqv02Zua5N6QNx/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.name.value.trim(),
                email: this.email.value.trim(),
                message: this.message.value.trim()
            })
        })

            .then(res => res.text())
            .then(result => {
                if (result.trim().toLowerCase() === "success") {
                    responseMsg.style.display = "block";
                    responseMsg.style.color = "green";
                    responseMsg.textContent = "Message sent successfully!";
                    this.reset();
                } else {
                    responseMsg.style.display = "block";
                    responseMsg.style.color = "red";
                    responseMsg.textContent = "Failed to send message!";
                }
            })
            .catch(() => {
                responseMsg.style.display = "block";
                responseMsg.style.color = "red";
                responseMsg.textContent = "Error sending message!";
            });
    });
});
