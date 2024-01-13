const hamMenu = document.querySelector(".ham-menu");
const menu = document.querySelector(".menu");
hamMenu.addEventListener("click", () => {
    const isToggled = hamMenu.classList.toggle("active");

    if (isToggled) {
      menu.style.cssText = " margin-left: 0px; transition: 0.5s; ";
    } else {
        menu.style.cssText = " margin-left: 1000px;  transition: 0.5s; ";
    }

  
} );


// // Получаем NodeList всех элементов с классом "FAQItemController"
// const accardionControllers = document.querySelectorAll(".FAQItemController");

// // Добавляем обработчик события click к каждому элементу
// accardionControllers.forEach((accardion) => {
//   accardion.addEventListener("click", () => {
//     const isToggled = accardion.classList.toggle("active");

//     const accardionText = accardion.nextElementSibling; // Получаем следующий элемент после .FAQItemController
//     const accardionFAQItemControllerClose = accardion.querySelector(".FAQItemControllerClose");

//     if (isToggled) {
//       accardionText.style.cssText = "width: 100%; height: auto; background-color: aqua; transition: height 0.5s ease-in-out;";
//       accardionFAQItemControllerClose.style.cssText = "transition: 0.1s; transform-origin: 50% 50%; transform: rotate(180deg);";
//     } else {
//       accardionText.style.cssText = "width: 100%; height: 0; background-color: aqua; transition: height 0.5s ease-in-out;";
//       accardionFAQItemControllerClose.style.cssText = "transition: 0.1s; transform-origin: 50% 50%; transform: rotate(0deg);";
//     }
//   });
// });






// const paralax = document.querySelector(".FonContent");

// /* коэфициент сдвига: 1 сдвиг равный смещению по оси Y, 0 без сдвига */
// var moveCoef = 0.5;


// // if (window.innerWidth > 1400 ) {
// window.addEventListener("scroll", scroll);
// window.addEventListener("resize", scroll);
// scroll();
// // }

// function scroll() {
//   /* берём огнаничивающий прямоугольник паралакса относительно окна (фрейма) */
//   var r = paralax.getBoundingClientRect();

//   /* центр паралакса */
//   var paralaxYCenter = r.y + r.height / 2;
//   /* центр экрана */
//   var scrollYCenter = window.innerHeight / 2;

//   /* Вычисляем смещение */
//   var move = (paralaxYCenter - scrollYCenter) * moveCoef - -40;

//   paralax.style.backgroundPositionY = move + "px";
// }