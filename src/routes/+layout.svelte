<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import { App, Page } from 'konsta/svelte';
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/stores/auth';

	onMount(() => {
		async function getUser() {
			const { data } = await supabase.auth.getUser();
			console.log('User');
			console.log(user);
			if (data.user) {
				user.set(data.user);
			}
		}
		getUser();
	});
</script>

<App theme="material">
	<Page>
		<Navigation />
		<slot />
	</Page>
</App>
