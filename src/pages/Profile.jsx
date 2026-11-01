
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, getProfile, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPerfil = async () => {
      try {
        await getProfile();
      } catch (err) {
        setError(err.message || "Error al cargar el perfil");
      } finally {
        setLoading(false);
      }
    };

    cargarPerfil();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container my-5 text-center">
      <h2 className="mb-4">Mi Perfil</h2>

      {loading && <p>Cargando perfil...</p>}

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="card mx-auto" style={{ maxWidth: "450px" }}>
        <div className="card-body">
          <h4 className="card-title mb-3">
            Bienvenido a Pizzería Miracle 🍕
          </h4>

          <p>
            <strong>Correo electrónico:</strong>
          </p>

          <p>{email || "No disponible"}</p>

          <button
            className="btn btn-danger mt-3"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
