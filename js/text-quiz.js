// ============================================================
// KSB "Echt oder KI?" – Text-Quiz Engine
// ============================================================

const TEXT_QUIZ_COUNT = 10;
let textQuizQuestions = [];
let textQuizIndex = 0;
let textCorrect = 0;
let textStreak = 0;
let textBestStreak = 0;
let textAnswers = [];

// --- Start ---
function startTextQuiz() {
    textQuizQuestions = shuffleArray(TEXT_QUIZ_DATA).slice(0, TEXT_QUIZ_COUNT);
    textQuizIndex = 0;
    textCorrect = 0;
    textStreak = 0;
    textBestStreak = 0;
    textAnswers = [];

    document.getElementById('text-quiz-start').classList.add('hidden');
    document.getElementById('text-quiz-results').classList.remove('active');
    document.getElementById('text-quiz-game').classList.add('active');

    showTextQuestion();
}

// --- Show Question ---
function showTextQuestion() {
    const q = textQuizQuestions[textQuizIndex];

    // Update progress
    document.getElementById('text-progress').textContent = `${textQuizIndex + 1} / ${TEXT_QUIZ_COUNT}`;
    document.getElementById('text-progress-bar').style.width = `${((textQuizIndex) / TEXT_QUIZ_COUNT) * 100}%`;
    document.getElementById('text-correct-count').textContent = textCorrect;
    document.getElementById('text-streak-count').textContent = textStreak;

    // Reset UI
    document.getElementById('text-feedback').classList.remove('active');
    document.getElementById('text-actions').style.display = 'flex';
    document.getElementById('btn-human').disabled = false;
    document.getElementById('btn-ai-text').disabled = false;

    // Update streak styling
    const streakDisplay = document.getElementById('text-streak-display');
    if (textStreak >= 3) {
        streakDisplay.classList.add('streak-active');
    } else {
        streakDisplay.classList.remove('streak-active');
    }

    // Show text
    document.getElementById('text-display').textContent = q.content;
    document.getElementById('text-meta').innerHTML =
        `<span>Kategorie: ${q.category}</span><span>Schwierigkeit: ${q.difficulty}/3</span>`;
}

// --- Handle Answer ---
function handleTextAnswer(answer) {
    const q = textQuizQuestions[textQuizIndex];
    const isCorrect = answer === q.type;

    // Disable buttons
    document.getElementById('btn-human').disabled = true;
    document.getElementById('btn-ai-text').disabled = true;

    // Track answer
    if (isCorrect) {
        textCorrect++;
        textStreak++;
        if (textStreak > textBestStreak) textBestStreak = textStreak;
    } else {
        textStreak = 0;
    }

    textAnswers.push({
        question: q,
        userAnswer: answer,
        correct: isCorrect
    });

    // Update counters
    document.getElementById('text-correct-count').textContent = textCorrect;
    document.getElementById('text-streak-count').textContent = textStreak;

    // Show feedback
    const feedback = document.getElementById('text-feedback');
    const icon = document.getElementById('text-feedback-icon');
    const title = document.getElementById('text-feedback-title');
    const text = document.getElementById('text-feedback-text');

    icon.className = 'feedback-icon ' + (isCorrect ? 'correct' : 'wrong');
    icon.textContent = isCorrect ? '✓' : '✗';
    title.className = 'feedback-title ' + (isCorrect ? 'correct' : 'wrong');
    title.textContent = isCorrect ? 'Richtig!' : 'Falsch!';
    text.textContent = q.explanation;

    feedback.classList.add('active');

    // Auto-scroll to feedback
    setTimeout(() => {
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// --- Next Question ---
function nextTextQuestion() {
    textQuizIndex++;
    if (textQuizIndex >= TEXT_QUIZ_COUNT) {
        showTextResults();
        // Scroll to top for results
        window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
        showTextQuestion();
        // Scroll to top for better UX
        window.scrollTo({ top: 0, behavior: 'auto' });
    }
}

// --- Results ---
function showTextResults() {
    document.getElementById('text-quiz-game').classList.remove('active');
    document.getElementById('text-quiz-results').classList.add('active');

    const percent = Math.round((textCorrect / TEXT_QUIZ_COUNT) * 100);
    const level = getResultLevel(percent);

    // Update progress bar to 100%
    document.getElementById('text-progress-bar').style.width = '100%';

    // Level & percentage
    document.getElementById('text-results-level').innerHTML =
        `<div class="results-level-title" style="color: ${level.color}">${level.title}</div>`;
    document.getElementById('text-results-percent').textContent = percent + '%';
    document.getElementById('text-results-percent').style.color = level.color;
    document.getElementById('text-results-desc').textContent = level.description;
    document.getElementById('text-results-advice').textContent = level.advice;

    // Stats
    renderResultsStats('text-results-stats', textCorrect, TEXT_QUIZ_COUNT, textBestStreak);

    // Detailed results
    const list = document.getElementById('text-results-list');
    list.innerHTML = textAnswers.map((a, i) => `
    <div class="result-item">
      <div class="result-thumb" style="display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:700;color:var(--ksb-text-light);background:var(--ksb-gray-light);">${i + 1}</div>
      <div class="result-info">
        <div class="result-status ${a.correct ? 'correct' : 'wrong'}">
          ${a.correct ? 'Richtig' : 'Falsch'} – ${a.question.type === 'real' ? 'Von Mensch' : 'KI-generiert'}
        </div>
        <div class="result-explanation-text">${a.question.explanation}</div>
      </div>
    </div>
  `).join('');
}

// --- Restart ---
function restartTextQuiz() {
    document.getElementById('text-quiz-results').classList.remove('active');
    document.getElementById('text-quiz-start').classList.remove('hidden');
}
