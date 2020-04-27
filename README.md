# Clima app - Frontend

Este es el frontend de la aplicacion Clima app, desarrollada como challenge para Telecom
***
## Importante
Desarrollado para usarse en conjunto con el backend: https://github.com/Bonillop/telecom-challenge-back el cual es necesario que esté levantado de manera local en el puerto 3000 en la versión actual
***
## Descripcion
La siguiente aplicacion consta de 3 pantallas, 2 de las cuales solo proveen informacion

La seccion principal es **Buscar** Alli se podrá observar un input en el cual se deberá ingresar el nombre de una Ciudad. Acto seguido se podrá pedir el pronóstico para el dia actual, o para 5 dias
***
## Librerías
Para el desarrollo del front se utilizó el framework React y se aplico la utilización de los hooks intoducidos en la version 16.8.

- Sass, React-Bootstrap - para manejo de estilos
- React-router, History - para manejo de vistas SPA
- Axios - para consumir la API

***
## TODO
- Dockerización del proyecto entero (back y front) para facilitar el deploy
- Utilizacion de select con sugerencias de ciudades en la pantalla de búsqueda