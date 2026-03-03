const btnPrimary = document.querySelectorAll(".btn-primary");
btnPrimary.forEach((btn) => {
  btn.style.transition = "transform 0.2s ease";
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "var(--bright-gold)";
    btn.style.transform = "translateY(-1.5px)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "var(--gold)";
    btn.style.transform = "translateY(1.5px)";
  });
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("active");
  });

  link.addEventListener("mouseleave", () => {
    link.classList.remove("active");
  });
});

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.style.transition = "transform 0.2s ease";
    card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-3px)";
    });
    card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(3px)";
    });
});