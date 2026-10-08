import type { Priority, TaskStatus } from "@/lib/types";

const priorityStyles: Record<Priority, string> = {
  Low: "bg-slate-100 text-slate-700",
  Medium: "bg-amber-100 text-amber-800",
  High: "bg-rose-100 text-rose-700",
};

const statusStyles: Record<TaskStatus, string> = {
  incomplete: "bg-sky-100 text-sky-800",
  completed: "bg-emerald-100 text-emerald-800",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyles[priority]}`}
    >
      {priority}
    </span>
  );
}

export function StatusBadge({ status }: { status: TaskStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status === "completed" ? "Completed" : "Incomplete"}
    </span>
  );
}
