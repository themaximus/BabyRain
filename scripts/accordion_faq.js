const accardionControllers = document.querySelectorAll(".FAQItemController");

accardionControllers.forEach((accardion) => {
  accardion.addEventListener("click", () => {
    const isToggled = accardion.classList.toggle("active");
    const accardionText = accardion.nextElementSibling;

    if (isToggled) {
      // Получаем высоту содержимого
      const contentHeight = accardionText.scrollHeight + "px";
      // Устанавливаем высоту содержимого
      accardionText.style.height = contentHeight;
    } else {
      accardionText.style.height = "0";
    }

    const accardionFAQItemControllerClose = accardion.querySelector(".FAQItemControllerClose");
    accardionFAQItemControllerClose.style.transform = isToggled ? "rotate(180deg)" : "rotate(0deg)";
  });
});


