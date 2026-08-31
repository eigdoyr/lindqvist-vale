export interface Project {
  id: string;
  title: string;
  location: string;
  scale: string;
  year: string;
  image: string;
  alt: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ridge-house",
    title: "The Ridge House",
    location: "NAGANO, JAPAN",
    scale: "4,100 SQ FT",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "The Ridge House Minimalist Architecture",
    href: "/works/ridge-house",
  },
  {
    id: "glass-pavilion",
    title: "The Glass Pavilion",
    location: "BERKSHIRES, MA",
    scale: "3,200 SQ FT",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "The Glass Pavilion Exterior View",
    href: "/works/glass-pavilion",
  },
  {
    id: "monolith-residence",
    title: "Monolith Residence",
    location: "ZÜRICH, SWITZERLAND",
    scale: "5,800 SQ FT",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1659259540123-72eb0eb77357?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Monolith Concrete Villa",
    href: "/works/monolith-residence",
  },
  {
    id: "kyoto-atelier",
    title: "Kyoto Atelier",
    location: "KYOTO, JAPAN",
    scale: "2,900 SQ FT",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1756706718604-ef4af3970e33?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kyoto Timber Courtyard",
    href: "/works/kyoto-atelier",
  },
];
