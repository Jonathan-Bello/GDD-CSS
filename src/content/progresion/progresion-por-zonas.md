---
id: "5"
title: "Progresión por zonas"
description: "Estructura macro de progresión por zonas con objetivos narrativos y jugables, gating y desbloqueos clave."
date: 2026-04-23
author: "jonathan-bello"
order: 5
coverImage: "../../assets/imgs/arte-conceptual/hub.png"
---

## Estado implementado del demo vertical slice

| Zona / escena | Estado | Función en demo | Propiedades CSS asociadas | Evidencia esperada |
|---|---|---|---|---|
| `Tutorial_Cueva` | Terminada para demo | Enseñar movimiento, Pilar solar, editor CSS, creación de bala, plataformas, bloques y combate básico | `fill`, `width`, `height` | Capturas de tutorial, Pilar solar, editor y combate |
| `Ciudadela/Citadel` | Avance parcial | Mostrar continuidad del mundo, ruta de combate, hub y dirección visual | `fill`, `stroke`, `opacity` | Capturas como avance visual/jugable, sin declararla zona final |
| Combate con jefe | Avance parcial | Evidenciar estructura de arena, cierre de ruta y preparación para prueba mayor | `fill`, `stroke`, `opacity` | Capturas como avance técnico, sin declarar IA final del jefe |

## Vista general futura (**provisional**)

| Zona | Función narrativa | Objetivo jugable | Propiedades CSS | Enemigos esperados | Jefe o prueba mayor | Dificultad objetivo | Duración objetivo | Gating mecánico | Desbloqueo |
|---|---|---|---|---|---|---|---|---|---|
| Tutorial/Cueva | Despertar de Xanat y primer contacto con Hemis | Aprender loop base de combate, edición y Pilar solar | `fill`, `width`, `height` | Drones de mantenimiento, centinelas básicos | Guardián de acceso | Baja | 20-35 min | Uso básico de sinergia CSS | Salida a la Ciudadela |
| Ciudadela/Citadel | Comprender la ciudad y su decadencia funcional | Consolidar movilidad, lectura de amenazas y afinidad visual | `stroke`, `opacity` | Patrullas, torretas ligeras, especialistas de bloqueo | Supervisor del tránsito | Media | 60-90 min | Requiere lectura de propiedad y valor | Acceso a zonas bajas |
| Cloacas / zonas bajas | Descubrir infraestructura crítica y riesgo sistémico | Dominar planos y posicionamiento táctico | `z-index`, `position` | Enemigos anfibios, emboscadores, élites de capa | Núcleo de purga | Media-alta | 70-100 min | Requiere control de plano y timing | Elevador hacia Torre |
| Torre | Confrontación con verdad del sistema | Integrar todas las capas de juego | `transform`, `scale`, `transition-duration`, `animation-delay` | Élites de defensa, guardianes avanzados | Prueba mayor final | Alta | 90-120 min | Dominio de combinaciones CSS | Ruta de cierre y epílogo interactivo |

## Notas de implementación

- Cada zona debe introducir máximo 1-2 propiedades nuevas para controlar carga cognitiva.
- Cada propiedad nueva debe tener aplicación inmediata en combate y entorno.
- El jefe/prueba mayor debe evaluar el bloque de aprendizaje de su zona.

