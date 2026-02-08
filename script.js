console.log('js is working')
// ===== IMAGE UPLOAD PREVIEW =====
document.querySelectorAll('.image-box').forEach(box => {
  const input = box.querySelector('input[type="file"]');
  const img = box.querySelector('img');
  const placeholder = box.querySelector('.placeholder-text');

  lable.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      img.src = e.target.result;
      img.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
    };

    reader.readAsDataURL(file);
  });
});

// ===== THEME TOGGLE =====
document.querySelectorAll('#theme-controls button').forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;

    document.body.classList.remove('soft', 'strong');
    document.body.classList.add(theme);
  });
});

