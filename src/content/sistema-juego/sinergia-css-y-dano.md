---
id: "7"
title: "Sinergia CSS y daño"
description: "Modelo provisional de cálculo de daño para munición CSS contra enemigos con metadata de propiedades y valores."
date: 2026-04-23
author: "jonathan-bello"
order: 7
coverImage: "../../assets/imgs/arte-conceptual/guardianes-ciudadela.png"
---

## Parámetros base (**provisionales**)

| Parámetro | Valor |
|---|---:|
| Daño base | 10 |
| Bono por propiedad correcta | +4 |
| Bono por valor correcto | +3 |
| Bono por sinergia completa | +5 |
| Propiedad desbloqueada pero irrelevante | +0 |
| Propiedad no desbloqueada | No aplica y genera error visual |
| Daño mínimo final | 4 |
| Daño máximo final | 30 |
| Máx. coincidencias útiles por bala | 3 |
| Máx. sinergia mayor por disparo | 1 |

## Fórmula base (**provisional**)

\[
DañoFinal = clamp(4, 30, 10 + B_prop + B_val + B_sin)
\]

Donde:

- `B_prop = 4 * N_prop_validas`
- `B_val = 3 * N_valores_validos`
- `B_sin = 5 * N_sinergia_mayor`

Restricciones:

- `N_prop_validas <= 3`
- `N_valores_validos <= N_prop_validas`
- `N_sinergia_mayor <= 1`

## Definiciones operativas

- **Propiedad correcta:** la propiedad de la bala existe también en metadata del enemigo.
- **Valor correcto:** además de propiedad correcta, coincide el valor exacto.
- **Sinergia completa (mayor):** se activa una vez por disparo cuando al menos una coincidencia propiedad+valor cumple criterio prioritario.
- **Propiedad desbloqueada pero irrelevante:** propiedad válida en abstracto, pero sin match con enemigo objetivo. Aporta +0.
- **Propiedad no desbloqueada:** se ignora en cálculo y muestra error visual en editor.

## Reglas de acumulación (**provisionales**)

1. Se evalúan solo propiedades desbloqueadas.
2. Se toman como máximo 3 coincidencias útiles por bala.
3. El bono de sinergia completa se aplica máximo una vez por disparo.
4. El resultado final siempre se limita entre 4 y 30.

## Ejemplos rápidos

| Caso | Cálculo | Resultado |
|---|---|---:|
| Sin coincidencias | 10 + 0 + 0 + 0 | 10 |
| 1 propiedad correcta sin valor | 10 + 4 + 0 + 0 | 14 |
| 1 propiedad + valor + sinergia mayor | 10 + 4 + 3 + 5 | 22 |
| 3 propiedades + 2 valores + sinergia mayor | 10 + 12 + 6 + 5 | 33 -> **30** (cap) |
| Configuración débil con penalizadores externos | 2 -> **4** (floor) | 4 |

## Integración con UI

- Propiedad bloqueada: subrayado rojo + tooltip “propiedad no desbloqueada”.
- Propiedad válida sin match: estado neutral.
- Preview de daño debe mostrar rango esperado y causa de bonificaciones.

