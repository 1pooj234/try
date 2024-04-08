const d = document.querySelector(".m");
const ripple1 = document.querySelector(".s1");
const ripple2 = document.querySelector(".s2");
const ripple3 = document.querySelector(".s3");
d.addEventListener("mouseover", (e) => {
  ripple1.className = "s1 special";
});
d.addEventListener("mouseout", (e) => {
  ripple1.className = "s1";
  ripple1.style.setProperty("animation-delay", "0.5s");
});
d.addEventListener("mouseover", (e) => {
  ripple2.className = "s2 special";
  ripple2.style.setProperty("animation-delay", "0.75s");
});
d.addEventListener("mouseout", (e) => {
  ripple2.className = "s2";
});
d.addEventListener("mouseover", (e) => {
  ripple3.className = "s3 special";
  ripple3.style.setProperty("animation-delay", "1s");
});
d.addEventListener("mouseout", (e) => {
  ripple3.className = "s3";
});
function debug(event) {
  console.log(event.type + "dd");
}
