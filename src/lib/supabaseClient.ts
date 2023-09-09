/* eslint-disable max-len */
import { createClient } from '@supabase/supabase-js';

const anonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5cnBpdmhzaWtrdXlubmlvdGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyMzE0NzIsImV4cCI6MjAwOTgwNzQ3Mn0.Q9ebJi1yGywiFOftjJa5h57X-4221gSjjxVSlNwDy3g';
const projectURL = 'https://vyrpivhsikkuynniotfl.supabase.co';

export const supabase = createClient(projectURL, anonKey);
