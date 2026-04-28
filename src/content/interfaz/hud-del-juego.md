---
id: "1"
title: "HUD"
description: "Descripción de los elementos de interfaz visibles durante la partida y de la interfaz principal de creación de munición."
date: 2026-04-23
author: "jonathan-bello"
order: 1
coverImage: ""
---

El HUD de _Citadel of Solar Souls (CSS)_ reúne los elementos de interfaz que acompañan directamente la experiencia de juego. Su diseño debe priorizar la claridad, la lectura inmediata del estado del jugador y el acceso rápido a las funciones más importantes, sin saturar la pantalla ni romper la inmersión. La intención es que el jugador siempre tenga a la vista la información esencial para sobrevivir, desplazarse, combatir y consultar ayuda, mientras que las interfaces más complejas se despliegan solo cuando son necesarias.

## Principios del HUD

- La información esencial debe ser visible de forma permanente.
- Los elementos deben ocupar poco espacio visual y no interferir con la lectura del escenario.
- La interfaz debe sentirse integrada al estilo visual geométrico y limpio del juego.
- Los elementos de consulta o edición avanzada deben aparecer solo cuando el contexto lo requiera.
- El acceso a Emis debe ser inmediato y reconocible en cualquier momento de la partida.

## Elementos permanentes en exploración y combate

## Barra de vida del jugador

La barra de vida del jugador se ubica en la **parte superior izquierda** de la pantalla. Este elemento debe estar visible de forma constante durante la exploración y el combate, permitiendo al jugador leer rápidamente su estado actual sin desviar demasiado la atención del centro de la acción.

La barra debe cumplir las siguientes funciones:

- Mostrar la vida actual del jugador de manera clara.
- Reflejar pérdida y recuperación de salud de forma inmediata.
- Mantener una lectura limpia incluso en momentos de alta intensidad.
- Integrarse visualmente con la estética del juego.

La representación visual puede resolverse mediante una barra segmentada, continua o una variante híbrida, siempre que conserve claridad y consistencia.

## Indicador de curaciones disponibles

El jugador debe contar con un indicador visible de cuántas **cargas de curación** o **recargas solares** tiene disponibles en ese momento. Este elemento puede colocarse **junto a la barra de vida** o bien en la **esquina inferior derecha**, dependiendo de la composición final del HUD y de cuál de las dos opciones ofrezca mejor lectura en pantalla.

Su función es informar de forma inmediata cuántas veces puede curarse el jugador antes de llegar al siguiente punto de control. Como este recurso opera bajo una lógica limitada y se recarga en zonas seguras, su visibilidad es importante para la toma de decisiones durante la exploración y especialmente durante el combate.

Este indicador debe cumplir las siguientes condiciones:

- Mostrar con claridad el número actual de cargas disponibles.
- Actualizarse de inmediato al usar una curación.
- Reflejar la recarga completa al descansar en un punto de control.
- Integrarse de manera legible con el resto del HUD sin competir visualmente con la barra de vida.

La representación puede resolverse mediante íconos repetidos, cargas segmentadas, un contador numérico o una combinación de símbolo y número, siempre que su lectura sea rápida e intuitiva.

## Botón de acceso a Emis

En la **parte inferior derecha** de la pantalla debe existir siempre un botón con forma de **hexágono dorado**, que representa el acceso directo a **Emis**. Este botón funciona como uno de los elementos más importantes del HUD, ya que garantiza que el jugador pueda pedir ayuda en cualquier momento de la partida.

![Logo SVG de referencia para Emis](@assets/svgs/arte-conceptual/Hemis.svg)

La identidad visual del acceso a Emis debe apoyarse en un **logo en formato SVG** para conservar nitidez, escalabilidad y consistencia en distintas resoluciones de pantalla.

Su función principal es desplegar la interfaz de conversación con Emis al hacer clic sobre él. Esta aparición debe sentirse similar a la intervención de un acompañante dentro del juego, como una presencia constante que asiste al jugador sin romper la lógica del mundo. La referencia conceptual es una ayuda persistente tipo acompañante, pero reforzada por el uso de un modelo de lenguaje natural.

El botón de Emis debe cumplir las siguientes condiciones:

- Estar visible en todo momento durante la partida.
- Ser fácilmente reconocible por forma y color.
- Responder de forma inmediata al clic del jugador.
- Desplegar una ventana o panel de conversación sin sacar por completo al jugador del contexto del juego.
- Permitir que el jugador consulte dudas tanto sobre CSS como sobre elementos de la aventura.

## Interfaz emergente de Emis

Al activarse el botón de Emis, debe abrirse una ventana o panel de conversación superpuesto a la experiencia actual. Esta interfaz debe sentirse como un diálogo contextual dentro del mundo, no como una pantalla ajena al juego.

La interfaz de Emis debe permitir:

- Escribir preguntas libremente.
- Recibir respuestas relacionadas con CSS.
- Recibir orientación sobre mecánicas o contexto del juego, cuando corresponda.
- Cerrar la conversación y volver de inmediato al flujo normal de la partida.

El panel no debe bloquear innecesariamente la lectura del escenario, y su apertura y cierre deben ser rápidos para no entorpecer la exploración o el ritmo general.

## Interfaz de creación de munición

