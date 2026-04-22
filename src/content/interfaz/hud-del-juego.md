---
id: "hud-del-juego"
title: "HUD del Juego"
description: "Elementos de interfaz visible durante el gameplay."
date: 2026-03-20
author: "jonathan-bello"
order: 2
coverImage: "/hud.jpg"
---

# HUD (Head-Up Display)

## Componentes Principales

### Barra de Salud (Esquina Superior Izquierda)

Muestra la salud actual del jugador en formato de barra y numérico.

- Color verde en salud completa
- Color amarillo en salud moderada
- Color rojo en salud crítica (<25%)

### Energía y Recursos (Esquina Superior Derecha)

Muestra los recursos especiales disponibles:

- Mana / Energía CSS
- Vidas restantes (si aplica)
- Recurso de poderío especial

### Minimapa (Esquina Superior Derecha)

Pequeño mapa del área actual mostrando:

- Posición del jugador
- NPCs cercanos
- Objetivos de misión
- Punto de salida

### Barra de Experiencia (Parte Inferior Central)

Progreso hacia el siguiente nivel con contador numérico.

### Inventario Rápido (Parte Inferior Izquierda)

Acceso directo a 4 items/habilidades equipeadas:

- Presionar números 1-4 para usar
- Mostrar cooldown de habilidades
- Indicador visual de cantidad de consumibles

### Indicador de Misión (Parte Inferior Derecha)

Muestra la misión activa actual y su objetivo primario.

### HUD de Combate

Durante combates, elementos adicionales aparecen:

- Barras de salud de enemigos
- Efectos temporales/buffs activos
- Contador de turno
- Opciones de acción rápida

## Accesibilidad

- Todos los elementos son escalables
- Colores accesibles para daltonismo
- Opción de ocultar HUD completamente
- Modo interlocutor de pantalla compatible
