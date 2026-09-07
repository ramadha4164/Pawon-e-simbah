export type BlogArticle = {
  number: string;
  title: string;
  meta: string;
};

export const blogData = {
  kicker: '/ 06 — From the journal',
  note: 'Catatan dari meja makan',
  title: ['Notes on', 'good', 'food & slow days.'],
  readAllLabel: 'Read all',
  readAllHref: '#contact',
  articles: [
    { number: '01', title: 'Kenapa setiap rumah punya rasa soto yang berbeda?', meta: 'Cerita · 4 min read' },
    { number: '02', title: 'Kluwek, si hitam yang memberi jiwa pada Rawon.', meta: 'Bahan · 6 min read' },
    { number: '03', title: 'Makan pelan-pelan: resep kecil untuk hari yang ramai.', meta: 'Catatan · 3 min read' },
  ] satisfies BlogArticle[],
};
