let initLocation = { lat: -31.4662446, lng: -64.3983766 };

let tiendas = [
    {
        title: 'Tienda Córdoba 1',
        content: '<p>Tienda Córdoba 1</p>',
        position: {
            lat: -31.3366099,
            lng: -64.2867402
        }
    },
    {
        title: 'Tienda Córdoba 2',
        content: '<p>Tienda Córdoba 2</p>',
        position: {
            lat: -31.3412589,
            lng: -64.296862
        }
    },
    {
        title: 'Tienda Córdoba 3',
        content: '<p>Tienda Córdoba 3</p>',
        position: {
            lat: -31.3583939,
            lng: -64.3433966
        }
    }
]

let map;
let markers = [];
function initMap() {
    map = new google.maps.Map(
        document.getElementById('maps'), { zoom: 14, center: initLocation });

    let contenidoCasaCentral = '<h2>Casa Central</h2>';
    let casaCentral = new google.maps.Marker({ position: initLocation, map: map, title: 'Casa Central' });
    let infoWindowsCC = new google.maps.InfoWindow({ content: contenidoCasaCentral });

    casaCentral.addListener('click', function () {
        infoWindowsCC.open(map, casaCentral);
    });
    markers.push(casaCentral);

    tiendas.forEach((tienda) => {
        let marker = new google.maps.Marker({ position: tienda.position, map: map, title: tienda.title });

        let infoWindows = new google.maps.InfoWindow({ content: tienda.content })
        marker.addListener('click', function () {
            infoWindows.open(map, marker);
        });

        markers.push(marker);
    });
}