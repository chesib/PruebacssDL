// const menuTrigger = document.getElementById("menu-trigger");
// const showContent = document.querySelector(".show");

// menuTrigger.addEventListener("mouseover", () => {
// 	showContent.style.transform = "translateX(0)";
// });

// menuTrigger.addEventListener("mouseout", () => {
// 	showContent.style.transform = "translateX(100%)";
// });
const menuTrigger = document.getElementById("menu-trigger");
const showContent = document.querySelector(".show");

menuTrigger.addEventListener("click", () => {
	showContent.classList.toggle("active");
});
