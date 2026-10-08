import type { Task } from "./types";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Finish calculus homework",
    description: "Complete chapter 4 practice problems 12–28 before the next class.",
    category: "Study",
    priority: "High",
    dueDate: "2026-10-08",
    status: "incomplete",
    createdDate: "2026-10-03",
  },
  {
    id: "2",
    title: "Group project meeting notes",
    description: "Write a short summary of what the team decided and share it in the group chat.",
    category: "Study",
    priority: "Medium",
    dueDate: "2026-10-09",
    status: "incomplete",
    createdDate: "2026-10-04",
  },
  {
    id: "3",
    title: "Update resume",
    description: "Add the campus library job and recent coursework to the experience section.",
    category: "Work",
    priority: "Medium",
    dueDate: "2026-10-15",
    status: "incomplete",
    createdDate: "2026-09-28",
  },
  {
    id: "4",
    title: "Grocery run",
    description: "Pick up fruit, rice, and snacks for the week.",
    category: "Personal",
    priority: "Low",
    dueDate: "2026-10-07",
    status: "completed",
    createdDate: "2026-10-05",
  },
  {
    id: "5",
    title: "Submit lab report",
    description: "Proofread the chemistry lab report and upload it to the course portal.",
    category: "Study",
    priority: "High",
    dueDate: "2026-10-10",
    status: "incomplete",
    createdDate: "2026-10-01",
  },
  {
    id: "6",
    title: "Read assigned article",
    description: "Read the history article and highlight three points for class discussion.",
    category: "Study",
    priority: "Low",
    dueDate: "2026-09-30",
    status: "completed",
    createdDate: "2026-09-25",
  },
];

export function getTaskById(id: string): Task | undefined {
  return mockTasks.find((task) => task.id === id);
}

export function getDashboardSummary(tasks: Task[]) {
  const today = new Date("2026-10-06");
  const weekFromNow = new Date(today);
  weekFromNow.setDate(today.getDate() + 7);

  const pending = tasks.filter((task) => task.status === "incomplete");
  const completed = tasks.filter((task) => task.status === "completed");
  const highPriority = tasks.filter(
    (task) => task.priority === "High" && task.status === "incomplete",
  );
  const upcoming = pending.filter((task) => {
    const due = new Date(task.dueDate);
    return due >= today && due <= weekFromNow;
  });

  return {
    total: tasks.length,
    pending: pending.length,
    completed: completed.length,
    highPriority: highPriority.length,
    upcoming: upcoming.length,
  };
}
