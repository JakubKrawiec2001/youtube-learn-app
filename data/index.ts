import { YouTubeVideo } from "@/types";

type VideoCategoryMap = {
  [key: string]: YouTubeVideo[];
};

export const dummyDataByCategory: VideoCategoryMap = {
  "React Native": [
    {
      id: { videoId: "rn_001" },
      snippet: {
        title: "React Native in 100 seconds",
        description: "Quick overview of React Native",
        publishTime: "2024-08-12T12:00:00Z",
        channelTitle: "Fireship",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/0-S5a0eXPoc/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "rn_002" },
      snippet: {
        title: "React Native Crash Course",
        description: "Build apps fast with React Native",
        publishTime: "2024-07-20T10:00:00Z",
        channelTitle: "The Net Ninja",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/Hf4MJH0jDb4/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "rn_003" },
      snippet: {
        title: "React Native Navigation Tutorial",
        description: "Intro to navigation in React Native",
        publishTime: "2024-06-15T08:00:00Z",
        channelTitle: "Programming with Mosh",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/c06UuH5XTr4/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "rn_004" },
      snippet: {
        title: "React Native UI with Tailwind",
        description: "Styling React Native with Tailwind",
        publishTime: "2024-05-05T09:30:00Z",
        channelTitle: "Code With Antonio",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/FzWL63lLtg4/mqdefault.jpg" },
        },
      },
    },
  ],
  React: [
    {
      id: { videoId: "react_001" },
      snippet: {
        title: "React in 100 seconds",
        description: "Quick intro to React.js",
        publishTime: "2024-08-10T10:00:00Z",
        channelTitle: "Fireship",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/Tn6-PIqc4UM/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "react_002" },
      snippet: {
        title: "React Fundamentals",
        description: "Core concepts of React",
        publishTime: "2024-07-01T11:00:00Z",
        channelTitle: "The Net Ninja",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/MhkGQAoc7bc/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "react_003" },
      snippet: {
        title: "React Props and State",
        description: "Understanding props & state",
        publishTime: "2024-06-21T09:00:00Z",
        channelTitle: "Traversy Media",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/35lXWvCuM8o/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "react_004" },
      snippet: {
        title: "React Hooks Explained",
        description: "useState, useEffect and beyond",
        publishTime: "2024-05-11T13:15:00Z",
        channelTitle: "Web Dev Simplified",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/dpw9EHDh2bM/mqdefault.jpg" },
        },
      },
    },
  ],
  Typescript: [
    {
      id: { videoId: "ts_001" },
      snippet: {
        title: "TypeScript in 100 Seconds",
        description: "Intro to TypeScript",
        publishTime: "2024-08-08T14:00:00Z",
        channelTitle: "Fireship",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/zQnBQ4tB3ZA/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "ts_002" },
      snippet: {
        title: "TypeScript for Beginners",
        description: "Start coding with TS",
        publishTime: "2024-07-18T16:00:00Z",
        channelTitle: "The Net Ninja",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/d56mG7DezGs/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "ts_003" },
      snippet: {
        title: "Advanced TypeScript Tips",
        description: "Narrowing, Generics, Utility Types",
        publishTime: "2024-06-10T12:00:00Z",
        channelTitle: "Matt Pocock",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/ahCwqrYpIuM/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "ts_004" },
      snippet: {
        title: "TypeScript vs JavaScript",
        description: "Key differences explained",
        publishTime: "2024-05-15T11:00:00Z",
        channelTitle: "Programming with Mosh",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/Ws7gk5fU0K8/mqdefault.jpg" },
        },
      },
    },
  ],
  Javascript: [
    {
      id: { videoId: "js_001" },
      snippet: {
        title: "JavaScript in 100 Seconds",
        description: "Quick dive into JS",
        publishTime: "2024-08-01T09:00:00Z",
        channelTitle: "Fireship",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/ZvbzSrg0afE/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "js_002" },
      snippet: {
        title: "JavaScript ES6 Features",
        description: "Learn the modern syntax",
        publishTime: "2024-07-05T10:30:00Z",
        channelTitle: "The Net Ninja",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/NCwa_xi0Uuc/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "js_003" },
      snippet: {
        title: "Asynchronous JavaScript",
        description: "Callbacks, Promises, Async/Await",
        publishTime: "2024-06-25T15:00:00Z",
        channelTitle: "Web Dev Simplified",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/_8gHHBlbziw/mqdefault.jpg" },
        },
      },
    },
    {
      id: { videoId: "js_004" },
      snippet: {
        title: "JavaScript DOM Manipulation",
        description: "Access & change the DOM",
        publishTime: "2024-05-19T17:00:00Z",
        channelTitle: "Traversy Media",
        thumbnails: {
          medium: { url: "https://i.ytimg.com/vi/wiozYyXQEVk/mqdefault.jpg" },
        },
      },
    },
  ],
};
