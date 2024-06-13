import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../../src/utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <div className="flex">
        <div className="p-4 m-4">
          <img
            className="res-logo rounded-lg w-44"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <div className="p-4 m-4">
          <h1 className="font-bold text-xl p-4">{name}</h1>
          <p className="px-4 py-2">Cuisines : {cuisines.join(", ")}</p>
          <p className="px-4 py-2">{costForTwoMessage}</p>
          <p className="px-4 py-2">⭐{avgRating}</p>
        </div>
      </div>
      <div className="px-10">
        <h2 className="font-bold text-lg py-2">Menu</h2>
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
    </div>
  );
};

export default RestaurantMenu;
