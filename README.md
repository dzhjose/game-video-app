# Games Video App

Aplicación web construida con **React 19** que consume la API pública de **RAWG Video Games Database** para mostrar videojuegos y creadores de contenido relacionados.

El proyecto utiliza una arquitectura moderna basada en **Redux Toolkit**, **React Router v6** y **pnpm** como gestor de paquetes.

---

# Tecnologías

* React 19
* Redux Toolkit
* React Redux
* React Router DOM v6
* Axios
* Bulma CSS
* Sass
* pnpm
* Create React App

---

# API utilizada

La aplicación consume datos desde:

https://api.rawg.io/

Endpoints principales usados:

* `/games`
* `/games/{id}`
* `/creators`
* `/creators/{id}`

> Nota: RAWG puede requerir API Key dependiendo del límite de requests.

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/games-video-app.git
cd games-video-app
```

Instalar dependencias usando **pnpm**:

```bash
pnpm install
```

---

# Ejecutar el proyecto

```bash
pnpm start
```

La aplicación estará disponible en:

```
http://localhost:3000
```

---

# Build de producción

```bash
pnpm build
```

Los archivos compilados se generarán en:

```
/build
```

---

# Estructura del proyecto

```
src
│
├── actions
│   ├── CreatorAction.js
│   └── GamesAction.js
│
├── components
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── NavBar.jsx
│
├── pages
│   ├── Home
│   ├── Games
│   └── Creators
│
├── reducers
│   ├── creators.js
│   ├── games.js
│   └── index.js
│
├── presentations
│   ├── GameItem.jsx
│   ├── CreatorItem.jsx
│   └── DetailGameItem.jsx
│
├── store
│   └── store.js
│
└── index.js
```

---

# Funcionalidades

* Listado de videojuegos
* Listado de creadores
* Vista de detalle de juegos
* Vista de detalle de creadores
* Manejo de estado global con Redux
* Consumo de API REST con Axios

---

# Scripts disponibles

```bash
pnpm start
```

Inicia el servidor de desarrollo.

```
pnpm build
```

Compila la aplicación para producción.

```
pnpm test
```

Ejecuta los tests.

---

# Mejoras futuras

* Búsqueda de juegos
* Paginación
* Favoritos
* Integración con API Key de RAWG
* Migración de Create React App a Vite para mejorar rendimiento

---

# Licencia

MIT
