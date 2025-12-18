const form = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Example validation – replace with real backend auth
      if(username === "joshua" && password === "1234") {
        alert("Login successful!");
        errorMsg.style.display = "none";
        // Redirect user to dashboard (replace URL)
        window.location.href = "Josh2.html";
      } else {
        errorMsg.style.display = "block";
      }
    });