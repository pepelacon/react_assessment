import { useState } from "react";

const ItemCard = (item) => {
  const { name, description, price, url } = item;
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleAddCard = () => {
    console.log(`${name} added to card`);
  };

  return (
    <div className="card">
      <img src={url} alt={name} className="image" />
      <h3 className="name">{name}</h3>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <button onClick={toggleVisible}>Details</button>
      <button onClick={handleAddCard}>Add to card</button>
    </div>
  );
};

export default ItemCard;
