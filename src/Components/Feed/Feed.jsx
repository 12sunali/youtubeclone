import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";


const Feed = ({ category, darkMode }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${category}&key=${API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      }
    };

    fetchVideos();
  }, [category]);

  return (
    <div className={`feed ${darkMode ? "dark" : "light"}`}>
      {videos.map((video) => (
        <Link
          to={`/video/${category}/${video.id.videoId}`}
          key={video.id.videoId}
          className="video-card"
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className="video-thumbnail"
          />
          <div className="video-info">
            <div className="video-title">{video.snippet.title}</div>
            <div className="video-channel">{video.snippet.channelTitle}</div>
            <div className="video-stats">
              {value_converter(Math.floor(Math.random() * 1000000))} views •{" "}
              {Math.floor(Math.random() * 10)} days ago
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
