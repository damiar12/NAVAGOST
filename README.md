# NAVAGOST Metal Solutions — Sitio web

Web corporativa de Navagost Metal Solutions (mantenimiento industrial y fabricación de maquinaria a medida en Castellón). Vite + React + TypeScript.

Repositorio: https://github.com/damiar12/NAVAGOST

## Crear el proyecto en local

**Requisitos:** Node.js.

1. Clona el repositorio (o entra en la carpeta si ya lo tienes):
   ```
   git clone https://github.com/damiar12/NAVAGOST.git
   cd NAVAGOST
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. (Opcional, no necesario hoy) El proyecto viene de una plantilla de Google AI Studio que espera una variable `GEMINI_API_KEY` en `.env.local`. El componente que la usaba (`FloatingAI`, chat flotante de IA) está desactivado y no se importa en `App.tsx`, así que puedes dejarla vacía o no crear el archivo — el sitio funciona igual sin ella.
4. Arranca el servidor de desarrollo:
   ```
   npm run dev
   ```
   Se sirve en `http://localhost:8080`.
5. Genera el build de producción cuando quieras comprobarlo antes de publicar:
   ```
   npm run build
   npm run preview
   ```
   `npm run build` deja el resultado en `dist/`; `npm run preview` lo sirve en local tal y como quedaría publicado.

## Compartir / publicar la web (Vercel)

El sitio se despliega en **Vercel**, conectado directamente al repositorio de GitHub (`damiar12/NAVAGOST`, rama `main`).

1. **Despliegue automático:** cualquier `git push` a `main` dispara un nuevo despliegue en Vercel sin pasos manuales.
2. **Desplegar manualmente** (sin esperar al push), si tienes la Vercel CLI:
   ```
   npm install -g vercel
   vercel login          # solo la primera vez
   vercel --prod
   ```
   ejecutado desde la raíz de este proyecto.
3. **URL pública:** la asigna Vercel al proyecto — se ve y se gestiona (incluido un dominio propio si se añade) en el dashboard de Vercel, dentro de `Project → Domains`.
4. **Para compartir la web con alguien** solo hace falta esa URL pública; no necesita acceso al repositorio ni tener el proyecto corriendo en local.
5. Variables de entorno: no hay ninguna obligatoria para que el sitio funcione en producción (ver punto 3 de "Crear el proyecto en local"). Si en algún momento se reactiva el chat de IA, la variable a añadir en Vercel sería `GEMINI_API_KEY` (`Project → Settings → Environment Variables`).
