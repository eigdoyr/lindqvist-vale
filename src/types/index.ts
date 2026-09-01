export interface ProjectMetadata {
  client: string;
  typology: string;
  location: string;
  year: string;
  area: string;
  status: string;
}

export interface GalleryItem {
  url: string;
  caption?: string;
  aspectRatio?: "landscape" | "portrait" | "full";
}

export interface Project {
  id: string;
  ref: string;
  title: string;
  subtitle: string;
  coverImage: string;
  heroImage?: string;
  typology: string;
  location: string;
  year: string;
  area: string;
  isHero?: boolean;
  metadata: ProjectMetadata;
  narrative: string[];
  gallery: GalleryItem[];
}

export interface NavLink {
  label: string;
  href: string;
}
