// ============================================================
// KSB "Echt oder KI?" – Hauptlogik
// ============================================================

// --- Tab Switching ---
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.header-nav .nav-btn').forEach(b => b.classList.remove('active'));

  const tab = document.getElementById('tab-' + tabId);
  const btn = document.getElementById('nav-' + tabId);
  if (tab) tab.classList.add('active');
  if (btn) btn.classList.add('active');
}

document.querySelectorAll('.header-nav .nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    switchTab(tabId);
  });
});

// --- Tips Rendering ---
function renderTips() {
  renderTipSection('images', TIPS_DATA.images);
  renderTipSection('texts', TIPS_DATA.texts);
  renderTipSection('general', TIPS_DATA.general);
}

function renderTipSection(key, data) {
  const container = document.getElementById('tips-' + key);
  if (!container || !data) return;

  let html = '<div class="tips-grid">';
  data.sections.forEach(section => {
    html += `
      <div class="tip-card">
        <div class="tip-card-title">${section.title}</div>
        <div class="tip-card-content">${section.content}</div>
        ${section.difficulty ? `<div class="tip-card-difficulty">${section.difficulty}</div>` : ''}
      </div>`;
  });
  html += '</div>';
  container.innerHTML = html;
}

function switchTipsTab(key) {
  document.querySelectorAll('.tips-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tips-content').forEach(c => c.classList.remove('active'));

  document.querySelector(`.tips-tab-btn[data-tips="${key}"]`).classList.add('active');
  document.getElementById('tips-' + key).classList.add('active');
}

/**
 * Robust scroll to top function
 * Uses a small timeout to ensure layout shifts are finished
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  // Double check for mobile browsers
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, 50);
}

/**
 * Scroll to element with header offset
 * @param {string} elementId - ID of element to scroll to
 */
function scrollToFeedback(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  // Mobile adjustment: Scroll to the actions container (buttons) instead of feedback
  // This keeps the user's context better
  const actionsId = elementId.includes('image') ? 'image-actions' : 'text-actions';
  const actionsEl = document.getElementById(actionsId);

  const target = actionsEl || el;
  const headerOffset = 90; // buffer for sticky header (70px) + gap
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// --- Lightbox ---
function openLightbox(src) {
  const overlay = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  overlay.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// --- Results Generation ---
function getResultLevel(percent) {
  for (const level of RESULT_LEVELS) {
    if (percent >= level.minPercent) return level;
  }
  return RESULT_LEVELS[RESULT_LEVELS.length - 1];
}

function renderResultsStats(containerId, correct, total, streak) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="stat-item">
      <div class="stat-value">${correct}</div>
      <div class="stat-label">Richtig</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${total - correct}</div>
      <div class="stat-label">Falsch</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${total}</div>
      <div class="stat-label">Total</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${streak}</div>
      <div class="stat-label">Beste Serie</div>
    </div>
  `;
}

// --- Utility ---
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Preload an image and return a Promise
function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load: ' + src));
    img.src = src;
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  renderTips();
});
