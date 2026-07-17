# Publicar una demo web

1. Exporta la demo desde Godot como Web y copia todos sus archivos a `public/demos/<slug>/`.
2. Crea una página Astro e inserta el componente reutilizable:

```astro
---
import LazyDemo from "../components/LazyDemo.astro";

const gameUrl = "/demos/<slug>/index.html";
---

<LazyDemo gameUrl={gameUrl} title="Nombre de la demo" />
```

3. Conserva la opción de abrir la demo en una pestaña nueva con un enlace a `gameUrl`.

`LazyDemo` no descarga el ejecutable ni sus archivos WebAssembly hasta que la persona selecciona **Iniciar demo**. La carpeta `public/demos/` ya tiene la política de seguridad necesaria para que los exportes web de Godot funcionen.
