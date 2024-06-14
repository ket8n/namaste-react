import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div className="p-2 m-2 my-4 border-gray-200 border-b-2 flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button className="bg-black text-white my-1 p-1 rounded-lg">
                  Add +{" "}
                </button>
              </div>
              <img
                className="w-full rounded-lg"
                src={CDN_URL + item.card.info.imageId}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
