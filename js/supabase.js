const SUPABASE_URL = 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = 'your-anon-key'

export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
