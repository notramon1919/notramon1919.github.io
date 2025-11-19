# Despliegue en GitHub Pages

Este portfolio está listo para ser desplegado en GitHub Pages. Sigue estos pasos:

## Configuración Inicial

1. **Crea un repositorio en GitHub**
   - Ve a GitHub y crea un nuevo repositorio
   - Nombra el repositorio como: `tu-usuario.github.io` (para sitio personal) o cualquier nombre (para sitio de proyecto)

2. **Conecta tu código al repositorio**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

## Método 1: Despliegue Automático con GitHub Actions

1. **Crea el archivo de workflow**
   
   Crea `.github/workflows/deploy.yml` con el siguiente contenido:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. **Actualiza vite.config.ts**

   Agrega la propiedad `base` según tu repositorio:

   ```typescript
   export default defineConfig(({ mode }) => ({
     base: '/', // Para tu-usuario.github.io
     // O base: '/nombre-repositorio/', para sitio de proyecto
     // ... resto de la configuración
   }))
   ```

3. **Configura GitHub Pages**
   - Ve a Settings → Pages en tu repositorio
   - En "Source" selecciona "GitHub Actions"
   - Haz push a main y el sitio se desplegará automáticamente

## Método 2: Despliegue Manual

1. **Instala gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Actualiza package.json**
   
   Agrega en la sección de scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Actualiza vite.config.ts**
   ```typescript
   base: '/nombre-repositorio/', // Solo si NO es tu-usuario.github.io
   ```

4. **Despliega**
   ```bash
   npm run deploy
   ```

5. **Configura GitHub Pages**
   - Ve a Settings → Pages
   - En "Source" selecciona la rama "gh-pages"
   - Guarda los cambios

## Personalización

Antes de desplegar, recuerda personalizar:

- [ ] Nombre y descripción en `index.html`
- [ ] Tu información personal en `Hero.tsx`
- [ ] Tu foto de perfil (reemplaza la URL en Hero.tsx)
- [ ] Enlaces a tus redes sociales (GitHub, LinkedIn, Email)
- [ ] Secciones de experiencia, habilidades y proyectos
- [ ] Información de contacto

## Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio:

1. Crea un archivo `public/CNAME` con tu dominio:
   ```
   tudominio.com
   ```

2. Configura los DNS de tu dominio:
   - Para dominio apex: A records apuntando a las IPs de GitHub
   - Para subdominios: CNAME record apuntando a tu-usuario.github.io

3. En GitHub Settings → Pages → Custom domain, ingresa tu dominio

## Verificación

Una vez desplegado, tu sitio estará disponible en:
- `https://tu-usuario.github.io` (sitio personal)
- `https://tu-usuario.github.io/nombre-repositorio` (sitio de proyecto)

## Problemas Comunes

### Página en blanco
- Verifica que `base` en `vite.config.ts` sea correcto
- Asegúrate de que la rama de despliegue sea correcta

### Rutas 404
- GitHub Pages no soporta SPA routing por defecto
- Este portfolio usa navegación con hash (#) que funciona bien
- Alternativamente, puedes agregar un `404.html` con redirección

### Cambios no aparecen
- El despliegue puede tomar unos minutos
- Limpia la caché del navegador (Ctrl + Shift + R)
- Verifica que el build se haya completado correctamente

## Recursos

- [Documentación de GitHub Pages](https://docs.github.com/pages)
- [Documentación de Vite](https://vitejs.dev/guide/static-deploy.html)
- [Documentación de gh-pages](https://github.com/tschaub/gh-pages)
