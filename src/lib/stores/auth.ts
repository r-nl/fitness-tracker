import type { User } from '@supabase/supabase-js';
import { derived, writable } from 'svelte/store';

export const user = writable<User | null>(null);

export const isLoggedIn = derived(user, ($user) => $user != null , false);
