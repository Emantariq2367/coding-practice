import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function TaskNotFound() {
  return (
    <PageShell variant="app">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Task not found</h1>
        <p className="mt-2 text-slate-500">This task does not exist in the current sample list.</p>
        <Link
          href="/dashboard"
          className="mt-6 inline-flex rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Back to dashboard
        </Link>
      </div>
    </PageShell>
  );
}
