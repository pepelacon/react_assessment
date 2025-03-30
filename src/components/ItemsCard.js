const ItemCard = (item) => {
  const { name, description, price, url } = item;

  return (
    <div className="card">
      <img src={url} alt={name} className="image" />
      <h3 className="name">{name}</h3>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ItemCard;
