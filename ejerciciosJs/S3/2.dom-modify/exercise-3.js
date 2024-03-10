const nuevoDiv = document.createElement('div');
for (let i = 1; i <= 6; i++) {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = `Este es el párrafo número ${i}.`;
    nuevoDiv.appendChild(nuevoParrafo);
}
document.body.appendChild(nuevoDiv);