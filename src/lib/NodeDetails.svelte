<script>
	export let selectedNode = null;
</script>

{#if selectedNode}
	<div class="border-l p-4">
		<h2>Node Details</h2>
		<p>Node: {selectedNode.node_name}</p>
		<p>Type: {selectedNode.node_type}</p>
		<p>Tags: {selectedNode.tags.join(', ')}</p>
	</div>
{:else}
	<div>
		<h2>No Node Selected</h2>
	</div>
{/if}
