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


export const PRODUCTS = [
  {
    id: "S-GER-001",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Alemania 1",
    img: "https://i.pinimg.com/736x/58/25/a9/5825a9760a7f9abad4a81c5fb26acc97.jpg",
    features: ["GARANTIA DE 1 AÑO", "Mecanismo: Basculante", "Brazos: Fijos", "Base: Cromo", "Ruedas: Piso duro", "Asiento: Cuero sintetico", "Espaldar: Cuero sintetico"],
  },
  {
    id: "S-GER-002",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Alemania 2",
    img: "https://i.pinimg.com/736x/6c/9d/1e/6c9d1e38df9dcb2453622b7a9c12ff78.jpg",
    features: ["GARANTIA DE 1 AÑO", "Mecanismo: Basculante", "Brazos: Fijos", "Base: Cromo", "Ruedas: Piso duro", "Asiento: Cuero sintetico", "Espaldar: Cuero sintetico"],
  },
  {
    id: "S-GER-003",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Bruselas 1",
    img: "https://i.pinimg.com/736x/dd/c7/92/ddc792951a3dfd7196388540a4af3a42.jpg",
    features: ["GARANTIA DE 1 AÑO", "Mecanismo: Basculante", "Brazos: Fijos", "Base: Cromo", "Ruedas: Goma", "Asiento: Cuero sintetico", "Espaldar: Cuero sintetico"],
  },
  {
    id: "S-GER-004",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Bruselas 2",
    img: "https://i.pinimg.com/736x/cb/85/a7/cb85a7eb89f0164824dfd2d78e56457f.jpg",
    features: ["GARANTIA DE 1 AÑO", "Mecanismo: Basculante", "Brazos: Fijos", "Base: Cromo", "Ruedas: Goma", "Asiento: Cuero sintetico", "Espaldar: Cuero sintetico"],
  },
  {
    id: "S-GER-005",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Lion 1",
    img: "https://i.pinimg.com/736x/e3/ad/60/e3ad600ee0d64d262668014e96f1525c.jpg",
    features: ["GARANTIA DE 1 AÑO", "Basculante", "Mecanismo: Sincro 4bloqueos", "Brazos: Fijos", "Base: Aluminio pulido", "Ruedas: Nylon", "Asiento: Cuero sintetico", "Espaldar: Cuero sintetico"],
  },
  {
    id: "S-GER-006",
    category: "sillas",
    subtype: "gerenciales",
    name: "Silla Lion 2",
    img: "https://i.pinimg.com/736x/e2/7b/f4/e27bf4389cac79f1a4be436f6dccbf62.jpg",
    features: ["GARANTIA DE 1 AÑO", "Basculante", "Mecanismo: Sincro 4bloqueos", "Brazos: Fijos", "Base: Aluminio pulido", "Ruedas: Nylon", "Asiento: Cuero sintetico", "Espaldar: Cuero sintetico"],
  },
  {
    id: "S-SEC-010",
    category: "sillas",
    subtype: "secretariales",
    name: "Silla Secretarial S10",
    img: "https://i.pinimg.com/736x/36/85/30/3685309a9148b3609a2c04bb64113bdc.jpg",
    features: ["Respaldo en malla", "Altura regulable", "Ruedas silenciosas"],
  },
  {
    id: "AR-ROD-201",
    category: "archivadores",
    subtype: "rodantes",
    name: "Archivador Rodante R2",
    img: "https://i.pinimg.com/1200x/6d/e1/0d/6de10ddb667fed09da4069c6c9301da5.jpg",
    features: ["Ruedas con freno", "Cerradura de seguridad"],
  },
  {
    id: "PT-ISL-050",
    category: "puestos",
    subtype: "islas",
    name: "Isla Operativa 4P",
    img: "https://i.pinimg.com/736x/63/61/12/6361124758b37f805209fd45dfd89f6f.jpg",
    features: ["Para 4 puestos", "Canaletas ocultas", "Modular"],
  },
];
