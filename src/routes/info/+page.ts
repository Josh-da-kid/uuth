import type { PageLoad } from './$types';
import { posts } from '$lib/posts';

export const load: PageLoad = () => {
	// To optimize the data payload, we only select the fields needed for the list page.
	const summaries = posts.map((post) => ({
		slug: post.slug,
		title: post.title,
		date: post.date,
		excerpt: post.excerpt,
		image: post.image,
		alt: post.alt
	}));

	return {
		posts: summaries
	};
};