# 🐟 Encebollados Las 5 Esquinas — Landing Page Angular

Landing page one-page para el restaurante **Encebollados Las 5 Esquinas**, Sur de Quito.

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+ 
- npm 9+

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm start
# → http://localhost:4200
```

### Build para producción

```bash
npm run build:prod
# Archivos en /dist/cinco-esquinas/browser/
```

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          ← Navegación fija con scroll detection
│   │   ├── hero/            ← Sección principal con CTA
│   │   ├── proof-bar/       ← Franja de social proof (Google, reseñas, top 3)
│   │   ├── menu/            ← Grid de productos con variantes
│   │   ├── reviews/         ← Reseñas reales de clientes
│   │   ├── location/        ← Mapa + horario + dirección
│   │   ├── footer/          ← Pie de página
│   │   └── float-buttons/   ← Botones flotantes WhatsApp + Maps
│   ├── models/
│   │   └── index.ts         ← Interfaces TypeScript
│   ├── services/
│   │   └── content.service.ts  ← Datos centralizados del negocio
│   └── app.component.ts     ← Root component con scroll listener
├── styles.scss              ← Variables globales, reset, utilidades
└── index.html
```

---

## ⚙️ Personalización

### 1. Número de WhatsApp
En `src/app/services/content.service.ts`:
```ts
readonly whatsappNumber = '593XXXXXXXXX'; // ← Reemplaza aquí
```

### 2. Coordenadas del Mapa
En `src/app/components/location/location.component.ts`, actualiza la URL del iframe con las coordenadas reales de tu local.

### 3. Imágenes del Menú
En `src/app/services/content.service.ts`, reemplaza las URLs de Unsplash en `menuItems[].imageUrl` con fotos reales de tus platos.

### 4. Reseñas
Edita el array `reviews` en `content.service.ts` para agregar o modificar testimonios.

---

## 🎨 Paleta de Colores

| Variable          | Color     | Uso                    |
|-------------------|-----------|------------------------|
| `--naranja`       | `#F4631A` | CTAs, acentos          |
| `--naranja-deep`  | `#C94E0E` | Hover de botones       |
| `--marino`        | `#0B2545` | Fondos oscuros, textos |
| `--crema`         | `#FDF6EC` | Fondo general          |
| `--blanco`        | `#FFFFFF` | Sección menú           |

---

## 📱 Mobile-First

- Navbar con menú hamburguesa en móvil
- Botones flotantes (WhatsApp + Maps) siempre visibles
- Grid responsive con `auto-fit`
- Fuentes fluidas con `clamp()`

---

*Desarrollado con Angular 17 Standalone Components*
