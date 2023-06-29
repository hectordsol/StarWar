![image](https://github.com/hectordsol/StarWar/assets/95602009/1e9d180c-537e-4b84-885a-af7f0269961e)

# StarWar
Este proyecto se trata de una API de Star Wars, que maneja información sobre los personajes de la franquicia (Characters), las películas que se han lanzado (Films) y los planetas que aparecen en dichas películas (Planets).


![image](https://github.com/hectordsol/StarWar/assets/95602009/b7bc4e08-0b4c-4d31-a756-6f131abdec8f)

Tiene además un servicio Gateway que se encarga de recibir las peticiones y redirigirlas al servicio correspondiente. Para ello existe una aplicación de Express sencilla, que tiene como única particularidad la instalación de la librería http-proxy-middleware.

Este proxy es un intermediario entre el cliente y el servidor. La librería http-proxy-middleware permite crear un proxy en una aplicación Node.js para que cuando un cliente envíe una solicitud, la solicitud sea primero enviada al proxy, y luego el proxy la reenvía al servidor real. El Gateway se encuentra escuchando en el puerto 8000.

Se crea además contenedores de Docker y se incluyen dentro de los mismos a cada una de las aplicaciones que desarrolladas, manteniendo siempre una única aplicación en cada contenedor. 

Con esto se logra que estos contenedores, no solamente funcionen, sino que además puedan comunicarse entre sí.

Se debe crear un microservicio dedicado exclusivamente a la conexión e interacción con la base de datos. Esto permite que los microservicios de Characters, Planets y Films, puedan abstraerse de cuál es el origen de los datos o la lógica que hay detrás de su obtención, y simplemente los soliciten a este nuevo microservicio para poder responder al cliente.

![image](https://github.com/hectordsol/StarWar/assets/95602009/ac014069-59a5-4bbd-bd6d-ba92bc486aa6)

Con ayuda de la aplicación MongoDB Compass se cargan los datos de un JSON, y sin tener que estar generando scripts a mano para el proceso.

Todo esto se carga un una VM de google cloud, donde se levantan los servicios con ayuda de Docker Compose. 

![image](https://github.com/hectordsol/StarWar/assets/95602009/72c444fb-6a74-4823-bbd6-86c04c46f2da)


http://34.125.90.13:8000/characters Consulta de los personajes.

http://34.125.90.13:8000/films Consulta de los films de la saga.

http://34.125.90.13:8000/planets Consulta de los planetas.

Tambien se pueden hacer consultas por id con GET a las mismas rutas, y para crear regitros nuevos con POST. Queda para agregar para actualizar registros y para borrar.

Creditos de Henry.
