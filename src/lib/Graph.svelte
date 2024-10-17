<script>
	import cytoscape from 'cytoscape';
	import { onMount, afterUpdate } from 'svelte';

	export let selectedNode = null;
	export let nodes = [];

	let cy;

	onMount(() => {
		renderGraph();
	});

	afterUpdate(() => {
		if (selectedNode && cy) {
			console.log('Selected node:', selectedNode);
			highlightNode(selectedNode.node_name);
		}
	});

	const renderGraph = () => {
		const elements = [];

		nodes.forEach((node) => {
			elements.push({
				data: { id: node.node_name, label: node.node_name }
			});

			node.dependencies.forEach((dependency) => {
				elements.push({
					data: { source: dependency, target: node.node_name }
				});
			});
		});

		cy = cytoscape({
			container: document.getElementById('graph'),
			elements,
			style: [
				{
					selector: 'node',
					style: {
						label: 'data(label)',
						'background-color': '#0074D9',
						color: '#FFF',
						'text-valign': 'center',
						'text-halign': 'center',
						'font-size': '12px'
					}
				},
				{
					selector: 'edge',
					style: {
						width: 3,
						'line-color': '#ccc',
						'target-arrow-color': '#ccc',
						'target-arrow-shape': 'triangle',
						'curve-style': 'bezier'
					}
				},
				{
					selector: '.highlighted',
					style: {
						'background-color': '#FFD700',
						'line-color': '#FFD700',
						'target-arrow-color': '#FFD700'
					}
				}
			],
			layout: {
				name: 'breadthfirst'
			}
		});
	};

	const highlightNode = (nodeId) => {
		cy.elements().removeClass('highlighted');

		const node = cy.getElementById(nodeId);
		if (node) {
			node.addClass('highlighted');
			node.connectedEdges().addClass('highlighted');
		} else {
			console.error(`Node with ID '${nodeId}' not found`);
		}
	};
</script>

<div id="graph" style="width: 600px; height: 400px;"></div>

<style>
	.highlighted {
		background-color: #ffd700;
		line-color: #ffd700;
		target-arrow-color: #ffd700;
	}
</style>
