import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { TaskForm } from "@/components/TaskForm";
import { getTaskById } from "@/lib/mock-tasks";

export default async function EditTaskPage({ params }: PageProps<"/tasks/[id]/edit">) {
  const { id } = await params;
  const task = getTaskById(id);

  if (!task) {
    notFound();
  }

  return (
    <PageShell variant="app">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm text-slate-500">
          <Link href={`/tasks/${task.id}`} className="hover:text-indigo-600">
            Task details
          </Link>{" "}
          / Edit
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Edit Task</h1>
        <p className="mt-1 text-slate-500">Update the details for this task.</p>
        <div className="mt-6">
          <TaskForm task={task} submitLabel="Save changes" />
        </div>
      </div>
    </PageShell>
  );
}
