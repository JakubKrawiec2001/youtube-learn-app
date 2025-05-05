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

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};
