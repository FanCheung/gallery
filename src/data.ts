import { Artwork, Artist, NewsItem } from './types';

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'The Eternal Silence',
    artist: 'Elena Vance',
    artistId: 'a1',
    year: '2023',
    priceRange: '$120,000 - $150,000',
    category: 'Masterpieces',
    image: 'https://picsum.photos/seed/art1/800/1000',
    description: 'A profound exploration of stillness in a chaotic world.',
    story: 'Inspired by the quiet moments in the high Alps, Vance captured the essence of absolute silence using a unique layering technique that gives the canvas a physical depth.',
    isHot: true,
  },
  {
    id: '2',
    title: 'Chromatic Pulse',
    artist: 'Marcus Thorne',
    artistId: 'a2',
    year: '2024',
    priceRange: '$45,000 - $60,000',
    category: 'Contemporary',
    image: 'https://picsum.photos/seed/art2/800/1000',
    description: 'A vibrant dance of color and geometry.',
    story: 'Thorne used algorithmic patterns to define the base structure, then manually applied hundreds of glazes to create a shimmering, holographic effect.',
    isNew: true,
  },
  {
    id: '3',
    title: 'Urban Echoes',
    artist: 'Sarah Chen',
    artistId: 'a3',
    year: '2022',
    priceRange: '$85,000 - $110,000',
    category: 'Masterpieces',
    image: 'https://picsum.photos/seed/art3/800/1000',
    description: 'The intersection of architecture and memory.',
    story: 'Chen spent three years documenting the demolition of a historic district in Shanghai, using the dust from the site as a pigment in this work.',
  },
  {
    id: '4',
    title: 'Fragmented Reality',
    artist: 'Julian Rossi',
    artistId: 'a4',
    year: '2024',
    priceRange: '$30,000 - $45,000',
    category: 'On Fair',
    image: 'https://picsum.photos/seed/art4/800/1000',
    description: 'Deconstructing the human form in the digital age.',
    story: 'Rossi explores how our self-perception is altered by social media filters and digital avatars.',
    isNew: true,
  },
];

export const ARTISTS: Artist[] = [
  {
    id: 'a1',
    name: 'Elena Vance',
    bio: 'Elena Vance (b. 1985) is a Swiss-born painter known for her large-scale minimalist landscapes. Her work is held in major collections including the Tate Modern and MoMA.',
    image: 'https://picsum.photos/seed/artist1/400/400',
  },
  {
    id: 'a2',
    name: 'Marcus Thorne',
    bio: 'Marcus Thorne is a digital-native artist whose work bridges the gap between generative algorithms and traditional oil painting.',
    image: 'https://picsum.photos/seed/artist2/400/400',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Artisanal Gallery at Art Basel 2026',
    date: 'April 10, 2026',
    excerpt: 'We are proud to announce our participation in the upcoming Art Basel fair, showcasing new works by Elena Vance.',
    image: 'https://picsum.photos/seed/news1/800/400',
  },
  {
    id: 'n2',
    title: 'The Rise of Digital Collectibles',
    date: 'March 28, 2026',
    excerpt: 'Exploring how blockchain technology is reshaping the provenance and trading of physical artworks.',
    image: 'https://picsum.photos/seed/news2/800/400',
  },
];
