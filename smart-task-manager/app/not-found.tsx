import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <div className="py-16 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-2 text-slate-500">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Back to home
        </Link>
      </div>
    </PageShell>
  );
}
