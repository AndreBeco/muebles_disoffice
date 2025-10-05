// data/catalogData.js
export const CATEGORIES = [
  {
    id: "sillas",
    title: "Sillas",
    description: "Gerenciales, secretariales, fijas y tándem.",
    cover: "https://i.pinimg.com/1200x/63/12/85/631285f85c8660638343ee69113a0deb.jpg",
    subtypes: [
      { id: "gerenciales", name: "Gerenciales" },
      { id: "secretariales", name: "Secretariales" },
      { id: "fijas", name: "Fijas" },
      { id: "tandem", name: "Tándem" },
    ],
  },
  {
    id: "archivadores",
    title: "Archivadores",
    description: "Verticales, horizontales y rodantes.",
    cover: "https://i.pinimg.com/736x/67/ce/61/67ce613a8439e0d589a72a42f26f0110.jpg",
    subtypes: [
      { id: "verticales", name: "Verticales (2–4 gavetas)" },
      { id: "horizontales", name: "Horizontales" },
      { id: "rodantes", name: "Rodantes" },
    ],
  },
  {
    id: "puestos",
    title: "Puestos de trabajo",
    description: "Islas y estaciones modulares.",
    cover: "https://i.pinimg.com/736x/4c/91/0c/4c910c6e8cbd388ef11b4f5eccdd7a74.jpg",
    subtypes: [
      { id: "islas", name: "Islas" },
      { id: "modulares", name: "Modulares" },
      { id: "en-l", name: "Escritorios en L" },
    ],
  },
];

/* 
  NOTA para las imágenes por ángulo:
  - Usa "images: [ ... ]" con 1 o más URLs.
  - Si un producto no tiene varios ángulos aún, déjalo con un solo link dentro de "images".
  - "img" se deja como respaldo/compatibilidad (primera imagen).
*/

