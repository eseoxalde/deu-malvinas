# 🗺️ Historias de Malvinas

Este es un sitio web interactivo desarrollado con [Next.js](https://nextjs.org/) y [React](https://reactjs.org/), en el marco de la materia **Diseño Centrado en el Usuario** del a Facultad de Informática de la Universidad Nacional de La Plata. El objetivo del proyecto es visibilizar y preservar las historias de los excombatientes de la Guerra de Malvinas a través de recursos visuales e informativos accesibles.

El sitio cuenta con un mapa interactivo, una línea de tiempo de eventos históricos, resoluciones internacionales, y distintas secciones temáticas que invitan a reflexionar sobre la memoria colectiva.

---

## 🚀 Tecnologías utilizadas

- **Framework**: Next.js + React
- **Lenguaje**: TypeScript
- **UI y Estilos**: Bootstrap, Lucide React
- **Mapas**: Leaflet, React Leaflet, Leaflet Default Icon Compatibility
- **Internacionalización**: Next-Intl
- **Desarrollo**: ESLint, http-proxy-middleware, Next.js CORS

---

## 🧪 Instalación y uso local

Para correr el servidor de desarrollo localmente:

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## 🐳 Docker

Podés correr este proyecto en un contenedor Docker.

### 🔧 Build

```bash
docker build -t historias-malvinas .
```

### 🚀 Run

```bash
docker run -p 3000:3000 historias-malvinas
```

Después accedé desde el navegador a: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Despliegue

El sitio se encuentra desplegado en **Vercel**:  
👉 [https://deu-malvinas-nine.vercel.app/](https://deu-malvinas-nine.vercel.app/)

---

## 🧑‍💻 Autores

- Ese Kai Oxalde Apellido — [@eseoxalde](https://github.com/eseoxalde)

Proyecto académico — **Diseño Centrado en el Usuario**  
Facultad de [Informática]

---

## 📄 Licencia

Este proyecto se presenta con fines académicos. Sin fines comerciales.
