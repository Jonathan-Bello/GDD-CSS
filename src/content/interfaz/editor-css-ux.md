---
id: "3"
title: "Editor CSS UX"
description: "Especificación de experiencia de usuario para el editor de munición CSS en Pilar solar."
date: 2026-04-23
author: "jonathan-bello"
order: 3
coverImage: "../../assets/imgs/arte-conceptual/jefe-final.webp"
---

## Estructura general

Interfaz activa al entrar a un **Pilar solar**:

1. **Lienzo** (preview visual de munición).
2. **Editor de código** (entrada CSS).
3. **Chat de Hemis** (apoyo contextual/pedagógico).

## Validación en tiempo real

| Estado | Criterio | Feedback visual |
|---|---|---|
| Válida y desbloqueada | Propiedad existente + desbloqueada + sintaxis correcta | Verde + check |
| Válida pero bloqueada | Propiedad existente pero aún no desbloqueada | Ámbar + candado |
| Sintaxis inválida | Error de escritura/estructura | Rojo + subrayado + mensaje |

## Botón “Guardar y usar”

- Se habilita solo si no hay errores de sintaxis bloqueantes.
- Si hay propiedades bloqueadas, permite guardar pero esas reglas no aplican al cálculo.
- Debe mostrar resumen previo: propiedades válidas, inválidas y estimación de sinergia.

## Presets por slot de munición

- Cada **slot de munición** puede guardar 1 preset activo.
- El jugador puede renombrar preset (opcional, **provisional**).
- Cambio de slot en combate no modifica presets; solo los equipa.

## Preview visual y estimación de daño/sinergia

- **Preview visual:** forma/color/comportamiento básico de la bala.
- **Preview estimado:** rango de daño esperado según matches conocidos.
- Debe explicar por qué se gana bono (propiedad, valor, sinergia mayor).

## Relación entre lienzo, editor y Hemis

- El editor es la fuente de verdad.
- El lienzo traduce el resultado en feedback visual inmediato.
- Hemis ofrece sugerencias cuando hay errores repetidos o configuración subóptima.

