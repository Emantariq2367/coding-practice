import { SiteHeader } from "./SiteHeader";

type PageShellProps = {
  children: React.ReactNode;
  variant?: "public" | "app";
};

export function PageShell({ children, variant = "public" }: PageShellProps) {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader variant={variant} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
    </div>
  );
}
