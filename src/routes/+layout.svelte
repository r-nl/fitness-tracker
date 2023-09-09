<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.css';
	import { App, Page } from 'konsta/svelte';
</script>

<App theme="material">
	<Page>
		<Navigation />
		<slot />
	</Page>
</App>
