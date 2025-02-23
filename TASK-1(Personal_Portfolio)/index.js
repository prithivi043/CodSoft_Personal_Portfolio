function openModal(imageSrc) {
  document.getElementById("certImage").src = imageSrc;
  document.getElementById("certModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents page reload

  var name = document.getElementById("name").value.trim();
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  document.getElementById("popupMessage").innerHTML = "Hey " + name + "! Thanks for reaching out. I'll get back to you soon!";
  document.getElementById("popup").style.display = "block";
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("contactForm").reset(); // Clears the form
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}



gsap.from(".navSource", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".leftHome", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".leftHome",
    start: "top 80%", // Triggers animation when 80% of the viewport
    toggleActions: "play none none reverse" // Plays when scrolling down, reverses when scrolling up
  }
});

gsap.from(".rightHome img", {
  opacity: 0,
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".rightHome img",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".Ido", {
  scale: 0.8,
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".Ido",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".IdoContent", {
  scale: 0.8,
  opacity: 0,
  x: 500,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".IdoContent",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".skill", {
  opacity: 0,
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".skill",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".projectSection", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".projectSection ",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".card", {
  opacity: 0,
  x: -50,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".card ",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".project", {
  opacity: 0,
  x: -50,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".project ",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".ContactMe", {
  opacity: 0,
  y: 50,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".ContactMe",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
// Adding Glow Effect (CSS)
const footerGlow = document.createElement("style");
footerGlow.innerHTML = `
  .footer {
    box-shadow: 0px 0px 20px rgba(0, 255, 255, 0.8);
    transition: box-shadow 1s ease-in-out;
  }
`;
document.head.appendChild(footerGlow);
