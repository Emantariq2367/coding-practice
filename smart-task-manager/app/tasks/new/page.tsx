import { PageShell } from "@/components/PageShell";
import { TaskForm } from "@/components/TaskForm";

export default function AddTaskPage() {
  return (
    <PageShell variant="app">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold text-slate-900">Add Task</h1>
        <p className="mt-1 text-slate-500">Fill in the details for a new task.</p>
        <div className="mt-6">
          <TaskForm submitLabel="Save task" />
        </div>
      </div>
    </PageShell>
  );
}
