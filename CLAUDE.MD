# 💚 DRA. MAIKEIRY BÁEZ | ODONTOLOGÍA INTEGRAL — CLAUDE.md DEFINITIVO
## Web Premium Clínica #9 · Personal Brand · Verde Natural · Referencia UntuCare

---

## ⚠️ INSTRUCCIÓN #1 — LIMPIAR ANTES DE CONSTRUIR

```
ANTES DE ESCRIBIR CUALQUIER CÓDIGO:
1. Elimina todo en /src/components/
2. Elimina todo en /src/sections/
3. Ejecuta: npm install framer-motion
4. Lee este CLAUDE.md completo
5. Construye desde cero limpio
```

---

## 🎯 VISIÓN DE DISEÑO

**ESTA ES PERSONAL BRAND — La Dra. Maikeiry Báez ES la clínica.**
A diferencia de #3 (Dra. Massiel), esta usa el verde como color dominante
y la referencia es UntuCare (foto full cover, fotos inclinadas, servicios numerados).

**Estética:** Natural Health Green — verde esmeralda del logo + blanco puro
+ detalles de verde claro. Transmite salud, naturaleza, vida sana.
**Diferenciador único:** SEDACIÓN CONSCIENTE — ninguna otra clínica del portafolio
tiene esto. Debe ser prominente.
**Referencia UntuCare:** Hero full-cover con overlay, texto blanco, badge "10K+",
fotos inclinadas en about section, servicios con numeración 01/02/.
**Slogan integrado:** "Dientes sanos para una vida sana 💚"
**Sensación:** "Esta doctora cuida mi salud bucal como parte de mi bienestar total.
Moderna, accesible, confiable, y ofrece sedación si tengo miedo al dentista."

---

## 🎨 SISTEMA DE DISEÑO — NATURAL HEALTH GREEN

### Colores
```css
:root {
  /* Fondos */
  --bg-base:    #F2FAF5;         /* Verde muy muy claro */
  --bg-white:   #FFFFFF;
  --bg-section: #E8F5ED;         /* Verde suavísimo */
  --bg-dark:    #0D2218;         /* Verde casi negro — secciones especiales */

  /* Verde — color del logo y la marca */
  --green:      #2E7D32;         /* Verde oscuro del logo */
  --green-mid:  #43A047;         /* Verde medio */
  --green-bright: #66BB6A;       /* Verde brillante */
  --green-light: #A5D6A7;        /* Verde claro */
  --green-pale: #E8F5E9;         /* Verde palidísimo */

  /* Blanco cálido — contraste con verde */
  --warm-white: #FAFFFE;         /* Casi blanco con tinte verde */

  /* Acento: lima limón — pop de color jovial */
  --lime:       #8BC34A;         /* Lima — botones secundarios */
  --lime-pale:  #F1F8E9;         /* Lima muy claro */

  /* Textos */
  --text-dark:  #0D2218;         /* Verde muy oscuro */
  --text-body:  #1B4332;         /* Verde oscuro cuerpo */
  --text-muted: #6BAE84;         /* Verde grisáceo */

  /* Bordes y sombras */
  --border:     #C8E6C9;
  --shadow-sm:  0 2px 14px rgba(46,125,50,0.08);
  --shadow-md:  0 6px 36px rgba(46,125,50,0.12);
  --shadow-lg:  0 20px 60px rgba(46,125,50,0.16);
  --shadow-green: 0 8px 28px rgba(67,160,71,0.32);
}
```

### Tipografía
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

```css
/* Títulos: Playfair Display — elegante pero accesible */
--font-display: 'Playfair Display', serif;

/* Body/UI: Nunito — amigable, redondeado, natural */
--font-body: 'Nunito', sans-serif;

/* Escala */
--text-hero:  clamp(42px, 5.5vw, 78px);
--text-h2:    clamp(30px, 3.5vw, 52px);
--text-h3:    clamp(18px, 2vw, 24px);
--text-body:  16px;
```

