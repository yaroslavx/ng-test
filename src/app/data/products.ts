import { Product } from '../models/product';

const products: Product[] = [
  {
    id: 11,
    title:
      'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 17,
    title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
    rating: { rate: 3.8, count: 679 },
  },
];

export default products;
