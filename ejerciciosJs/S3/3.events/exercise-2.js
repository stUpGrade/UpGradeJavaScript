let input = document.getElementById('myInput');

input.addEventListener('focus', function (event) {
    let valor = event.target.value;
    console.log(valor);
});