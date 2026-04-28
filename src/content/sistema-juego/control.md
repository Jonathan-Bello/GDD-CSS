---
id: "5"
title: "Control"
description: "Descripción del esquema de control del juego, las acciones principales del jugador y su uso en exploración, combate, menús y edición de munición."
date: 2026-04-23
author: "jonathan-bello"
order: 5
coverImage: ""
---
El esquema de control de _Citadel of Solar Souls (IA)_ está diseñado principalmente para **teclado y ratón**, ya que una de las mecánicas centrales del juego consiste en escribir y editar código CSS dentro de una interfaz integrada. Aunque a futuro podría contemplarse compatibilidad parcial con mando para el desplazamiento y el combate, la experiencia base y recomendada del juego está pensada para jugarse con teclado y ratón.

El objetivo general del control es que el jugador sienta una respuesta inmediata, clara e intuitiva en todo momento. La movilidad debe ser fluida, el combate debe ejecutarse sin fricción y la transición entre exploración, disparo, edición de munición y consulta de menús debe sentirse natural dentro del ritmo general del juego.

## Principios del esquema de control

- El movimiento debe sentirse inmediato y preciso.
- Las acciones de combate deben estar al alcance sin combinaciones complejas.
- La edición de munición debe aprovechar el teclado como herramienta principal de escritura.
- Los controles deben ser fáciles de aprender, pero suficientemente completos para sostener exploración, combate y gestión.
- Las acciones frecuentes deben estar ubicadas en teclas accesibles para ambas manos.

## Esquema base de control

### Movimiento y desplazamiento

- **A / Flecha izquierda:** mover al personaje hacia la izquierda
- **D / Flecha derecha:** mover al personaje hacia la derecha
- **S / Flecha abajo:** mirar hacia abajo / desplazar ligeramente la cámara hacia abajo en contextos permitidos
- **W / Flecha arriba:** apuntar hacia arriba o interactuar con elementos contextuales según la situación

El personaje responde de forma inmediata a la dirección indicada. No debe existir retraso perceptible entre la entrada del jugador y la respuesta del personaje.

### Salto y movilidad avanzada

- **Espacio:** saltar
- **Espacio en el aire:** doble salto, una vez desbloqueado
- **Shift izquierdo:** dash

El dash puede ejecutarse tanto en tierra como en el aire. Su uso es central para la evasión, por lo que debe estar ubicado en una tecla de acceso rápido y cómoda.

### Disparo y apuntado

- **Clic izquierdo:** disparar
- **W / Flecha arriba + clic izquierdo:** disparar hacia arriba
- **S / Flecha abajo + clic izquierdo:** disparar hacia abajo
- **Alt izquierdo + dirección + clic izquierdo:** disparo diagonal

El disparo base siempre se proyecta al frente. Las variantes direccionales permiten ampliar la cobertura ofensiva sin convertir el apuntado en una carga excesiva. El sistema de auto target, cuando esté activado, funcionará como apoyo de accesibilidad, pero no modifica la asignación de botones.

### Cambio de slot de munición

- **1:** equipar slot de munición 1 (si está desbloqueado)
- **2:** equipar slot de munición 2 (si está desbloqueado)
- **3:** equipar slot de munición 3 (si está desbloqueado)

El jugador inicia la partida con un único slot de munición y puede desbloquear hasta un máximo de tres durante la progresión. El cambio entre slots está permitido en tiempo real durante exploración y combate, pero su contenido solo puede editarse al interactuar con un punto de control.

### Fijado de enemigo

- **R:** fijar o liberar enemigo objetivo

El sistema de fijado de enemigo permite seleccionar al adversario más cercano dentro del rango válido de combate. Una vez activado, el personaje prioriza ese objetivo al momento de disparar, facilitando la lectura del combate y reduciendo la necesidad de apuntado manual preciso en enfrentamientos de alta presión, especialmente contra jefes.

