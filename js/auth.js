document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    if (loginForm && window.location.pathname.includes('login.html')) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
           
            alert('¡Inicio de sesión exitoso! Redirigiendo a la tienda...');
        
            window.location.href = '../index.html';
        });
    }
});


function logout() {
    alert('Has cerrado sesión correctamente.');
 
    const esRaiz = !window.location.pathname.includes('/pages/');
    
    if (esRaiz) {
        window.location.href = './pages/login.html';
    } else {
        window.location.href = './login.html';
    }
}