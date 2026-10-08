export type Priority = "Low" | "Medium" | "High";
export type TaskStatus = "incomplete" | "completed";

export type Task = {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: Priority;
  dueDate: string;
  status: TaskStatus;
  createdDate: string;
};
