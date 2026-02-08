
// =====================
// THEME SWITCHING
// =====================
const themeButtons = document.querySelectorAll("#theme-controls button");
const app = document.getElementById("app");

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme;
    app.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
});

// Restore theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  app.setAttribute("data-theme", savedTheme);
}

// =====================
// IMAGE UPLOAD HANDLING
// =====================
document.querySelectorAll(".card").forEach(card => {
  const input = card.querySelector("input[type='file']");
  const img = card.querySelector("img");
  const placeholder = card.querySelector(".placeholder-text");
  const cardKey = card.dataset.card;

  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result;
      img.style.display = "block";
      if (placeholder) placeholder.style.display = "none";
      localStorage.setItem(`image-${cardKey}`, reader.result);
    };
    reader.readAsDataURL(file);
  });

  // Restore image
  const savedImage = localStorage.getItem(`image-${cardKey}`);
  if (savedImage) {
    img.src = savedImage;
    img.style.display = "block";
    if (placeholder) placeholder.style.display = "none";
  }
});

// =====================
// TEXT CONTENT SAVE
// =====================
document.querySelectorAll("[contenteditable='true']").forEach((el, index) => {
  const key = `text-${index}`;

  // Restore text
  const savedText = localStorage.getItem(key);
  if (savedText) el.innerHTML = savedText;

  el.addEventListener("input", () => {
    localStorage.setItem(key, el.innerHTML);
  });
});

