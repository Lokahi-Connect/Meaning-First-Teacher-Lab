export type ModuleStatus = "locked" | "available" | "in-progress" | "passed";

export interface ProgressMap {
  [moduleNumber: string]: ModuleStatus;
}

export interface AssessmentResult {
  score: number;
  total: number;
  passed: boolean;
  completedAt: string; // ISO-8601
  answers: Record<string, string>; // questionId → answer
  selfAssessed: Record<string, boolean>; // questionId → self-assessed correct
}

const PROGRESS_KEY = "mfl_progress";
const PRACTICE_KEY = "mfl_practice";
const ASSESSMENT_KEY = "mfl_assessments";
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

export function getAssessmentResults(): Record<string, AssessmentResult> {
  try {
    const raw = localStorage.getItem(ASSESSMENT_KEY);
    if (raw) return JSON.parse(raw) as Record<string, AssessmentResult>;
  } catch {
    // ignore
  }
  return {};
}

export function saveAssessmentResult(moduleNumber: number, result: AssessmentResult): void {
  try {
    const results = getAssessmentResults();
    results[String(moduleNumber)] = result;
    localStorage.setItem(ASSESSMENT_KEY, JSON.stringify(results));
  } catch {
    // ignore
  }
}

export function clearAllData(): void {
  try {
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem(PRACTICE_KEY);
    localStorage.removeItem(ASSESSMENT_KEY);
  } catch {
    // ignore
  }
}
