# Análisis de coherencia del GDD (Citadel of Solar Souls)

Fecha de análisis: 2026-04-29

## 1) Coherencia general: fortalezas

- El GDD mantiene una **identidad central consistente**: metroidvania/souls-like educativo donde CSS es mecánica principal de progresión y combate.
- Existe una buena alineación entre:
  - pilares de diseño (juego primero, aprender haciendo),
  - loop jugable (explorar → desbloquear propiedad → aplicar → jefe),
  - y sistema de munición CSS (propiedades como habilidades).
- La dirección de arte y la narrativa ambiental son coherentes con el tono del mundo (solarpunk en decadencia funcional).
- El rol de Xanat como avatar silencioso es compatible con el enfoque de exploración y descubrimiento.

## 2) Incoherencias o fricciones detectadas

### 2.1 Fechas desactualizadas en ficha resumen
- Se indica “demo prevista para el viernes 24 de abril de 2026”.
- A fecha de este análisis (2026-04-29), esa fecha ya pasó.
- Recomendación: cambiar por estado verificable (p. ej. “demo entregada el 2026-04-24” o “nueva fecha objetivo: YYYY-MM-DD”).

### 2.2 Género redactado de forma ambigua
- Se mezcla “videojuego educativo / serious game / aventura interactiva / metroidvania / souls”.
- Esto puede confundir stakeholders (marketing, diseño, producción).
- Recomendación: definir un **género principal** y 2-3 etiquetas secundarias.

### 2.3 Vocabulario variable de zonas seguras
- Aparecen “puntos de control”, “zonas de control”, “zonas seguras” y comparación con “hoguera”.
- El concepto es claro, pero la terminología no está normalizada.
- Recomendación: elegir un término canónico y usarlo en todas las secciones.

### 2.4 Alcance de auto-target sin especificación operativa
- Se menciona como opción de accesibilidad, pero falta detalle de comportamiento.
- Riesgo: implementación inconsistente y pruebas difíciles.
- Recomendación: agregar reglas de prioridad, distancia máxima, bloqueo de objetivo y condiciones de desactivación.

## 3) Secciones que necesitan más especificación (prioridad alta)

### A. Sistema de daño por sinergia CSS
Falta definición cuantitativa para poder implementar balance y QA:
- fórmula exacta de daño;
- porcentajes de bono por coincidencia propiedad/valor;
- penalización por propiedades no desbloqueadas;
- acumulación de bonos cuando hay múltiples coincidencias;
- límites (cap mínimo/máximo de daño).

### B. Progresión por zonas y curva de aprendizaje
Está bien el flujo macro, pero falta granularidad de producción:
- cuántas zonas tendrá el juego;
- qué propiedades se desbloquean por zona;
- prerequisitos de ruta/metroidvania;
- dificultad objetivo por zona (enemigos, jefe, puzzles);
- duración objetivo por zona.

### C. Combate y tuning base
Necesita tabla de parámetros iniciales:
- vida base del jugador;
- i-frames del dash;
- cooldown de dash;
- cadencia/disparo;
- daño base por tipo de munición;
- curación (cargas de Luz Solar por checkpoint y escalado).

### D. Enemigos y jefes
Se menciona su importancia, pero no hay especificación funcional suficiente:
- taxonomía de enemigos (melee/rango/élite);
- set de atributos CSS por facción;
- patrones de ataque y ventanas de castigo;
- jefes como examen de propiedades concretas;
- criterios de telemetría para dificultad justa.

### E. Puzzles y diseño de cápsulas de desafío
Falta especificar:
- plantilla de diseño de cápsula (setup, enseñanza, validación);
- condiciones de éxito/fracaso;
- tiempo objetivo por reto;
- pistas y recuperación de error para evitar frustración.

### F. Interfaz de edición CSS (UX)
La idea está clara, pero falta definición de UX/UI de detalle:
- validación en tiempo real (sintaxis, propiedades bloqueadas, feedback visual);
- comportamiento del botón “Guardar y usar” ante errores;
- soporte de presets por slot;
- feedback del impacto de la munición (preview de daño/sinergia).

## 4) Secciones que necesitan más especificación (prioridad media)

### G. Economía y recompensas
No queda claro:
- qué recompensas da cada actividad;
- si hay moneda y tiendas (se sugiere por arte conceptual de comerciante);
- costes de mejora y su impacto en ritmo.

### H. Narrativa operativa
Hay buen marco narrativo, pero faltan artefactos de guion de producción:
- estructura de actos/hitos;
- lista de eventos obligatorios;
- gating narrativo vs gating mecánico;
- tono de diálogos y longitud por interacción.

### I. Accesibilidad integral
Solo aparece auto-target como ejemplo.
Falta checklist de accesibilidad:
- remapeo completo de controles;
- ayudas visuales (contraste, tamaño de texto, daltónicos);
- opciones de dificultad asistida;
- velocidad de texto y subtítulos.

## 5) Sugerencia de normalización mínima inmediata

1. Corregir fechas y estado de demo en Ficha Resumen.
2. Definir taxonomía de géneros (principal + secundarios).
3. Crear glosario canónico (punto de control, cápsula, slot, sinergia CSS).
4. Añadir anexos de tuning (combate/daño/progresión) en formato tabular.
5. Añadir matriz “propiedad CSS ↔ uso en combate/exploración/puzzle”.

## 6) Dictamen

El GDD es **coherente a nivel conceptual** y transmite muy bien la propuesta de valor del proyecto. Sin embargo, para pasar a ejecución con menor riesgo, faltan especificaciones numéricas y de implementación en combate, progresión, UX del editor y diseño de enemigos/puzzles. En su estado actual, es un GDD sólido para visión y dirección, pero todavía incompleto para producción y balance fino.
