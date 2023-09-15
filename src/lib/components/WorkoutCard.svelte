<script lang="ts">
	import { Card, Chip } from 'konsta/svelte';
	import cardioImage from '$lib/images/running-light-green.png';
	import strengthImage from '$lib/images/dumbbell-light-green.png';
	import { goto } from '$app/navigation';
	export let workout: any;
	$: workoutType = workout.workout_type;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={(event) => goto(`/workout?id=${workout.id}`)}>
	<Card
		class="flex justify-center items-center py-5 select-none cursor-pointer"
	>
		{#if workoutType == 'cardio'}
			<div class="flex flex-col w-full justify-center items-center">
				<img src={cardioImage} class="h-20" alt="" />
				<Chip class="m-5">Cardio</Chip>
			</div>
		{/if}
		{#if workoutType == 'strength'}
			<div class="flex flex-col w-full justify-center items-center">
				<img src={strengthImage} class="h-20" alt="" />
				<Chip class="m-7">Strength</Chip>
			</div>
		{/if}
		<div class="text-lg font-medium">
			{workout.workout_name}
		</div>
	</Card>
</div>
