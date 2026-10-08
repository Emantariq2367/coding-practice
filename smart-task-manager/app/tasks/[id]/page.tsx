import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { PriorityBadge } from "@/components/PriorityBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { formatDate } from "@/lib/format";
import { getTaskById } from "@/lib/mock-tasks";

export default async function TaskDetailsPage({ params }: PageProps<"/tasks/[id]">) {
  const { id } = await params;
  const task = getTaskById(id);
  
  if (!task) {
    notFound();
  }

  return (
    <PageShell variant="app">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm text-slate-500">
          <Link href="/dashboard" className="hover:text-indigo-600">
            Dashboard
          </Link>{" "}
          / Task details
        </p>
        <article className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h1 className="text-3xl font-semibold text-slate-900">{task.title}</h1>
            <div className="flex gap-2">
              <PriorityBadge priority={task.priority} />
              <StatusBadge status={task.status} />
            </div>
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-slate-500">Category</dt>
              <dd className="mt-1 text-slate-900">{task.category}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Due date</dt>
              <dd className="mt-1 text-slate-900">{formatDate(task.dueDate)}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Created date</dt>
              <dd className="mt-1 text-slate-900">{formatDate(task.createdDate)}</dd>
            </div>
          </dl>
          <div className="mt-6">
            <h2 className="text-sm font-medium text-slate-500">Description</h2>
            <p className="mt-1 text-slate-700">{task.description}</p>
          </div>
          <div className="mt-8">
            <Link
              href={`/tasks/${task.id}/edit`}
              className="inline-flex rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
            >
              Edit task
            </Link>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
