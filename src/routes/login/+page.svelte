<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/stores/auth';
	import {
		Block,
		Button,
		Card,
		Link,
		List,
		ListInput
	} from 'konsta/svelte';
	let email: string;
	let password: string;
	let errorMessage: string;

	async function login() {
		if (!email || !password) {
			errorMessage = 'Please fill out all forms';
		} else {
			errorMessage = '';
			let { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password
			});
			if (error) {
				errorMessage = error.message;
			} else if (data) {
				const { data } = await supabase.auth.getUser();
				if (data.user) {
					user.set(data.user);
				}
				goto('/');
			}
		}
	}
</script>

<Block class="flex justify-center">
	<Card class="w-full sm:w-96">
		<div class="text-xl px-2">Login</div>
		<List>
			<ListInput
				error={errorMessage}
				label="Email"
				type="text"
				placeholder="Email"
				onChange={(changeEvent) => {
					email = changeEvent.target.value;
				}}
			/>
			<ListInput
				error={errorMessage}
				label="Password"
				type="password"
				placeholder="Password"
				onChange={(changeEvent) => {
					password = changeEvent.target.value;
				}}
			/>
		</List>
		<Block>
			<Button onClick={login}>Login</Button>
		</Block>
		<Block class="flex justify-center">
			<div>
				Dont have an account? <Link linkProps={{ href: '/register' }}>
					Register
				</Link>
			</div>
		</Block>
	</Card>
</Block>
