import { error } from '@sveltejs/kit';
import { posts } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) {
		throw error(404, 'Not found');
	}

	return { post };
};