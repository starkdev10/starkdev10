import { CheckCircle2, CircleDashed } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Task } from "@/lib/types/models";

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="panel p-4 space-y-3">
      <h2 className="text-sm font-semibold">Today&apos;s assigned tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between rounded-md border border-border px-3 py-2">
          <div>
            <p className="text-sm">{task.title}</p>
            <p className="text-xs text-slate-400">Priority {task.priorityScore.toFixed(1)} · {task.type}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost"><CircleDashed size={16} /></Button>
            <Button><CheckCircle2 size={16} /></Button>
          </div>
        </div>
      ))}
    </div>
  );
}
