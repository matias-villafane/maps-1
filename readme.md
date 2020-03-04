## Creando mapas con markers.

Debemos crear un mapa que muestre la ubicación de distintas tiendas de la empresa "My Store".
Para ello debemos:

- Definir el tipo de mapa que nos hace falta. Consultamos la documentación de Google Maps. [Documentación Google maps](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es)
  - Vamos a utilizar el ejemplo de "Adding a Map with a Maker".
  - Markers es una función constructora y acepta un objeto literal como parámetro (Marker options). Estas opciones pueden ser: position, map.

  Localización inicial:
  ```var localizacion = { lat: -31.4662446, lng: -64.3983766 };```

- Añadiendo más markers [Documentación Markers](https://developers.google.com/maps/documentation/javascript/markers?hl=es)
  - Localizaciones de nuestras tiendas:
  ```[
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
  ```

  - InfoWindows. Son las ventanas que aparecer cuando hacemos click en un marker. Nos puede brindar distinto tipo de información. [Documentación infoWindows](https://developers.google.com/maps/documentation/javascript/infowindows?hl=es)
    - Son una función constructora y aceptan un parámetro que es un objeto literal (InfoWindowOptions). Qué opciones podemos colocar:
      - content: puede ser un texto o un nodo de DOM.
      - pixelOffset: es el offset (corrimiento) que tendrá la info window de la localización a la que está atada.
      - position: la posición en la que tiene que aparecer. Generalmente está atada a un marker.
      - maxWidth: el ancho máximo que tiene la ventana.
    - Para implementar el infoWindow tenemos que crear una instancia del objeto InfoWindow, y luego escuchar el evento click en el  marker y "abrir" la infoWindow.
    - Probemos agregar un infoWindow a nuestra casa central:
      ```var contenidoCasaCentral = '<h2>Casa Central</h2>';```
    - Probemos agregar una infoWindow a cada local.
    [Documentación eventos en google maps](https://developers.google.com/maps/documentation/javascript/events?hl=es-419#EventsOverview).
    ```google.maps.event.addListener(
      local,
      'click',
      function() {
        console.log(this);
        infoWindows.setContent(this.content);
        infoWindows.open(map, this);
      });```
