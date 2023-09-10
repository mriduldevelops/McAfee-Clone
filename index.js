// accordians

const accordians = document.querySelectorAll(".accordian");
accordians.forEach((accordian) => {
  const symbol = accordian.querySelector(".symbol");
  const desc = accordian.querySelector(".details");

  accordian.addEventListener("click", () => {
    if (desc.classList.contains("hidden")) {
      desc.classList.remove("hidden");
      symbol.textContent = "-";
    } else {
      desc.classList.add("hidden");
      symbol.textContent = "+";
    }
  });
});


// faq accordians

const faq = document.querySelectorAll(".faq__accordian");

faq.forEach((acc) => {
  const symbol = acc.querySelector(".symbol");
  const desc = acc.querySelector(".details");

  acc.addEventListener("click", () => {
    if (desc.classList.contains("hidden")) {
      desc.classList.remove("hidden");
      symbol.classList.add("active");
    } else {
      desc.classList.add("hidden");
      symbol.classList.remove("active");
    }
  });
});


// toggle button

const toggleButton = document.querySelector(".hamburger_icon");
const mobileNav = document.querySelector(".mobile__nav");

toggleButton.addEventListener("click", () => {
  if (toggleButton.classList.contains("not_active")) {
    toggleButton.classList.remove("not_active");
    mobileNav.classList.remove("hidden");
  } else {
    toggleButton.classList.add("not_active");
    mobileNav.classList.add("hidden");
  }
});