La interfaz de creación de munición es una de las piezas centrales del HUD expandido del juego. Esta aparece al interactuar con una **zona de control** y permite al jugador diseñar la bala que utilizará después en combate y en la resolución de situaciones del entorno. A diferencia del HUD permanente de exploración, esta interfaz ocupa una parte importante de la pantalla y concentra varias funciones en simultáneo.

Su estructura general debe dividirse en áreas muy claras y diferenciadas.

## Distribución general

La pantalla se divide en dos grandes bloques:

- **Dos tercios del ancho total** destinados al **lienzo principal**.
- **Un tercio del ancho total** destinado a la **columna de edición y asistencia**.

## Lienzo principal

El área principal, ocupando aproximadamente **dos tercios de la pantalla**, corresponde al **lienzo**. Aquí el jugador visualiza la munición que está creando o modificando en tiempo real. Este espacio debe ser amplio, limpio y visualmente prioritario, ya que representa el resultado directo de las propiedades CSS escritas por el jugador.

El lienzo debe permitir:

- Ver la forma actual de la bala.
- Observar los cambios conforme se escribe código.
- Identificar con claridad diferencias de color, tamaño, borde, opacidad u otros atributos.
- Servir como referencia visual inmediata para la edición.

## Columna lateral de edición

El **tercio restante de la pantalla** se organiza como una columna funcional. En la parte superior se encuentra el **panel de código**, donde el jugador escribe las propiedades CSS que desea aplicar a la munición. Este panel debe ser lo bastante cómodo para escribir, editar y revisar líneas de código sin que la experiencia se sienta torpe o limitada.

El panel de código debe permitir:

- Escribir propiedades y valores CSS.
- Mostrar visualmente propiedades válidas e inválidas.
- Marcar en rojo, subrayar o resaltar propiedades no desbloqueadas o incorrectas.
- Mantener una lectura clara y ordenada del texto.

## Panel de chat con Emis dentro del editor

Debajo del panel de código, dentro de la misma columna lateral, se ubica el **chat de Emis**. Esta sección funciona como apoyo directo durante el proceso de creación de munición, permitiendo que el jugador consulte dudas sin salir de la interfaz de edición.

Este panel debe permitir:

- Escribir preguntas relacionadas con propiedades CSS.
- Solicitar ayuda contextual para construir la bala.
- Recibir respuestas de manera inmediata dentro del mismo flujo de trabajo.
- Mantener la continuidad entre aprendizaje, edición y jugabilidad.

La intención es que el jugador no tenga que abandonar el proceso creativo para pedir asistencia, sino que pueda hacerlo dentro del mismo espacio.

## Botón de guardar y equipar

La interfaz debe incluir un botón claro de **aceptar**, **guardar** o **guardar y equipar**. Este botón puede colocarse en la parte superior o inferior de la columna lateral, siempre que su posición sea consistente y fácil de ubicar.

Su función es confirmar la configuración actual de la munición y dejarla lista para ser utilizada al volver al mapa. Esta acción debe sentirse inmediata, clara y sin pasos innecesarios.

## Selector de ranuras de munición

Conforme avance el juego, el jugador podrá desbloquear más de una ranura de munición equipada. Por ello, en la parte superior del lienzo principal debe existir un selector visible de ranuras, representado inicialmente por botones o pestañas numeradas como:

- **1**
- **2**
- **3**

En las primeras etapas del juego solo estará disponible la **ranura 1**, mientras que las demás permanecerán bloqueadas hasta que la progresión las habilite. Este sistema permite que el jugador prepare distintos tipos de balas y alterne entre ellas según las necesidades del combate, la exploración o los puzzles.

El selector de ranuras debe cumplir las siguientes funciones:

- Mostrar cuántas ranuras están disponibles.
- Permitir cambiar entre configuraciones de munición.
- Indicar visualmente cuál es la ranura activa.
- Mostrar de forma clara cuáles siguen bloqueadas.

## Relación entre HUD base y HUD expandido

El juego distingue entre un **HUD base**, visible durante la exploración y el combate, y un **HUD expandido**, que aparece en contextos específicos como la creación de munición o la conversación extendida con Emis. Esta distinción es importante para conservar la limpieza visual durante la partida normal y, al mismo tiempo, ofrecer herramientas más complejas cuando el jugador realmente las necesita.

El HUD base se compone principalmente de:

- Barra de vida
- Indicador de curaciones o recargas solares
- Botón de Emis

El HUD expandido incluye:

- Ventana de conversación con Emis
- Interfaz de creación de munición
- Lienzo de visualización
- Editor de código
- Chat contextual
- Botón de guardar y equipar
- Selector de ranuras de munición

## Criterios generales de usabilidad

Toda la interfaz debe mantener coherencia con la identidad visual del proyecto: formas geométricas, lectura clara, composición ordenada y sensación tecnológica integrada al mundo solarpunk. Ningún elemento debe existir solo por decoración; cada pieza del HUD tiene que responder a una función concreta y fácilmente entendible para el jugador.

La prioridad del HUD en _Citadel of Solar Souls (CSS)_ es acompañar la jugabilidad sin obstaculizarla, haciendo visible lo necesario y dejando que la acción, la exploración y el aprendizaje sigan siendo el centro de la experiencia.
