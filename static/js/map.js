var map = L.map('map').setView([32.52990688537714, -116.98746656654977], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([32.52990688537714, -116.98746656654977]).addTo(map)
    .bindPopup('Instituto Tecnologico de Tijuana.')
    .openPopup();

    var polygon = L.polygon([
        [32.531418885790735, -116.98794194475468],
        [32.52864834665279, -116.98950724945166],
        [32.52882757001612, -116.98679578652181],
        [32.53106447850073, -116.98559991289902],
        [32.53134813316102, -116.98567647165413],
        [32.531418885790735, -116.98794194475468]
    ]).addTo(map);