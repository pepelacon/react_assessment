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
      <p className="price">${price}</p>
      {isVisible && <p className="description">{description}</p>}
      <div>
        <button onClick={toggleVisible} className="toggle_button">
          {isVisible ? "Hide details" : "Show details"}
        </button>
        <button onClick={handleAddCard} className="add_to_card">
          Add to card
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
