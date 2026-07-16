---
id: "2"
title: "Mecánicas"
description: "Descripción de las mecánicas principales del juego, incluyendo movimiento, combate, creación de munición, progresión de propiedades y sistemas de apoyo."
date: 2026-04-23
author: "jonathan-bello"
order: 2
coverImage: "../../assets/imgs/arte-conceptual/guardianes-ciudadela.webp"
---
## Movimiento

El movimiento del jugador es una de las bases más importantes de la experiencia. El personaje puede desplazarse de izquierda a derecha con una respuesta inmediata, sin retrasos ni animaciones de giro que entorpezcan el control. La intención es que moverse se sienta natural, preciso y fluido, de forma que el jugador nunca luche contra el personaje, sino que sienta que este responde de manera directa a cada comando.

Desde el inicio, el personaje puede caminar y saltar. Conforme avanza la progresión, desbloquea nuevas habilidades de movilidad como el **doble salto** y el **dash**. El doble salto amplía las posibilidades de exploración y evasión, mientras que el dash está pensado principalmente como una herramienta de esquiva. El dash puede ejecutarse tanto en el suelo como en el aire, y su uso debe integrarse de forma orgánica con el salto y el doble salto. Esto permite secuencias como saltar, dashar en el aire y luego realizar un segundo salto, reforzando una jugabilidad móvil, ágil y con margen para la destreza del jugador.

La movilidad no solo cumple una función de desplazamiento, sino que constituye el centro de la supervivencia en combate. El jugador debe ser capaz de esquivar con soltura, reposicionarse con rapidez y reaccionar de forma inmediata a los peligros del entorno. Por ello, toda la lógica del movimiento debe diseñarse bajo el criterio de suavidad, precisión y accesibilidad.

## Disparo y combate base

El combate se apoya en un sistema de disparo frontal como acción ofensiva principal. El personaje puede atacar hacia adelante y también modificar la dirección del disparo para apuntar hacia arriba o hacia abajo. Para disparos diagonales, el jugador deberá combinar la dirección con una entrada adicional específica. La intención es conservar un sistema comprensible y directo, evitando una complejidad excesiva en el apuntado manual.

Debido a que el juego pone gran parte de su exigencia en la evasión, el combate no busca castigar al jugador con una puntería innecesariamente difícil. Por ello, se contempla un sistema de **auto-target** como opción de accesibilidad. Este sistema permitirá fijar o priorizar al enemigo más cercano, facilitando que el personaje oriente sus disparos de manera automática, especialmente durante combates contra jefes o situaciones de mayor presión. Esta ayuda debe poder activarse o desactivarse, ya que no forma parte de la dificultad base, sino de las opciones para ampliar la accesibilidad del juego.

El daño, comportamiento y utilidad de cada disparo dependerán de la configuración de la munición creada por el jugador mediante el sistema de CSS. De esta manera, el combate no se basa únicamente en reflejos, sino también en la comprensión de las propiedades y en la preparación previa de la munición adecuada para cada situación.

### Sistema de daño por sinergia CSS (munición vs enemigo)

Cada tipo de munición define un **daño base**. Ese daño se modifica en función de la sinergia entre los atributos CSS de la bala y los metadatos del enemigo impactado.

Cada enemigo almacena en su metadata un conjunto de atributos CSS que lo describen (por ejemplo, `background`, `color`, `border`, etc.) y, cuando aplique, también el valor específico de esos atributos (por ejemplo, `background: red`). El sistema de daño se resuelve en tres niveles:

1. **Sin coincidencia**: se aplica únicamente el daño base de la bala.
2. **Coincidencia de propiedad**: si la bala comparte al menos una propiedad CSS con el enemigo (por ejemplo, la bala usa `background` y el enemigo también tiene la propiedad `background` en su metadata), se aplica un bono de daño.
3. **Coincidencia de propiedad + valor**: si además coincide el valor exacto (por ejemplo, `background: red` en la bala y `background: red` en el enemigo), se aplica un bono mayor.

