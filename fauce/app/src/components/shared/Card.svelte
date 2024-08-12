<script>
	/**
	 * @typedef {Object} PropsType
	 * @property {string|undefined} title - The title of the props.
	 */

	/**
	 * @type PropsType
	 */
	let { title, header_left, header_right, body } = $props();
</script>

<div class="w-full p-4 bg-white border border-gray-200 rounded-xl shadow shadow-gray-200">
	<!-- Header -->
	<div class="flex justify-between">
		<!-- Header.Left -->
		{#if !header_left && !!title}
			<span class="mb-2 text-lg font-bold tracking-tight text-gray-900">
				{title}
			</span>
		{/if}

		{#if header_left}
			{@render header_left()}
		{/if}
		<!-- Header.Right -->
		{#if header_right}
			<div class="flex-shrink-0 ml-1">
				{@render header_right()}
			</div>
		{/if}
	</div>
	{#if body}
		{@render body()}
	{/if}
</div>
