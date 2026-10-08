import Link from "next/link";

type SiteHeaderProps = {
  variant?: "public" | "app";
};

export function SiteHeader({ variant = "public" }: SiteHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={variant === "app" ? "/dashboard" : "/"} className="text-lg font-semibold text-slate-900">
          Smart Task Manager
        </Link>

        {variant === "public" ? (
          <nav className="flex items-center gap-3 text-sm">
            <Link href="/login" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-100">
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-500"
            >
              Sign up
            </Link>
          </nav>
        ) : (
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/dashboard" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-100">
              Dashboard
            </Link>
            <Link href="/tasks/new" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-100">
              Add Task
            </Link>
            <Link href="/profile" className="rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-100">
              Profile
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
