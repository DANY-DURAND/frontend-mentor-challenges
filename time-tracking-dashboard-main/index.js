const daily = document.getElementById('daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const current = document.getElementById('current');
const currentHours = document.getElementById('current-hours'); 

const timeStamp = document.getElementById('timestamp');
const previousTime = document.getElementById('previous');
const hoursTxt = document.getElementById('hours');

let data = './data.json'

let info =[]

function updateCards(timeframe) {
  info.forEach(activity => {
    const card = document.querySelector(`.card[data-title="${activity.title}"]`);
    if (card) {
      card.querySelector('.current-hours').textContent = activity.timeframes[timeframe].current;
      card.querySelector('.previous-hours').textContent = activity.timeframes[timeframe].previous;
      card.querySelector('.timestamp').textContent =
        timeframe === 'daily' ? 'Day' : timeframe === 'weekly' ? 'Week' : 'Month';
    }
  });
}

fetch(data)
  .then((response) => {
    if (!response.ok) {
      console.log('Oops! Something went wrong.');
    }
    return response.json();
  })
  .then((data) => {
    info = data;
    updateCards('daily');
  });

// Select all timeframe list items
const timeframeItems = document.querySelectorAll('.report ul li');

function setActiveTimeframe(selected) {
  timeframeItems.forEach(li => {
    const link = li.querySelector('a');
    if (li === selected) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

daily.addEventListener('click', () => {
  updateCards('daily');
  setActiveTimeframe(daily);
});
weekly.addEventListener('click', () => {
  updateCards('weekly');
  setActiveTimeframe(weekly);
});
monthly.addEventListener('click', () => {
  updateCards('monthly');
  setActiveTimeframe(monthly);
});