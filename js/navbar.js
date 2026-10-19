const menuItems = [
    { titulo: 'Home', url: 'index.html' },
    { titulo: 'Celulares', url: 'pages/celulares.html' },
    { titulo: 'TV y Audio', url: 'pages/tv-audio.html' },
    { titulo: 'Electrodomésticos', url: 'pages/electrodomesticos.html' },
    { titulo: 'Herramientas', url: 'pages/herramientas.html' }
];

function cargarNavbar() {
    const headerElement = document.querySelector('header');
    if (!headerElement) return;

    const enPages = window.location.pathname.includes('/pages/');
    const prefijoRuta = enPages ? '../' : './';
    const prefijoPages = enPages ? './' : './pages/';

    
    const linksHTML = menuItems.map(item => {
        let rutaFinal = item.url.includes('pages/') 
            ? item.url.replace('pages/', prefijoPages) 
            : `${prefijoRuta}${item.url}`;
            
        return `<li><a href="${rutaFinal}">${item.titulo}</a></li>`;
    }).join('');

    
    headerElement.innerHTML = `
        <nav>
            <a href="${prefijoRuta}index.html" class="logo-container"> 
                <img src="${prefijoRuta}img/logo.png" alt="Logo Millenium" class="logo-img">
                <span class="logo-texto">Millenium</span>
            </a>

            <ul>
                ${linksHTML}
            </ul>

            <div class="user-actions">
                <button type="button" class="btn-logout" onclick="logout()">Cerrar Sesión</button>
            </div>
        </nav>
    `;
}


document.addEventListener('DOMContentLoaded', cargarNavbar);