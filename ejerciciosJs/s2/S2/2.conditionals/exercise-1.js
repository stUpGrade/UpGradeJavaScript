const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true }, { name: 'Lucia Aranda', T1: true, T2: false, T3: true }, { name: 'Abel Cabeza', T1: false, T2: true, T3: true }, { name: 'Alfredo Blanco', T1: false, T2: false, T3: false }, { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]

for (let alumno of alumns) {
    let trimestres = 0;

    if (alumno.T1 === true) {  // si el alumno1 en el 1º trimestre ha aprobado le sumo 1
        trimestres++
    }

    if (alumno.T2 === true) {
        trimestres++
    }

    if (alumno.T3 === true) {
        trimestres++
    }

    if (trimestres >= 2) {
        alumno.isApproved = true
    } else {
        alumno.isApproved = false
    }

}

console.log(alumns)