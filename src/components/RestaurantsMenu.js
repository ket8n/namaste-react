import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setResData(json.data);
  };

  if (resData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <p>⭐{avgRating}</p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{""}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
            /-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
