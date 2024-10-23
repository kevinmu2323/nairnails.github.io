document.getElementById('themas').addEventListener('click', function () {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => {
        const currentColor = container.style.backgroundColor;

        // Alternar entre los seis colores definidos
        if (currentColor === 'rgb(238, 195, 208)') { // #eec3d0
            container.style.backgroundColor = '#ce7c55'; // Marrón claro
        } else if (currentColor === 'rgb(206, 124, 85)') { // #ce7c55
            container.style.backgroundColor = '#ee9242'; // Naranja
        } else if (currentColor === 'rgb(238, 146, 66)') { // #ee9242
            container.style.backgroundColor = '#cb6d51'; // Rojo tierra
        } else if (currentColor === 'rgb(203, 109, 81)') { // #cb6d51
            container.style.backgroundColor = '#7d5441'; // Marrón oscuro
        } else if (currentColor === 'rgb(125, 84, 65)') { // #7d5441
            container.style.backgroundColor = '#ea899a'; // Rosa pastel
        } else {
            container.style.backgroundColor = '#eec3d0'; // Rosa claro
        }
    });
});
