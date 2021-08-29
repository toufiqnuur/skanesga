import { getPost } from '$lib/utils/fetch-data';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ query: q }) => {
	let res = getPost();

	const limit = parseInt(q.get('limit'));

	if (limit) res = res.slice(0, limit);

	if (res) {
		return {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			},
			body: res
		};
	}

	return {
		status: 404,
		body: 'Not Found'
	};
};
