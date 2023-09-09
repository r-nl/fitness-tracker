<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import {
		Block,
		Button,
		Card,
		Link,
		List,
		ListInput
	} from 'konsta/svelte';
	let newEmail: string;
	let newPassword: string;
	let confirmationPassword: string;
	let errorMessage: string;

	async function registerNewUser() {
		if (!newEmail || !newPassword || !confirmationPassword) {
			errorMessage = 'Please fill out all forms';
		} else {
			errorMessage = '';
			if (newPassword == confirmationPassword) {
				let { data, error } = await supabase.auth.signUp({
					email: newEmail,
					password: newPassword
				});
				if (error) {
					errorMessage = error.message;
				} else if (data) {
					goto('/login');
				}
			} else {
				errorMessage = 'Passwords do not match';
			}
		}
	}
</script>

<Block class="flex justify-center">
	<Card class="w-full sm:w-96">
		<div class="text-xl px-2">Register</div>
		<List>
			<ListInput
				error={errorMessage}
				label="Email"
				type="text"
				placeholder="Email"
				onChange={(changeEvent) => {
					newEmail = changeEvent.target.value;
				}}
			/>
			<ListInput
				error={errorMessage}
				label="Password"
				type="password"
				placeholder="Password"
				onChange={(changeEvent) => {
					newPassword = changeEvent.target.value;
				}}
			/>
			<ListInput
				label="Confirm Password"
				type="password"
				placeholder="Retype Password"
				onChange={(changeEvent) => {
					confirmationPassword = changeEvent.target.value;
				}}
			/>
		</List>
		<Block>
			<Button onClick={registerNewUser}>Register</Button>
		</Block>
		<Block class="flex justify-center">
			<div>
				Already have an account? <Link linkProps={{ href: '/login' }}>
					Login
				</Link>
			</div>
		</Block>
	</Card>
</Block>