### Espaciado
```css
section    { padding: 120px 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 56px; }
/* Mobile: 80px 0 | container: 0 20px */
```

---

## 🏗️ STACK

```bash
npm install framer-motion
```

---

## 📁 ESTRUCTURA

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── AnimatedCounter.tsx
│   ├── SectionLabel.tsx
│   ├── ServiceItem.tsx        ← Item de servicio con numeración
│   └── WhatsAppButton.tsx
├── sections/
│   ├── HeroSection.tsx        ← ⭐ UntuCare full-cover verde
│   ├── AboutSection.tsx       ← Fotos inclinadas (UntuCare)
│   ├── ServicesSection.tsx    ← 11 servicios + Sedación destacada
│   ├── SedationSection.tsx    ← ⭐ Sección especial Sedación Consciente
│   ├── CEOSection.tsx         ← Dra. Maikeiry — la marca
│   ├── ScheduleSection.tsx    ← Horario L-V 9-7pm
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
├── App.tsx
└── index.css
```

---

## 📄 SECCIONES — ESPECIFICACIONES EXACTAS

---

### 1. NAVBAR

```tsx
// sticky, bg blanco blur, altura: 68px

// Izquierda:
// Diente SVG verde con corazón (logo) + texto
// "Dra. Maikeiry Báez" Playfair Display 700 Italic, color var(--green)
// "Odontología Integral" Nunito 400 11px text-muted

// Centro: Nunito 600 14px
//   HOME · ABOUT US · SERVICE · TESTIMONIAL · Contact Us
//   hover: color var(--green-mid)

// Derecha:
// "L-V 9AM - 7PM" Nunito 600 12px green + ícono reloj
// [Btn verde: Contact Us →]
// bg: var(--green), color: white, border-radius: 8px
// hover: bg var(--green-mid), shadow-green

background: rgba(255,255,255,0.95);
backdrop-filter: blur(20px);
border-bottom: 1px solid var(--border);
```

---

### 2. HERO SECTION ⭐ — UntuCare Verde

**Concepto:** UntuCare exacto PERO con identidad verde de la Dra. Maikeiry.
Foto dental full-cover con border-radius 24px, overlay verde oscuro,
texto blanco, badge con número de pacientes, botón pill.

```tsx
// Contenedor: border-radius: 24px, overflow: hidden
// height: 88vh, position: relative
// margin: 16px (pequeño marco como UntuCare)

// FOTO DE FONDO:
// https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=90
// O: /public/images/hero-maikeiry.jpg
// position: absolute, inset: 0
// width: 100%, height: 100%, object-fit: cover

// OVERLAY verde (diferencia con UntuCare azul):
// background: linear-gradient(
//   160deg,
//   rgba(13,34,24,0.72) 0%,     ← Verde muy oscuro
//   rgba(13,34,24,0.45) 45%,
//   rgba(13,34,24,0.12) 100%
// )

// CONTENIDO:
// padding: 48px 64px
// display: flex, flexDirection: column, justifyContent: space-between

// Label superior izquierdo (delay 0.3s):
// "BEST DENTAL CARE"
// bg: rgba(255,255,255,0.15), backdropFilter: blur(8px)
// border: 1px solid rgba(255,255,255,0.3), border-radius: 50px
// Nunito 700 11px, color white, letterSpacing: 0.12em
// Punto verde pulsante antes

// Título (stagger 0.15s, slideUp 30px, delay 0.5s):
<h1 style={{
  fontFamily: 'Playfair Display',
  fontWeight: 700,
  fontStyle: 'italic',
  fontSize: 'clamp(42px, 5.5vw, 78px)',
  lineHeight: 1.05,
  color: 'white'
}}>
  Dientes Sanos
  <br/>
  Para Una
  <br/>
  <span style={{ color: 'var(--green-light)', fontStyle: 'normal' }}>
    Vida Sana. 💚
  </span>
</h1>

