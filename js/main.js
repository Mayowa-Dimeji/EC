document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const dynamicContent = document.getElementById("dynamicContent");
  const textElement = document.getElementById("animatedText");

  // Typing Effect for "We’re all ears!"
  const text = "We’re all ears!";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      textElement.textContent = text.slice(0, ++index);
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();

  // Initialize Stars
  function initializeStars() {
    const starsContainer = document.querySelector(".rating-stars");
    starsContainer.innerHTML = ""; // Clear existing stars if any

    for (let i = 1; i <= 5; i++) {
      const starContainer = document.createElement("div");
      starContainer.className = "star-container text-center";

      const label = document.createElement("span");
      label.className = "label d-block";
      label.textContent = i;

      const star = document.createElement("span");
      star.className = "star";
      star.setAttribute("data-value", i);
      star.innerHTML = "&#9733;"; // Unicode for a star

      // Add hover and click events
      star.addEventListener("mouseover", () => highlightStars(i));
      star.addEventListener("click", () => selectStar(i));

      starContainer.appendChild(label);
      starContainer.appendChild(star);
      starsContainer.appendChild(starContainer);
    }
  }

  function highlightStars(value) {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      if (star.getAttribute("data-value") <= value) {
        star.classList.add("highlighted");
      } else {
        star.classList.remove("highlighted");
      }
    });
  }

  function selectStar(value) {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      if (star.getAttribute("data-value") <= value) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });

    let ratingInput = document.getElementById("rating");
    if (!ratingInput) {
      ratingInput = document.createElement("input");
      ratingInput.type = "hidden";
      ratingInput.id = "rating";
      ratingInput.name = "rating";
      document.getElementById("rateForm").appendChild(ratingInput);
    }
    ratingInput.value = value;
  }

  document.getElementById("submitBtn").addEventListener("click", function () {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const rating = document.getElementById("rating")?.value;

    if (!fullName || !email || !rating) {
      alert(
        "Please fill out all fields and select a rating before submitting."
      );
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const messages = {
      1: "Sorry to hear it was awful. We'll do better next time!",
      2: "We appreciate your honesty. Thank you for your feedback.",
      3: "Thanks for rating us okay! We'll aim to make it awesome next time.",
      4: "Great to hear you enjoyed it! Thanks for your feedback.",
      5: "Awesome! We're thrilled you had a great experience!",
    };

    const gifMap = {
      1: "img/awful.gif",
      2: "img/bad.gif",
      3: "img/okay.gif",
      4: "img/good.gif",
      5: "img/awesome.gif",
    };

    dynamicContent.innerHTML = `
      <div class="container text-center">
        <h2>Thank You, ${fullName.split(" ")[0]}!</h2>
        <img src="${gifMap[rating]}" alt="Thank You GIF" class="img-fluid">
        <p>${messages[rating]}</p>
        <p id="countdown">Redirecting in 5 seconds...</p>
        <div class="loader mt-4 mx-auto"></div>
      </div>
    `;

    let countdown = 5;
    const countdownElement = document.getElementById("countdown");

    const interval = setInterval(() => {
      countdown--;
      countdownElement.textContent = `Redirecting in ${countdown} seconds...`;
      if (countdown === 0) {
        clearInterval(interval);
        location.reload(); // Return to the form
      }
    }, 1000);
  });

  initializeStars(); // Initialize stars on load
});
