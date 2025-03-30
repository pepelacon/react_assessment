import items from "../externalBD/BD";
import ItemCard from "./ItemsCard";

const ItemsPage = () => {
  return (
    <div>
      {items.map((item, idx) => (
        <ItemCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default ItemsPage;
