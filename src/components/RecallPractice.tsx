import { useState, useMemo } from "react";
import { moduleRecall } from "../data/recallBank";
import { getProgress } from "../utils/progress";

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (((s * 1664525) + 1013904223) | 0) >>> 0;
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

interface RecallCardProps {
  index: number;
  question: string;
  answer: string;
  concept: string;
  sourceModule: number;
}

function RecallCard({ index, question, answer, concept, sourceModule }: RecallCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [response, setResponse] = useState("");

  return (
    <div className="recall-card">
      <div className="recall-card__header">
        <span className="recall-card__num">{index + 1}</span>
        <span className="recall-card__source">Module {sourceModule} · {concept}</span>
      </div>
      <p className="recall-card__question">{question}</p>
      <textarea
        className="recall-card__input"
        rows={3}
        placeholder="Write your answer before checking…"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      {!revealed ? (
        <button className="recall-card__reveal" onClick={() => setRevealed(true)}>
          Check answer ↓
        </button>
      ) : (
        <div className="recall-card__answer">
          <span className="recall-card__answer-label">Model answer</span>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

interface RecallPracticeProps {
  currentModule: number;
}

export default function RecallPractice({ currentModule }: RecallPracticeProps) {
  const selected = useMemo(() => {
    const progress = getProgress();
    const passedModules = Object.entries(progress)
      .filter(([, status]) => status === "passed")
      .map(([num]) => Number(num));

    if (passedModules.length === 0) return [];

    const pool = passedModules.flatMap((m) => moduleRecall[m] ?? []);
    if (pool.length === 0) return [];

    const daySeed = Math.floor(Date.now() / 86_400_000);
    const seed = daySeed * 100 + currentModule;
    return seededShuffle(pool, seed).slice(0, 3);
  }, [currentModule]);

  if (selected.length === 0) return null;

  return (
    <div className="recall-block">
      <div className="recall-block__header">
        <span className="recall-block__icon">↻</span>
        <div>
          <h3 className="recall-block__title">Before you begin — retrieve from earlier modules</h3>
          <p className="recall-block__subtitle">
            Pause and write what you remember before checking each answer. No grading — this is for your retention.
          </p>
        </div>
      </div>
      <div className="recall-block__questions">
        {selected.map((q, i) => (
          <RecallCard
            key={q.id}
            index={i}
            question={q.question}
            answer={q.answer}
            concept={q.concept}
            sourceModule={q.sourceModule}
          />
        ))}
      </div>
    </div>
  );
}
