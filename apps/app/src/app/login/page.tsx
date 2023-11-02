import Link from 'next/link';

import Messages from './messages';

export default function Login(): JSX.Element {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        href="/"
      >
        <svg
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form
        action="/auth/sign-in"
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="password"
          placeholder="••••••••"
          required
          type="password"
        />
        <button
          className="bg-green-700 rounded px-4 py-2 text-white mb-2"
          type="submit"
        >
          Sign In
        </button>
        <button
          className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
          formAction="/auth/sign-up"
          type="submit"
        >
          Sign Up
        </button>
        <Messages />
      </form>
    </div>
  );
}
