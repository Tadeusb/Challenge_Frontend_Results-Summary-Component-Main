
const data = fetch('data.json')
    .then(response => response.json())

    .then(datos => {
        printer(datos);
    })

    .catch(error => {
        console.error('Hubo un error al cargar el JSON:', error);
    });

function printer(contects) {
    const view = document.getElementById("contenedor")
    let htmlContent = '';
    
    
    contects.forEach(contect => {
        const colorbg = contect.colorbg;
        htmlContent += `
        <div class="flex p-2 rounded-xl w-full justify-between items-center bg-[var(${colorbg})]/10">
            <div class="flex gap-2 py-2">
                <img src="${contect.icon}" alt="icon ${contect.category}">
                <h2 class="text-[var(${colorbg})]">${contect.category}</h2>
            </div>
            <div>
                <p class="font-bold text-[var(--Dark-gray-blue)]">${contect.score} <span class="text-sm text-[var(--Dark-gray-blue)]/57">/100</span></p>
            </div>
        </div>
        `;
    });

    view.innerHTML = htmlContent;
}
