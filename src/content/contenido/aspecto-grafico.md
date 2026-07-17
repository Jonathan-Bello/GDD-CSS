---
id: "1"
title: "Aspecto gráfico"
description: "Definición del estilo visual general del juego, sus principios formales, paleta y lineamientos de arte."
date: 2026-04-23
author: "jonathan-bello"
order: 1
coverImage: "../../assets/imgs/arte-conceptual/concepto.webp"
---

_Citadel of Solar Souls (CSS)_ utiliza una dirección de arte basada en un estilo de **dibujo vectorial minimalista**, construido con **líneas puramente rectas**, **formas geométricas claras** y **colores sólidos**. La intención visual del proyecto es transmitir un mundo futurista, limpio, tecnológico y melancólico, donde la naturaleza ha invadido una civilización avanzada sin destruir por completo su belleza ni su sentido de armonía.

El estilo debe sentirse simple de leer, fuerte en identidad y viable para producción. No se busca un acabado hiperrealista, texturizado o recargado, sino una imagen clara, elegante y reconocible, capaz de sostener tanto la exploración como el combate y la narrativa ambiental.

## Principios visuales

- Uso predominante de formas geométricas simples
- Construcción de personajes, escenarios y objetos a partir de líneas rectas
- Ausencia o mínimo uso de curvas complejas
- Colores planos y sólidos
- Lectura visual clara a primera vista
- Siluetas fuertes y fáciles de distinguir
- Estética tecnológica integrada con vegetación y ruina
- Minimalismo visual con énfasis en composición y contraste

## Paleta de colores

La identidad visual del juego se construye a partir de tres colores principales con significado narrativo y funcional.

### Blanco — Tecnología

Representa tecnología avanzada, pura y funcional.

- Usado en estructuras futuristas, interfaces y elementos activos.
- Transmite limpieza, orden y evolución.

### Verde — Naturaleza

Representa vida, crecimiento y recuperación del entorno.

- Usado en vegetación, escenarios y elementos orgánicos.
- Color dominante del entorno visual.

### Naranja — Energía, óxido y protagonista

Representa energía, peligro y desgaste tecnológico asociado al óxido.

- Color principal del protagonista.
- Usado en enemigos, puntos de interés y elementos interactivos.
- Funciona como color de acento para guiar al jugador.

### Reglas de uso del color

- El verde domina el entorno para reforzar la idea de un mundo vivo.
- El blanco define la tecnología funcional y las estructuras clave.
- El naranja indica interacción, peligro o relevancia.
- Se mantiene un uso limitado de colores por escena para conservar claridad visual.
- Las sombras se construyen con variaciones cromáticas, evitando negros puros.

### Intención visual del color

El uso del color busca transmitir un mundo donde:

- La naturaleza ha reclamado la civilización.
- La tecnología aún persiste de forma limpia y silenciosa.
- El jugador, representado por el naranja, destaca como elemento activo dentro de un entorno pasivo.

## Sensación general del mundo

El juego debe transmitir la idea de un futuro hermoso que se quedó sin humanidad. No es un mundo arrasado ni brutalmente destruido, sino un mundo detenido en una especie de decadencia funcional. Todo sigue siendo bello, aunque esté herido. Las ciudades aún conservan orden, los robots todavía operan, la vegetación ha crecido sobre la arquitectura y la energía del viejo mundo continúa respirando bajo la superficie del abandono.

## Tratamiento visual de escenarios

Los escenarios deben construirse con una lógica de capas claras, masas geométricas y composición limpia. La vegetación no debe sentirse caótica al punto de romper el estilo, sino integrada a las estructuras como una segunda piel del mundo.

### Características esperadas

- Arquitectura tecnológica de líneas rectas
- Espacios amplios y legibles
- Ruina controlada y estética
- Vegetación invadiendo muros, suelos y máquinas
- Contraste entre superficies blancas y crecimiento verde
- Detalles naranjas para focos tecnológicos, interfaces o energía

## Tratamiento visual de personajes y robots

Los personajes deben respetar el lenguaje geométrico general del proyecto. Sus diseños deben poder leerse rápidamente en silueta y comunicar su función mediante su estructura.

### Lineamientos

- Formas claras
- Rasgos simples pero distintivos
- Piezas modulares
- Apariencia tecnológica limpia o deteriorada según el caso
- Pocos detalles, pero bien seleccionados
- Expresividad contenida, apoyada en pose, color y estructura

## Tratamiento visual de UI

La interfaz debe sentirse parte del mismo universo visual. Debe compartir:

- formas geométricas
- limpieza compositiva
- colores sólidos
- jerarquía visual clara
- integración con el lenguaje tecnológico del mundo

El botón de Hemis, por ejemplo, debe reforzar esta identidad mediante un diseño simple, reconocible y consistente con la estética general.

## Función del estilo gráfico dentro del proyecto

El estilo visual no solo responde a una búsqueda estética, sino también a una necesidad de producción. La decisión de usar dibujo vectorial, líneas rectas y composición minimalista ayuda a mantener la factibilidad del desarrollo, facilita la consistencia entre assets y refuerza la identidad única del juego.

La dirección de arte debe servir al gameplay, a la narrativa y a la producción al mismo tiempo. Todo lo visual debe sentirse coherente con el mundo, con sus sistemas y con la filosofía general del proyecto.