// Descripción (delay 0.9s):
// "En nuestro consultorio ofrecemos una amplia gama de
// servicios para cuidar tu salud bucal. Trabajamos todas
// las especialidades con un equipo profesional actualizado."
// Nunito 400 15px, color rgba(255,255,255,0.78), max-width: 400px

// Botón + teléfono (delay 1.1s — UntuCare exacto):
// Btn pill blanco: "Book Appointment →"
// bg: white, color: var(--green), border-radius: 50px
// Nunito 700 14px, padding: 14px 28px
// hover: bg var(--green), color white, shadow-green
// "Or Call: 809-366-0206" Nunito 400 14px rgba(255,255,255,0.7)

// BADGE "783+" (UntuCare exacto — inferior derecho):
// bg: rgba(255,255,255,0.12), backdropFilter: blur(10px)
// border: 1px solid rgba(255,255,255,0.25)
// border-radius: 16px, padding: 20px 28px
// "783+" Playfair 900 Italic 48px white
// "Pacientes que confían en nosotros" Nunito 400 12px rgba(255,255,255,0.65)
// width: 200px

// Info adicional derecha (bajo el badge):
// "Our clinic ensures a relaxed..."
// → En español: "Consultorio en L-V 9AM-7PM. ¡Agenda hoy mismo!"

// Scroll indicator: ↓ blanco centrado al fondo
```

---

### 3. ABOUT SECTION — Fotos Inclinadas UntuCare

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Layout: 3 columnas (como UntuCare exacto)
// Izquierda (22%): 2 fotos inclinadas
// Centro (56%): Texto centrado
// Derecha (22%): 2 fotos inclinadas

// FOTOS IZQUIERDA:
// Foto 1: rotate(-8deg), border-radius: 16px 4px
// Foto 2: rotate(5deg), border-radius: 4px 16px
// width: 170px, shadow-md
// Overlap vertical 35%
// Entrada: slideLeft -50px + rotate, delay 0.3s

// FOTOS DERECHA:
// Foto 3: rotate(7deg)
// Foto 4: rotate(-5deg)
// Entrada: slideRight +50px + rotate, delay 0.3s

// Fotos de procedimientos dentales:
// F1: https://images.unsplash.com/photo-1588776814546-1ffbb2a8e90a?w=400
// F2: https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400
// F3: https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400
// F4: https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400

// TEXTO CENTRO:
// "About Us" Nunito 600 12px green uppercase
// <h2 Playfair Display 700>
//   Atención Compasiva,
//   <br/>
//   Expertise de Confianza.
// </h2>
// (mismo wording que UntuCare pero en español)

// Párrafo centrado (max-width: 460px margin:auto):
"¡Tu sonrisa es nuestra prioridad! En el Consultorio
Odontológico de la Dra. Maikeiry Báez nos dedicamos a
transformar cada visita dental en una experiencia positiva,
con cuidado personalizado y tecnología actualizada."

// 2 botones centrados:
// "Book Appointment →" verde
// "About Us" outline verde
```

---

### 4. SERVICES SECTION — 11 Servicios con Numeración

