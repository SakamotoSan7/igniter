import { z } from 'zod';

export const formSchema = z.object({
	title: z
		.string()
		.min(3, { message: 'Title is required at least 3 characters' })
		.max(100, { message: 'Title must be less than 100 characters' }),
	description: z
		.string()
		.min(10, { message: 'Description is required at least 10 characters' })
		.max(500, { message: 'Title must be less than 500 characters' }),
	category: z
		.string()
		.min(3, { message: 'Category is required at least 3 characters' })
		.max(60, { message: 'Title must be less than 60 characters' }),
	link: z
		.string()
		.url()
		.refine(async (url) => {
			try {
				const res = await fetch(url, { method: 'HEAD' });
				const contentType = res.headers.get('content-type');

				return contentType?.startsWith('image/');
			} catch {
				return false;
			}
		}),
	pitch: z
		.string()
		.min(20, { message: 'Pitch is required at least 20 characters' })
		.max(1200, { message: 'Pitch must be less than 1200 characters' }),
});
