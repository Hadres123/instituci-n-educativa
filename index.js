// Seleccionar los botones y las secciones correspondientes
const toggleDirectoriesButton = document.getElementById('toggleDirectories');
const directoriesSection = document.getElementById('directories');

const togglePermissionsButton = document.getElementById('togglePermissions');
const permissionsSection = document.getElementById('permissions');

const toggleCodeButton = document.getElementById('toggleCode');
const codeSection = document.getElementById('codeBlock');

// Función para mostrar/ocultar directorios
toggleDirectoriesButton.addEventListener('click', () => {
    if (directoriesSection.style.display === 'none') {
        directoriesSection.style.display = 'block';
    } else {
        directoriesSection.style.display = 'none';
    }
});

// Función para mostrar/ocultar permisos
togglePermissionsButton.addEventListener('click', () => {
    if (permissionsSection.style.display === 'none') {
        permissionsSection.style.display = 'block';
    } else {
        permissionsSection.style.display = 'none';
    }
});

// Función para mostrar/ocultar código
toggleCodeButton.addEventListener('click', () => {
    if (codeSection.style.display === 'none') {
        codeSection.style.display = 'block';
    } else {
        codeSection.style.display = 'none';
    }
});

// Por defecto, ocultamos las secciones al cargar la página
directoriesSection.style.display = 'none';
permissionsSection.style.display = 'none';
codeSection.style.display = 'none';
