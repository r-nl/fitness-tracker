<script lang="ts">
	import { user } from '$lib/stores/auth';
	import { Block } from 'konsta/svelte';
</script>

<Block>
	{JSON.stringify($user)}
</Block>