Este enfoque convierte el combate en un sistema de lectura y respuesta: no basta con disparar, también importa construir una munición que “hable el mismo lenguaje” CSS que el enemigo.

### Relación con progresión del jugador

Cada nueva propiedad CSS desbloqueada amplía el potencial ofensivo del jugador de forma directa. En términos de diseño, desbloquear propiedades no solo habilita nuevas apariencias de bala, también incrementa la capacidad de generar sinergias y, por tanto, de escalar el daño efectivo en combate.

Si el jugador intenta usar una propiedad CSS que **todavía no ha desbloqueado**, el sistema debe tratarla como no válida para cálculo de bonificaciones:

- la propiedad puede mostrarse como error en el visor/editor de munición;
- no aporta ningún bono por sinergia;
- y además aplica una **penalización de daño** al disparo (bonus negativo sobre el daño base).

Con esto se evita que el jugador se beneficie de conocimiento externo al progreso de la partida y se refuerza el loop de aprendizaje-desbloqueo-mejora dentro del propio juego.

### Slots de munición y gestión en tiempo real

El jugador no puede reescribir ni modificar su munición en cualquier lugar del mapa: la edición de balas está restringida exclusivamente a los **Pilares solares**. Fuera de esos puntos, la configuración de cada bala queda bloqueada hasta volver a un Pilar solar.

Durante la progresión, el jugador desbloquea espacios adicionales de equipamiento de munición hasta un máximo de **3 slots**:

1. **Inicio del juego:** 1 slot disponible.
2. **Progresión media:** desbloqueo del slot 2.
3. **Progresión avanzada:** desbloqueo del slot 3 (límite máximo).

Cada slot puede almacenar una bala distinta (con propiedades CSS diferentes). En combate y exploración, el jugador sí puede alternar entre los slots desbloqueados para adaptarse al tipo de enemigo o situación, pero sin editar su contenido en ese momento.

## Creación de munición mediante CSS

La mecánica central y más distintiva del juego es la posibilidad de crear munición personalizada utilizando propiedades de CSS. Esta acción no se realiza directamente en medio del combate, sino únicamente en **Pilares solares** que funcionan como espacios seguros de preparación (similares a una hoguera o punto de descanso). Al interactuar con una de estas zonas, el jugador abre una interfaz especial donde puede diseñar la bala que utilizará después en el mapa.

La interfaz de creación de munición se divide en tres áreas principales. El espacio más grande, que ocupa aproximadamente dos tercios de la pantalla, corresponde al **lienzo**, donde el jugador visualiza en tiempo real la munición que está construyendo. En el tercio restante de la pantalla se ubican dos paneles: en la parte superior, un **editor de código** donde el jugador escribe las propiedades CSS que desea aplicar; en la parte inferior, un **chat con Hemis**, la inteligencia artificial acompañante.

El editor de código permite escribir y modificar propiedades desbloqueadas dentro del juego. Si el jugador conoce una propiedad por experiencia externa pero todavía no la ha obtenido durante la partida, no podrá usarla, aunque la escriba correctamente. En esos casos, la interfaz debe marcar dicha propiedad como inválida, por ejemplo subrayándola o resaltándola en color rojo. Esto convierte la progresión del conocimiento en una parte del sistema jugable y no solo en una barrera artificial.

Una vez que el jugador termina de configurar la munición, puede guardarla y equiparla para regresar al mapa y comenzar a utilizarla. La transición entre la fase de preparación y la fase de acción debe ser rápida y clara, de manera que el sistema se perciba como una extensión natural del flujo de juego.

## Propiedades de CSS como habilidades desbloqueables

Las propiedades de CSS funcionan como habilidades o recursos que el jugador obtiene a lo largo de la aventura. No todas están disponibles desde el inicio, sino que se desbloquean progresivamente conforme el jugador avanza y supera desafíos específicos. Esto permite estructurar la curva de aprendizaje y controlar cómo se introducen nuevas posibilidades de combate, exploración y resolución de puzzles.

