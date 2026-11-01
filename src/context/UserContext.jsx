
import { createContext, useState } from "react";

export const UserContext = createContext();

const API_URL = "http://localhost:5000/api";

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // INICIAR SESIÓN
  const login = async (userEmail, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al iniciar sesión");
    }

    if (!data.token) {
      throw new Error("El servidor no devolvió un token");
    }

    setToken(data.token);
    setEmail(data.email ?? userEmail);

    return data;
  };

  // REGISTRAR USUARIO
  const register = async (userEmail, password) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al registrarse");
    }

    if (!data.token) {
      throw new Error("El servidor no devolvió un token");
    }

    setToken(data.token);
    setEmail(data.email ?? userEmail);

    return data;
  };

  // OBTENER PERFIL DEL USUARIO
  const getProfile = async () => {
    if (!token) {
      throw new Error("Debes iniciar sesión");
    }

    const response = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Error al obtener el perfil"
      );
    }

    if (data.email) {
      setEmail(data.email);
    }

    return data;
  };

  // CERRAR SESIÓN
  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
