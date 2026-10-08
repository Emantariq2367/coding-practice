"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import type { Task } from "@/lib/types";

const categories = ["Study", "Work", "Personal", "Errands"];
const priorities = ["Low", "Medium", "High"] as const;
const statuses = ["incomplete", "completed"] as const;

type TaskFormProps = {
  task?: Task;
  submitLabel: string;
};

export function TaskForm({ task, submitLabel }: TaskFormProps) {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-700">Title</span>
        <input
          name="title"
          required
          defaultValue={task?.title}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none ring-indigo-500 focus:ring-2"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-700">Description</span>
        <textarea
          name="description"
          rows={4}
          required
          defaultValue={task?.description}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none ring-indigo-500 focus:ring-2"
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Category</span>
          <select
            name="category"
            defaultValue={task?.category ?? "Study"}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-indigo-500 focus:ring-2"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Priority</span>
          <select
            name="priority"
            defaultValue={task?.priority ?? "Medium"}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-indigo-500 focus:ring-2"
          >
            {priorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Due date</span>
          <input
            type="date"
            name="dueDate"
            required
            defaultValue={task?.dueDate}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none ring-indigo-500 focus:ring-2"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Status</span>
          <select
            name="status"
            defaultValue={task?.status ?? "incomplete"}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none ring-indigo-500 focus:ring-2"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status === "completed" ? "Completed" : "Incomplete"}
              </option>
            ))}
          </select>
        </label>
      </div>

      {task ? (
        <p className="text-sm text-slate-500">Created {task.createdDate}</p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
        >
          {submitLabel}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
