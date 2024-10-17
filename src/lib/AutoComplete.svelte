<script>
	import { createEventDispatcher } from 'svelte';
	import { nodes } from './data';

	let searchTerm = '';
	let filteredNodes = [];

	const dispatch = createEventDispatcher();

	$: filteredNodes = nodes.filter((node) =>
		node.node_name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSelect = (node) => {
		dispatch('select', node);
	};
</script>

<div>
	<input type="text" placeholder="Search nodes..." class="border p-2" bind:value={searchTerm} />
	<ul>
		{#each filteredNodes as node}
			<button on:click={() => handleSelect(node)} class="cursor-pointer">
				{node.node_name}
			</button>
		{/each}
	</ul>
</div>
