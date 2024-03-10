let divsWithClass = document.querySelectorAll('.fn-insert-here');

divsWithClass.forEach(function (div) {
    let pElement = document.createElement('p');
    pElement.textContent = 'Voy dentro!';
    div.appendChild(pElement);
});