import { useState } from "react";
import { moduleAssessments, type AssessmentQuestion } from "../data/assessments";
import { markModulePassed, getModuleStatus } from "../utils/progress";

interface Props {
  moduleNumber: number;
  onPassed: () => void;
}

type Answers = Record<string, string>;
type SelfAssessed = Record<string, boolean>;

function getScore(
  questions: AssessmentQuestion[],
  answers: Answers,
  selfAssessed: SelfAssessed,
): number {
  return questions.reduce((score, q) => {
    if (q.type === "short-answer") {
      return score + (selfAssessed[q.id] ? 1 : 0);
    }
    return score + (answers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);
}

function isComplete(
  questions: AssessmentQuestion[],
  answers: Answers,
  selfAssessed: SelfAssessed,
): boolean {
  return questions.every((q) => {
    if (q.type === "short-answer") {
      return (answers[q.id] ?? "").trim().length > 0 && q.id in selfAssessed;
    }
    return q.id in answers;
  });
}

export default function ModuleAssessment({ moduleNumber, onPassed }: Props) {
  const questions = moduleAssessments[moduleNumber] ?? [];
  const alreadyPassed = getModuleStatus(moduleNumber) === "passed";
  const prevStatus = moduleNumber > 1 ? getModuleStatus(moduleNumber - 1) : "passed";
  const isLocked = prevStatus !== "passed" && moduleNumber > 1;

  const [answers, setAnswers] = useState<Answers>({});
  const [selfAssessed, setSelfAssessed] = useState<SelfAssessed>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [retrying, setRetrying] = useState(false);

  const passingScore = 8;
  const passed = score >= passingScore;
  const complete = isComplete(questions, answers, selfAssessed);

  function handleSubmit() {
    const finalScore = getScore(questions, answers, selfAssessed);
    setScore(finalScore);
    setSubmitted(true);
    if (finalScore >= passingScore) {
      markModulePassed(moduleNumber);
      onPassed();
    }
  }

  function handleRetry() {
    setAnswers({});
    setSelfAssessed({});
    setSubmitted(false);
    setScore(0);
    setRetrying(true);
    setTimeout(() => setRetrying(false), 50);
  }

  if (alreadyPassed && !submitted) {
    return (
      <div className="assessment-result assessment-result--pass">
        <div className="assessment-result__icon">✓</div>
        <h3>Assessment passed</h3>
        <p>You have already passed this module assessment. Well done.</p>
      </div>
    );
  }

  if (isLocked) {
    return (
      <div className="assessment-locked">
        <div className="assessment-locked__icon">⊘</div>
        <h3>Assessment locked</h3>
        <p>Complete Module {moduleNumber - 1} to unlock this assessment.</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="assessment-submitted">
        <div className={`assessment-result ${passed ? "assessment-result--pass" : "assessment-result--fail"}`}>
          <div className="assessment-result__icon">{passed ? "✓" : "✗"}</div>
          <h3>{passed ? "Assessment passed!" : "Not quite — review and retry"}</h3>
          <p className="assessment-result__score">
            Score: {score} / {questions.length} &nbsp;({Math.round((score / questions.length) * 100)}%)
            &nbsp;·&nbsp; Passing: {passingScore}/{questions.length} (80%)
          </p>
          {passed ? (
            <p>Module {moduleNumber} is now complete. {moduleNumber < 6 ? `Module ${moduleNumber + 1} has been unlocked.` : "You have completed all six modules."}</p>
          ) : (
            <p>Review the explanations below, then try again. Focus on the questions marked incorrect.</p>
          )}
        </div>

        <div className="assessment-review">
          {questions.map((q, i) => {
            const userAnswer = answers[q.id] ?? "";
            const isCorrect =
              q.type === "short-answer"
                ? selfAssessed[q.id] === true
                : userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className={`assessment-question assessment-question--reviewed ${isCorrect ? "assessment-question--correct" : "assessment-question--incorrect"}`}
              >
                <div className="assessment-q-header">
                  <span className="assessment-q-num">{i + 1}</span>
                  <span className={`badge ${isCorrect ? "badge--available" : "badge--error"}`}>
                    {isCorrect ? "Correct" : "Incorrect"}
                  </span>
                  <span className="assessment-q-type">{q.type}</span>
                </div>
                <p className="assessment-q-text">{q.question}</p>

                {q.type === "multiple-choice" && q.options && (
                  <div className="assessment-options--review">
                    {q.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={`assessment-option--review ${
                          opt.id === q.correctAnswer ? "correct" : ""
                        } ${opt.id === userAnswer && opt.id !== q.correctAnswer ? "wrong" : ""}`}
                      >
                        {opt.id === q.correctAnswer && <span className="option-marker">✓</span>}
                        {opt.id === userAnswer && opt.id !== q.correctAnswer && (
                          <span className="option-marker">✗</span>
                        )}
                        {opt.text}
                      </div>
                    ))}
                  </div>
                )}

                {q.type === "true-false" && (
                  <div className="assessment-options--review">
                    {["true", "false"].map((val) => (
                      <div
                        key={val}
                        className={`assessment-option--review ${
                          val === q.correctAnswer ? "correct" : ""
                        } ${val === userAnswer && val !== q.correctAnswer ? "wrong" : ""}`}
                      >
                        {val === q.correctAnswer && <span className="option-marker">✓</span>}
                        {val === userAnswer && val !== q.correctAnswer && (
                          <span className="option-marker">✗</span>
                        )}
                        {val.charAt(0).toUpperCase() + val.slice(1)}
                      </div>
                    ))}
                  </div>
                )}

                {q.type === "short-answer" && (
                  <div className="assessment-sa-review">
                    {userAnswer && (
                      <div className="assessment-sa-user">
                        <span className="assessment-sa-label">Your answer:</span>
                        <p>{userAnswer}</p>
                      </div>
                    )}
                    {q.modelAnswer && (
                      <div className="assessment-sa-model">
                        <span className="assessment-sa-label">Model answer:</span>
                        <p>{q.modelAnswer}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="assessment-explanation">
                  <span className="assessment-explanation__label">Explanation:</span>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>

        {!passed && (
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <button className="btn-primary" onClick={handleRetry}>
              Retry assessment
            </button>
          </div>
        )}
      </div>
    );
  }

  if (retrying) return null;

  return (
    <div className="assessment-form">
      <p className="assessment-instructions">
        Answer all 10 questions. For short-answer questions, write your response and then
        self-assess whether you understood the concept. You need 8/10 (80%) to pass.
      </p>

      <div className="assessment-questions">
        {questions.map((q, i) => (
          <div key={q.id} className="assessment-question">
            <div className="assessment-q-header">
              <span className="assessment-q-num">{i + 1}</span>
              <span className="assessment-q-type">{q.type}</span>
            </div>
            <p className="assessment-q-text">{q.question}</p>

            {q.type === "multiple-choice" && q.options && (
              <div className="assessment-options">
                {q.options.map((opt) => (
                  <label key={opt.id} className="assessment-option">
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.id}
                      checked={answers[q.id] === opt.id}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: opt.id }))}
                    />
                    <span className="assessment-option-text">{opt.text}</span>
                  </label>
                ))}
              </div>
            )}

            {q.type === "true-false" && (
              <div className="assessment-options">
                {["true", "false"].map((val) => (
                  <label key={val} className="assessment-option">
                    <input
                      type="radio"
                      name={q.id}
                      value={val}
                      checked={answers[q.id] === val}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: val }))}
                    />
                    <span className="assessment-option-text">
                      {val.charAt(0).toUpperCase() + val.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {q.type === "short-answer" && (
              <div className="assessment-sa">
                <textarea
                  className="assessment-sa-input"
                  placeholder="Write your answer here..."
                  value={answers[q.id] ?? ""}
                  onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                  rows={4}
                />
                <div className="assessment-sa-self">
                  <p className="assessment-sa-self-label">After writing your answer, self-assess:</p>
                  <label className="assessment-option">
                    <input
                      type="radio"
                      name={`${q.id}_self`}
                      checked={selfAssessed[q.id] === true}
                      onChange={() => setSelfAssessed((s) => ({ ...s, [q.id]: true }))}
                    />
                    <span className="assessment-option-text">I can explain this concept</span>
                  </label>
                  <label className="assessment-option">
                    <input
                      type="radio"
                      name={`${q.id}_self`}
                      checked={selfAssessed[q.id] === false}
                      onChange={() => setSelfAssessed((s) => ({ ...s, [q.id]: false }))}
                    />
                    <span className="assessment-option-text">I need to review this</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="assessment-submit">
        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!complete}
          style={{ opacity: complete ? 1 : 0.5, cursor: complete ? "pointer" : "not-allowed" }}
        >
          Submit assessment
        </button>
        {!complete && (
          <p className="assessment-submit-hint">Answer all questions before submitting.</p>
        )}
      </div>
    </div>
  );
}
