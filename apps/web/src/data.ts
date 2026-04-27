import { Artwork, Artist, NewsItem, Exhibition } from './types';
import artworkRecords from './db/artwork.json';
import exhibitionRecords from './db/exhibitions.json';
import miroPhoto from './assets/img/joan miro maravilla.png';
import picassoPhoto from './assets/img/4- linocut.png';
import news1Image from './assets/img/news1.png';
import news2Image from './assets/img/news2.png';

type ArtworkJsonRow = {
  id: number;
  fileName: string;
  title: string;
  dimensions: string;
  estimatedPrice: string;
  story: string;
};

type ExhibitionJsonRow = {
  id: number;
  fileName: string;
  title: string;
  period: string;
  location: string;
  kind: 'upcoming' | 'past';
  story: string;
};

const rows = artworkRecords as ArtworkJsonRow[];
const exhibitionRows = exhibitionRecords as ExhibitionJsonRow[];

const assetUrls = import.meta.glob<string>('./assets/img/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const assetStem = (fileName: string) =>
  fileName.replace(/\.[^.]+$/i, '').trim().toLowerCase().normalize('NFC');

const stemToUrl = (() => {
  const m = new Map<string, string>();
  for (const path of Object.keys(assetUrls)) {
    const base = path.split('/').pop() ?? '';
    m.set(assetStem(base), assetUrls[path]);
  }
  return m;
})();

const firstSentence = (text: string): string => {
  const parts = text.split(/(?<=[.!?])\s+/);
  return (parts[0] ?? text).trim();
};

const yearFromStory = (story: string): string => {
  const m = story.match(/\b(18|19|20)\d{2}\b/);
  return m?.[0] ?? '';
};

const resolveArtworkImage = (fileName: string): string => {
  const stem = assetStem(fileName);
  const url = stemToUrl.get(stem);
  if (!url) console.warn(`[gallery] Missing image asset for "${fileName}" (stem: "${stem}")`);
  return url ?? '';
};

export const EXHIBITIONS: Exhibition[] = exhibitionRows.map((row) => ({
  id: String(row.id),
  title: row.title,
  period: row.period,
  location: row.location,
  kind: row.kind,
  image: resolveArtworkImage(row.fileName),
  story: row.story.trim(),
}));

const artistForRow = (fileName: string): { name: string; id: string } => {
  if (fileName.toLowerCase().includes('melodie')) return { name: 'Joan Miró', id: 'miro' };
  return { name: 'Pablo Picasso', id: 'picasso' };
};

const categories: Artwork['category'][] = ['Masterpieces', 'Contemporary', 'On Fair'];

export const ARTWORKS: Artwork[] = rows.map((row, index) => {
  const { name, id: artistId } = artistForRow(row.fileName);
  const story = row.story.trim();
  return {
    id: String(row.id),
    title: row.title,
    artist: name,
    artistId,
    year: yearFromStory(story),
    priceRange: row.estimatedPrice,
    category: categories[index % categories.length]!,
    image: resolveArtworkImage(row.fileName),
    description: [row.dimensions, firstSentence(story)].filter(Boolean).join(' — '),
    story,
    dimensions: row.dimensions,
  };
});

export const ARTISTS: Artist[] = [
  {
    id: 'picasso',
    name: 'Pablo Picasso',
    bio: 'Pablo Picasso (1881–1973) was a Spanish painter, sculptor, and printmaker who co-founded Cubism and reshaped modern art across painting, ceramics, and graphic work—including his celebrated bullfighting and Mediterranean suites.',
    image: picassoPhoto,
  },
  {
    id: 'miro',
    name: 'Joan Miró',
    bio: 'Joan Miró (1893–1983) was a Catalan painter, sculptor, and printmaker associated with Surrealism. His graphic work is known for lyrical signs, bold color, and playful, automatic line.',
    image: miroPhoto,
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Artisanal Gallery at Art Basel 2026',
    date: 'April 10, 2026',
    excerpt: 'We are proud to announce our participation in the upcoming Art Basel fair, showcasing new works by Elena Vance.',
    image: news1Image,
  },
  {
    id: 'n2',
    title: 'The Rise of Digital Collectibles',
    date: 'March 28, 2026',
    excerpt: 'Exploring how blockchain technology is reshaping the provenance and trading of physical artworks.',
    image: news2Image,
  },
];
