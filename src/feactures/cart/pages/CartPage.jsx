import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeItem, updateItemQuantity, clearCart, total } = useCart();

  return (
    <div>
      <h1 className="mb-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toLocaleString()}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                      className="form-control w-50"
                    />
                  </td>
                  <td>${(item.price * item.quantity).toLocaleString()}</td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4>Total: ${total.toLocaleString()}</h4>
          <button className="btn btn-outline-danger me-2" onClick={clearCart}>
            Vaciar Carrito
          </button>
          <button className="btn btn-success">Finalizar Compra</button>
        </div>
      )}
    </div>
  );
}
