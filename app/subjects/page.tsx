import { starterSubjects } from "@/lib/seed/starter-data";

export default function SubjectsPage() {
  return (
    <main className="space-y-3">
      <h1 className="text-xl font-semibold">Subjects</h1>
      {starterSubjects.map((subject) => (
        <article key={subject.name} className="panel p-4">
          <h2 className="font-medium">{subject.name}</h2>
          <p className="text-xs text-slate-400">{subject.examBoard} · {subject.topics.length} topics</p>
        </article>
      ))}
    </main>
  );
}
