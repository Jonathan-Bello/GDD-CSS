---
id: "3"
title: "Progresión del jugador"
description: "Descripción de cómo crece el jugador a lo largo de la partida en términos de dominio, movilidad, lectura del mundo y uso del sistema."
date: 2026-04-23
author: "jonathan-bello"
order: 3
coverImage: "/gdd-covers/progresion.png"
---

La progresión del jugador en _Citadel of Solar Souls (CSS)_ no se mide únicamente en términos de avance por el mapa, sino en la expansión gradual de su dominio sobre el juego. A lo largo de la partida, el jugador se vuelve más competente en cuatro dimensiones principales: movimiento, combate, comprensión del sistema CSS y lectura del mundo. Esta progresión debe sentirse natural y acumulativa, de forma que cada nueva etapa del juego aproveche lo aprendido en las anteriores.

A diferencia de juegos que basan toda su progresión en estadísticas o niveles numéricos, aquí el crecimiento del jugador se apoya principalmente en el dominio práctico. El jugador mejora porque comprende mejor las reglas, se mueve con mayor soltura, toma decisiones más acertadas y utiliza con más inteligencia las herramientas que ha desbloqueado.

## Etapas generales de progresión

### Etapa inicial

En las primeras horas, el jugador apenas comprende el mundo y sus reglas. Su movilidad es limitada, sus opciones de munición son reducidas y su lectura de combate es básica. Durante este tramo, el juego debe enseñar los fundamentos de desplazamiento, disparo, esquiva y uso elemental de propiedades de CSS.

### Etapa intermedia

En esta fase, el jugador ya domina los movimientos básicos y empieza a combinar herramientas. Comprende mejor cuándo editar su munición, cómo utilizar ciertas propiedades de forma táctica y cómo interpretar las amenazas del entorno. También comienza a regresar a zonas previas con nuevas capacidades, fortaleciendo la sensación de crecimiento.

### Etapa avanzada

En los tramos más avanzados, el jugador ya no solo reacciona, sino que anticipa. Entiende mejor las propiedades, reconoce patrones de enemigos, se mueve con confianza y es capaz de resolver situaciones usando combinaciones más sofisticadas de movilidad, combate y razonamiento. El juego puede exigir más en esta etapa porque el jugador ya construyó una base sólida.

## Ejes de progresión del jugador

## Progresión de movilidad

El jugador comienza con desplazamiento lateral y salto básico, pero más adelante obtiene nuevas herramientas como el dash y el doble salto. Estas habilidades no solo aumentan la libertad de movimiento, sino también la precisión en combate y la capacidad de explorar el mapa con mayor profundidad.

## Progresión de combate

Al inicio, el combate se apoya en la evasión básica y el disparo frontal. Con el tiempo, el jugador mejora su capacidad de leer enemigos, reposicionarse, fijar objetivos y elegir mejor la munición adecuada para cada situación. Esta mejora depende tanto de la práctica como del entendimiento del sistema.

## Progresión de comprensión del CSS

El jugador empieza con un repertorio pequeño de propiedades y una comprensión limitada de su uso. A medida que avanza, amplía ese conocimiento, lo conecta con situaciones reales dentro del juego y deja de ver las propiedades como fragmentos aislados para entenderlas como herramientas con lógica y propósito.

## Grupos de propiedades por fases de zona

La progresión de propiedades en _Citadel of Solar Souls (CSS)_ debe respetar una curva de aprendizaje clara. Las primeras propiedades tienen que producir resultados visuales inmediatos y fáciles de comprender, mientras que las más avanzadas deben exigir mayor abstracción, mejor lectura del entorno y una combinación más estratégica durante combate, exploración y resolución de puzzles.

La idea no es desbloquear propiedades aisladas sin relación entre sí, sino agruparlas por familias de dificultad y función jugable. Cada fase de zona debe introducir un conjunto pequeño de propiedades, permitir que el jugador las practique y finalmente evaluarlas mediante enemigos, obstáculos y un jefe que exija su uso.

### Fase 1: Fundamentos visuales

**Dificultad:** Baja

**Grupo de propiedades:**

- `background-color`
- `width`
- `height`

**Propósito de la fase:**
Esta primera fase introduce propiedades de efecto inmediato y lectura sencilla. Son ideales para enseñar la lógica básica del sistema de escritura CSS dentro del juego, ya que el jugador puede ver rápidamente cómo cambia la munición.

**Aplicaciones jugables:**

- Cambiar el color de la bala para activar mecanismos o dañar enemigos vulnerables a un color específico.
- Alterar el tamaño del proyectil para impactar blancos pequeños o golpear superficies más amplias.
- Introducir la relación entre propiedad, valor y resultado visible.

**Objetivo de aprendizaje:**
Que el jugador comprenda la estructura básica de una regla CSS y entienda que escribir correctamente modifica de forma tangible el comportamiento de su munición.

---

### Fase 2: Presencia, visibilidad y forma

**Dificultad:** Baja-media

**Grupo de propiedades:**

- `opacity`
- `border`
- `border-width`
- `border-color`

**Propósito de la fase:**
En esta etapa el jugador ya entiende que la bala puede cambiar visualmente, por lo que ahora se introducen propiedades que afectan presencia, contorno y percepción. Aquí empieza a aparecer una capa más táctica en el uso de la munición.

**Aplicaciones jugables:**

- Ajustar la opacidad para interactuar con barreras, sensores o mecanismos sensibles a visibilidad.
- Usar bordes para alterar la lectura del proyectil o activar dispositivos que reaccionen a contornos específicos.
- Empezar a diferenciar munición no solo por color o tamaño, sino también por estructura visual.