```tsx
// Fondo: var(--bg-base)
// padding: 120px 0

// Header: 2 columnas (UntuCare)
// Izquierda: <h2 Playfair>"Where Every Treatment<br/>Begins With Trust"</h2>
// Derecha: [SectionLabel] + párrafo + [Btn verde "Ver Todos →"]

// Layout: Lista numerada izquierda + Foto reactiva derecha (como UntuCare)

const services = [
  { num: "01/", name: "Prevención",             desc: "Profilaxis, sellantes y fluoruro para mantener dientes sanos.", highlight: true },
  { num: "02/", name: "Diagnóstico",             desc: "Evaluación completa + Radiografía Digital de precisión." },
  { num: "03/", name: "Ortodoncia",              desc: "Brackets y alineadores para una sonrisa perfectamente alineada." },
  { num: "04/", name: "Cirugía Bucal",           desc: "Extracciones, apicectomías y procedimientos quirúrgicos." },
  { num: "05/", name: "Emergencias",             desc: "Atención urgente para dolor dental o accidentes bucales." },
  { num: "06/", name: "Prótesis Dental",         desc: "Fijas y removibles que restauran función y estética." },
  { num: "07/", name: "Endodoncia",              desc: "Tratamiento de conducto preciso y con mínimo dolor." },
  { num: "08/", name: "Periodoncia",             desc: "Tratamiento de encías y tejidos de soporte dental." },
  { num: "09/", name: "Radiografía Digital",     desc: "Imágenes de alta precisión con mínima radiación." },
  { num: "10/", name: "Operatoria Dental",       desc: "Restauraciones y tratamiento de caries con materiales premium." },
  { num: "11/", name: "Sedación Consciente",     desc: "Tratamiento completamente sin estrés ni miedo.", special: true }
];

// Estilo row servicio:
// padding: 20px 0, border-bottom: 1px solid var(--border)
// "01/" Nunito 700 12px green, letterSpacing: 0.1em
// Nombre: Playfair 700 20px text-dark
// Desc: Nunito 400 13px text-muted
// hover: padding-left: 10px, bg var(--green-pale)
// transition: 0.25s ease

// Fila #11 SEDACIÓN CONSCIENTE (especial):
// bg: var(--green-pale), border-left: 3px solid var(--green)
// Badge verde: "ÚNICO" o "SIN MIEDO" pill
// Nombre en verde oscuro, negrita extra

// FOTO REACTIVA DERECHA:
// Cambia con AnimatePresence al hover de cada servicio
// aspect-ratio: 4/5, border-radius: 20px, shadow-lg
// Foto default: dentista sonriendo
```

---

### 5. SEDATION SECTION ⭐ — El Diferenciador Único

```tsx
// Fondo: var(--bg-dark) — verde muy oscuro (IMPACTO TOTAL)
// padding: 120px 0
// Esta sección no existe en NINGUNA otra web del portafolio

// Layout: Texto izquierda (55%) + Imagen derecha (45%)

// TEXTO IZQUIERDA (blanco):
// [Badge verde lima: "⭐ SERVICIO EXCLUSIVO"]
// <h2 Playfair Italic color:white>
//   Sedación Consciente:
//   <br/>
//   <em style={{color:'var(--green-bright)'}}>
//     Sin Miedo,
//   </em>
//   <br/>
//   Sin Estrés.
// </h2>

// [Línea verde 60px]

// Párrafo blanco:
"¿Tienes miedo al dentista? La sedación consciente te
permite recibir tu tratamiento dental en un estado de
relajación profunda, completamente consciente pero sin
ansiedad, sin dolor y sin estrés. La Dra. Maikeiry Báez
es una de las pocas especialistas en ofrecer este
servicio en Santo Domingo."

// 4 bullets (bg rgba(255,255,255,0.06), border: 1px solid rgba(255,255,255,0.12)):
// 💊 Ansiedad dental eliminada completamente
// 😴 Relajación profunda durante el procedimiento
// 🧠 Completamente consciente y responsivo
// ✅ Recuperación rápida — vuelves a casa el mismo día

// [Btn verde brillante: AGENDAR SEDACIÓN →]
// bg: var(--green-bright), color: white
// hover: bg var(--green-mid), shadow-green

// IMAGEN DERECHA:
// Foto tranquila — paciente relajada en silla dental
// https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600
// border-radius: 20px, shadow fuerte
// Blob verde opacity 0.2 detrás
// Badge flotante: "Dra. Maikeiry Báez · Sedación Consciente"
```

---

### 6. CEO SECTION — Dra. Maikeiry Báez

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Layout: Foto izquierda (42%) + Texto derecha (58%)

// FOTO IZQUIERDA:
// /public/images/dra-maikeiry.jpg
// (foto del perfil Instagram — bata blanca, pelo suelto, sonrisa)
// border-radius: 20px, aspect-ratio: 3/4
// object-fit: cover, object-position: top
// shadow-lg

