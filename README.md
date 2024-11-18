[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/42FJoDAP)
# PC 2 - Implementación en Código - SparkyRoll

SparkyRoll es una innovadora plataforma de streaming diseñada especialmente para los amantes del anime, que busca proporcionar una experiencia única y personalizada al visualizar sus series y películas favoritas. Con el objetivo de mejorar la interacción del usuario y facilitar la gestión de su contenido, SparkyRoll busca un desarrollador Frontend talentoso para crear una interfaz de usuario intuitiva utilizando React.

La plataforma debe permitir a los usuarios realizar las siguientes acciones:

- **Crear un usuario y autenticarse**: Los usuarios deben poder registrarse con un correo electrónico, contraseña, etc., así como iniciar sesión en su cuenta existente.
- **Administrar la lista de favoritos**: Los usuarios deben tener la opción de agregar animes a su lista de favoritos y removerlos cuando lo deseen.
- **Visualización de animes**: La plataforma debe mostrar en pantalla una lista fija de animes disponibles para que los usuarios puedan verlos.
- **Gestión del progreso**: Los usuarios deben poder marcar un anime como “viendo” o “visto” a su historial de visualización.

Las vistas que deben implementarse son:

- **Página de Registro**: `/register`
- **Página de Login**: `/login`
- **Página de Animes**: `/animes` (que mostrará la lista de 20 animes)
- **Página de Favoritos**: `/favorites` (para gestionar la lista de favoritos)
- **Página de Historial**: `/history` (para ver y manejar el historial de animes visualizados)

## Endpoints de la API REST

### Autenticación y Registro (2 ptos.)

- **(POST) Login**: `/api/auth/login`
- **(POST) Registro**: `/api/auth/register`

### Gestión de Favoritos (4,5 ptos.)

- **(POST) Agregar a Favoritos**: `/api/user/favorites`
- **(DELETE) Remover de Favoritos**: `/api/user/favorites`

### Visualización y Progreso (4,5 ptos.)

- **(GET) Obtener Animes**: `/api/anime/list`
- **(POST) Añadir a Historial**: `/api/user/history`
- **(DELETE) Remover de Historial**: `/api/user/history`

### Diseño con Tailwind (1 pto.)

Puedes revisar los DTO que usa cada endpoint en la documentación de la API.

## Conexión a la API

- Para conectarte a la API, tienes que usar la siguiente dirección: <http://3.90.3.179:8000/api>.

- Puedes ver la documentación de la API en <http://3.90.3.179:8000/docs#/>.

## Documentación permitida

- [**Axios**](https://axios-http.com/docs/intro)
- [**React**](https://react.dev/reference/react)
- [**React Router**](https://reactrouter.com/web/guides/quick-start)
- [**Tailwind CSS**](https://tailwindcss.com/docs)
- [**TypeScript**](https://www.typescriptlang.org/docs/)

Las librerías de componentes estan permitidas, acontinuación se listan algunas, sin embargo si deseas usar alguna que no esté listada avisa a tu profesor para comprobar cual es la pagina oficial de esta librería y así no considerarlo como plagio.

- [**Material UI**](https://mui.com/material-ui/getting-started/)
- [**Ant Design**](https://ant.design/)
- [**React Bootstrap**](https://react-bootstrap.netlify.app/docs/components/accordion)
