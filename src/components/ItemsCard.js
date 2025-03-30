const ItemCard = (item) => {
  const { name, description, price, url } = item;

  return (
    <div>
      <img src={url} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ItemCard;
