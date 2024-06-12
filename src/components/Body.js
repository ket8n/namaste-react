import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_DATA_URL);

    const json = await data.json();

    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (useOnlineStatus() === false)
    return (
      <h1>Oopss! No Internet Connection..... Seems like you are offline 🙄</h1>
    );

  // conditional rendering, ternary operation with shimmer
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-div">
        <input
          className="search-text"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredResList = resList.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredResList(filteredResList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = resList.filter(
              (res) => res.info.avgRating > 4.3
            );

            setFilteredResList(filteredResList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <Link
            className="link-res"
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
