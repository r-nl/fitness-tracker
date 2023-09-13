<script lang="ts">
	import WorkoutCard from '$lib/components/WorkoutCard.svelte';
	import { user } from '$lib/stores/auth';
	import { supabase } from '$lib/supabaseClient';
	import { Block } from 'konsta/svelte';
	import { onMount } from 'svelte';

	let workouts: any[] = [];

	onMount(() => {
		async function getWorkouts() {
			let { data, error } = await supabase.from('workouts').select('*');
			if (data) {
				workouts = data;
			}
		}
		getWorkouts();
	});
</script>

{#if workouts.length == 0}
	<div class="w-full justify-center p-10">Looks empty in here...</div>
{/if}
<Block
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
	{#each workouts as workout}
		<WorkoutCard {workout} />
	{/each}
</Block>