Si el enemigo fijado sale del rango, muere o deja de ser un objetivo válido, el fijado se cancela automáticamente. Esta función debe entenderse como una herramienta de apoyo y accesibilidad, por lo que debe poder activarse o desactivarse desde las opciones del juego.

### Interacción con el entorno

- **E:** interactuar

La tecla de interacción se utiliza para hablar con entidades, activar puntos de control, abrir zonas de edición de munición, leer elementos del entorno y ejecutar acciones contextuales similares.

### Curación

- **Q:** usar una carga de Luz Solar

La curación debe poder activarse rápidamente sin necesidad de abrir menús. Esta acción está vinculada a un botón específico para no interrumpir el ritmo del combate.

## Controles de interfaz y menús

### Menú de pausa

- **Esc:** abrir o cerrar menú de pausa

Desde este menú el jugador puede reanudar la partida, consultar opciones, revisar información general o salir al menú principal según el contexto.

### Inventario y registros

- **I:** abrir inventario
- **Tab:** abrir registro de propiedades CSS desbloqueadas

El inventario permite consultar objetos importantes y sus descripciones. El registro de propiedades funciona como un compendio de habilidades y conceptos desbloqueados durante la aventura.

## Controles dentro de la zona de control

Cuando el jugador interactúa con una zona de control (punto de control), entra en la interfaz de creación de munición. Esta es la única instancia donde puede modificar el contenido de sus balas/slots. En esta pantalla el control deja de centrarse en movimiento y combate, y pasa a enfocarse en escritura, edición y consulta.

### Navegación general en la interfaz

- **Ratón:** seleccionar paneles, botones y áreas de trabajo
- **Rueda del ratón:** desplazarse dentro del chat, editor o paneles extensos
- **Clic izquierdo:** seleccionar campos, botones y opciones
- **Tab:** cambiar entre paneles o campos activos

### Editor de código CSS

- **Teclado alfanumérico:** escribir propiedades y valores CSS
- **Backspace:** borrar caracteres
- **Enter:** salto de línea o confirmación según el campo activo

El editor de código es el núcleo del sistema de creación de munición. El jugador escribe aquí las propiedades CSS que desea aplicar a la bala. Si una propiedad no ha sido desbloqueada todavía en la progresión del juego, debe mostrarse como inválida dentro del sistema visual del editor.

### Chat con Emis

- **Clic en el panel de chat:** activar entrada de texto
- **Teclado alfanumérico:** escribir preguntas o mensajes
- **Enter:** enviar mensaje

El chat con Emis funciona como apoyo tanto pedagógico como contextual. El jugador puede consultarle dudas sobre CSS o pedir ayuda relacionada con la aventura.

### Confirmación de munición

- **Botón Guardar y usar:** confirma la configuración actual de la bala y la equipa de inmediato
- **Esc:** salir de la interfaz si el contexto lo permite

La transición entre edición y regreso al mapa debe ser rápida y clara para no interrumpir el ritmo del juego.

## Contextos de uso del control

El sistema de control cambia según el estado en el que se encuentre el jugador:

### Exploración

Predominan movimiento, salto, dash, interacción y consulta ocasional de inventario o registro.

### Combate

Predominan movimiento, dash, disparo, apuntado direccional y curación.

### Interacción narrativa

Predomina la tecla de interacción para avanzar diálogos o activar elementos contextuales.

### Edición de munición

Predominan teclado y ratón como herramientas de escritura, navegación y confirmación.

### Menús

Predominan ratón, teclas de navegación y confirmación mediante clic o teclado según la interfaz.

## Consideraciones de diseño

El control debe estar pensado para no generar fricción entre la parte de acción y la parte de edición. El jugador debe poder pasar de explorar y combatir a escribir código y volver al mapa sin sentir que está entrando en dos juegos distintos. La prioridad es que el esquema sea coherente, cómodo y funcional para una experiencia donde jugar y programar forman parte de una misma lógica de interacción.

A futuro, cualquier adaptación a mando deberá considerar que la escritura de código seguiría requiriendo teclado, por lo que el esquema principal del proyecto continuará siendo teclado y ratón.
