export type GalleryItem = {
  src: string;
  alt: string;
  className: string;
  label: string;
};

export const galleryData = {
  kicker: "/ 05 — Gallery",
  note: "A table full of stories.",
};

const BASE = import.meta.env.BASE_URL;

export const galleryItems: GalleryItem[] = [
  {
    src: `${BASE}images/featured/brongkos.jpg`,
    alt: "Brongkos Daging poster",
    className: "gallery-tall",
    label: "Brongkos Daging · 01",
  },
  {
    src: `${BASE}images/hero/sajian-ingkung.jpg`,
    alt: "Crispy chicken food poster",
    className: "gallery-wide",
    label: "Dapur Simbah · 02",
  },
  {
    src: `${BASE}images/menu/tampilan-menu.jpg`,
    alt: "Menu poster",
    className: "gallery-mid",
    label: "Menu Rumah · 03",
  },
  {
    src: `${BASE}images/gallery/ayam-pedas.jpg`,
    alt: "Ayam Pedas poster",
    className: "gallery-square",
    label: "Resep lintas waktu · 04",
  },
  {
    src: `${BASE}images/gallery/soto.jpg`,
    alt: "Soto Ayam poster",
    className: "gallery-square",
    label: "Resep lintas waktu · 05",
  },
  {
    src: `${BASE}images/gallery/sayur-lodeh.jpg`,
    alt: "Sayur Lodeh poster",
    className: "gallery-mid",
    label: "Resep lintas waktu · 06",
  },
];
