document.getElementById('cyberRegForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailField = document.getElementById('userEmail');
    const submitBtn = document.getElementById('regBtn');
    const feedbackBox = document.getElementById('msgBox');
    
    // Cyber loading effect
    submitBtn.innerText = "Connecting...";
    submitBtn.style.opacity = "0.7";
    submitBtn.disabled = true;

    // Simulate server response delay (1.2s)
    setTimeout(() => {
        const emailValue = emailField.value;
        feedbackBox.innerHTML = <i class="fa-solid fa-circle-check"></i> Registration Successful! <br><strong>${emailValue}</strong> has been added.;
        feedbackBox.style.display = "block";
        emailField.value = "";
        submitBtn.innerText = "Register";
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
        setTimeout(() => {
            feedbackBox.style.display = "none";
        }, 4000);

    }, 1200);
});