import type { TaskStatus } from "@/lib/types";

export function StatusBadge({ status }: { status: TaskStatus }) {
  const isCompleted = status === "completed";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        isCompleted ? "bg-slate-100 text-slate-600" : "bg-indigo-50 text-indigo-700"
      }`}
    >
      {isCompleted ? "Completed" : "Incomplete"}
    </span>
  );
}
