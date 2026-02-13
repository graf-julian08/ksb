// ============================================================
// KSB "Echt oder KI?" – Bilder-Quiz Engine
// ============================================================

const IMAGE_QUIZ_COUNT = 15;
let imageQuizQuestions = [];
let imageQuizIndex = 0;
let imageCorrect = 0;
let imageStreak = 0;
let imageBestStreak = 0;
let imageAnswers = [];

// --- Start ---
document.getElementById('image-quiz-start-btn').addEventListener('click', startImageQuiz);

function startImageQuiz() {
    imageQuizQuestions = shuffleArray(IMAGE_QUIZ_DATA).slice(0, IMAGE_QUIZ_COUNT);
    imageQuizIndex = 0;
    imageCorrect = 0;
    imageStreak = 0;
    imageBestStreak = 0;
    imageAnswers = [];

    document.getElementById('image-quiz-start').classList.add('hidden');
    document.getElementById('image-quiz-results').classList.remove('active');
    document.getElementById('image-quiz-game').classList.add('active');

    // Preload all images at start
    imageQuizQuestions.forEach(q => preloadImage(q.src));

    showImageQuestion();
}

// --- Show Question ---
function showImageQuestion() {
    const q = imageQuizQuestions[imageQuizIndex];
    const imgEl = document.getElementById('image-display');
    const loader = document.getElementById('image-loader');
    const container = document.getElementById('image-display-container');

    // Show loader, hide image
    loader.classList.remove('hidden');
    imgEl.style.display = 'none';

    // Update progress
    document.getElementById('image-progress').textContent = `${imageQuizIndex + 1} / ${IMAGE_QUIZ_COUNT}`;
    document.getElementById('image-progress-bar').style.width = `${((imageQuizIndex) / IMAGE_QUIZ_COUNT) * 100}%`;
    document.getElementById('image-correct-count').textContent = imageCorrect;
    document.getElementById('image-streak-count').textContent = imageStreak;

    // Reset UI
    document.getElementById('image-feedback').classList.remove('active');
    document.getElementById('image-actions').style.display = 'flex';
    document.getElementById('btn-real').disabled = false;
    document.getElementById('btn-ai').disabled = false;

    // Update streak styling
    const streakDisplay = document.getElementById('image-streak-display');
    if (imageStreak >= 3) {
        streakDisplay.classList.add('streak-active');
    } else {
        streakDisplay.classList.remove('streak-active');
    }

    // Load image with preload check
    const img = new Image();
    img.onload = () => {
        imgEl.src = q.src;
        imgEl.style.display = 'block';
        loader.classList.add('hidden');
    };
    img.onerror = () => {
        loader.textContent = 'Bild konnte nicht geladen werden.';
    };
    img.src = q.src;

    // Lightbox click
    imgEl.onclick = () => openLightbox(q.src);
}

// --- Handle Answer ---
function handleImageAnswer(answer) {
    const q = imageQuizQuestions[imageQuizIndex];
    const isCorrect = answer === q.type;

    // Disable buttons
    document.getElementById('btn-real').disabled = true;
    document.getElementById('btn-ai').disabled = true;

    // Track answer
    if (isCorrect) {
        imageCorrect++;
        imageStreak++;
        if (imageStreak > imageBestStreak) imageBestStreak = imageStreak;
    } else {
        imageStreak = 0;
    }

    imageAnswers.push({
        question: q,
        userAnswer: answer,
        correct: isCorrect
    });

    // Update counters
    document.getElementById('image-correct-count').textContent = imageCorrect;
    document.getElementById('image-streak-count').textContent = imageStreak;

    // Show feedback
    const feedback = document.getElementById('image-feedback');
    const icon = document.getElementById('image-feedback-icon');
    const title = document.getElementById('image-feedback-title');
    const text = document.getElementById('image-feedback-text');

    icon.className = 'feedback-icon ' + (isCorrect ? 'correct' : 'wrong');
    icon.textContent = isCorrect ? '✓' : '✗';
    title.className = 'feedback-title ' + (isCorrect ? 'correct' : 'wrong');
    title.textContent = isCorrect ? 'Richtig!' : 'Falsch!';
    text.textContent = q.explanation;

    feedback.classList.add('active');

    // Auto-scroll to feedback (with offset)
    setTimeout(() => {
        scrollToFeedback('image-feedback');
    }, 100);
}

// --- Next Question ---
function nextImageQuestion() {
    imageQuizIndex++;
    if (imageQuizIndex < imageQuizQuestions.length) {
        showImageQuestion();
        // Robust Scroll to top
        scrollToTop();
    } else {
        showImageResults();
        // Robust Scroll to top
        scrollToTop();
    }
}

// --- Results ---
function showImageResults() {
    document.getElementById('image-quiz-game').classList.remove('active');
    document.getElementById('image-quiz-results').classList.add('active');

    const percent = Math.round((imageCorrect / IMAGE_QUIZ_COUNT) * 100);
    const level = getResultLevel(percent);

    // Update progress bar to 100%
    document.getElementById('image-progress-bar').style.width = '100%';

    // Level & percentage
    document.getElementById('image-results-level').innerHTML =
        `<div class="results-level-title" style="color: ${level.color}">${level.title}</div>`;
    document.getElementById('image-results-percent').textContent = percent + '%';
    document.getElementById('image-results-percent').style.color = level.color;
    document.getElementById('image-results-desc').textContent = level.description;
    document.getElementById('image-results-advice').textContent = level.advice;

    // Stats
    renderResultsStats('image-results-stats', imageCorrect, IMAGE_QUIZ_COUNT, imageBestStreak);

    // Detailed results
    const list = document.getElementById('image-results-list');
    list.innerHTML = imageAnswers.map((a, i) => `
    <div class="result-item">
      <img src="${a.question.src}" alt="Frage ${i + 1}" class="result-thumb">
      <div class="result-info">
        <div class="result-status ${a.correct ? 'correct' : 'wrong'}">
          ${a.correct ? 'Richtig' : 'Falsch'} – ${a.question.type === 'real' ? 'Echtes Foto' : 'KI-generiert'}
        </div>
        <div class="result-explanation-text">${a.question.explanation}</div>
      </div>
    </div>
  `).join('');
}

// --- Restart ---
function restartImageQuiz() {
    document.getElementById('image-quiz-results').classList.remove('active');
    document.getElementById('image-quiz-start').classList.remove('hidden');
}
