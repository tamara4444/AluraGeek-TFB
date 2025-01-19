# Alura Geek: Cojines Inspirados en Películas y Series

Este proyecto es parte del **Challenge Alura Geek**, donde se desarrolló un gestionador de productos enfocado en la venta de cojines temáticos para cinéfilos. El diseño y la funcionalidad fueron creados utilizando HTML, CSS, JavaScript y MockAPI.

## Descripción del Proyecto

Experiencia inmersiva y visualmente atractiva para los amantes del cine y las series. Se incorporaron elementos y diseños que evocan el mundo del cine, como un estilo inspirado en paletas de colores cinematográficas y un enfoque en responsividad para adaptarse a diferentes dispositivos.

### Características

- Catálogo de productos: Visualización de cojines temáticos con nombres, frases de las películas/series y precios.
- Formulario de "Agregar Producto": Permite a los administradores agregar nuevos productos de forma dinámica.
- Responsividad: Diseño optimizado para pantallas grandes y pequeñas.
- Interactividad: Animaciones y estilos que mejoran la experiencia del usuario.
- Conexión con **MockAPI** para gestionar datos de los productos.
- Imágenes iniciales originales almacenadas en **Cloudinary** para optimizar la carga y almacenamiento.
- Archivo **db.json** inicial, utilizado para subir imágenes a MockAPI.
- Barra de búsqueda.

## Tecnologías Utilizadas

- **HTML5**: Estructura del proyecto.
- **CSS3**: Estilizado y animaciones.
- **JavaScript**: Interactividad y funcionalidad del formulario.
- **MockAPI**: Gestión de datos simulada.
- **Cloudinary**: Almacenamiento de imágenes.
- **db.json**: Archivo inicial para subir a MockAPI.

## Estructura del Proyecto

```

ALURAGEEK-TFB
├── 📁 img
├── styles.css
├── 📁 js
│   ├── script.js
│   └── buscar.js
├── 📄 index.html

```
## Funcionalidades Clave

1. **Catálogo de Productos**:

   - Visualización clara y responsiva de los productos.
   - Se prioriza la adaptabilidad en dispositivos móviles y escritorio.

2. **Formulario de Agregar Producto**:

   - Permite agregar una URL de imagen, un título, una frase y un precio (peso chileno) para un nuevo producto.
   - Los productos agregados se muestran directamente en el catálogo.

3. **Estilo Visual**:

   - Uso de colores relacionados con el cine.
   - Animaciones suaves para mejorar la experiencia del usuario.

4. **Editar y Eliminar Productos**:

   - Los usuarios pueden editar un producto existente o eliminarlo del catálogo según sea necesario.

5. **Barra de Búsqueda**:

   - Permite buscar dentro de "Mis Produtos" en la barra de búsqueda, tanto al ir escribiendo como al ir borrando, se va actualizando la búsqueda misma.

### Vista de Catálogo de Productos

![](https://res.cloudinary.com/dg7dgtg0j/image/upload/v1734823406/Por_tzu4ro.png)

### Formulario "Agregar Producto"

![](https://res.cloudinary.com/dg7dgtg0j/image/upload/v1734823405/Gest_rydxjj.png)

## Nota Final

Inicialmente, el proyecto fue planeado para funcionar con JSON Server como base de datos local. Sin embargo, debido a restricciones, y problemas con el equipo utilizado se optó por utilizar **MockAPI** como alternativa para la gestión de datos. Además, se subieron algunas imágenes iniciales a **Cloudinary** para mejorar la carga y optimización del proyecto, las cuales estan en el archvio **db.json**. Luego de eso hay imagenes URL de internet, que se han subido y alojado en la misma API de mockAPI.

## Autor

Desarrollado por **Tamara Flores Burgos** como parte del Challenge de **Alura Geek de Oracle ONE**.
---

## 🚀 Deploy

La aplicación está disponible en el siguiente enlace:  
[AluraGeek - Ver ](https://tamara4444.github.io/AluraGeek-TFB/#)

