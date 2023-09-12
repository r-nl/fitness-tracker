<script lang="ts">
	import { Block, Button, Card, List, ListInput } from 'konsta/svelte';
	import { fade } from 'svelte/transition';
	let errorMessage: string = '';
	let workoutName: string | null = null;
	let workoutType: string | null = null;

	type cardioExercise = {
		type: string | null;
		distance: number | null;
		duration: string | null;
		pace: number | null;
	};
	type strengthExercise = {
		type: string | null;
		sets: number | null;
		reps: number | null;
		weight: number | null;
	};

	let exercises: Array<cardioExercise | strengthExercise> = [];
</script>

<Block class="flex justify-center">
	<Card class="w-full">
		<div class="text-xl px-2">Record Workout</div>
		<List>
			<ListInput
				error={errorMessage}
				label="Workout Name"
				type="text"
				placeholder="Workout Name"
				onChange={(changeEvent) => {
					workoutName = changeEvent.target.value;
				}}
			/>
			<ListInput
				label="Workout Type"
				type="select"
				dropdown
				placeholder="Workout type..."
				onChange={(changeEvent) => {
					workoutType = changeEvent.target.value;
					exercises = [];
				}}
			>
				<option value={null}>Select Workout</option>
				<option value="cardio">Cardio</option>
				<option value="strength">Strength</option>
			</ListInput>
		</List>
		{#if workoutType == 'cardio'}
			<Block
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			>
				{JSON.stringify(exercises)}
				{#each exercises as _, index}
					<div transition:fade>
						<List outline inset class="p-2">
							<div class="p-1">Exercise {index + 1}</div>
							<ListInput
								label="Workout Type"
								type="select"
								dropdown
								placeholder="Type of exercise."
								onChange={(changeEvent) => {
									// @ts-ignore
									exercises[index].type = changeEvent.target.value;
								}}
							>
								<option value={null}>Select type</option>
								<option value="run">Run</option>
								<option value="walk">walk</option>
							</ListInput>
							<ListInput
								error={errorMessage}
								label="Distance"
								type="text"
								placeholder="Distance"
								onChange={(changeEvent) => {
									// @ts-ignore
									exercises[index].distance = changeEvent.target.value;
								}}
							/>
							<ListInput
								error={errorMessage}
								label="Duration"
								type="text"
								placeholder="Duration"
								onChange={(changeEvent) => {
									// @ts-ignore
									exercises[index].duration = changeEvent.target.value;
								}}
							/>
							<ListInput
								error={errorMessage}
								label="Pace"
								type="text"
								placeholder="Pace"
								onChange={(changeEvent) => {
									// @ts-ignore
									exercises[index].pace = changeEvent.target.value;
								}}
							/>
						</List>
					</div>
				{/each}
			</Block>
			<Block class="flex">
				<Button
					clear
					onClick={() => {
						exercises.pop();
						exercises = exercises;
					}}
				>
					Remove Exercise
				</Button>
				<Button
					clear
					onClick={() => {
						exercises.push({
							type: null,
							distance: null,
							duration: null,
							pace: null
						});
						exercises = exercises;
					}}
				>
					Add Exercise
				</Button>
			</Block>
		{/if}

		{#if workoutType == 'strength'}{/if}

		<Block>
			<Button onClick={() => {}}>Record Workout</Button>
		</Block>
	</Card>
</Block>
