import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Task } from "@/lib/types";
import { PriorityBadge } from "./PriorityBadge";
import { StatusBadge } from "./StatusBadge";

export function TaskCard({ task }: { task: Task }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link href={`/tasks/${task.id}`} className="text-lg font-semibold text-slate-900 hover:text-indigo-600">
            {task.title}
          </Link>
          <p className="mt-1 text-sm text-slate-500">{task.category}</p>
        </div>
        <div className="flex gap-2">
          <PriorityBadge priority={task.priority} />
          <StatusBadge status={task.status} />
        </div>
      </div>
      <p className="mt-3 line-clamp-2 text-sm text-slate-600">{task.description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
        <p>Due {formatDate(task.dueDate)}</p>
        <Link href={`/tasks/${task.id}`} className="font-medium text-indigo-600 hover:text-indigo-500">
          View details
        </Link>
      </div>
    </article>
  );
}
