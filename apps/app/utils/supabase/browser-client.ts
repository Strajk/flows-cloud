import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "./database.types";

export const supabaseClient = createPagesBrowserClient<Database>();
