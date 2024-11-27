
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
     {hoja:"Caballeros electromecanica", id:"estado-caballeros-electromecanica"},

     
     //BAÑOS DE EDIFICIO ADMINISTRATIVO
     {hoja:"Edificio damas piso 1", id:"damas-piso-1"},
     {hoja:"Edificio caballeros piso 1", id:"caballeros-piso-1"},
     {hoja:"Edificio damas piso 2", id:"damas-piso-2"},
     {hoja:"Edificio caballeros piso 2", id:"caballeros-piso-2"},

     //BAÑOS DE EDIFICIO CAFETERIA
     {hoja:"Baño cafeteria", id:"estado-unisex"}
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

            let marker;
            switch (baño.id) {
                // Calafornix
                case "estado-damas-calafornix":
                    marker = markerDamasCalafornix;
                    break;
                case "estado-caballeros-calafornix":
                    marker = markerCaballerosCalafornix;
                    break;
            
                // Industrial
                case "estado-damas-industrial":
                    marker = markerDamasIndustrial;
                    break;
                case "estado-caballeros-industrial":
                    marker = markerCaballerosIndustrial;
                    break;
            
                // Cafetería
                case "estado-unisex":
                    marker = markercafeteria;
                    break;
            
                // Edificio Académico
                case "damas-piso-1":
                    marker = markerDamasEAp1;
                    break;
                case "caballeros-piso-1":
                    marker = markerCaballerosEAp1;
                    break;
                case "damas-piso-2":
                    marker = markerDamasEAp2;
                    break;
                case "caballeros-piso-2":
                    marker = markerCaballerosEAp2;
                    break;
            
                // Edificio Sistemas
                case "estado-damas-piso-1":
                    marker = markerDamasSistemasp1;
                    break;
                case "estado-caballeros-piso-1":
                    marker = markerDCaballerosSistemasp1;
                    break;
                case "estado-discapacitados-piso-1":
                    marker = markerDiscapacidadSistemasp1;  
                    break;
                case "estado-damas-piso-3":
                    marker = markerDamasSistemasp3;  
                    break;
                case "estado-caballeros-piso-3":
                    marker = markerDamasSistemasp3;  
                    break;
            
                // Electromecánica
                case "estado-damas-electromecanica":
                    marker = markerDamasEelectromecanica;
                    break;
                case "estado-caballeros-electromecanica":
                    marker = markerCaballerosEelectromecanica;
                    break;
            
                // Aereonáutica 600
                case "estado-damas-aereonautica-1":
                    marker = markerDamasAereonauticap1;
                    break;
                case "estado-caballeros-aereonautica-1":
                    marker = markerCaballerosAereonauticap1;
                    break;
                case "estado-damas-aereonautica-2":
                    marker = markerDamasAereonauticap2;
                    break;
                case "estado-caballeros-aereonautica-2":
                    marker = markerCaballerosAereonauticap2;
                    break;
            }

            if (marker) {
                if (estado === "Disponible") {
                    // Define el ícono adecuado según el tipo de baño (Damas, Caballeros, Discapacidad, Unisex)
                    if (baño.id.includes("damas"))
                         {
                        marker.setIcon(DamaDIcon);
                         } 
                    else if (baño.id.includes("caballeros"))
                        {
                        marker.setIcon(CaballeroDIcon);
                    } 
                    else if (baño.id.includes("discapacitados")) 
                        {
                        marker.setIcon(DiscapacidadDIcon);
                    } 
                    else if (baño.id.includes("unisex")) 
                        {
                        marker.setIcon(UnisexDIcon);
                    }
                } else { // Si el estado es "Fuera de Servicio"
                    if (baño.id.includes("damas")) {
                        marker.setIcon(DamaFSIcon);
                    } else if (baño.id.includes("caballeros")) {
                        marker.setIcon(CaballeroFSIcon);
                    } else if (baño.id.includes("discapacitados")) {
                        marker.setIcon(DiscapacidadFSIcon);
                    } else if (baño.id.includes("unisex")) {
                        marker.setIcon(UnisexFSIcon);
                    }
                }
            }

        } catch (error) {
            console.error(`Error al obtener datos de la hoja "${baño.hoja}":`, error);
        }
    }
}

actualizarEstados();