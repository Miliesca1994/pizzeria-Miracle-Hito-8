
import { useContext, useState } from "react";
import { useCart } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();
  const { token } = useContext(UserContext);

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ENVIAR COMPRA AL BACKEND
  const handleCheckout = async () => {
    if (!token || cart.length === 0 || loading) return;

    setMensaje("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/checkouts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cart: cart,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Error al realizar la compra"
        );
      }

      setMensaje("¡Compra realizada con éxito! 🍕🎉");
    } catch (err) {
      setError(
        err.message || "No se pudo realizar la compra"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h3 className="mb-4">🛒 Detalles del pedido:</h3>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          Tu carrito está vacío. ¡Agrega una pizza!
        </div>
      ) : (
        <>
          {cart.map((pizza) => (
            <div
              key={pizza.id}
              className="d-flex align-items-center justify-content-between border-bottom py-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                />

                <h5 className="ms-3 text-capitalize">
                  {pizza.name}
                </h5>
              </div>

              <div className="d-flex align-items-center gap-3">
                <strong>
                  ${pizza.price.toLocaleString("es-CL")}
                </strong>

                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeFromCart(pizza.id)}
                >
                  -
                </button>

                <span>{pizza.count}</span>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => addToCart(pizza)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <h3 className="mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h3>

      <button
        className="btn btn-dark mt-3"
        onClick={handleCheckout}
        disabled={!token || cart.length === 0 || loading}
      >
        {loading ? "Procesando compra..." : "Pagar"}
      </button>

      {!token && (
        <div className="alert alert-warning mt-3">
          Debes iniciar sesión para realizar el pago.
        </div>
      )}

      {mensaje && (
        <div className="alert alert-success mt-3">
          {mensaje}
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}
    </div>
  );
};

export default Cart;

