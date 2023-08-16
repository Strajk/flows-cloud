import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import type { NextApiRequest, NextApiResponse } from "next";

import type { Database } from "./database.types";

export const supabaseServerClient = (req: NextApiRequest, res: NextApiResponse) =>
  createPagesServerClient<Database>({
    req,
    res,
  });
