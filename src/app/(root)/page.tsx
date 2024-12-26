import SearchForm from '@/components/SearchForm';
import StartupCard, { StartupCardType } from '@/components/StartupCard';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';

export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
	const query = (await searchParams).query;

	const posts = await client.fetch(STARTUPS_QUERY);

	// const posts = [
	// 	{
	// 		_createdAt: new Date(),
	// 		views: 55,
	// 		author: { _id: 1, name: "Kristianto" },
	// 		_id: 1,
	// 		description: "This is a description",
	// 		image: "https://eu-images.contentstack.com/v3/assets/blt31d6b0704ba96e9d/blt4d3f4826b393a3c8/6709363cc05f7e768f4f24a0/Tesla_Optimus_Humanoid_Robot_Serves_Drinks.png?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
	// 		category: "Robots",
	// 		title: "We Robots",
	// 	},
	// ];

	return (
		<>
			<section className='pink_container'>
				<h1 className='heading'>
					Pitch Your Startup <br /> Connect With Entrepreneurs
				</h1>

				<p className='sub-heading !max-w-3xl'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

				<SearchForm query={query} />
			</section>

			<section className='section_container'>
				<p className='text-30-semibold'>{query ? `Search Results for "${query}"` : 'All Startups'}</p>

				<ul className='mt-7 card_grid'>
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType) => (
							<StartupCard
								key={post?._id}
								post={post}
							/>
						))
					) : (
						<p className='no-results'>No Startups Found</p>
					)}
				</ul>
			</section>
		</>
	);
}
