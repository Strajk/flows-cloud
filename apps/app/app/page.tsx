import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@ui/components/button";
import { cookies } from "next/headers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div>
            <Button>Click me</Button>
          </div>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <form action="/auth/sign-out" method="post">
                  <button
                    type="submit"
                    className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                  >
                    Logout
                  </button>
                </form>
              </div>
            ) : (
              <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
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
