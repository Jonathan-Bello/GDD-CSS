---
id: "6"
title: "Auto-target"
description: "Especificación operativa del sistema opcional de fijado y priorización de objetivos para accesibilidad en combate."
date: 2026-04-23
author: "jonathan-bello"
order: 6
coverImage: ""
---

## Alcance

El **auto-target** es una asistencia de accesibilidad. Solo opera cuando está activado en el menú correspondiente.

## Reglas operativas (provisionales)

1. Solo funciona si la opción **Auto-target** está activada.
2. Prioriza al enemigo más cercano dentro de un **cono frontal de 120°**.
3. Distancia máxima de fijado: **9 unidades**.
4. Si el objetivo muere, sale del cono o supera distancia máxima, la fijación se cancela.
5. Un **jefe** tiene prioridad sobre enemigos menores si ambos están en rango válido.
6. El jugador puede fijar/liberar objetivo manualmente.
7. El apuntado manual arriba/abajo/diagonal prevalece sobre el auto-target.

## Orden de evaluación (provisional)

```mermaid
flowchart TD
    A[Auto-target activado] --> B{Hay jefe válido en cono 120° y <= 9u}
    B -- Sí --> C[Fijar jefe]
    B -- No --> D{Hay enemigo menor válido}
    D -- Sí --> E[Fijar enemigo más cercano]
    D -- No --> F[Sin fijado]
    C --> G{Objetivo válido sigue vivo/en rango/en cono}
    E --> G
    G -- No --> F
    G -- Sí --> H[Mantener fijado]
```

## Interacción con control manual

- Cuando el jugador aplica entrada direccional manual de disparo (arriba/abajo/diagonal), esa entrada tiene prioridad.
- Al soltar la entrada manual, el sistema puede retomar auto-target si sigue activo y encuentra objetivo válido.

## Criterios de QA (provisionales)

- Cambio de objetivo en menos de **150 ms** tras muerte del objetivo fijado.
- Cancelación de fijado inmediata al salir de cono o distancia.
- Sin cambios de objetivo “erráticos” cuando hay un solo candidato válido.
