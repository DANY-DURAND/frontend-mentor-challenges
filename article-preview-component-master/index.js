// Toggle social share popup
const shareBtn = document.querySelector('.share-button');
const shareOptions = document.querySelector('.share-options');
const hideBtn = document.querySelector('.share-options .hidden');
const shareSVG = document.querySelector('.share');

const footer = document.querySelector('.article-footer');

shareBtn.addEventListener('click', () => {
  shareOptions.classList.toggle('hidden');
  shareBtn.classList.toggle('active');
});

if (hideBtn) {
  hideBtn.addEventListener('click', () => {
    shareOptions.classList.add('hidden');
  });
}

if (window.innerWidth <= 768) { // Check if we are on mobile size
  shareSVG.classList.remove('hidden');

  shareBtn.addEventListener('click',()=>{
    footer.classList.add('hidden')
  })

  shareSVG.addEventListener('click', () =>{
    footer.classList.remove('hidden');
  })
}