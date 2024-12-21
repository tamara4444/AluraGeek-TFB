// Obtener los elementos
const searchInput = document.getElementById("buscar-producto");
const contenedorProductos = document.getElementById("mis-productos-contenedor");
let productosGlobales = []; 

// Obtener productos de la API
async function obtenerProductos() {
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error("Error al obtener los productos");
        productosGlobales = await respuesta.json(); 
        renderizarProductos(productosGlobales); 
    } catch (error) {
        console.error("Error al cargar productos:", error);
        contenedorProductos.innerHTML = "<p>Error al cargar productos.</p>";
    }
}

// Filtrar productos de búsqueda
function filtrarProductos(query) {
    const productosFiltrados = productosGlobales.filter(producto => {
        return producto.name.toLowerCase().includes(query.toLowerCase()); 
    });
    renderizarProductos(productosFiltrados); 
}

// Renderizar productos en el DOM
function renderizarProductos(productos) {
    contenedorProductos.innerHTML = ""; 

    if (productos.length === 0) {
        contenedorProductos.innerHTML = `<p class="no-productos">No se han encontrado productos</p>`;
        return;
    }

    productos.forEach((producto) => {
        const productoHTML = `
            <div class="producto card" data-id="${producto.id}">
                <img class="producto-img" src="${producto.image}" alt="${producto.name}">
                <div class="card-container--info">
                    <p><strong>${producto.name}</strong></p>
                    <p>${producto.description}</p> <!-- Descripción del producto -->
                    <p>$${producto.price}</p>
                    <div class="card-container--buttons">
                        <!-- Botón de editar con imagen -->
                        <button class="editar-btn" data-id="${producto.id}">
                            <img src="img/edit.png" alt="Editar" class="editar-icon">
                            Editar
                        </button>
                        <button class="eliminar-btn" data-id="${producto.id}">❌ Eliminar</button>
                    </div>
                </div>
            </div>
        `;
        contenedorProductos.innerHTML += productoHTML; 
    });

    agregarEventosEliminarYEditar();
}

// Eventos botones de eliminar y editar
function agregarEventosEliminarYEditar() {
    // Evento para los botones de eliminar
    document.querySelectorAll(".eliminar-btn").forEach((boton) => {
        boton.addEventListener("click", async (e) => {
            const id = e.target.getAttribute("data-id"); 
            await eliminarProducto(id); 
        });
    });

    // Evento para editar
    document.querySelectorAll(".editar-btn").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id"); 
            editarProducto(id); 
        });
    });
}

// Filtrar productos mientras escribes en la barra de búsqueda
searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim(); 
    filtrarProductos(query); 
});

// Obtener productos cuando se cargue la página
document.addEventListener("DOMContentLoaded", obtenerProductos);
