<script>
	import { Link, Navbar } from 'konsta/svelte';
	import dumbbellLight from '$lib/images/dumbbell-light.png';
</script>

<Navbar>
	<div slot="left">
		<div class="h-16 flex items-center px-4">
			<img src={dumbbellLight} class="w-12 invert" alt="logo" />
            <span class="px-3 text-lg font-semibold">Active Tracker</span>
		</div>
	</div>
    <div slot="right">
        <Link class="pr-4">Home</Link>
        <Link class="pr-4">Create</Link>
        <Link class="pr-4">Login</Link>
        <Link class="pr-4">Logout</Link>
    </div>
</Navbar>
