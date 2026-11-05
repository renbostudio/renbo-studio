
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://gjwewiwxfoeftudfzakn.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_eP1YwUNxMz22VanmeqEDMw_-7_VVXTj';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