export const PRODUCTS = [
  // ========= SILLAS — GERENCIALES =========
  {
    id: "S-GER-001",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Alemania 1",
    img: "https://i.pinimg.com/736x/58/25/a9/5825a9760a7f9abad4a81c5fb26acc97.jpg",
    images: [
      "https://i.pinimg.com/736x/58/25/a9/5825a9760a7f9abad4a81c5fb26acc97.jpg", // frente
      "https://i.pinimg.com/736x/4e/8a/7c/4e8a7c3b8c1d4c2e8b8f5d3dd0a2c9cf.jpg", // lateral (ejemplo)
      "https://i.pinimg.com/736x/1d/7c/3a/1d7c3a5b7b1ff4c1c9f1c2b2a6c3e0d1.jpg", // espalda (ejemplo)
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Mecanismo: Basculante",
      "Brazos: Fijos",
      "Base: Cromo",
      "Ruedas: Piso duro",
      "Asiento: Cuero sintetico",
      "Espaldar: Cuero sintetico",
    ],
  },
  {
    id: "S-GER-002",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Alemania 2",
    img: "https://i.pinimg.com/736x/6c/9d/1e/6c9d1e38df9dcb2453622b7a9c12ff78.jpg",
    images: [
      "https://i.pinimg.com/736x/6c/9d/1e/6c9d1e38df9dcb2453622b7a9c12ff78.jpg",
      "https://i.pinimg.com/736x/88/5d/4d/885d4d3a8d3c2e8d1e70b8e5fb7a9a0b.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Mecanismo: Basculante",
      "Brazos: Fijos",
      "Base: Cromo",
      "Ruedas: Piso duro",
      "Asiento: Cuero sintetico",
      "Espaldar: Cuero sintetico",
    ],
  },
  {
    id: "S-GER-003",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Bruselas 1",
    img: "https://i.pinimg.com/736x/dd/c7/92/ddc792951a3dfd7196388540a4af3a42.jpg",
    images: [
      "https://i.pinimg.com/736x/dd/c7/92/ddc792951a3dfd7196388540a4af3a42.jpg",
      "https://i.pinimg.com/736x/0a/4e/1f/0a4e1f6a0a3b4c5d6e7f8090a1b2c3d4.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Mecanismo: Basculante",
      "Brazos: Fijos",
      "Base: Cromo",
      "Ruedas: Goma",
      "Asiento: Cuero sintetico",
      "Espaldar: Cuero sintetico",
    ],
  },
  {
    id: "S-GER-004",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Bruselas 2",
    img: "https://i.pinimg.com/736x/cb/85/a7/cb85a7eb89f0164824dfd2d78e56457f.jpg",
    images: [
      "https://i.pinimg.com/736x/cb/85/a7/cb85a7eb89f0164824dfd2d78e56457f.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Mecanismo: Basculante",
      "Brazos: Fijos",
      "Base: Cromo",
      "Ruedas: Goma",
      "Asiento: Cuero sintetico",
      "Espaldar: Cuero sintetico",
    ],
  },
  {
    id: "S-GER-005",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Lion 1",
    img: "https://i.pinimg.com/736x/e3/ad/60/e3ad600ee0d64d262668014e96f1525c.jpg",
    images: [
      "https://i.pinimg.com/736x/e3/ad/60/e3ad600ee0d64d262668014e96f1525c.jpg",
      "https://i.pinimg.com/736x/8f/4d/7b/8f4d7b3a9f1e2c3d4e5f60718293abcf.jpg",
      "https://i.pinimg.com/736x/6a/2c/4e/6a2c4e5f718293abcf8d0e1f2c3d4e5f.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Basculante",
      "Mecanismo: Sincro 4bloqueos",
      "Brazos: Fijos",
      "Base: Aluminio pulido",
      "Ruedas: Nylon",
      "Asiento: Cuero sintetico",
      "Espaldar: Cuero sintetico",
    ],
  },
  {
    id: "S-GER-006",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Lion 2",
    img: "https://i.pinimg.com/736x/e2/7b/f4/e27bf4389cac79f1a4be436f6dccbf62.jpg",
    images: [
      "https://i.pinimg.com/736x/e2/7b/f4/e27bf4389cac79f1a4be436f6dccbf62.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Basculante",
      "Mecanismo: Sincro 4bloqueos",
      "Brazos: Fijos",
      "Base: Aluminio pulido",
      "Ruedas: Nylon",
      "Asiento: Cuero sintetico",
      "Espaldar: Cuero sintetico",
    ],
  },

  // ========= SILLAS — SECRETARIALES =========
  {
    id: "S-SEC-010",
    category: "sillas",
    subtype: "secretariales",
    name: "Silla Secretarial S10",
    img: "https://i.pinimg.com/736x/36/85/30/3685309a9148b3609a2c04bb64113bdc.jpg",
    images: [
      "https://i.pinimg.com/736x/36/85/30/3685309a9148b3609a2c04bb64113bdc.jpg",
      "https://i.pinimg.com/736x/9a/52/2e/9a522e8f6c3d4b1a8e7091c2d3e4f5a6.jpg",
    ],
    features: ["Respaldo en malla", "Altura regulable", "Ruedas silenciosas"],
  },

  // ========= ARCHIVADORES =========
  {
    id: "AR-ROD-201",
    category: "archivadores",
    subtype: "rodantes",
    name: "Archivador Rodante R2",
    img: "https://i.pinimg.com/1200x/6d/e1/0d/6de10ddb667fed09da4069c6c9301da5.jpg",
    images: [
      "https://i.pinimg.com/1200x/6d/e1/0d/6de10ddb667fed09da4069c6c9301da5.jpg",
      "https://i.pinimg.com/736x/67/ce/61/67ce613a8439e0d589a72a42f26f0110.jpg",
    ],
    features: ["Ruedas con freno", "Cerradura de seguridad"],
  },

  // ========= PUESTOS DE TRABAJO =========
  {
    id: "PT-ISL-050",
    category: "puestos",
    subtype: "islas",
    name: "Isla Operativa 4P",
    img: "https://i.pinimg.com/736x/63/61/12/6361124758b37f805209fd45dfd89f6f.jpg",
    images: [
      "https://i.pinimg.com/736x/63/61/12/6361124758b37f805209fd45dfd89f6f.jpg",
      "https://i.pinimg.com/736x/4c/91/0c/4c910c6e8cbd388ef11b4f5eccdd7a74.jpg",
    ],
    features: ["Para 4 puestos", "Canaletas ocultas", "Modular"],
  },
];
