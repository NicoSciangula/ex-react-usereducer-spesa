export default function CardList({ product, addProduct }) {
  return (
    <>
      <div className="card" style={{ width: "200px", boxShadow: "0 0 8px 1px grey" }}>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price.toFixed(2)} €</p>
          <button className="btn btn-primary" onClick={() => addProduct(product)}>
            Aggiungi al carello
          </button>
        </div>
      </div>
    </>
  );
}