// Blob verde decorativo detrás: 280px circular, bg var(--green-pale)
// opacity: 1, blur: 60px

// Badge flotante (sobre la foto, bottom-right):
// bg: white, border-radius: 12px, shadow-md, padding: 16px 20px
// "💚 Dra. Maikeiry Báez"
// "Directora · Odontología Integral"
// Punt verde pulsante

// TEXTO DERECHA:
// [SectionLabel: "👩‍⚕️ DIRECTORA & FUNDADORA"]
// <h2 Playfair Italic>
//   Dra. Maikeiry
//   <br/>
//   Báez
// </h2>
// [Línea verde 60px]

// Párrafo:
"La Dra. Maikeiry Báez es la fundadora de este consultorio
odontológico, creado con la misión de ofrecer dientes sanos
para una vida sana. Con un equipo de profesionales con
experiencia y conocimientos actualizados, brinda la mejor
atención personalizada para cada paciente."

// Párrafo 2:
"Pionera en el servicio de Sedación Consciente en Santo
Domingo, la Dra. Báez ofrece una alternativa única para
pacientes con ansiedad dental, garantizando tratamientos
cómodos y libres de estrés."

// 3 checks verdes:
// ✓ Especialista en Odontología Integral — Todas las especialidades
// ✓ Pionera en Sedación Consciente en Santo Domingo
// ✓ "Dientes sanos para una vida sana" — su filosofía de salud

// Quote box (bg green-pale, border-left: 3px solid var(--green)):
// "¡Tu sonrisa es nuestra prioridad! Agenda tu cita hoy mismo
// y descubre el cuidado personalizado que mereces."
// — Dra. Maikeiry Báez

// [Btn verde: AGENDAR CON LA DRA. →]
```

---

### 7. SCHEDULE SECTION — Horario Simple y Claro

```tsx
// Fondo: var(--bg-section)
// padding: 80px 0

// Header centrado:
// "🕐 Nuestro Horario de Atención"
// Playfair 700 36px

// Layout: 2 cards lado a lado

// CARD HORARIO (izquierda):
// bg: white, border-radius: 20px, padding: 40px, shadow-sm
// Fila: LUNES A VIERNES │ 9:00 AM – 7:00 PM ● Disponible
// Fila: SÁBADOS         │ Consultar disponibilidad
// Fila: DOMINGOS        │ Cerrado ●

// "Agenda tu cita hoy mismo! 👉📱"
// [Btn verde: LLAMAR AHORA →] href: tel:8093660206

// CARD CONTACTO (derecha):
// bg: var(--green), color: white, border-radius: 20px, padding: 40px
// "📞 809-366-0206"
// "🔗 linktr.ee/maikeirybaez"
// "📷 @dramaikeirybaez"
// [Btn blanco: WhatsApp →]

// Elemento visual: diente SVG verde con corazón (del logo)
// opacity: 0.06, posición decorativa
```

---

### 8. STATS SECTION

```tsx
// Fondo: var(--green) — sección verde
// padding: 80px 0

const stats = [
  { value: 783,  suffix: "+", label: "PACIENTES SATISFECHOS" },
  { value: 11,   suffix: "",  label: "ESPECIALIDADES DISPONIBLES" },
  { value: 100,  suffix: "%", label: "CUIDADO PERSONALIZADO" },
  { value: 9,    suffix: "H", label: "HORAS DE ATENCIÓN DIARIA" }
];

// Número: Playfair 900 Italic 72px, color white
// Label: Nunito 700 11px uppercase, rgba(255,255,255,0.6)
// Separadores: 1px solid rgba(255,255,255,0.15)
// AnimatedCounter IntersectionObserver

// CTA dentro de la sección:
// "¿Lista para tu primera cita?" [Btn blanco: AGENDAR →]
```

---

### 9. TESTIMONIALS

```tsx
// Fondo: var(--bg-base)
// padding: 120px 0

// Header:
// [SectionLabel: "⭐ TESTIMONIOS"]
// <h2 Playfair Italic>Lo Que Dicen<br/>Nuestros Pacientes</h2>

