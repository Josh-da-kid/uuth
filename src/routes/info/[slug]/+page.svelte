<script>
	import { Button } from 'carbon-components-svelte';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	const post = $derived(data.post);
</script>

<main class="bg-gray-50 min-h-screen pb-16">
	<div class="max-w-4xl mx-auto pt-5 px-4">
		<a href="/" class="text-gray-500 hover:underline mb-6 inline-block">Home &gt</a>
		<a href="/info" class="text-gray-500 hover:underline mb-6 inline-block">Info Desk &gt</a>
		<a href={post.slug} class="text-red-600 hover:underline mb-6 inline-block">{post.title}</a>
		<article>
			{#if post}
				<div class="lg:flex space-y-5 sm:space-y-0 gap-4 items-center mb-8">
					<Button kind="danger">September 08, 2025</Button>
					<Button kind="secondary">System Updates</Button>
					<h3 class="text-base font-semibold">By UCTH Administration</h3>
				</div>
				<img
					src={post.image}
					alt={post.alt}
					class="w-full h-80 object-cover rounded-lg mb-6 shadow-md"
				/>
				<h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
				<p class="text-gray-500 text-sm mb-8">{post.date}</p>
				<div class="prose max-w-none text-gray-700 text-lg">{@html post.content}</div>
			{/if}
		</article>
	</div>
</main>
