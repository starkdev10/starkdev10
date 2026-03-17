import { TaskList } from "@/components/tasks/task-list";
import { createDailyTasks } from "@/lib/engine/daily-assignment";
import type { Subject, Subtopic } from "@/lib/types/models";

const subjects: Subject[] = [
  { id: "geo", userId: "demo", name: "AQA Geography", examBoard: "AQA", colour: "#4A6EF5", examDate: "2027-05-15", archived: false },
  { id: "bus", userId: "demo", name: "Edexcel Business", examBoard: "Edexcel", colour: "#4A6EF5", examDate: "2027-05-20", archived: false }
];

const subtopics: Subtopic[] = [
  { id: "s1", topicId: "geo:coastal", name: "Coastal Erosion Processes", order: 1, notesStatus: "in_progress", flashcardsStatus: "not_started", questionsStatus: "not_started", confidenceScore: 2, questionScorePercent: 45 },
  { id: "s2", topicId: "bus:theme1", name: "Market Mapping", order: 1, notesStatus: "completed", flashcardsStatus: "in_progress", questionsStatus: "not_started", confidenceScore: 3, questionScorePercent: 55 },
  { id: "s3", topicId: "geo:hazards", name: "Plate Boundaries", order: 1, notesStatus: "not_started", flashcardsStatus: "not_started", questionsStatus: "not_started", confidenceScore: 1, questionScorePercent: 20 }
];

export default function TodayPage() {
  const tasks = createDailyTasks({ userId: "demo", subtopics, subjects, dateISO: new Date().toISOString().slice(0, 10) });

  return (
    <main className="space-y-4">
      <section className="panel p-4">
        <h1 className="text-xl font-semibold">Today</h1>
        <p className="text-sm text-slate-400">Next exam: AQA Geography Paper 1 · 42 days left</p>
      </section>
      <TaskList tasks={tasks} />
    </main>
  );
}
