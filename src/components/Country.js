import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Country = ({ flag, name, population, region, capital, alpha3Code }) => {
  let navigate = useNavigate();

  // State to track if the country is liked
  const [liked, setLiked] = useState(false);

  // Function to toggle the heart state (like or not)
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div
      onClick={() => navigate(alpha3Code)}
      className="bg-white rounded-md overflow-hidden cursor-pointer hover:scale-x-[1.02] hover:scale-y-[1.02] transition dark:bg-darkelem dark:text-white text-gray-900 shadow-md"
    >
      <div>
        <img className="w-full h-40 object-cover" src={flag} alt={name} />
      </div>
      <div className="font-medium text-base px-4 py-5">
        <p className="text-lg font-semibold">{name}</p>
        <p className="mt-2">
          Population: <span className="font-light opacity-80">{population}</span>
        </p>
        <p>
          Region: <span className="font-light opacity-80">{region}</span>
        </p>
        <p>
          Capital: <span className="font-light opacity-80">{capital}</span>
        </p>

        {/* Heart Icon as Like Button */}
        <button
          onClick={handleLikeClick}
          className={`mt-2 text-2xl ${liked ? "text-red-500" : "text-gray-500"}`}
        >
          {liked ? "❤️" : "🤍"} {/* Toggle between filled and empty heart */}
        </button>
      </div>
    </div>
  );
};

export default Country;
