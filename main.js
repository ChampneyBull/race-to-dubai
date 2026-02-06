import { golfers } from './golfers.js';

const MAX_EARNINGS = 250;
const TRACK_WIDTH_PERCENT = 90; // Leave some space at the end

function renderStandings() {
  const standingsList = document.getElementById('standings-list');
  if (!standingsList) return;

  standingsList.innerHTML = golfers
    .sort((a, b) => b.earnings - a.earnings)
    .map((golfer, index) => {
      const isLeader = index === 0;
      const rank = index + 1;
      const gap = isLeader ? 'Leader' : `£${(golfers[0].earnings - golfer.earnings).toLocaleString()} behind`;

      return `
        <div class="standing-card ${isLeader ? 'is-leader' : ''}">
          <div class="rank">${rank}</div>
          <div class="profile-pic">
            <img src="${golfer.photo || golfer.image}" alt="${golfer.name}">
          </div>
          <div class="player-info">
            <div class="player-name">${golfer.name} ${golfer.subtitle}</div>
            <div class="player-sub">${golfer.monthly}</div>
          </div>
          <div class="earnings">
            <span class="amount">£${golfer.earnings.toLocaleString()}</span>
            <span class="gap">${gap}</span>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderTrack() {
  const trackGrid = document.querySelector('.track-grid');
  if (!trackGrid) return;

  trackGrid.innerHTML = golfers.map((golfer, index) => {
    const position = (golfer.earnings / MAX_EARNINGS) * TRACK_WIDTH_PERCENT;
    const needsBrightening = ['Lewis', 'Andy', 'Tiger', 'Glyn'].includes(golfer.name);
    const brightnessStyle = needsBrightening ? 'filter: brightness(1.3) contrast(1.1);' : '';

    // Initial position 0, then animate to actual position
    return `
      <div class="track-lane">
        <div class="golfer-marker" data-target="${position}%" style="left: 0%">
          <div class="name-tag">${golfer.name} £${golfer.earnings}</div>
          <img src="${golfer.image}" class="caricature" alt="${golfer.name}" style="${brightnessStyle}">
        </div>
      </div>
    `;
  }).join('');

  // Trigger animation after a short delay
  setTimeout(() => {
    document.querySelectorAll('.golfer-marker').forEach(marker => {
      marker.style.left = marker.dataset.target;
    });
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  renderStandings();
  renderTrack();

  // Theme Toggle Logic
  const themeBtn = document.getElementById('theme-btn');
  const body = document.body;

  // Default to Dark Mode
  // Only apply light mode if the user has explicitly chosen it before
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = '🌙';
  } else {
    // Ensure we are in dark mode (no 'light-mode' class)
    body.classList.remove('light-mode');
    themeBtn.textContent = '☀️';
  }

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    themeBtn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});
