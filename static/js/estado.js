function cambiarEstado() {
    document.getElementById("estado-markers").innerHTML = `
        <script>
            L.marker([32.53053380336329, -116.98613694907026], {icon: UnisexDIcon}).addTo(map).bindPopup("Piso 1");
        </script>
    `;
}

cambiarEstado();