const testimonials = [
  {
    initials: "LC",
    name: "Laura C.",
    treatment: "Sedación Consciente",
    stars: 5,
    text: "Tenía muchísimo miedo al dentista desde niña. La Dra. Maikeiry me ofreció la sedación consciente y fue una experiencia completamente diferente. Sin dolor, sin estrés. ¡La recomiendo al 100%!"
  },
  {
    initials: "RP",
    name: "Ramón P.",
    treatment: "Ortodoncia",
    stars: 5,
    text: "La Dra. Báez es muy profesional y el consultorio está muy bien equipado con radiografía digital. Mi ortodoncia está quedando perfecta y el trato es excelente. Completamente satisfecho."
  },
  {
    initials: "YM",
    name: "Yolanda M.",
    treatment: "Endodoncia + Prótesis",
    stars: 5,
    text: "Dientes sanos para una vida sana — y lo cumplen al 100%. Me hicieron endodoncia y prótesis dental y los resultados son increíbles. Personal amable y muy actualizado en técnicas modernas."
  }
];

// Cards: border-top: 3px solid var(--green)
// Comilla: Playfair 800 70px, color var(--green-pale)
// Avatar: círculo bg var(--green), iniciales blancas
// Estrellas: ★ var(--lime)
```

---

### 10. CONTACT SECTION

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header:
// [SectionLabel: "📅 AGENDA TU CITA"]
// <h2 Playfair Italic>¿Lista Para Tener<br/>Dientes Más Sanos?</h2>
// "Agenda tu cita hoy mismo!"

// Layout: Info izquierda (40%) + Form derecha (60%)

// INFO IZQUIERDA:
// bg: var(--bg-dark), color: white, border-radius: 20px, padding: 48px
// Logo diente verde + "Dra. Maikeiry Báez" Playfair Italic white
// "Odontología Integral" Nunito 400 14px green-light
// [Línea verde]
// 📞 809-366-0206
// 🔗 linktr.ee/maikeirybaez
// 📷 @dramaikeirybaez
// ⏰ L-V 9:00AM - 7:00PM
// [Btn verde: 💬 WhatsApp Directo →]

// FORMULARIO:
// bg: var(--bg-section), border-radius: 20px, padding: 48px, shadow-sm
// [Nombre]*
// [Teléfono]*
// [Servicio: Select]
//   → Prevención / Limpieza
//   → Diagnóstico + Radiografía Digital
//   → Ortodoncia
//   → Cirugía Bucal
//   → Emergencia Dental
//   → Prótesis Dental
//   → Endodoncia
//   → Periodoncia
//   → Operatoria Dental
//   → 💊 Sedación Consciente ← al inicio de la lista (llamativa)
//   → Consulta General
// [Primera visita? Sí/No]
// [Mensaje]
// [Btn verde: ENVIAR SOLICITUD →]
// bg: var(--green), shadow-green
// Nunito 700 16px

// Inputs: Nunito 400, bg white, border: 1.5px solid var(--border)
// border-radius: 10px, height: 50px
// focus: border-color var(--green), shadow green suave
```

---

### 11. FOOTER

```tsx
// Fondo: var(--bg-dark) — verde muy oscuro
// Línea verde 2px superior
// padding: 64px 0 32px

// Logo diente verde + corazón (SVG) + "Dra. Maikeiry Báez" Playfair Italic white
// "Dientes sanos para una vida sana 💚" Nunito Italic

// 4 columnas: Logo+bio | Servicios | Horario | Contacto

// Columna Horario:
// "📅 Lunes a Viernes"
// "9:00 AM – 7:00 PM"
// Badge "ABIERTO" verde si es dentro del horario

// Copyright:
// "© 2025 Dra. Maikeiry Báez | Odontología Integral · @dramaikeirybaez"
// Nunito 400 12px, rgba(255,255,255,0.3)
```

---

## 🎭 ANIMACIONES — Framer Motion

