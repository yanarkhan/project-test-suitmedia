import { useState } from "react";
import { formatDate } from "../utils/api";

const PostCard = ({ post }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Fallback image generator berdasarkan title
  const generateFallbackImage = (title, index = 0) => {
    const colors = [
      "bg-gradient-to-br from-orange-400 to-orange-600",
      "bg-gradient-to-br from-blue-400 to-blue-600",
      "bg-gradient-to-br from-purple-400 to-purple-600",
      "bg-gradient-to-br from-green-400 to-green-600",
      "bg-gradient-to-br from-pink-400 to-pink-600",
      "bg-gradient-to-br from-indigo-400 to-indigo-600",
      "bg-gradient-to-br from-red-400 to-red-600",
      "bg-gradient-to-br from-yellow-400 to-yellow-600",
    ];

    const colorIndex = title
      ? title.length % colors.length
      : index % colors.length;
    return colors[colorIndex];
  };

  const getImageUrl = () => {
    if (post.medium_image?.[0]?.url) {
      return post.medium_image[0].url;
    }
    if (post.small_image?.[0]?.url) {
      return post.small_image[0].url;
    }
    return null;
  };

  const imageUrl = getImageUrl();

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Image Container */}
      <div className="relative aspect-ratio-16-9 bg-gray-200 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-primary rounded-full animate-spin" />
          </div>
        )}

        {imageError || !imageUrl ? (
          // Custom fallback image dengan gradient dan initial huruf
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-white ${generateFallbackImage(
              post.title,
              post.id
            )}`}
          >
            <div className="text-4xl font-bold mb-2">
              {post.title ? post.title.charAt(0).toUpperCase() : "📄"}
            </div>
            <div className="text-xs text-center px-2 opacity-90">
              {post.title
                ? post.title.substring(0, 20) +
                  (post.title.length > 20 ? "..." : "")
                : "No Image"}
            </div>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={post.title}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <time className="text-sm text-gray-500">
            {formatDate(post.published_at)}
          </time>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3 text-ellipsis-3 group-hover:text-orange-primary transition-colors duration-200">
          {post.title}
        </h3>

        {post.content && (
          <p className="text-gray-600 text-sm line-clamp-3">
            {post.content.replace(/<[^>]*>/g, "").substring(0, 150)}...
          </p>
        )}
      </div>
    </article>
  );
};

export default PostCard;
