const productosCelulares = [
    {
        id: 1,
        titulo: "Xiaomi Redmi Note 15 Pro",
        descripcion: "Pantalla AMOLED 120Hz, cámara de 200MP y carga ultrarrápida.",
        precio: 600000,
        imagen: "redmi-note-15-pro.webp"
    },
    {
        id: 2,
        titulo: "Samsung Galaxy A57 5G",
        descripcion: "Rendimiento 5G, resistencia al agua y batería para todo el día.",
        precio: 1200000,
        imagen: "samsung-galaxy-a57-5g.webp"
    },
    {
        id: 3,
        titulo: "Apple iPhone 16 (128 GB)",
        descripcion: "Procesador A18 Bionic, acabado en titanio y cámara avanzada.",
        precio: 2400000,
        imagen: "apple-16-128.webp"
    },
    {
        id: 4,
        titulo: "Motorola Moto G77",
        descripcion: "Pantalla FHD+, sonido Dolby Atmos y gran batería.",
        precio: 450000,
        imagen: "moto-g77.webp"
    }
];

const productosElectro = [
    {
        id: 101,
        titulo: "Heladera Philco con Dispenser 161L",
        descripcion: "Capacidad de 161L, eficiencia energética A y dispenser de agua incorporado.",
        precio: 700000,
        imagen: "heladera-philco-161l.webp"
    },
    {
        id: 102,
        titulo: "Lavarropas Midea Inverter 8kg",
        descripcion: "Carga frontal, motor inverter silencioso y 12 programas de lavado.",
        precio: 650000,
        imagen: "lavarropa-midea-8-kg.webp"
    },
    {
        id: 103,
        titulo: "Microondas Digital Philco 20L",
        descripcion: "Potencia de 700W, menú con descongela automático y traba para niños.",
        precio: 130000,
        imagen: "microondas-philco-700w.webp"
    },
    {
        id: 104,
        titulo: "Aire Acondicionado Split RCA 4644 Frigorías",
        descripcion: "Frío/Calor, función eco, filtro lavable y alta eficiencia energética.",
        precio: 1200000,
        imagen: "aire-rca.webp"
    }
];

const productosHerramientas = [
    {
        id: 201,
        titulo: "Kit Amoladora y Taladro Percutor Dewen Pagio",
        descripcion: "Kit completo de herramientas eléctricas para trabajos exigentes.",
        precio: 330000,
        imagen: "kit-amoladora-taladro-percutor-dwen-pagio.webp"
    },
    {
        id: 202,
        titulo: "Amoladora Angular Black & Decker 820W",
        descripcion: "Diseño ergonómico, potente motor de 820W y caja de engranajes metálica.",
        precio: 72000,
        imagen: "amoladora-b&d.webp"
    },
    {
        id: 203,
        titulo: "Set 166 Piezas Caja de Herramientas + Accesorios",
        descripcion: "Taladro percutor, atornillador y maletín organizador con accesorios varios.",
        precio: 240000,
        imagen: "set-166-piezas.webp"
    },
    {
        id: 204,
        titulo: "Hidrolavadora Eléctrica Alta Presión 1600 Psi",
        descripcion: "Ideal para limpieza profunda de superficies, autos y galerías.",
        precio: 100000,
        imagen: "hidrolavadora-electrica-ap-trent.webp"
    }
];

const productosTvAudio = [
    {
        id: 301,
        titulo: "Smart TV 32 Pulgadas Philco",
        descripcion: "Resolución HD, conectividad Wi-Fi y acceso a todas tus apps de streaming.",
        precio: 300000,
        imagen: "smart-tv-philco-32p.webp"
    },
    {
        id: 302,
        titulo: "Smart TV 50 Pulgadas TCL",
        descripcion: "Resolución 4K UHD, Google TV integrado y control por voz.",
        precio: 800000,
        imagen: "smart-tv-tcl-50.webp"
    },
    {
        id: 303,
        titulo: "Parlante Bluetooth JBL Charge 6",
        descripcion: "Sonido potente con bajos profundos, resistente al agua e ideal para exteriores.",
        precio: 400000,
        imagen: "jbl-bt-charge6.webp"
    },
    {
        id: 304,
        titulo: "Auriculares Inalámbricos JBL Tune 50BT",
        descripcion: "Conexión Bluetooth, diseño plegable ligero y hasta 40 horas de batería.",
        precio: 80000,
        imagen: "auriculares-jbl-tune.webp"
    }
];