Una de las formas principales de desbloqueo son los **desafíos especializados**, concebidos como espacios cerrados o cápsulas similares a pequeños templos. Dentro de estos lugares, el jugador se enfrenta a una situación diseñada para enseñar y poner a prueba una propiedad concreta. Por ejemplo, un desafío centrado en `z-index` podría presentar enemigos o elementos ubicados en distintos planos visuales, obligando al jugador a comprender que esa propiedad puede alterar la profundidad de la munición y permitir que esta interactúe con objetivos fuera del plano habitual.

Al completar el desafío, el jugador obtiene oficialmente esa propiedad, que desde entonces puede utilizar en el sistema de creación de munición. Cada nueva propiedad amplía las posibilidades del jugador y abre nuevas soluciones tanto en combate como en el diseño de acertijos y rutas del entorno.

## Diálogo con entidades

El juego incluye un sistema de diálogo para interactuar con ciertas entidades del mundo, principalmente robots y personajes relevantes. No se espera una gran cantidad de NPCs, por lo que cada interacción debe tener peso contextual, narrativo o funcional. El protagonista actúa como un avatar silencioso, por lo que no contará con líneas de diálogo propias visibles; en cambio, la comunicación se apoya en las respuestas y exposición de los personajes con los que interactúa.

Este sistema sirve para proporcionar contexto, reforzar el lore, orientar al jugador y dar vida a la ciudad a través de los pocos seres con los que todavía es posible establecer contacto.

## Inventario

El jugador dispone de un inventario en forma de mochila donde se almacenan objetos importantes obtenidos durante la aventura. Estos objetos pueden representar llaves de progreso, piezas de equipamiento, restos tecnológicos o elementos vinculados al desbloqueo de habilidades. Por ejemplo, al obtener el doble salto, este puede asociarse a un objeto concreto como unas **botas cohete rotas**, acompañado de su respectiva descripción.

El inventario no está pensado como un menú de gestión compleja ni como un espacio para consumir objetos manualmente en mitad de la partida. Su función principal es registrar hallazgos, conservar elementos importantes y reforzar la construcción del mundo. Cada objeto debe contar con una pequeña descripción, no solo para explicar su función, sino también para aportar detalles de lore y enriquecer la narrativa ambiental.

## Curación y recurso de recuperación

La recuperación de vida se realiza mediante un recurso limitado llamado **Luz Solar**, presentado como una cápsula de energía utilizable por el jugador. Su lógica se inspira en sistemas como el estus de _Dark Souls_: el jugador cuenta con una cantidad determinada de cargas antes de llegar al siguiente pilar solar, y estas se recargan completamente al descansar o interactuar con un Pilar solar.

El uso de la curación no depende del inventario ni del consumo manual de objetos desde menús, sino de un botón específico asignado a esta acción. Esto permite mantener el ritmo del combate y evita interrumpir innecesariamente la partida con navegación de interfaces. La gestión de la Luz Solar introduce una capa de administración del riesgo y refuerza la importancia de los pilares solares en la estructura del juego.

## Registro de propiedades desbloqueadas

Además del sistema de creación de munición, el jugador contará con un menú o registro donde podrá consultar todas las propiedades de CSS que ha desbloqueado a lo largo del juego. Este espacio funciona como una especie de almanaque o compendio de habilidades, permitiendo revisar qué hace cada propiedad y en qué tipo de situaciones puede resultar útil.

Este registro cumple una función pedagógica y práctica. Por un lado, ayuda al jugador a recordar conceptos y mantenerlos organizados; por otro, sirve como apoyo estratégico al momento de decidir qué tipo de munición construir para afrontar un reto concreto. Debe presentarse de manera clara, accesible y coherente con la interfaz general del juego.

## Relación con mecánicas de enemigos

Los enemigos contarán con sus propias conductas, patrones y particularidades de combate, pero esas mecánicas se desarrollarán en detalle dentro de la sección correspondiente a enemigos. En este documento se establece únicamente que el sistema general del jugador debe dialogar con ellos desde tres frentes: la movilidad para esquivar, el disparo como herramienta ofensiva y el uso de propiedades de CSS como capa táctica y de progresión.

