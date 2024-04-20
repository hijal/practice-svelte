const fetchFromDB = async () => {
	return (await import.meta.glob('./*.json')['./db.json']()).default;
};
export async function getPostSummaries() {
	const posts = await fetchFromDB();
	const postSummaries = posts.map((p) => ({
		slug: p.slug,
		title: p.title,
		excerpt: p.excerpt,
		content: p.content
	}));
	return postSummaries;
}
export async function getPostBySlug(slug) {
	const posts = await fetchFromDB();
	return posts.find((p) => p.slug === slug);
}
