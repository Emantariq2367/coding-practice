"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

type AuthFormProps = {
  mode: "login" | "signup";
};

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const isSignup = mode === "signup";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">{isSignup ? "Create an account" : "Welcome back"}</h1>
        <p className="mt-1 text-sm text-slate-500">
          {isSignup ? "Sign up to start organizing your tasks." : "Log in to continue to your dashboard."}
        </p>
      </div>

      {isSignup ? (
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Full name</span>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2"
          />
        </label>
      ) : null}

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-700">Email</span>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-700">Password</span>
        <input
          type="password"
          name="password"
          required
          minLength={6}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2"
        />
      </label>

      {isSignup ? (
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Confirm password</span>
          <input
            type="password"
            name="confirmPassword"
            required
            minLength={6}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none ring-indigo-500 focus:ring-2"
          />
        </label>
      ) : null}

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
      >
        {isSignup ? "Sign up" : "Log in"}
      </button>

      <p className="text-center text-sm text-slate-500">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Log in
            </Link>
          </>
        ) : (
          <>
            Need an account?{" "}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
