import { css } from '@flows/styled-system/css';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Button } from 'ui';

export const dynamic = 'force-dynamic';

export default async function Index(): Promise<JSX.Element> {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div className={css({ my: 16, mx: 'auto' })}>
            <Button>Click me</Button>
          </div>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <form action="/auth/sign-out" method="post">
                  <button
                    className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                    type="submit"
                  >
                    Logout
                  </button>
                </form>
              </div>
            ) : (
              <Link
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                href="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
