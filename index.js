// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.querySelector(".my-work");
//   const box2 = document.querySelector(".card2");
//   const box4 = document.querySelector(".card6");

//   // Store original positions
//   const originalNextSibling2 = box2.nextElementSibling;
//   const originalNextSibling4 = box4.nextElementSibling;

//   const mq = window.matchMedia("(max-width: 768px)");

//   function handleReorder(e) {
//     console.log("Media query matches?", e.matches, "Width:", window.innerWidth);

//     if (e.matches) {
//       // Tablet/mobile: move to end
//       container.appendChild(box2);
//       container.appendChild(box4);
//     } else {
//       // Desktop: restore original positions
//       if (originalNextSibling2) {
//         container.insertBefore(box2, originalNextSibling2);
//       } else {
//         container.appendChild(box2);
//       }
//       if (originalNextSibling4) {
//         container.insertBefore(box4, originalNextSibling4);
//       } else {
//         container.appendChild(box4);
//       }
//     }
//   }

//   // Run once on load
//   handleReorder(mq);

//   // Listen for changes
//   mq.addEventListener("change", handleReorder);
// });
