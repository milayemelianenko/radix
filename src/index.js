// const openBtn = document.querySelector("#open-btn");
// const modal = document.querySelector("#form-section-frame");
// const closeBtn = document.querySelector("#cancel-btn");

// let disableScroll = function () {
//   let pagePosition = window.scrollY;
//   document.body.classList.add("disable-scroll");
//   document.body.dataset.position = pagePosition;
//   document.body.style.top = -pagePosition + "px";
// };

// let enableScroll = function () {
//   let pagePosition = parseInt(document.body.dataset.position, 10);
//   document.body.style.top = "auto";
//   document.body.classList.remove("disable-scroll");
//   window.scroll({ top: pagePosition, left: 0 });
//   document.body.removeAttribute("data-position");
// };

// openBtn.addEventListener("click", () => {
//   modal.style.display = "block";
//   disableScroll();
// });

// modal.addEventListener("click", (e) => {
//   if (e.target == modal) {
//     modal.style.display = "none";
//     enableScroll();
//   }
// });

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
//   enableScroll();
// });
