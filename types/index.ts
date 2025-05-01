export interface YouTubeVideo {
	id: {
		videoId: string;
	};
	snippet: {
		title: string;
		description: string;
		thumbnails: {
			medium: {
				url: string;
			};
		};
	};
}
