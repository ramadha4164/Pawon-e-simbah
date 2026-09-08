export type MenuItem = {
  no: string;
  name: string;
  detail: string;
  price: string;
};

export const menuData = {
  kicker: "/ 03 — Menu harian",

  note: "Makan baik, hidup baik.",

  image: `${import.meta.env.BASE_URL}images/menu/tampilan-menu.jpg`,

  imageAlt: "A vintage green menu poster",

  imageLabel: "lihat cerita kami ↗",

  ctaLabel: "Pesan untuk meja",

  ctaHref: "#contact",

  items: [
    {
      no: "01",
      name: "Soto Ayam",
      detail: "Ayam suwir · soun · telur · jeruk nipis",
      price: "15K",
    },

    {
      no: "02",
      name: "Rawon",
      detail: "Daging empuk · kluwek · sambal terasi",
      price: "28K",
    },

    {
      no: "03",
      name: "Nasi Liwet",
      detail: "Gurih santan · ayam suwir · telur · lalapan",
      price: "20K",
    },

    {
      no: "04",
      name: "Gudeg",
      detail: "Nangka muda · telur · ayam · krecek · areh",
      price: "23K",
    },

    {
      no: "05",
      name: "Manggut Lele",
      detail: "Lele · kemangi · tomat · santan · rawit · bumbu kuning",
      price: "25K",
    },

    {
      no: "06",
      name: "Rica Rica Ayam",
      detail: "Daging · santan · serai · daun jeruk · bumbu pedas",
      price: "27K",
    },

    {
      no: "07",
      name: "Pepes Pindang Tongkol",
      detail:
        "Pindang tongkol · belimbing wuluh · kunyit · daun pisang · bumbu halus",
      price: "23K",
    },

    {
      no: "08",
      name: "Sayur Asem",
      detail:
        "Jagung manis · labu siam · kacang panjang · daun melinjo · bumbu dasar",
      price: "13K",
    },
  ] satisfies MenuItem[],
};
