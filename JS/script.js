// URL de la API
const API_URL = "https://675c66f9fe09df667f63c93b.mockapi.io/cojin/products";

// Editando un producto
let productoEnEdicion = null;

// Obtener productos de la API
async function obtenerProductos() {
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error("Error al obtener los productos");
        const productos = await respuesta.json();
        renderizarProductos(productos); 
    } catch (error) {
        console.error("Error al cargar productos:", error);
        const contenedorProductos = document.getElementById("mis-productos-contenedor");
        contenedorProductos.innerHTML = "<p>Error al cargar productos.</p>";
    }
}

// Renderizar productos en el DOM
function renderizarProductos(productos) {
    const contenedor = document.getElementById("mis-productos-contenedor");
    contenedor.innerHTML = ""; 

    if (productos.length === 0) {
        contenedor.innerHTML = `<p class="no-productos">No se han agregado productos</p>`;
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
        contenedor.innerHTML += productoHTML; 
    });

    // Eventos a botones de eliminar y editar
    agregarEventosEliminarYEditar();
}

// Agregar eventos a los botones de eliminar y editar
function agregarEventosEliminarYEditar() {
    // Botones de eliminar
    document.querySelectorAll(".eliminar-btn").forEach((boton) => {
        boton.addEventListener("click", async (e) => {
            const id = e.target.getAttribute("data-id"); 
            await eliminarProducto(id); 
        });
    });

    // Botones de editar
    document.querySelectorAll(".editar-btn").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id"); 
            editarProducto(id); 
        });
    });
}

// Eliminar producto de la API
async function eliminarProducto(id) {
    try {
        const respuesta = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        if (!respuesta.ok) {
            const errorData = await respuesta.json();
            throw new Error(`Error al eliminar el producto: ${errorData.message}`);
        }

        console.log(`Producto con ID ${id} eliminado con éxito.`);
        
        // Recargar después de eliminar
        obtenerProductos(); 
    } catch (error) {
        console.error("Error al intentar eliminar el producto:", error.message);
    }
}

// Editar producto
async function editarProducto(id) {
    try {
        const respuesta = await fetch(`${API_URL}/${id}`);
        if (!respuesta.ok) throw new Error("Error al obtener el producto para editar");

        const producto = await respuesta.json();

        // Rellenar el formulario con los datos del producto
        document.getElementById("nombre").value = producto.name;
        document.getElementById("descripcion").value = producto.description;
        document.getElementById("precio").value = producto.price;
        document.getElementById("imagen").value = producto.image;

        // Configurar el formulario en modo de edición
        productoEnEdicion = id;
        document.getElementById("boton-submit").innerText = "Guardar";
        document.getElementById("cancelar-edicion").style.display = "inline-block";
    } catch (error) {
        console.error("Error al intentar editar el producto:", error);
    }
}

// Agregar producto o editar uno existente
const formAgregarProducto = document.getElementById("form-agregar-producto");

formAgregarProducto.addEventListener("submit", async (e) => {
    e.preventDefault();

    const producto = {
        name: document.getElementById("nombre").value,
        description: document.getElementById("descripcion").value,
        price: parseFloat(document.getElementById("precio").value),
        image: document.getElementById("imagen").value,
    };

    try {
        if (productoEnEdicion) {
            // Actualizar producto
            const respuesta = await fetch(`${API_URL}/${productoEnEdicion}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto),
            });

            if (!respuesta.ok) throw new Error("Error al editar el producto");

            console.log("Producto editado con éxito");
        } else {
            // Crear nuevo producto
            const respuesta = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto),
            });

            if (!respuesta.ok) throw new Error("Error al agregar el producto");

            console.log("Producto agregado con éxito");
        }

        formAgregarProducto.reset(); 
        productoEnEdicion = null; 
        document.getElementById("boton-submit").innerText = "Agregar";
        document.getElementById("cancelar-edicion").style.display = "none";
        obtenerProductos(); 
    } catch (error) {
        console.error("Error al procesar el formulario:", error);
    }
});

// Botón cancelar edición
document.getElementById("cancelar-edicion").addEventListener("click", () => {
    formAgregarProducto.reset();
    productoEnEdicion = null;
    document.getElementById("boton-submit").innerText = "Producto";
    document.getElementById("cancelar-edicion").style.display = "none";
});

// Cargar productos cuando se recarga la página
document.addEventListener("DOMContentLoaded", () => {
    obtenerProductos();
});

