<script>
	import { Button } from 'carbon-components-svelte';

	/** @type {import('./$types').PageData} */
	let { data } = $props();
</script>

<main class="bg-gray-50 min-h-screen pb-16">
	<!-- Header Section -->
	<section class="text-center py-12 bg-white shadow-sm">
		<h1 class="text-3xl md:text-4xl font-bold text-gray-900">
			News / <span class="text-red-700">Updates</span>
		</h1>
		<p class="sm:text-xl text-gray-500 mt-3 max-w-2xl mx-auto px-4">
			Stay updated with the latest news, announcements, and policy changes from UUTH.
		</p>
	</section>

	<!-- News Cards Section -->
	<section class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 lg:px-32 mt-10">
		{#each data.posts as post}
			<div class="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition">
				<img src={post.image} alt={post.alt} class="w-full h-56 object-cover" />
				<div class="p-6">
					<p class="text-sm text-gray-400 mb-2">{post.date}</p>
					<h3 class="font-semibold text-gray-800 sm:text-xl text-lg">{post.title}</h3>
					<p class="text-gray-500 text-sm mt-2 sm:text-lg">
						{post.excerpt}
					</p>
					<a
						href={`/info/${post.slug}`}
						class="sm:text-lg text-red-600 text-sm mt-3 inline-block hover:underline">Read More</a
					>
				</div>
			</div>
		{/each}
	</section>

	<!-- Load More Button -->
	<div class="text-center mt-12">
		<Button kind="secondary">Load More</Button>
	</div>
</main>
