// Toggle social share popup
const shareBtn = document.querySelector('.share-button');
const shareOptions = document.querySelector('.share-options');
const hideBtn = document.querySelector('.share-options .hidden');

shareBtn.addEventListener('click', () => {
  shareOptions.classList.toggle('hidden');
  shareBtn.classList.toggle('active');
});

if (hideBtn) {
  hideBtn.addEventListener('click', () => {
    shareOptions.classList.add('hidden');
  });
}
