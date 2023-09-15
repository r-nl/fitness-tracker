<script lang="ts">
	import { page } from '$app/stores';
	import WorkoutCard from '$lib/components/WorkoutCard.svelte';
	import { supabase } from '$lib/supabaseClient';
	import { Block, Card } from 'konsta/svelte';
	import { onMount } from 'svelte';

	$: workoutId = $page.url.searchParams.get('id');
	let workout: any;
	let errorMessage: string;

	onMount(() => {
		async function getWorkout() {
			const { data, error } = await supabase
				.from('workouts')
				.select('*')
				.eq('id', workoutId);
			if (data) {
				workout = data[0];
			}
			if (error) {
				errorMessage = error.message;
			}
		}
		getWorkout();
	});
</script>

<Block>
	{#if workout != null}
		<WorkoutCard {workout} />
        <Card>
            
        </Card>
	{/if}
</Block>
