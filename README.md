# Frontend para CRUD con React y TypeScript

Este es un proyecto frontend que utiliza Vite como el entorno de desarrollo, React como la biblioteca de interfaz de usuario y TypeScript para agregar tipado estático al código. Este proyecto se conecta a un backend existente para realizar operaciones CRUD (Leer, Crear y Eliminar) en los datos almacenados en el servidor (file).

## Requisitos previos

- Node.js y npm instalados en tu sistema.

## Instalación

1. Clona este repositorio:

```
git clone https://github.com/rrubiointekmedical/PT_FrontEnd.git
```

2. Navega al directorio del proyecto:

```
cd PT_FrontEnd
```

3. Instala las dependencias:

```
npm install
```

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar correctamente la conexión con el backend. Crea el archivo `.env.local` y establece la URL del backend en la variable de entorno `VITE_API_LOCAL`.

```
VITE_API_LOCAL=http://localhost:8080/api
```

Asegúrate de que la URL coincida con la dirección y el puerto del backend existente.

## Uso

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```
npm run dev
```

Esto iniciará el servidor de desarrollo Vite y abrirá la aplicación en tu navegador predeterminado.

## Funcionalidades

La aplicación frontend deberá hacer las siguientes funcionalidades:

- **Listar usuarios:** Muestra una lista de usuarios obtenida del backend en una tabla.
- **Agregar usuario:** Permite agregar un nuevo usuario a través de un formulario.
- **Eliminar usuario:** Permite eliminar un usuario de la lista.

## Estructura del proyecto

El proyecto sigue una estructura de directorios típica para una aplicación React:

- `src/`: Contiene todos los archivos fuente de la aplicación.
  - `App.tsx`: Componente principal de la aplicación.
- `public/`: Archivos estáticos como HTML, imágenes, etc.

## Créditos

Este proyecto fue creado por [René Rubio](https://github.com/rrubiointekmedical) para Intekmedical

## Licencia

Todos los derechos reservados por Intekmedical

---