### 1. Hero — Entrada UntuCare Verde
```tsx
// Contenedor: border-radius 24px, margin 16px desde el inicio
// (a diferencia de #8 Three Smiles que hace el reveal — aquí ya está rounded)
// La foto tiene parallax leve al scroll

// Label:    delay 0.3s, fadeIn + letterSpacing expand
// H1 L1-3: delay 0.5s/0.65s/0.8s, slideUp 30px
// Desc:    delay 0.95s, fadeIn
// Btn:     delay 1.1s, slideUp
// Badge:   delay 1.3s, scale 0.8→1 + fadeIn

// Punto verde pulsante:
@keyframes pulse-green {
  0%, 100% { box-shadow: 0 0 0 3px rgba(102,187,106,0.35); }
  50%       { box-shadow: 0 0 0 7px rgba(102,187,106,0.15); }
}
/* animation: 2s infinite */
```

### 2. About — Fotos inclinadas (UntuCare)
```tsx
// useInView trigger
// Foto 1 (izq): initial {x:-70, rotate:-12, opacity:0} → {x:0, rotate:-8, opacity:1} delay:0.4s
// Foto 2 (izq): initial {x:-50, rotate:7, opacity:0}  → {x:0, rotate:5, opacity:1}  delay:0.6s
// Foto 3 (der): initial {x:70, rotate:10, opacity:0}  → {x:0, rotate:7, opacity:1}  delay:0.4s
// Foto 4 (der): initial {x:50, rotate:-7, opacity:0}  → {x:0, rotate:-5, opacity:1} delay:0.6s
// hover: scale(1.04), rotate ligeramente opuesto, shadow-md
```

### 3. Servicios — Reactivo
```tsx
// Hover en cada fila: padding-left 0→10px, bg fade in
// Foto lateral: AnimatePresence fade + scale
// initial: {opacity:0, x:15, scale:0.97}
// animate: {opacity:1, x:0, scale:1}
// exit: {opacity:0, x:-15}
// transition: duration 0.35s ease
```

### 4. Sedation Section — Entrada dramática
```tsx
// Sobre fondo muy oscuro:
// Badge: delay 0.2s, fadeIn
// H2: stagger 0.2s por línea, slideUp 50px
// Bullets: stagger 0.1s, slideLeft
// Imagen: slideRight 60px + fadeIn, delay 0.4s
```

### 5. Secciones generales
```tsx
// useInView → opacity:0,y:40 → opacity:1,y:0
// duration: 0.8s, ease [0.16,1,0.3,1]
// staggerChildren: 0.08s
```

---

## 🔘 WHATSAPP FLOTANTE

```tsx
// bg: var(--green), color: white, border-radius: 50px
// "💬 Agendar Cita"
// shadow-green, ping verde detrás
// "💚" emoji antes del texto

const msg = "Hola Dra. Maikeiry! Me interesa agendar una cita. ¿Me puede ayudar?";
const link = "https://linktr.ee/maikeirybaez";
// O directo: https://wa.me/18093660206
```

---

## 📱 RESPONSIVE

```
Mobile (375px):
- Hero: border-radius 16px, margin 8px, badge "783+" visible
- About: fotos en 2x2 sin rotación (simplificado)
- Services: lista completa, foto oculta
- Sedation: 1 columna
- Contact: apiladas

Tablet (768px):
- About: fotos 1 lado + texto + fotos otro lado
- Services: 50/50

Desktop: layout completo | max-width: 1200px
```

---

## 🎯 REGLAS ABSOLUTAS

