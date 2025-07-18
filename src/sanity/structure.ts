import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Content')
		.items([
			S.documentTypeListItem('author').title('Authors'),
			S.documentTypeListItem('startup').title('Startups'),
			S.documentTypeListItem('nonStartup').title('Non Startups'),
			S.documentTypeListItem('playlist').title('Playlists'),
		]);

