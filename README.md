
# Coderhouse React Comisión 60050 - Ecommerce - WauDogShop

Ecommerce de la tienda de accesorios para mascotas WauDogShop


# Authors

Sebastian Ojeda - Ingeniero Mecánico


https://github.com/Sebastian4848

https://www.linkedin.com/in/sebastian-ojeda-bim/



# Framework y Herramientas de Desarrollo
- **React (v18.3.1)**: Biblioteca principal para construir la interfaz de usuario del ecommerce, proporcionando el manejo de componentes y estados para una experiencia dinámica y reactiva.
- **Vite (v5.4.1)**: Utilizado como herramienta de desarrollo y empaquetado, optimizando la velocidad de carga en desarrollo y compilación de la app.

## Routing
- **React Router DOM (v6.27.0)**: Implementa la funcionalidad de enrutamiento en el proyecto, permitiendo la navegación entre diferentes vistas de la app como el listado de productos, carrito de compras, y checkout.

## Firebase
- **Firebase (v11.0.1)**: Maneja el backend del ecommerce, proporcionando:
  - **Firestore** para el almacenamiento de datos de productos y órdenes.
  - **Firebase Config** permite la conexión a la base de datos y acceso a los servicios de Firebase desde la app.

## Estilos
- **SCSS/Sass (sass-embedded v1.79.5)**: Utilizado para escribir estilos en un formato modular y más avanzado, ayudando a mantener el diseño consistente y organizado.

## UI y Feedback al Usuario
- **SweetAlert2 (v11.14.5)**: Librería utilizada para mostrar mensajes de alerta y confirmación, mejorando la experiencia de usuario en operaciones críticas, como errores de validación de formularios y confirmación de órdenes.
- **React Spinners (v0.14.1)**: Proporciona componentes de carga animados, utilizados en la vista de checkout para indicar que la orden está siendo procesada.

## Context y Hooks
- **React Context y Hooks**: Los proveedores (`ThemeProvider` y `CartProvider`) facilitan el manejo de temas (modo claro/oscuro) y el estado global del carrito en toda la aplicación. Los hooks `useContext`, `useState`, y `useEffect` facilitan el manejo de estados y efectos en los componentes.











# Demo

Se puede ver el sitio web desde este link de Vercel.

https://



# Correr Localmente

Clonar el proyecto

```bash
  git clone https://github.com/Sebastian4848/coder-react-60050.git
```

Ir al directorio del proyecto

```bash
  cd entrega_1
```

Instalar dependencias

```bash
  npm install
```

Iniciar el servidor de Vite

```bash
  npm run dev
```

