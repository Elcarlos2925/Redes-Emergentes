
const SHEET_ID = "1NVc6YHU_6W9kQpSVVRJj3l-xMCR-ZXvJocHv8JsTmsM";
const API_KEY = "AIzaSyD0nXARtJ1haQUhAdLbrM4pL78JxbOB8OA";

// Mapeo de cada baño a su respectiva hoja y elemento de HTML
const baños = [
    //BAÑOS DE SISTEMAS
    {hoja:"Damas piso 1", id:"estado-damas-piso-1"},
    {hoja:"Caballeros piso 1", id:"estado-caballeros-piso-1"},
    {hoja:"Discapacitados piso 1", id:"estado-discapacitados-piso-1"},
    {hoja:"Damas piso 3", id:"estado-damas-piso-3"},
    {hoja:"Caballeros piso 3", id:"estado-caballeros-piso-3"},

    //BAÑOS DE INDUSTRIAL
    {hoja:"Damas industrial", id:"estado-damas-industrial"},
    {hoja:"Caballeros industrial", id:"estado-caballeros-industrial"},

    //BAÑOS CALAFORNIX
    {hoja:"Damas calafornix", id:"estado-damas-calafornix"},
    {hoja:"Caballeros calafornix", id:"estado-caballeros-calafornix"},

    //BAÑOS AEREONAUTICA
    {hoja:"Damas aereonautica piso 1", id:"estado-damas-aereonautica-1"},
    {hoja:"Caballeros aereonautica piso 1", id:"estado-caballeros-aereonautica-1"},
    {hoja:"Damas aereonautica piso 2", id:"estado-damas-aereonautica-2"},
    {hoja:"Caballeros aereonautica piso 2", id:"estado-caballeros-aereonautica-2"},

     //BAÑOS DE ELECTROMECANICA
     {hoja:"Damas electromecanica", id:"estado-damas-electromecanica"},
     {hoja:"Caballeros electromecanica", id:"estado-caballeros-electromecanica"}
];


// Función para actualizar el estado de cada baño
async function actualizarEstados() {
    for (let baño of baños) {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(baño.hoja)}?key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            // Obtener el último estado de la fila más reciente
            const ultimaFila = data.values[data.values.length - 1];
            const estado = ultimaFila[1]; // Suponiendo que el estado está en la segunda columna

            // Actualizar el contenido en el elemento correspondiente
            document.getElementById(baño.id).textContent = estado;
        } catch (error) {
            console.error(`Error al obtener datos de la hoja "${baño.hoja}":`, error);
        }
    }
}

actualizarEstados();