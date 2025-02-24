
//Titulo H1 del HTML
const titulo = document.getElementById("titulo")

var TituloTexto = "Not Henry"

titulo.innerHTML = TituloTexto


//Capturar los cuadrados por su nombre de tag
const divs = document.getElementsByTagName("div")

const cuadrado = divs[0]

//Capturar el elemento por su nombre de clase 
//no pude, pedir ayuda
const cuadradosRojos = document.getElementsByClassName("cuadrado")

//agregar un texto, ejemplo, texto de nombre del creador
const setNameHandler = () =>{
const nameImput = document.getElementById("name")
const createdBy = document.getElementById("createdBy")

const name = nameImput.value
createdBy.innerHTML = `Aplicacion creada por: ${name}`;
};

//Crear imagenes desde un array con nombres de imagenes
//una funcion que toma imagenes
//Desde un archivo
//<img src="assets/nombre.jpg"></img>
const imagenes = [
    "nombre.jpg"
]
const cargarImagen = (imgName) => {
    return `assets/${imgName}`
}


const imgPrueba = document.createElement("img")
const src = cargarImagen(imagenes[0]); // Tomamos el primer elemento del array

imgPrueba.src = src


console.log(cuadrado)

