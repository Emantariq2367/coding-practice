import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function LandingPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl py-10 text-center sm:py-16">
        <p className="text-sm font-medium text-indigo-600">Stay organized without the clutter</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Keep your schoolwork and daily tasks in one place
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Smart Task Manager helps you track what is due, what is done, and what needs attention first.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-500 sm:w-auto"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="w-full rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:w-auto"
          >
            Log in
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">See your week at a glance</h2>
          <p className="mt-2 text-sm text-slate-600">
            A simple dashboard shows total, pending, completed, high-priority, and upcoming tasks.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">Add tasks in seconds</h2>
          <p className="mt-2 text-sm text-slate-600">
            Capture title, notes, category, priority, due date, and status without extra steps.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-900">Built for everyday use</h2>
          <p className="mt-2 text-sm text-slate-600">
            Clean, mobile-friendly screens that work well for students and anyone managing a to-do list.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
