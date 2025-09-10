import { useCart } from "../../cart/context/CartContext";

const products = [
  { id: 1, name: "Camiseta Oversize", price: 70000, image: "https://via.placeholder.com/200x200?text=Camiseta" },
  { id: 2, name: "Hoodie Negra", price: 120000, image: "https://via.placeholder.com/200x200?text=Hoodie" },
  { id: 3, name: "Jeans Cargo", price: 150000, image: "https://via.placeholder.com/200x200?text=Jeans" },
  { id: 4, name: "Gorra Snapback", price: 60000, image: "https://via.placeholder.com/200x200?text=Gorra" },
];

export default function StorePage() {
  const { addItem } = useCart();

  return (
    <div>
      <h1 className="mb-4 text-center">Nuestra Tienda</h1>
      <div className="row g-4">
        {products.map((p) => (
          <div className="col-md-3" key={p.id}>
            <div className="card h-100">
              <img src={p.image} className="card-img-top" alt={p.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">${p.price.toLocaleString()}</p>
                <button className="btn btn-dark" onClick={() => addItem(p)}>
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
