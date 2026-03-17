import { differenceInCalendarDays, parseISO } from "date-fns";
import type { Subtopic, Subject, Task, TaskType } from "@/lib/types/models";

export function calculatePriority(subtopic: Subtopic, subject: Subject, today = new Date()) {
  const daysToExam = Math.max(1, differenceInCalendarDays(parseISO(subject.examDate), today));
  const completionGap = [subtopic.notesStatus, subtopic.flashcardsStatus, subtopic.questionsStatus].filter(
    (status) => status !== "completed"
  ).length;
  const confidencePenalty = 6 - subtopic.confidenceScore;
  const questionPenalty = (100 - subtopic.questionScorePercent) / 20;

  return 50 / daysToExam + completionGap * 2 + confidencePenalty + questionPenalty;
}

export function createDailyTasks(params: {
  userId: string;
  subtopics: Subtopic[];
  subjects: Subject[];
  dateISO: string;
}): Task[] {
  const { userId, subtopics, subjects, dateISO } = params;
  const tasks: Task[] = [];

  subtopics.forEach((subtopic, index) => {
    const subject = subjects.find((candidate) => candidate.id === subtopic.topicId.split(":")[0]);
    if (!subject) return;

    const priorityScore = calculatePriority(subtopic, subject);
    const type: TaskType = subtopic.notesStatus !== "completed" ? "physical_notes" : "review";

    tasks.push({
      id: `task-${index}-${dateISO}`,
      userId,
      subjectId: subject.id,
      topicId: subtopic.topicId,
      subtopicId: subtopic.id,
      type,
      title: `${subtopic.name} · ${type.replace("_", " ")}`,
      status: "not_started",
      assignedDate: dateISO,
      dueDate: dateISO,
      priorityScore,
      source: "daily_engine"
    });
  });

  return tasks.sort((a, b) => b.priorityScore - a.priorityScore).slice(0, 6);
}
