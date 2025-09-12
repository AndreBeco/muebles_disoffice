// src/data/reparacion.js
// Estructura de cada item:
// { id, before, after, title, description }
//
// Notas:
// - Reemplaza las URLs de `before` y `after` con tus imágenes de Pinterest (recomendado) o Unsplash.
// - El carrusel ya soporta pares "Antes / Después" automáticamente.
// - Mantén los IDs únicos.

const reparacion = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1578898887932-d6c2c2d2f06f?w=1200&h=900&fit=crop",
    after:  "https://images.unsplash.com/photo-1606312619344-54da0c2496b3?w=1200&h=900&fit=crop",
    title: "Silla gerencial — cambio de mecanismos",
    description: "Reemplazo de pistón, base y ruedas; ajuste de tensión y limpieza profunda."
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&h=900&fit=crop",
    after:  "https://images.unsplash.com/photo-1589981881555-14e1d7d9b207?w=1200&h=900&fit=crop",
    title: "Escritorio ejecutivo — refuerzo estructural",
    description: "Corrección de vibraciones, nivelación y renovación de superficies."
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=900&fit=crop",
    after:  "https://images.unsplash.com/photo-1592841905086-4ab7dcaa4ad5?w=1200&h=900&fit=crop",
    title: "Archivador metálico — rieles y bisagras",
    description: "Sustitución de correderas, centrado de gavetas y lubricación."
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1559011260-7ca119ef0b31?w=1200&h=900&fit=crop",
    after:  "https://images.unsplash.com/photo-1596079890744-51e57f62d2b6?w=1200&h=900&fit=crop",
    title: "Silla secretarial — retapizado",
    description: "Cambio de espuma y tela técnica; mejora del soporte lumbar."
  },
  {
    id: 5,
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop",
    after:  "https://images.unsplash.com/photo-1602526210562-4dc0c8ef63cf?w=1200&h=900&fit=crop",
    title: "Puesto de trabajo — restauración de superficie",
    description: "Lijado, corrección de bordes, cambio de canto y sellado antihumedad."
  },
  {
    id: 6,
    before: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&h=900&fit=crop",
    after:  "https://images.unsplash.com/photo-1608219959300-8c6bfa1c0b33?w=1200&h=900&fit=crop",
    title: "Mesa de juntas — nivelación y acabado",
    description: "Reajuste de soportes, nivelación de patas y acabado satinado."
  },
  {
    id: 7,
    before: "https://images.unsplash.com/photo-1588776814546-ec7bb6c80d4c?w=1200&h=900&fit=crop",
    after:  "https://images.unsplash.com/photo-1586985282314-ea7c533220cd?w=1200&h=900&fit=crop",
    title: "Silla fija — cambio de tacos y pintura",
    description: "Protección de piso, corrección de soldaduras y repintado electrostático."
  },
  {
    id: 8,
    before: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=900&fit=crop",
    after:  "https://images.unsplash.com/photo-1590602847861-5f99f06f0982?w=1200&h=900&fit=crop",
    title: "Archivador rodante — alineación general",
    description: "Ajuste de guías, cambio de ruedas y verificación de sistema de cierre."
  }
];

export default reparacion;
