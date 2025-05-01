export const searchVideos = async (query: string) => {
	try {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/search?key=${
				process.env.EXPO_PUBLIC_YOUTUBE_API_KEY
			}&q=${encodeURIComponent(query)}&part=snippet&type=video&maxResults=10`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Błąd wyszukiwania filmów:", error);
	}
};
