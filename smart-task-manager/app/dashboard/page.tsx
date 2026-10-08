import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SummaryCard } from "@/components/SummaryCard";
import { TaskCard } from "@/components/TaskCard";
import { getDashboardSummary, mockTasks } from "@/lib/mock-tasks";

export default function DashboardPage() {
  const summary = getDashboardSummary(mockTasks);

  return (
    <PageShell variant="app">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-slate-500">A quick look at your tasks for the week.</p>
        </div>
        <Link
          href="/tasks/new"
          className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Add Task
        </Link>
      </div>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <SummaryCard label="Total" value={summary.total} />
        <SummaryCard label="Pending" value={summary.pending} />
        <SummaryCard label="Completed" value={summary.completed} />
        <SummaryCard label="High priority" value={summary.highPriority} />
        <SummaryCard label="Upcoming" value={summary.upcoming} />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Your tasks</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {mockTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
