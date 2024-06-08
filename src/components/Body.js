import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resListData from "../utils/mockData";

const Body = () => {
  const [resList, setResList] = useState(resListData);

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredResList = resList.filter(
            (res) => res.info.avgRating > 4.4
          );

          setResList(filteredResList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
