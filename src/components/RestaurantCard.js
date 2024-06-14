import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(userContext);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const deliveryTime = resData?.info?.sla?.slaString;

  return (
    <div className="res-card p-4 m-4 w-[300px] hover:shadow-2xl bg-gray-100 rounded-lg hover:bg-gray-200">
      <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="py-2">{cuisines.join(", ")}</h4>
      <h4 className="py-2">⭐{avgRating} stars</h4>
      <h4 className="py-2">{costForTwo}</h4>
      <h4 className="py-2">{deliveryTime}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const withNonVeg = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-600 text-white p-1 px-2 m-4 rounded-lg">
          Non-Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