```
1. VERDE: El verde DOMINA — es el color de la vida sana y del logo
2. SEDACIÓN CONSCIENTE: Sección propia OBLIGATORIA — diferenciador único del portafolio
3. FOTOS INCLINADAS: About section con 4 fotos rotadas como UntuCare — firma visual
4. SERVICIOS REACTIVOS: Foto lateral cambia al hover de cada servicio numerado
5. SLOGAN INTEGRADO: "Dientes sanos para una vida sana 💚" visible en hero
6. HORARIO: L-V 9AM-7PM visible en navbar y en schedule section
7. PLAYFAIR + NUNITO: Sin excepciones — elegante pero cálido
8. SEDATION DARK: La sección de sedación tiene fondo oscuro — contraste máximo
9. LOGO CORAZÓN: El diente verde con corazón SVG aparece como elemento decorativo
10. ESPACIADO: 120px entre secciones SIN EXCEPCIÓN
11. SKILLS: frontend-design + taste-skill + webapp-testing — TODAS
```

---

## ⚠️ NOTA SOBRE IMÁGENES

```
EL CLIENTE PROVEERÁ:
/public/images/dra-maikeiry.jpg ← CEO (foto del perfil Instagram)

PLACEHOLDERS UNSPLASH:
Hero: https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=90
CEO: https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500
About fotos: (4 diferentes de procedimientos dentales)
Sedación: https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600

SVG LOGO (diente con corazón):
<svg viewBox="0 0 60 64" fill="none">
  <path d="M30 4 C18 4 8 14 8 26 C8 38 14 50 20 58 C23 62 27 64 30 64 C33 64 37 62 40 58 C46 50 52 38 52 26 C52 14 42 4 30 4Z"
    fill="none" stroke="#43A047" stroke-width="2.5"/>
  <path d="M22 20 C22 16 28 14 30 18 C32 14 38 16 38 20 C38 26 30 32 30 32 C30 32 22 26 22 20Z"
    fill="#43A047"/>
</svg>
```

---

## 📌 SEO

```tsx
title: "Dra. Maikeiry Báez | Odontología Integral — Dientes Sanos Para Una Vida Sana"
description: "Dra. Maikeiry Báez, Odontología Integral. Sedación Consciente, Ortodoncia, Endodoncia, Radiografía Digital y más. L-V 9AM-7PM. Tel: 809-366-0206. linktr.ee/maikeirybaez"
```

---

## 💬 INSTRUCCIÓN EXACTA PARA CLAUDE CODE

```
Lee el CLAUDE.md completo antes de empezar.

PASO 1: Limpia /src/components/ y /src/sections/
PASO 2: npm install framer-motion
PASO 3: Construye en este orden EXACTO:

1. index.css — variables CSS + fuentes Playfair Display + Nunito
   + keyframes pulse-green
2. AnimatedCounter.tsx + SectionLabel.tsx
3. HeroSection.tsx ← PRIORIDAD MÁXIMA
   - Foto full-cover con border-radius: 24px (ya rounded desde inicio)
   - Overlay verde oscuro
   - Título Playfair Italic "Dientes Sanos Para Una Vida Sana. 💚"
   - Badge "783+" glassmorphism inferior derecho
   - Btn pill blanco + "Or Call: 809-366-0206"
4. Navbar.tsx — logo diente corazón + btn verde
5. AboutSection.tsx — 4 fotos INCLINADAS (UntuCare exacto)
6. ServicesSection.tsx — 11 servicios 01/02/ + foto reactiva
   Sedación Consciente con badge especial "ÚNICO"
7. SedationSection.tsx — fondo OSCURO, sección especial exclusiva
8. CEOSection.tsx — Dra. Maikeiry, foto real
9. ScheduleSection.tsx — horario + contacto
10. StatsSection.tsx — fondo verde
11. TestimonialsSection.tsx
12. ContactSection.tsx — Sedación primera en el select
13. Footer + WhatsAppButton verde

DETENTE después del Hero y muéstramelo.
Espera aprobación antes de continuar.

CRÍTICO: La sección SEDACIÓN CONSCIENTE es el mayor
diferenciador de esta web. Debe ser visualmente impactante.
Las 4 fotos inclinadas del About son la firma visual.

Usa las skills frontend-design, taste-skill y webapp-testing.
```

---

*Proyecto #9 de 15 clínicas dentales — NEXIX Tech Studio | nexixstudio.com*