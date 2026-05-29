---
id: "2"
title: "Otros Game Loops"
description: "Ciclos secundarios de progresión que sostienen la experiencia de combate, exploración, edición de munición y aprendizaje."
date: 2026-04-23
author: "jonathan-bello"
order: 2
coverImage: "../../assets/imgs/arte-conceptual/hub.png"
---

Además del loop principal de progresión por zonas, _Citadel of Solar Souls (CSS)_ se sostiene sobre varios ciclos secundarios que operan de forma constante durante la partida. Estos loops son más cortos, más específicos y están ligados a aspectos concretos de la experiencia, como el combate, el aprendizaje, la edición de munición o la exploración metroidvania.

Cada uno de estos loops refuerza una dimensión distinta del juego, pero todos deben mantenerse conectados con la lógica central del proyecto: aprender jugando y jugar aprendiendo.

## Loop de combate

El combate se basa en observar, esquivar, reposicionarse, disparar y volver a leer la situación. El jugador no debe depender de intercambios estáticos de daño, sino de movilidad, adaptación y uso correcto de la munición disponible.

```mermaid
flowchart LR
    A[Detectar enemigo] --> B[Leer patrón o amenaza]
    B --> C[Esquivar o reposicionarse]
    C --> D[Atacar con munición actual]
    D --> E[Evaluar resultado]
    E --> B
```

Este loop debe sentirse ágil y justo. El jugador aprende de cada enfrentamiento, reconoce patrones y mejora su uso del movimiento y del disparo.

## Loop de aprendizaje

El aprendizaje en el juego sigue un ciclo práctico. El jugador descubre una propiedad, entiende para qué sirve, la prueba dentro del sistema y termina integrándola como parte de su conocimiento funcional.

```mermaid
flowchart TD
    A[Descubrir nueva propiedad] --> B[Leer o recibir contexto]
    B --> C[Probarla en un reto]
    C --> D[Comprender su uso]
    D --> E[Aplicarla en el mundo real del juego]
    E --> F[Dominarla]
```

Este loop convierte cada nuevo concepto de CSS en una herramienta viva y no en información memorizada sin contexto.

## Loop de edición de munición

La creación de balas personalizadas es uno de los núcleos del juego. Este loop ocurre cuando el jugador llega a un Pilar solar y decide preparar o ajustar su munición antes de volver al mapa.

```mermaid
flowchart LR
    A[Llegar al Pilar solar] --> B[Abrir editor]
    B --> C[Escribir propiedades CSS]
    C --> D[Visualizar resultado]
    D --> E[Consultar a Hemis si es necesario]
    E --> C
    D --> F[Guardar y equipar munición]
    F --> G[Regresar al mapa]
```

Este loop debe ser breve, claro y funcional, de forma que editar munición se sienta como una extensión natural de la preparación táctica.

## Loop de exploración

La exploración sigue una estructura típica de descubrimiento, bloqueo y regreso con nuevas herramientas. Esto acerca al juego a una lógica de metroidvania simplificada.

```mermaid
flowchart TD
    A[Explorar nueva área] --> B[Encontrar ruta bloqueada]
    B --> C[Seguir explorando]
    C --> D[Desbloquear nueva habilidad o propiedad]
    D --> E[Regresar a ruta anterior]
    E --> F[Abrir nuevo camino]
    F --> G[Acceder a contenido nuevo]
```

Este loop hace que el mapa se sienta conectado y que las habilidades adquiridas tengan una utilidad espacial real.

## Loop de descanso y recuperación

Los pilares solares cumplen una función de respiro, preparación y reinicio parcial de recursos. El jugador llega a ellos después de superar una serie de riesgos y los utiliza para reorganizarse antes de volver al peligro.

```mermaid
flowchart LR
    A[Exploración o combate] --> B[Llegar a pilar solar]
    B --> C[Recuperar cargas de Luz Solar]
    C --> D[Editar munición si es necesario]
    D --> E[Retomar exploración]
```

