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

## Cara edit

### Hanya ganti isi
Edit file `*.data.ts`. Contoh:
- Hero → `src/sections/Home/home.data.ts`
- Tentang → `src/sections/AboutMe/aboutMe.data.ts`
- Menu/harga → `src/sections/Menu/menu.data.ts`
- Featured → `src/sections/Featured/featured.data.ts`
- Foto gallery → `src/sections/Gallery/gallery.data.ts`
- Artikel → `src/sections/Blog/blog.data.ts`
- Kontak/link → `src/sections/Contact/contact.data.ts`

### Ubah tampilan
Edit `style.css` pada folder section yang ingin diubah.

### Ubah struktur/layout
Edit `*.tsx` pada folder section tersebut.

### App.tsx
`App.tsx` hanya menjadi orkestrator halaman: memasang Header, section-section, Footer, dan fitur global lightbox/reveal. Perubahan konten section normal tidak perlu menyentuh `App.tsx`.

## Catatan penting

Folder ini mempertahankan path gambar dan isi konten dari source yang diberikan. Source awal menyediakan komponen React/TypeScript tetapi tidak menyertakan stylesheet asli, sehingga CSS di paket ini adalah stylesheet modular dasar untuk struktur tersebut. Jika proyek Anda sudah punya CSS utama, aturan visual lama dapat dipindahkan ke file `style.css` masing-masing section tanpa mengubah `data.ts`.


## CSS hasil penggabungan

Versi ini sudah menggunakan **style.css lama sebagai basis visual utama**:
- warna, font Google, typography Fraunces/DM Sans/DM Mono
- layout hero/about/menu/featured/gallery/blog/contact
- responsive mobile
- grain/noise overlay
- hover/transition
- lightbox
- header/footer

Aturan section-specific dipindahkan ke `style.css` masing-masing section agar tetap modular.

`src/styles/legacy-style.css` adalah salinan CSS lama sebagai backup/referensi. File tersebut tidak perlu di-import karena aturan aktif sudah dibagi ke `globals.css` dan `style.css` tiap section.

> Jika proyek menggunakan Tailwind/PostCSS, pertahankan tiga directive `@tailwind` dari stylesheet lama di stylesheet global utama proyek Anda. Paket ini tidak menghapus kebutuhan konfigurasi Tailwind yang mungkin sudah ada di proyek.
