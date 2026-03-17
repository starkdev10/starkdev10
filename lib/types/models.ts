export type StageStatus = "not_started" | "in_progress" | "completed";

export interface Subject {
  id: string;
  userId: string;
  name: string;
  examBoard: string;
  colour: string;
  examDate: string;
  archived: boolean;
}

export interface Topic {
  id: string;
  subjectId: string;
  name: string;
  order: number;
}

export interface Subtopic {
  id: string;
  topicId: string;
  name: string;
  order: number;
  notesStatus: StageStatus;
  flashcardsStatus: StageStatus;
  questionsStatus: StageStatus;
  confidenceScore: 1 | 2 | 3 | 4 | 5;
  questionScorePercent: number;
  nextReviewAt?: string;
}

export type TaskType = "physical_notes" | "flashcards" | "past_questions" | "review";

export interface Task {
  id: string;
  userId: string;
  subjectId: string;
  topicId: string;
  subtopicId: string;
  type: TaskType;
  title: string;
  status: "not_started" | "in_progress" | "done" | "skipped";
  assignedDate: string;
  dueDate: string;
  priorityScore: number;
  source: "daily_engine" | "manual" | "overdue_recovery" | "spaced_review";
}

export interface FocusSession {
  id: string;
  userId: string;
  taskId?: string;
  subtopicId?: string;
  sessionType: "focus" | "short_break" | "long_break";
  plannedMinutes: number;
  actualMinutes: number;
  startedAt: string;
  endedAt?: string;
  completed: boolean;
}
