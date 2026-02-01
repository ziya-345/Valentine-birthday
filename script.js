const noBtn = document.getElementById("no");
const warning = document.getElementById("warning");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 250;
    const y = Math.random() * 80;
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    warning.innerText = "Try again 😭 Don't say no please 🥺";
  });
}