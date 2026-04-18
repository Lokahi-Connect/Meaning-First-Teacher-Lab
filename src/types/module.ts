export interface ModuleSection {
  section_number: number;
  title: string;
  summary?: string;
  has_comprehension_check?: boolean;
}

export interface ModuleAssessment {
  question_count: number;
  passing_score: number;
  passing_percentage: number;
  question_types: ("multiple-choice" | "true-false" | "short-answer")[];
  gates_reflection?: boolean;
}

export interface Module {
  module_id: string;
  module_number: number;
  course: string;
  title: string;
  subtitle?: string;
  summary: string;
  learning_outcomes: string[];
  key_concepts: string[];
  swi_connections?: string[];
  int_connections?: string[];
  prerequisite_modules: string[];
  unlocks_modules: string[];
  student_band_connections?: string[];
  estimated_duration_minutes?: number;
  format?: string;
  sections?: ModuleSection[];
  assessment?: ModuleAssessment;
  gate_criteria?: string[];
  references?: string[];
  tags?: string[];
  notes?: string;
  version?: string;
  status: "draft" | "review" | "published" | "deprecated";
  created_at?: string;
  updated_at?: string;
}
