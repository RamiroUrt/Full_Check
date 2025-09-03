# ⚙ Full Check - Proyecto en Construcción

![Portada](./public/favicon.ico)

# 🚧 Proyecto en Construcción

Este proyecto es un **sitio web en desarrollo** creado con **Next.js**.  
Actualmente se encuentra en construcción: se han implementado las secciones principales y el sistema de datos con **JSON Server**, y queda pendiente la integración de nuevas funcionalidades como un **chatbox con IA**.

---

---

## 🛠️ Tecnologías Utilizadas

- **Next.js** → Framework principal para el frontend y backend.  
- **React** → Librería de JavaScript para la construcción de interfaces.  
- **Leaflet.js** → Librería para renderizar mapa interactivo.  
- **JSON Server** → API fake para simular datos de pedidos y productos.  
- **CSS Modules / Tailwind (si aplica)** → Estilos del proyecto.

---

## 📦 Instalación y Uso

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/RamiroUrt/Full-Check.git
cd Full-Check
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Levantar el servidor de desarrollo
```bash
npm run dev
```

### 4️⃣ Levantar JSON Server para la API fake
### 📦 Parts API
Si tus datos están dentro de la carpeta `data/`:
```bash
cd src
npm json-server --watch data/parts.json --port 3001
```
La API quedará disponible en:  
👉 [http://localhost:3001](http://localhost:3001)

### 📦 Used API
```bash
cd src
npm json-server --watch data/used.json --port 3002
```
La API quedará disponible en: 
👉 [http://localhost:3002](http://localhost:3002).

---
## 📂 Estructura del proyecto
```bash
FULL_CHECK_PROJECT/
│── public/
│   ├── svg/           # Recursos públicos 
│   └── favicon.ico
│
│── src/
│   ├── app/          
│   ├── assets/        
│   ├── components/   
│   ├── constants/     
│   ├── data/         
│   ├── global/        
│   ├── lib/           
│   └── types/         
│
├── package.json
├── tsconfig.json
├── README.md
```
## 📍 Funcionalidades Actuales

✔️ Visualización de sucursales en un mapa interactivo con **Leaflet**.  
✔️ Uso de **JSON Server** como backend fake.  
❌ En construcción: Sistema de pedidos.  
❌ En construcción: Chatbox con IA.



## 📌 Estado del proyecto
🔧 **En construcción**  
Próximamente: integración de pedidos, gestión de usuarios y chat con IA.

---

