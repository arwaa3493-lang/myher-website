// ===== IMAGE UPLOAD PREVIEW =====
document.querySelectorAll('.image-box input[type="file"]').forEach(input => {
  input.addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    const imageBox = this.closest('.image-box');
    const img = imageBox.querySelector('img');
    const placeholder = imageBox.querySelector('.placeholder-text');

    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
      img.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
    };

    reader.readAsDataURL(file);
  });
});

// ===== THEME TOGGLE =====
const themeButtons = document.querySelectorAll('#theme-controls button');

themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;

    document.body.classList.remove('soft', 'strong');
    document.body.classList.add(theme);
  });
});
