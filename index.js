(function () {
  let cpr = document.getElementById("copyright");
});

cpr.innerHTML =
  "&copy;2020-" +
  new Date().getFullYear() +
  "Farrell Arrafi Idris - All Reserved";

const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

//   let header = document.querySelector("header");
//   let menu = document.querySelector("#menu-icon");
//   let navbar = document.querySelector(".navbar");

//   window.addEventListener("scroll", () => {
//     header.classList.toggle("shadow", window.scrollY > 0);
//   });

//   menu.onclick = () => {
//     navbar.classList.toggle("active");
//   };
//   window.onscroll = () => {
//     navbar.classList.remove("active");
//   };

// var content = "If life is so blue, then select another colour from the rainbow";

// var ele = "<span>" + content.split("").join("</span><span>") + "</span>";

// $(ele)
//   .hide()
//   .appendTo("p")
//   .each(function (i) {
//     $(this)
//       .delay(100 * i)
//       .css({
//         display: "inline",
//         opacity: 0,
//       })
//       .animate(
//         {
//           opacity: 1,
//         },
//         100
//       );
//   });
