// data/catalogData.js
export const CATEGORIES = [
  {
    id: "sillas",
    title: "SILLAS",
    description: "Presidenciales, secretariales, fijas y tándem.",
    cover: "https://i.pinimg.com/1200x/63/12/85/631285f85c8660638343ee69113a0deb.jpg",
    subtypes: [
      { id: "presidenciales", name: "PRESIDENCIALES" },
      { id: "secretariales", name: "Secretariales" },
      { id: "fijas", name: "Fijas" },
      { id: "tandem", name: "Tándem" },
    ],
  },
  {
    id: "archivadores",
    title: "ARCHIVADORES",
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
    title: "PUESTOS DE TRABAJO",
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
    subtype: "presidenciales",
    name: "HAWAI",
    img: "https://i.pinimg.com/736x/ea/33/cc/ea33ccbec2c84a1986888c0cffb7c0ef.jpg",
    images: [
      "https://i.pinimg.com/736x/ea/33/cc/ea33ccbec2c84a1986888c0cffb7c0ef.jpg", // frente
      "https://i.pinimg.com/736x/0c/4e/6c/0c4e6ca9b1eee539599cd7119d539d1b.jpg", // lateral (ejemplo)
      "https://i.pinimg.com/736x/ad/cf/cc/adcfcc111fb8a281976b4cd612fff1b6.jpg", // espalda (ejemplo)
      "https://i.pinimg.com/736x/ab/e7/ce/abe7cef926b9cc673de188d64808002d.jpg",
      "https://i.pinimg.com/736x/f5/07/74/f5077407521c1c8fda98b6df67e77f20.jpg",
      "https://i.pinimg.com/736x/9c/6e/b5/9c6eb5699b0aaa96c2b45029c80b0d9d.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Mecanismo: Sincro 4 posiciones con Slider o Basculante",
      "Cabecero: Opcional Graduable Altura y basculante 2D",
      "Asiento: Paño negro. Graduable en altura y profundidad",
      "Espaldar: Malla translucida. Graduable en altura",
      "Brazos: Graduable en Altura o gira y desliza (3D)",
      "Base: Aluminio o Cromo",
      "Ruedas: Nylon o piso duro",
    ],
  },
  {
    id: "S-GER-002",
    category: "sillas",
    subtype: "presidenciales",
    name: "DINAMARCA",
    img: "https://i.pinimg.com/736x/fd/ce/38/fdce3880d3200b5d742262e431ca8cfb.jpg",
    images: [
      "https://i.pinimg.com/736x/fd/ce/38/fdce3880d3200b5d742262e431ca8cfb.jpg",
      "https://i.pinimg.com/736x/46/ff/d0/46ffd0e37a8d93eb2298a1826c170daf.jpg",
      "https://i.pinimg.com/736x/86/38/dc/8638dc57d678e20ba75c66fb70b3d3dd.jpg",
      "https://i.pinimg.com/736x/e8/48/2a/e8482a564648d133fbfa3e565c6b8221.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Mecanismo: Sincro 4 posiciones con Slider",
      "Cabecero: Opcional Graduable Altura. Malla",
      "Asiento: Paño negro. Graduable en altura",
      "Espaldar: Graduable en Altura y profundidad 2D",
      "Brazos: Graduable en Altura o gira y desliza (3D)",
      "Base: Aluminio, Cromo o Nylon",
      "Ruedas: Nylon o piso duro",
    ],
  },
  {
    id: "S-GER-003",
    category: "sillas",
    subtype: "presidenciales",
    name: "KABUL",
    img: "https://i.pinimg.com/736x/2b/41/29/2b412906295e8cb8071eb0c954f039d2.jpg",
    images: [
      "https://i.pinimg.com/736x/2b/41/29/2b412906295e8cb8071eb0c954f039d2.jpg",
      "https://i.pinimg.com/736x/94/f3/f9/94f3f9b1f3870d3dc011df576f285f83.jpg",
      "https://i.pinimg.com/736x/a5/65/3c/a5653c2c3bca8f226b4ea5645e796a9f.jpg",
      "https://i.pinimg.com/736x/31/bc/8f/31bc8f7f0e1aeb53729fc5b2bd5862a2.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Mecanismo: Basculante",
      "Cabecero: Opcional Graduable Altura y basculante 2D",
      "Asiento: Paño negro. Graduable en altura",
      "Espaldar: Graduable en Altura y profundidad 2D. Malla gris",
      "Brazos: Graduable en Altura o gira y desliza (3D)",
      "Base: Aluminio, Cromo o Nylon",
      "Ruedas: Nylon",
    ],
  },
  {
    id: "S-GER-004",
    category: "sillas",
    subtype: "presidenciales",
    name: "ROMA",
    img: "https://i.pinimg.com/736x/ce/9d/63/ce9d631fc357365d7cb5cdcd7513c578.jpg",
    images: [
      "https://i.pinimg.com/736x/ce/9d/63/ce9d631fc357365d7cb5cdcd7513c578.jpg",
      "https://i.pinimg.com/736x/d5/84/d8/d584d8971524b0eb9a61b559efca2784.jpg",
      "https://i.pinimg.com/736x/04/02/9b/04029b5d92ef6f8120ad3812dbf23656.jpg",
      "https://i.pinimg.com/736x/a9/d3/52/a9d352342939a16687f19f5c76f3d609.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Mecanismo: Sincro 5 posiciones",
      "Cabecero: Opcional Graduable Altura y basculante 2D",
      "Asiento: Paño negro. Graduable en altura",
      "Espaldar: Malla",
      "Brazos: Graduable en Altura",
      "Base: Cromo",
      "Ruedas: Nylon",
    ],
  },
  {
    id: "S-GER-005",
    category: "sillas",
    subtype: "presidenciales",
    name: "OSAKA",
    img: "https://i.pinimg.com/736x/e5/49/3e/e5493e0679a07dcb1e8dcd13f95e4115.jpg",
    images: [
      "https://i.pinimg.com/736x/e5/49/3e/e5493e0679a07dcb1e8dcd13f95e4115.jpg",
      "https://i.pinimg.com/736x/fb/51/67/fb5167d264093d19e7e7b0b963caad80.jpg",
      "https://i.pinimg.com/736x/8b/83/10/8b8310cd269ca824bce7b442b07e0fe3.jpg",
      "https://i.pinimg.com/736x/4d/2c/ca/4d2ccac89a77c78950bbbe62ff1cb27d.jpg",
      "https://i.pinimg.com/736x/91/88/18/918818d3563238fc6bb5d5554e59cc56.jpg",
      "https://i.pinimg.com/736x/97/3c/b0/973cb0cb148f3e015349f13f71698667.jpg",
    ],
    features: [
      "GARANTIA DE 1 AÑO",
      "Mecanismo: Sincro 4 posiciones con Slider",
      "Cabecero: Opcional Graduable Altura y basculante 2D",
      "Asiento: Paño negro. Graduable en altura y profundidad",
      "Espaldar: Malla translucida negra o gris. Graduable en altura y profundidad (2D)",
      "Brazos: Graduable en Altura o gira y desliza (3D)",
      "Base: Aluminio, Cromo o Nylon",
      "Ruedas: Piso duro",
    ],
  },
  {
    id: "S-GER-006",
    category: "sillas",
    subtype: "presidenciales",
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
