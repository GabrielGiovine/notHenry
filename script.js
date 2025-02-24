
//Clase para definir las propiedades del objeto Actividad (Mis actividades favoritas)
//Contienen, debido al vinculo con HTML
// id, titulo, descripcion y el link de la imagen
class Activity {
    constructor(id, title, description, imgUrl) {
        //Definir los nombres de las ID que esten con el mismo nombre que en HTML
        //Define ID
        this.id = id;
        //Define la casilla titulo
        this.title = title;
        //Define la casilla descripcion
        this.description = description;
        //Define la casilla donde se guarda el link
        this.imgUrl = imgUrl;
    }
}

//Definir una clase donde se guarde
class Repository {
    constructor() {
        //Aqui se puede interactuar con el LocalStorage de la pagina que este interactuando
        this.activities = JSON.parse(localStorage.getItem("activities")) || [];
        this.currentId = this.activities.length > 0 ? Math.max(...this.activities.map(a => a.id)) + 1 : 1;
    }
    //Añadir una actividad
    //
    addActivity({ title, description, imgUrl }) {
        const newActivity = new Activity(this.currentId++, title, description, imgUrl);
        this.activities.push(newActivity);
        this.saveToLocalStorage();
        return newActivity;
    }
    
    removeActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
        this.saveToLocalStorage();
        // Actualiza la interfaz después de eliminar
        renderActivities(); 
    }


    getActivities() {
        return this.activities;
    }

    removeActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem("activities", JSON.stringify(this.activities));
    }
}

const repository = new Repository();

document.getElementById("submitBtn").addEventListener("click", addNewActivity);

function addNewActivity() {
    const title = document.getElementById("titulo").value;
    const description = document.getElementById("descripcion").value;
    const imgUrl = document.getElementById("imagenURL").value;
    
    if (title && description && imgUrl) {
        const activity = repository.addActivity({ title, description, imgUrl });
        displayActivity(activity);
    } else {
        alert("Por favor, complete todos los campos");
    }
}

function renderActivities() {
    //Buscar en el HTML un elemento con el ID
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiar contenido antes de volver a cargar
    
    repository.getActivities().forEach(activity => {
        const activityCard = document.createElement("div");
        activityCard.classList.add("activity-card");
        activityCard.innerHTML = `
            <h3>${activity.title}</h3>
            <p>${activity.description}</p>
            <img src="${activity.imgUrl}" alt="Imagen de la actividad">
            <button onclick="repository.removeActivity(${activity.id})">Eliminar</button>
        `;

        resultadoDiv.appendChild(activityCard);
    });

    if (repository.getActivities().length > 0) {
        resultadoDiv.classList.remove("hidden");
    } else {
        resultadoDiv.classList.add("hidden");
    }
}

// Cargar actividades al recargar la página
document.addEventListener("DOMContentLoaded", renderActivities);