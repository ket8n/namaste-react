import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../../src/utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(-1);

  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="flex flex-col items-center">
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
      </div>
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(showIndex == index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
