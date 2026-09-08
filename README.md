# Pawon'e Simbah — Modular Professional Structure

Struktur ini memecah setiap section menjadi 3 file:

- `data.ts` → semua teks, gambar, harga, link, dan konten.
- `Component.tsx` → struktur/layout React.
- `style.css` → style khusus section tersebut.

## Struktur

```text
src/
├── App.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── home.data.ts
│   │   └── style.css
│   ├── AboutMe/
│   │   ├── AboutMe.tsx
│   │   ├── aboutMe.data.ts
│   │   └── style.css
│   ├── Menu/
│   │   ├── Menu.tsx
│   │   ├── menu.data.ts
│   │   └── style.css
│   ├── Featured/
│   │   ├── Featured.tsx
│   │   ├── featured.data.ts
│   │   └── style.css
│   ├── Gallery/
│   │   ├── Gallery.tsx
│   │   ├── gallery.data.ts
│   │   └── style.css
│   ├── Blog/
│   │   ├── Blog.tsx
│   │   ├── blog.data.ts
│   │   └── style.css
│   └── Contact/
│       ├── Contact.tsx
│       ├── contact.data.ts
│       └── style.css
└── styles/
    └── globals.css
```



> Jika proyek menggunakan Tailwind/PostCSS, pertahankan tiga directive `@tailwind` dari stylesheet lama di stylesheet global utama proyek Anda. Paket ini tidak menghapus kebutuhan konfigurasi Tailwind yang mungkin sudah ada di proyek.