function renderizarProductos(listaProductos, contenedorSelector) {
    const contenedor = document.querySelector(contenedorSelector);
    if (!contenedor) return;

    const enPages = window.location.pathname.includes('/pages/');
    const rutaImagen = enPages ? '../img/productos/' : './img/productos/';

    contenedor.innerHTML = listaProductos.map(prod => `
        <article class="card-producto" id="prod-${prod.id}">
            <img src="${rutaImagen}${prod.imagen}" alt="${prod.titulo}">
            <h3 class="card-titulo">${prod.titulo}</h3>
            <p class="card-descripcion">${prod.descripcion}</p>
            <p class="card-precio">$${prod.precio.toLocaleString('es-AR')}</p>
            
            <!-- Selector de Cantidad (Aumentar / Disminuir) -->
            <div class="cantidad-container">
                <button type="button" class="btn-cantidad" onclick="cambiarCantidad(${prod.id}, -1)">-</button>
                <span id="cant-${prod.id}" class="cantidad-num">1</span>
                <button type="button" class="btn-cantidad" onclick="cambiarCantidad(${prod.id}, 1)">+</button>
            </div>

            <button type="button" class="btn-agregar" onclick="agregarAlCarrito(${prod.id})">Añadir al carrito</button>
        </article>
    `).join('');
}

function cambiarCantidad(productoId, cambio) {
    const spanCantidad = document.getElementById(`cant-${productoId}`);
    if (!spanCantidad) return;

    let cantidadActual = parseInt(spanCantidad.innerText);
    cantidadActual += cambio;

    if (cantidadActual < 1) cantidadActual = 1;

    spanCantidad.innerText = cantidadActual;
}

function agregarAlCarrito(productoId) {
    const cantidad = document.getElementById(`cant-${productoId}`).innerText;
    const mensaje = `¡Se agregaron ${cantidad} unidad(es) del producto al carrito!`;

    // Busca la caja de notificación en la página
    const toast = document.getElementById('toast-notificacion');
    const toastMensaje = document.getElementById('toast-mensaje');

    if (toast && toastMensaje) {
        toastMensaje.innerText = mensaje;
        toast.classList.remove('toast-oculto');
        toast.classList.add('toast-visible');

        // Se oculta automáticamente pasados 3 segundos
        setTimeout(() => {
            toast.classList.remove('toast-visible');
            toast.classList.add('toast-oculto');
        }, 3000);
    } else {
        // Por si alguna página no tiene cargado el elemento HTML del toast
        alert(mensaje);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ruta = window.location.pathname;

    if (ruta.includes('celulares.html')) {
        renderizarProductos(productosCelulares, '.productos-grid');
    } else if (ruta.includes('electrodomesticos.html')) {
        renderizarProductos(productosElectro, '.productos-grid');
    } else if (ruta.includes('herramientas.html')) {
        renderizarProductos(productosHerramientas, '.productos-grid');
    } else if (ruta.includes('tv-audio.html')) {
        renderizarProductos(productosTvAudio, '.productos-grid');
    } else if (!ruta.includes('/pages/')) {
        // En el Home (index.html), renderiza un combinado de destacados (uno de cada categoría)
        const destacadosHome = [
            productosCelulares[0],
            productosElectro[0],
            productosTvAudio[0]
        ];
        renderizarProductos(destacadosHome, '.productos-grid');
    }
});