const cursosDisponibles = [
    { nombre: "Algoritmos", creditos: 6 },
    { nombre: "Base de Datos", creditos: 5 },
    { nombre: "Matematica", creditos: 4 },
    { nombre: "Ingles", creditos: 3 },
    { nombre: "Arquitectura de Computadoras", creditos: 5 },
    { nombre: "Desarrollo Web", creditos: 6 },
    { nombre: "Sistemas Operativos", creditos: 3 },
    { nombre: "Programación Orientada a Objetos", creditos: 4 }
];

let cursosIncritos = [];
let cantidadCreditos = 0;
const cantidadMaximoCreditos = 24;

function mostrarMenu(){
    console.log("Cargando...");
    return prompt("Instituto tecnológico\n" 
        + "1. Ver cursos disponibles\n" 
        + "2. Inscribir curso\n" 
        + "3. Ver cursos inscritos\n" 
        + "4. Consultar cantidad de créditos\n" 
        + "5. Salir\n" 
        + "Seleccione una opción:");
}

function verCursosDisponibles(){
    if (cursosDisponibles.length === 0) {
        alert("No hay cursos disponibles en este momento.");
        return;
    }
    let cursos = "Usted tiene estos cursos disponibles: \n\n";
    for (let cursoDisponible of cursosDisponibles){
        cursos += `${cursoDisponible.nombre} - ${cursoDisponible.creditos} créditos\n`;
    }
    alert(cursos);
}

function inscribirseCurso(cursoSeleccionado){

    if(cursoSeleccionado.trim() === ""){
        alert("El campo está vacio. Por favor, ingrese un curso.");
        return;
    }

    let cursoElegido = cursosDisponibles.find(curso => curso.nombre.toLowerCase() === cursoSeleccionado.toLowerCase());

    if (cursoElegido) {
        if (cantidadCreditos + cursoElegido.creditos <= cantidadMaximoCreditos) {
            cursosIncritos.push(cursoElegido);
            cantidadCreditos += cursoElegido.creditos;
            cursosDisponibles.splice(cursosDisponibles.indexOf(cursoElegido), 1);
            alert(`¡Felicidades! Se ha inscrito en el curso ${cursoElegido.nombre}.`);
        } else {
            alert("No puede inscribirse en este curso, ya que excede el límite de créditos.");
        }
    } else {
        alert("Lo snetimos, el curso no está disponible");
    }
}

function verCursosInscritos(){
    if (cursosIncritos.length > 0) {
        let cursos = "Usted está inscrito en los siguientes cursos: \n\n";
        for (let cursoInscrito of cursosIncritos){
            cursos += `${cursoInscrito.nombre} - ${cursoInscrito.creditos} créditos\n`;
        }
        alert(cursos);
    } else {
        alert("No está inscrito en ningún curso.");
    }
}

function consultarCreditos(){
    alert(`Usted tiene ${cantidadCreditos} créditos inscritos. Recuerde que la cantidad máxima permitida es ${cantidadMaximoCreditos}.`);
}

function iniciarPrograma(){
    alert("Bienvenido al sistema de inscripción de cursos del Instituto Tecnológico.");
    let deseaSalir = false; 

    while (!deseaSalir){
        
        let opcionSeleccionada = mostrarMenu();

        switch (opcionSeleccionada) {
            case "1":
                verCursosDisponibles();
                break;
            case "2":
                let curso = prompt("Ingrese el nombre del curso que desea inscribirse:");
                inscribirseCurso(curso);
                break;
            case "3":
                verCursosInscritos();
                break;
            case "4":
                consultarCreditos();
                break;
            case "5":
                alert("Cerrando sesión....");
                deseaSalir = true;
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una de las opciones del menú.");	
                break;
        }
    }
}

iniciarPrograma();