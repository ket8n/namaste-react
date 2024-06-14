import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withNonVeg } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(userContext);

  const RestaurantCardNonVeg = withNonVeg(RestaurantCard);

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
      <div className="search-div flex p-4 m-4">
        <input
          className="search-text px-4 border-black border"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="px-4 mx-4 bg-green-100 rounded-lg"
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
          className="filter-btn px-4 bg-green-100 rounded-lg"
          onClick={() => {
            const filteredResList = resList.filter(
              (res) => res.info.avgRating > 4.3
            );

            setFilteredResList(filteredResList);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          className="border border-black mx-4 p-1"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredResList.map((restaurant) => (
          <Link
            className="link-res"
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {" "}
            {restaurant?.info?.veg === undefined ? (
              <RestaurantCardNonVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
