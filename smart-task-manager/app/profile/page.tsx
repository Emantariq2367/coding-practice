"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { PageShell } from "@/components/PageShell";

export default function ProfilePage() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <PageShell variant="app">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold text-slate-900">Profile & Settings</h1>
        <p className="mt-1 text-slate-500">Manage your account details. Saving is not connected yet.</p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">Full name</span>
            <input
              name="name"
              defaultValue="Alex Rivera"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              defaultValue="alex@example.com"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">New password</span>
            <input
              type="password"
              name="password"
              placeholder="Leave blank to keep the current password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2"
            />
          </label>
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Save settings
          </button>
        </form>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="mt-6 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          Log out
        </button>
      </div>
    </PageShell>
  );
}
