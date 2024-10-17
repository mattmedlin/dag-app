<script>
	import AutoComplete from '../lib/AutoComplete.svelte';
	import Graph from '../lib/Graph.svelte';
	import NodeDetails from '../lib/NodeDetails.svelte';
	import { nodes } from '../lib/data.js';

	let selectedNode = null;

	const handleNodeSelect = (event) => {
		selectedNode = event.detail;
	};
</script>

<main class="flex">
	<div class="w-1/3 p-4">
		<AutoComplete on:select={handleNodeSelect} />
	</div>

	<div class="w-1/3">
		<Graph {selectedNode} {nodes} />
	</div>

	<div class="w-1/3">
		<NodeDetails {selectedNode} />
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: space-between;
	}
</style>
