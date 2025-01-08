export default function formatViews(totalViews: number) {
	const views = totalViews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	if (totalViews === 1) {
		return `${views} view`;
	} else {
		return `${views} views`;
	}
}

export function numberFormatting(totalViews: number) {
	const views = totalViews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return views;
}
