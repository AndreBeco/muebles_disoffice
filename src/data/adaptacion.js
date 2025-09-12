// src/data/adaptacion.js
// Puedes agregar más items siguiendo estos dos formatos:
// 1) Comparativo antes/después: { id, before, after, title, description }
// 2) Imagen única: { id, image, title, description }
// Nota: Usa URLs directas (p.ej. i.pinimg.com o images.unsplash.com)

const adaptacion = [
  // --- Comparativos (ANTES / DESPUÉS) ---
  {
    id: "ad-01",
    before: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&h=900&fit=crop",
    after:  "https://i.pinimg.com/736x/00/bf/ad/00bfad596f9f5dc3c74e1e4403c13624.jpg",
    title: "Silla ergonómica mejorada",
    description: "Reemplazo de mecanismo, pistón y tapizado; soporte lumbar optimizado."
  },
  {
    id: "ad-02",
    before: "https://i.pinimg.com/736x/4d/34/bb/4d34bb27181cffa4d1cbb091fd6beefd.jpg",
    after:  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&h=900&fit=crop",
    title: "Mesa de trabajo ajustada",
    description: "Nivelación, refuerzo estructural y acabado para alta durabilidad."
  },
  {
    id: "ad-03",
    before: "https://i.pinimg.com/1200x/85/c8/a6/85c8a6683af9c4540d4b53440e7318f0.jpg",
    after:  "https://i.pinimg.com/1200x/b7/8d/e9/b78de9907dd20ddc661e1e02050bb538.jpg",
    title: "Banco reacondicionado",
    description: "Nuevo acolchado, cambio de espuma de alta densidad y tapizado técnico."
  },
  {
    id: "ad-04",
    before: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&h=900&fit=crop",
    after:  "https://images.unsplash.com/photo-1578898887932-d6c2c2d2f06f?w=1200&h=900&fit=crop",
    title: "Escritorio regulable",
    description: "Ajuste de altura, corrección de holguras y protección anti-rayones."
  },

  // --- Imagen única (casos sin comparativo) ---
  {
    id: "ad-05",
    image: "https://i.pinimg.com/736x/3d/38/ff/3d38ffcf52e1099041cb291617ae55ea.jpg",
    title: "Optimización de archivador",
    description: "Correderas nuevas, ajuste de cerradura y ruedas de alto tráfico."
  },
  {
    id: "ad-06",
    image: "https://images.unsplash.com/photo-1588776814546-ec7bb6c80d4c?w=1200&h=900&fit=crop",
    title: "Reposabrazos personalizado",
    description: "Cambio de apoyos, regulación de profundidad y mejora de postura."
  },
  {
    id: "ad-07",
    image: "https://images.unsplash.com/photo-1586985282314-ea7c533220cd?w=1200&h=900&fit=crop",
    title: "Refuerzo de base",
    description: "Sustitución de cruceta, rodachines industriales y lubricación general."
  },
  {
    id: "ad-08",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=900&fit=crop",
    title: "Puesto de trabajo a medida",
    description: "Rediseño de superficie, gestión de cables y acabado uniforme."
  }
];

export default adaptacion;
