export type ModuleStatus = "locked" | "available" | "in-progress" | "passed";

export interface ProgressMap {
  [moduleNumber: string]: ModuleStatus;
}

const PROGRESS_KEY = "mfl_progress";
const PRACTICE_KEY = "mfl_practice";
const TOTAL_MODULES = 6;

export function getProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) return JSON.parse(raw) as ProgressMap;
  } catch {
    // ignore
  }
  return initProgress();
}

function initProgress(): ProgressMap {
  const p: ProgressMap = {};
  p["1"] = "available";
  for (let i = 2; i <= TOTAL_MODULES; i++) {
    p[String(i)] = "locked";
  }
  saveProgress(p);
  return p;
}

function saveProgress(p: ProgressMap): void {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  } catch {
    // ignore
  }
}

export function getModuleStatus(moduleNumber: number): ModuleStatus {
  const p = getProgress();
  return p[String(moduleNumber)] ?? "locked";
}

export function markModuleViewed(moduleNumber: number): void {
  const p = getProgress();
  const key = String(moduleNumber);
  if (p[key] === "available") {
    p[key] = "in-progress";
    saveProgress(p);
  }
}

export function markModulePassed(moduleNumber: number): void {
  const p = getProgress();
  p[String(moduleNumber)] = "passed";
  const next = moduleNumber + 1;
  if (next <= TOTAL_MODULES && p[String(next)] === "locked") {
    p[String(next)] = "available";
  }
  saveProgress(p);
}

export function getPracticeAnswers(): Record<string, string> {
  try {
    const raw = localStorage.getItem(PRACTICE_KEY);
    if (raw) return JSON.parse(raw) as Record<string, string>;
  } catch {
    // ignore
  }
  return {};
}

export function savePracticeAnswer(key: string, value: string): void {
  try {
    const answers = getPracticeAnswers();
    answers[key] = value;
    localStorage.setItem(PRACTICE_KEY, JSON.stringify(answers));
  } catch {
    // ignore
  }
}
