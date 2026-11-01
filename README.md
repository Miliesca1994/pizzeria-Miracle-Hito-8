# 🍕 Pizzería Miracle – Hito 8

## Proyecto Final de React – Desafío Latam

Aplicación web desarrollada con **React y Vite** para una pizzería ficticia llamada **Pizzería Miracle since 1994**.

Este proyecto corresponde al **Hito 8 del módulo de React**, donde se implementa autenticación de usuarios mediante JWT, consumo de una API REST, rutas protegidas y simulación de compras.

## 🚀 Tecnologías utilizadas

- React
- Vite
- JavaScript (ES6+)
- React Router DOM
- Context API
- Bootstrap 5
- Fetch API
- JSON Web Token (JWT)
- Node.js y Express (backend proporcionado para el desafío)

## 📌 Funcionalidades

### 1. Registro de usuarios
- Registro mediante correo electrónico y contraseña.
- Validación de contraseñas.
- Consumo del endpoint `POST /api/auth/register`.
- Almacenamiento del token JWT y correo electrónico en UserContext.

### 2. Inicio de sesión
- Autenticación mediante `POST /api/auth/login`.
- Manejo de errores de autenticación.
- Redirección al perfil después del inicio de sesión.

### 3. Context API
Se utiliza `UserContext` para administrar la autenticación, incluyendo los métodos:

- `login()`
- `register()`
- `logout()`
- `getProfile()`

También se utiliza `CartContext` para administrar los productos del carrito.

### 4. Perfil del usuario
- Consulta al endpoint `GET /api/auth/me`.
- Visualización del correo electrónico del usuario autenticado.
- Botón para cerrar sesión.
- Acceso protegido mediante React Router.

### 5. Barra de navegación
- Home.
- Login y Register para usuarios no autenticados.
- Profile y Logout para usuarios autenticados.
- Acceso al carrito con su total actualizado.

### 6. Catálogo de pizzas
- Visualización de pizzas disponibles.
- Consulta de información de pizzas desde la API.
- Vista individual de productos.
- Opción para agregar pizzas al carrito.

### 7. Carrito de compras
- Visualización de productos seleccionados.
- Aumento y disminución de cantidades.
- Cálculo automático del total.
- Restricción de compra para usuarios no autenticados.

### 8. Simulación de compra
- Envío del carrito mediante `POST /api/checkouts`.
- Autorización utilizando el token JWT.
- Mensaje de compra exitosa.
- Manejo de errores de conexión o compra.

**Nota:** El checkout es una simulación académica y no procesa pagos reales.

## 🛠️ Instalación y ejecución

### Frontend

Clonar el repositorio:

```bash
git clone https://github.com/Miliesca1994/pizzeria-Miracle-Hito-8.git
```

Ingresar al proyecto:

```bash
cd pizzeria-Miracle-Hito-8
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite.

### Backend

Este proyecto necesita el backend de apoyo del desafío, desarrollado con Node.js y Express.

Desde la carpeta del backend:

```bash
npm install
npm start
```

El backend debe estar disponible en:

`http://localhost:5000`

El frontend y el backend deben permanecer ejecutándose simultáneamente.

## 🔗 Endpoints utilizados

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/api/auth/register` | Registrar usuario |
| POST | `/api/auth/login` | Iniciar sesión |
| GET | `/api/auth/me` | Obtener perfil autenticado |
| GET | `/api/pizzas` | Obtener pizzas |
| GET | `/api/pizzas/:id` | Obtener detalle de pizza |
| POST | `/api/checkouts` | Simular compra |

Las rutas protegidas requieren el encabezado:

```text
Authorization: Bearer token_jwt
```

## 🧪 Pruebas realizadas

- Registro de usuarios con el backend.
- Inicio y cierre de sesión.
- Visualización del perfil autenticado.
- Navegación mediante React Router.
- Funcionamiento del carrito de compras.
- Compilación de producción mediante `npm run build`.

## 📚 Objetivo académico

Aplicar los conocimientos adquiridos durante el módulo de React de Desafío Latam, integrando React Router, Context API, autenticación JWT y comunicación entre frontend y backend.

## 👩‍💻 Desarrollado por

**Milagros Escalante**

Desafío Latam – Módulo React

GitHub: https://github.com/Miliesca1994

**Proyecto:** Pizzería Miracle since 1994 🍕