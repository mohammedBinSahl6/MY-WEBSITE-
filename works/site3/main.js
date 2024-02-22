const detailsSections = [
  ...document.getElementsByClassName("details__section"),
];

detailsSections.forEach((section) => {
  const moreDetailsbutton = section.querySelector(".btn-light");
  const infoSection = section.querySelector(".details__info");
  let isOpen = false;
  moreDetailsbutton.addEventListener("click", () => {
    if (!isOpen) {
      infoSection.classList.add("details__info--show");
      moreDetailsbutton.textContent = "Less Details";
      isOpen = true;
    } else {
      infoSection.classList.remove("details__info--show");
      moreDetailsbutton.textContent = "More Details";
      isOpen = false;
    }
  });
});
