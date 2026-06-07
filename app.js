const lessonPages = [
  "lesson-01-foundations.html",
  "lesson-02-setup-tooling.html",
  "lesson-03-syntax-control-flow.html",
  "lesson-04-types-structs-interfaces.html",
  "lesson-05-errors-packages-testing.html",
  "lesson-06-concurrency-http-project.html",
  "lesson-07-json-config-logging.html",
  "lesson-08-database-sql-transactions.html",
  "lesson-09-project-structure-dependency-wiring.html",
  "lesson-10-middleware-auth-observability.html",
  "lesson-11-integration-testing-benchmarking.html",
  "lesson-12-deployment-performance-roadmap.html"
];

const storageKey = "go-for-dotnet-progress";
const currentPage = window.location.pathname.split("/").pop() || "index.html";

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function writeProgress(progress) {
  localStorage.setItem(storageKey, JSON.stringify([...new Set(progress)]));
}

function markVisited(page) {
  if (!lessonPages.includes(page)) {
    return;
  }

  const progress = readProgress();
  if (!progress.includes(page)) {
    progress.push(page);
    writeProgress(progress);
  }
}

function hydrateProgress() {
  const progress = readProgress();

  const progressCount = document.querySelector("#progress-count");
  if (progressCount) {
    progressCount.textContent = `${progress.length} / ${lessonPages.length}`;
  }

  document.querySelectorAll("[data-lesson]").forEach((card) => {
    const href = card.getAttribute("href");
    if (progress.includes(href)) {
      card.classList.add("is-complete");
      const status = card.querySelector(".lesson-status");
      if (status) {
        status.textContent = "Đã mở";
      }
    }
  });
}

function wireCompleteButton() {
  const button = document.querySelector("[data-complete-lesson]");
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    markVisited(currentPage);
    hydrateProgress();
    button.textContent = "Đã đánh dấu hoàn thành";
    button.disabled = true;
  });
}

markVisited(currentPage);
hydrateProgress();
wireCompleteButton();
