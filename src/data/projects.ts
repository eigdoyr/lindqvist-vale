export interface Project {
  ref: string;
  id: string;
  title: string;
  typology: string;
  location: string;
  scale: string;
  year: string;
  image: string;
  alt: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    ref: "01",
    id: "ridge-house",
    title: "The Ridge House",
    typology: "Residential",
    location: "NAGANO, JAPAN",
    scale: "4,100 SQ FT",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "The Ridge House Minimalist Architecture",
    href: "/works/ridge-house",
  },
  {
    ref: "02",
    id: "glass-pavilion",
    title: "The Glass Pavilion",
    typology: "Residential",
    location: "BERKSHIRES, MA",
    scale: "3,200 SQ FT",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "The Glass Pavilion Exterior View",
    href: "/works/glass-pavilion",
  },
  {
    ref: "03",
    id: "monolith-residence",
    title: "Monolith Residence",
    typology: "Residential",
    location: "ZÜRICH, SWITZERLAND",
    scale: "5,800 SQ FT",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1659259540123-72eb0eb77357?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Monolith Concrete Villa",
    href: "/works/monolith-residence",
  },
  {
    ref: "04",
    id: "kyoto-atelier",
    title: "Kyoto Atelier",
    typology: "Commercial",
    location: "KYOTO, JAPAN",
    scale: "2,900 SQ FT",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1756706718604-ef4af3970e33?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kyoto Timber Courtyard",
    href: "/works/kyoto-atelier",
  },
  {
    ref: "05",
    id: "dune-residence",
    title: "Dune Residence",
    typology: "Residential",
    location: "COMPORTA, PORTUGAL",
    scale: "5,200 SQ FT",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    alt: "Dune Residence Coastal Architecture",
    href: "/works/dune-residence",
  },
  {
    ref: "06",
    id: "monolith-gallery",
    title: "Monolith Gallery",
    typology: "Cultural",
    location: "REYKJAVIK, ICELAND",
    scale: "12,000 SQ FT",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    alt: "Monolith Gallery Brutalist Concrete Structure",
    href: "/works/monolith-gallery",
  },
  {
    ref: "07",
    id: "studio-obsidian",
    title: "Studio Obsidian",
    typology: "Commercial",
    location: "BERLIN, GERMANY",
    scale: "3,400 SQ FT",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
    alt: "Studio Obsidian Modern Commercial Space",
    href: "/works/studio-obsidian",
  },
  {
    ref: "08",
    id: "sanctuary-of-light",
    title: "Sanctuary of Light",
    typology: "Unbuilt / Research",
    location: "PATAGONIA, CHILE",
    scale: "—",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
    alt: "Sanctuary of Light Architectural Concept",
    href: "/works/sanctuary-of-light",
  },
];
