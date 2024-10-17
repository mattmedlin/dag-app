export const nodes = [
	{ node_name: 'A', node_type: 'TYPE_1', tags: ['core'], dependencies: [] },
	{ node_name: 'B', node_type: 'TYPE_2', tags: ['feature'], dependencies: ['A'] },
	{ node_name: 'C', node_type: 'TYPE_3', tags: ['feature'], dependencies: ['A'] },
	{ node_name: 'D', node_type: 'TYPE_1', tags: ['bugfix'], dependencies: ['B', 'C'] },
	{ node_name: 'E', node_type: 'TYPE_4', tags: ['release'], dependencies: ['D'] }
];
