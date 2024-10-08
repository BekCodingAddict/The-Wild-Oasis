import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jvznlrunrbwguhnanfpn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2em5scnVucmJ3Z3VobmFuZnBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNjk1MTUsImV4cCI6MjA0Mzk0NTUxNX0.VflgTb516_vnfcPz5VSDtkk0bl4iY5PdxmPP7UZXtZw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
