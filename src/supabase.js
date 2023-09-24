import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dlxicnjfwmynfouegitf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseGljbmpmd215bmZvdWVnaXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0NzczNTYsImV4cCI6MjAxMTA1MzM1Nn0.uwc-rthK3F3NrzafmbGC7cFyw2JqJgzIbTaFPQ0U0Q4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
