const modalButton = document.getElementById('modal-button');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const modalClose = document.getElementById('modal-close');

modalButton.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});

modalClose.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
  modal.classList.toggle('hidden');
});
