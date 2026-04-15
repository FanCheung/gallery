export interface Artwork {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  year: string;
  priceRange: string;
  category: 'Masterpieces' | 'Contemporary' | 'On Fair';
  image: string;
  description: string;
  story: string;
  isHot?: boolean;
  isNew?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}
