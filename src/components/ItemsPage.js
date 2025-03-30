import items from "../externalBD/BD";
import ItemCard from "./ItemsCard";

const ItemsPage = () => {
  return (
    <div className="container">
      <div className="grid_container">
        {items.map((item, idx) => (
          <ItemCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