**Objetivo de aprendizaje:**
Que el jugador amplíe su comprensión de CSS más allá del color y el tamaño, entendiendo que también puede modificar la apariencia y presencia de un elemento.

---

### Fase 3: Posicionamiento y profundidad

**Dificultad:** Media

**Grupo de propiedades:**

- `position`
- `top`
- `left`
- `right`
- `bottom`
- `z-index`

**Propósito de la fase:**
Esta es la primera gran subida de complejidad conceptual. Aquí el jugador deja de pensar solo en cómo se ve la munición y empieza a pensar en dónde está y en qué plano existe. Esta fase debe marcar el paso de un aprendizaje visual básico a un aprendizaje espacial y estratégico.

**Aplicaciones jugables:**

- Alterar el desplazamiento inicial del proyectil.
- Resolver puzzles donde la bala debe impactar mecanismos fuera de la línea frontal.
- Usar `z-index` para alcanzar enemigos o interruptores situados en distintos planos del escenario.
- Entender que algunos obstáculos no se superan con daño, sino con posicionamiento correcto.

**Objetivo de aprendizaje:**
Que el jugador comprenda que CSS también organiza espacio y jerarquía visual, y que estas propiedades pueden convertirse en herramientas de navegación y resolución de problemas.

---

### Fase 4: Transformación y comportamiento espacial

**Dificultad:** Media-alta

**Grupo de propiedades:**

- `transform: translate()`
- `transform: scale()`
- `transform: rotate()`

**Propósito de la fase:**
En esta etapa el jugador ya domina los fundamentos y puede comenzar a manipular el comportamiento espacial de la munición de forma más sofisticada. Estas propiedades deben introducirse en desafíos donde la solución no sea tan evidente y exija experimentación.

**Aplicaciones jugables:**

- Desplazar la trayectoria o posición efectiva del proyectil.
- Escalar la munición para ampliar su rango o su área de impacto.
- Rotar el disparo o su forma para adaptarlo a mecanismos y enemigos con geometrías específicas.
- Diseñar desafíos donde el jugador deba pensar en orientación, cobertura y volumen.

**Objetivo de aprendizaje:**
Que el jugador entienda las transformaciones como una herramienta avanzada para modificar el comportamiento del elemento, no solo su apariencia.

---

### Fase 5: Tiempo, respuesta y ejecución avanzada

**Dificultad:** Alta

**Grupo de propiedades:**

- `transition-duration`
- `transition-delay`
- `animation-duration`
- `animation-delay`
- `animation-iteration-count`

**Propósito de la fase:**
Esta fase introduce el factor temporal. El jugador ya no solo modifica cómo se ve o dónde está la munición, sino también cuándo actúa y durante cuánto tiempo lo hace. Es una fase pensada para enemigos más complejos, mecanismos más exigentes y situaciones donde el timing importa.

**Aplicaciones jugables:**

- Activar mecanismos con retraso.
- Mantener efectos durante cierto tiempo.
- Crear disparos con comportamiento repetitivo o persistente.
- Resolver puzzles donde el tiempo de ejecución de la munición sea tan importante como su forma o posición.

**Objetivo de aprendizaje:**
Que el jugador comprenda que CSS también define comportamiento temporal y transiciones, y que estos conceptos pueden trasladarse a una lógica interactiva dentro del juego.

---

### Fase 6: Dominio y combinación

**Dificultad:** Experto

**Grupo de propiedades:**

- Combinación libre de propiedades ya desbloqueadas

**Propósito de la fase:**
La fase final no necesita depender de introducir muchas propiedades nuevas, sino de exigir el dominio real de las anteriores. Aquí el jugador debe combinar color, tamaño, opacidad, profundidad, transformación y tiempo dentro de situaciones más abiertas y exigentes.

**Aplicaciones jugables:**

- Jefes que requieran distintas configuraciones de munición durante un mismo combate.
- Puzzles que mezclen plano, forma, color y timing.
- Secciones donde la respuesta no sea una sola propiedad, sino una construcción deliberada de munición.

**Objetivo de aprendizaje:**
Confirmar que el jugador ya no usa CSS por ensayo básico, sino con intención, comprensión y capacidad de adaptación.

## Principio general de esta progresión

La progresión de propiedades debe ir de lo concreto a lo abstracto, de lo visual a lo espacial, y de lo espacial a lo sistémico. Primero el jugador entiende cambios simples y visibles; después comprende relaciones de posición y jerarquía; más adelante domina transformaciones y comportamiento temporal; y finalmente combina todos esos conocimientos en escenarios de alta exigencia.

Esta estructura permite que el crecimiento del jugador sea gradual, legible y coherente con la dificultad del juego y con la fantasía central de aprender CSS a través de la acción.

## Progresión de lectura del mundo

Conforme explora más zonas, el jugador aprende a interpretar el entorno. Reconoce señales visuales, sospecha de rutas ocultas, identifica obstáculos que podrá superar después y comprende mejor cómo la ciudad comunica información a través de su diseño, sus robots y sus espacios.

## Resultado de la progresión

La meta de esta progresión es que el jugador termine la partida sintiéndose distinto a como empezó. No solo debe haber avanzado por el mapa, sino que debe haberse convertido en alguien más hábil, más atento y más capaz de comprender tanto las reglas del combate como las del propio sistema CSS. El progreso del jugador debe sentirse merecido, visible y coherente con la filosofía general del proyecto.
