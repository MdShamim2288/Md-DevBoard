const today = new Date();
const day = today.toLocaleString("en-US", { weekday: "short" });
const date = today.toLocaleString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

window.onload = function () {

  document.getElementById("date").innerText = date;
  document.getElementById("day").innerText = `${day} ,`;
};