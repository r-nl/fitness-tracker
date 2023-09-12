<script lang="ts">
	import {
		Block,
		BlockTitle,
		Button,
		Card,
		List,
		ListInput
	} from 'konsta/svelte';
	let errorMessage: string = '';
	let workoutName: string | null = null;
	let workoutType: string | null = null;
	let numberOfExercises: number = 0;

	type cardioExercise = {
		type: string;
		distance: number;
		duration: number;
		pace: number;
	};
	type strengthExercise = {
		type: string;
		sets: number;
		reps: number;
		weight: number;
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
				{#each Array(numberOfExercises) as _, index}
					<List outline inset class="p-2">
                        <div class="p-1">Exercise {index + 1}</div>
						<ListInput
							error={errorMessage}
							label="type"
							type="text"
							placeholder="type"
							onChange={(changeEvent) => {
								workoutName = changeEvent.target.value;
							}}
						/>
						<ListInput
							error={errorMessage}
							label="distance"
							type="text"
							placeholder="distance"
							onChange={(changeEvent) => {
								workoutName = changeEvent.target.value;
							}}
						/>
						<ListInput
							error={errorMessage}
							label="duration"
							type="text"
							placeholder="duration"
							onChange={(changeEvent) => {
								workoutName = changeEvent.target.value;
							}}
						/>
						<ListInput
							error={errorMessage}
							label="pace"
							type="text"
							placeholder="pace"
							onChange={(changeEvent) => {
								workoutName = changeEvent.target.value;
							}}
						/>
					</List>
				{/each}
			</Block>
			<Block class="flex">
				<Button
					clear
					onClick={() => {
						numberOfExercises > 0
							? (numberOfExercises -= 1)
							: (numberOfExercises = 0);
					}}
				>
					Remove Exercise
				</Button>
				<Button
					clear
					onClick={() => {
						numberOfExercises += 1;
					}}
				>
					Add Exercise
				</Button>
			</Block>
		{/if}

		{#if workoutType == 'strength'}
			<Block class="flex">
				<Button
					clear
					onClick={() => {
						numberOfExercises > 0
							? (numberOfExercises -= 1)
							: (numberOfExercises = 0);
					}}
				>
					Remove Exercise
				</Button>
				<Button
					clear
					onClick={() => {
						numberOfExercises += 1;
					}}
				>
					Add Exercise
				</Button>
			</Block>
		{/if}

		<Block>
			<Button onClick={() => {}}>Record Workout</Button>
		</Block>
	</Card>
</Block>
