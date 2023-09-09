<script>
	import { Link, Navbar } from 'konsta/svelte';
	import dumbbellLight from '$lib/images/dumbbell-light.png';
	import { isLoggedIn, user } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	async function signOut() {
		let { error } = await supabase.auth.signOut();
		user.set(null);
		if (error) {
			console.error(error.message);
		}
		goto('/');
	}
</script>

<Navbar>
	<div slot="left">
		<div class="h-16 flex items-center px-4">
			<img src={dumbbellLight} class="w-12 invert" alt="logo" />
			<span class="px-3 text-lg font-semibold">Active Tracker</span>
		</div>
	</div>
	<div slot="right">
		<Link class="pr-4" linkProps={{ href: '/' }}>Home</Link>
		{#if $isLoggedIn}
			<Link class="pr-4">Create</Link>
			<Link class="pr-4" onClick={signOut}>Logout</Link>
		{:else}
			<Link class="pr-4" linkProps={{ href: '/login' }}>Log In</Link>
		{/if}
	</div>
</Navbar>
