function toggleContent(buttonId, contentId) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    
    button.addEventListener('click', () => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            button.textContent = 'Ocultar';
        } else {
            content.style.display = 'none';
            button.textContent = 'Mostrar';
        }
    });
}

// Inicializar los botones de alternar
document.addEventListener('DOMContentLoaded', () => {
    toggleContent('toggleDirectories', 'directoriesContent');
    toggleContent('togglePermissions', 'permissionsContent');
    toggleContent('toggleSecurity', 'securityContent');
    toggleContent('toggleStorage', 'storageContent');
});
