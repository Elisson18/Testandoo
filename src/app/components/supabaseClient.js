import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tbgjtdpqljgjfnriueqs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZ2p0ZHBxbGpnamZucml1ZXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMTQ2MDIsImV4cCI6MjA0MjY5MDYwMn0.K59tQdwh6WDQkZx7XOrD-H8_3425niz_TKN6Ubtio4E'; // Substitua com a chave pública do Supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