## Arte SVG nativo integrado en Godot

Una decisión técnica y visual central del prototipo fue construir el arte del juego con archivos **SVG nativos**. Personajes, elementos de HUD, referencias de Hemis y piezas de escenario se trabajan como vectores escalables para conservar nitidez, consistencia formal y rapidez de iteración.

Esta integración es un logro técnico del proyecto porque el flujo base de Godot no está orientado a usar SVG como lenguaje visual completo de personajes y elementos jugables. Para sostenerlo se definió un pipeline propio de importación, organización de assets y adaptación de nodos, de modo que los recursos vectoriales pudieran convivir con escenas, animaciones, HUD y elementos interactivos.

En términos de producción, este enfoque permite:

- mantener coherencia entre arte conceptual, UI y assets del juego;
- reducir dependencia de sprites rasterizados;
- conservar escalabilidad visual en web y escritorio;
- conectar la identidad del juego con la naturaleza técnica de CSS y SVG.

## Referencias internas para futuros storyboards

Para futuras piezas de storyboard, arte conceptual o mockups visuales, este documento debe tomarse como base para asegurar que toda propuesta conserve:

- minimalismo geométrico
- composición clara
- sensación solarpunk
- equilibrio entre tecnología y naturaleza
- uso dominante de blanco, verde y naranja
- líneas rectas y bloques sólidos como lenguaje principal

# Referencias visuales

Las siguientes referencias fueron cuidadosamente seleccionadas para establecer y consolidar la dirección de arte del proyecto. Cada imagen demuestra un aspecto específico de los principios visuales que guían a _Citadel of Solar Souls_.

## Figuras geométricas simples

![Referencia de figuras geométricas simples](@assets/imgs/referencias/figuras.webp)

**¿Por qué?** Esta referencia define el punto de partida del apartado visual: demostrar que un dibujo vectorial puede construirse de forma simple y, aun así, verse detallado y bien resuelto. Nos interesa que el jugador perciba orden, claridad y estructura desde formas básicas, sin depender de recursos complejos. Como el proyecto aún se encuentra en etapa de prototipo, esta guía permite mantener una producción realista y coherente mientras se consolida la identidad gráfica.

## Arte vectorial minimalista

![Referencia de arte vectorial minimalista](@assets/imgs/referencias/svg.webp)

**¿Por qué?** Esta referencia se utiliza para reforzar que los colores sólidos pueden sostener tanto el fondo como los detalles visuales sin necesidad de degradados. El objetivo es conservar un estilo limpio, legible y consistente con el enfoque minimalista del juego. También funciona como guía de producción: menos complejidad técnica, mayor control de estilo y una lectura visual inmediata.

## Referencia emocional minimalista: Gris

![Referencia de paleta neutral en blanco y gris](@assets/imgs/referencias/gris.webp)

**¿Por qué?** _Gris_ se toma como referencia para mostrar cómo un estilo minimalista puede transmitir emociones profundas, especialmente sensaciones de soledad y vacío. No se trata solo de paleta o composición, sino de atmósfera: queremos que el apartado gráfico comunique estados emocionales mediante simplicidad visual, silencio cromático y dirección artística contenida.

## Referencia de diseño y cámara: Hollow Knight

![Referencia de diseño de personajes y escenarios](@assets/imgs/referencias/hollow.webp)

**¿Por qué?** _Hollow Knight_ se incorpora principalmente como referencia de mecánicas narrativas y del uso de cámara dentro de un entorno 2D. Nos interesa cómo articula exploración, ritmo y lectura espacial sin romper la inmersión. Esta referencia guía la forma en que conectaremos atmósfera, narrativa ambiental y desplazamiento visual del jugador en pantalla.

## Referencia de tono postapocalíptico esperanzador: Kipo (DreamWorks)

<img src="https://i.redd.it/kipo-and-the-age-of-wonderbeasts-2020-v0-seqag1a2g0061.png?width=1920&amp;format=png&amp;auto=webp&amp;s=d8d853d07ad22077df47c301f370aa56ab590c75" alt="Referencia de Kipo and the Age of Wonderbeasts" width="1920" height="1080" loading="lazy" decoding="async">

**¿Por qué?** _Kipo and the Age of Wonderbeasts_ se suma como referencia directa porque propone un mundo postapocalíptico donde la naturaleza domina el paisaje, pero sin caer en la estética típica de destrucción total, gris o desesperanzada. Esta mirada conecta con el objetivo visual de _CSS_: presentar un entorno verde, vivo y bonito, en el que conviven ruina tecnológica, color y sensación de aventura. La referencia nos ayuda a justificar un tono más luminoso y orgánico dentro del género postapocalíptico.

## Referencia de progresión y hostilidad: Blasphemous

![Referencia de atmósfera visual y detalle minimalista](@assets/imgs/referencias/blasfemous.webp)

**¿Por qué?** _Blasphemous_ funciona como referencia para la progresión del mapa, el aumento de dificultad y la construcción de entornos visualmente hostiles. Nos interesa en particular cómo escenarios que deberían percibirse bellos —como espacios de arquitectura religiosa— pueden comunicar tensión, peligro y decadencia al mismo tiempo. Esta dualidad entre belleza formal y agresividad del mundo es clave para el tono del proyecto.

