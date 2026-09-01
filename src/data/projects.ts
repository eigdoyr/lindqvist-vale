export interface ProjectSpec {
  label: string;
  value: string;
}

export interface GalleryItem {
  url: string;
  alt: string;
  caption?: string;
  layout?: "full" | "half";
}

export interface Project {
  ref: string;
  id: string;
  title: string;
  subtitle?: string;
  typology: string;
  location: string;
  scale: string;
  year: string;
  image: string;
  alt: string;
  href: string;
  summary?: string;
  paragraphs?: string[];
  specs?: ProjectSpec[];
  gallery?: GalleryItem[];
}

export const PROJECTS: Project[] = [
  {
    ref: "01",
    id: "ridge-house",
    title: "The Ridge House",
    subtitle:
      "A linear timber volume cantilevered over the Nagano forest slope.",
    typology: "Residential",
    location: "NAGANO, JAPAN",
    scale: "4,100 SQ FT",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "The Ridge House Minimalist Architecture",
    href: "/works/ridge-house",
    summary:
      "Positioned along a steep forested ridge in Nagano, this residence uses charred Yakisugi cedar and raw concrete to create an intimate sanctuary framed by mountain views.",
    paragraphs: [
      "The site sits on a dramatic alpine drop-off, surrounded by dense cedar pines. The primary objective was to create a singular horizontal line across the terrain—a quiet architectural accent that allows the surrounding natural landscape to take center stage.",
      "Constructed using traditional Japanese joinery coupled with heavy steel framework, the structure projects six meters past the cliff edge. Internal spaces are sequenced along a single axis, guiding daylight deep into the living quarters while maintaining thermal insulation during sub-zero winter temperatures.",
      "Materials were limited strictly to local Japanese Larch, blackened Yakisugi siding, and board-formed concrete poured on site. Over time, the exterior timber will weather into silver-gray tones, further blending the building into the forest canopy.",
    ],
    specs: [
      { label: "LEAD ARCHITECT", value: "Erik Lindqvist, Hana Sato" },
      { label: "STRUCTURAL ENGINEER", value: "Kuroda Engineering" },
      { label: "FACADE MATERIAL", value: "Shou Sugi Ban (Yakisugi) Cedar" },
      { label: "COMPLETION", value: "November 2025" },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
        alt: "Ridge House Interior Living Area",
        caption:
          "Open living room with floor-to-ceiling glazing facing the northern valley.",
        layout: "full",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
        alt: "Ridge House Timber Detail",
        caption:
          "Custom Japanese Larch joinery and built-in minimalist storage.",
        layout: "half",
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80",
        alt: "Ridge House Courtyard",
        caption: "Secluded entry courtyard protected from alpine wind shifts.",
        layout: "half",
      },
    ],
  },
  {
    ref: "02",
    id: "glass-pavilion",
    title: "The Glass Pavilion",
    subtitle: "Dematerialized living framed within Berkshire woodland.",
    typology: "Residential",
    location: "BERKSHIRES, MA",
    scale: "3,200 SQ FT",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "The Glass Pavilion Exterior View",
    href: "/works/glass-pavilion",
    summary:
      "A light-filled sanctuary exploring transparency, reflection, and quiet enclosure in upstate Massachusetts.",
    paragraphs: [
      "Nestled within a grove of deciduous hardwoods, The Glass Pavilion challenges boundaries between interior comfort and seasonal foliage. Floating above a natural stone plinth, the roof plane is supported by ultra-slender steel columns.",
      "The perimeter is entirely wrapped in structural triple-pane glass units, low-iron engineered for absolute neutrality. Radiant basalt floor slabs provide silent heating throughout harsh winter freezes.",
    ],
    specs: [
      { label: "LEAD ARCHITECT", value: "Astrid Vale" },
      { label: "LIGHTING DESIGN", value: "Studio Atelier NY" },
      { label: "GLAZING SPEC", value: "Triple-Pane Low-E Low-Iron" },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
        alt: "Glass Pavilion Forest View",
        caption: "Panorama view toward the surrounding woodland canopy.",
        layout: "full",
      },
    ],
  },
  {
    ref: "03",
    id: "monolith-residence",
    title: "Monolith Residence",
    subtitle: "A sculpted concrete villa overlooking Lake Zürich.",
    typology: "Residential",
    location: "ZÜRICH, SWITZERLAND",
    scale: "5,800 SQ FT",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1659259540123-72eb0eb77357?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Monolith Concrete Villa",
    href: "/works/monolith-residence",
    summary:
      "Monolithic thermal concrete walls meet quiet oak interiors, balancing privacy on a suburban Swiss hillside.",
    paragraphs: [
      "Crafted from raw insitu concrete poured with custom timber shuttering, Monolith Residence rises like a boulder from the sloping site. Deep window reveals shield internal living quarters from neighbouring properties while channeling dramatic daylight.",
      "The interior plan revolves around a double-height atrium that connects the upper private bedrooms to the garden level below.",
    ],
    specs: [
      { label: "LEAD ARCHITECT", value: "Erik Lindqvist" },
      { label: "CONCRETE TYPE", value: "Insitu Insulated Monolithic Concrete" },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
        alt: "Monolith Residence Living Atrium",
        caption: "Atrium staircase framed by board-formed concrete walls.",
        layout: "full",
      },
    ],
  },
  {
    ref: "04",
    id: "kyoto-atelier",
    title: "Kyoto Atelier",
    subtitle: "Restoration and modern insertion inside a Machiya courtyard.",
    typology: "Commercial",
    location: "KYOTO, JAPAN",
    scale: "2,900 SQ FT",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1756706718604-ef4af3970e33?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kyoto Timber Courtyard",
    href: "/works/kyoto-atelier",
    summary:
      "Adaptive reuse of a historic wooden townhouse, transformed into an exhibition space and tea workspace.",
    paragraphs: [
      "Respecting the historical urban grain of Kyoto, this project combines delicate timber preservation with minimalist bronze and glass insertions. A central moss garden brings calm ventilation throughout the workspace.",
    ],
    specs: [
      { label: "LEAD ARCHITECT", value: "Hana Sato" },
      { label: "CRAFT PARTNERS", value: "Kyoto Timber Guild" },
    ],
    gallery: [],
  },
  {
    ref: "05",
    id: "dune-residence",
    title: "Dune Residence",
    subtitle:
      "Low-slung rammed earth architecture embedded in Portuguese sand dunes.",
    typology: "Residential",
    location: "COMPORTA, PORTUGAL",
    scale: "5,200 SQ FT",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    alt: "Dune Residence Coastal Architecture",
    href: "/works/dune-residence",
    summary:
      "Rammed earth walls sourced directly from site soil anchor this oceanfront home into Comporta's pine ridges.",
    paragraphs: [
      "Designed to withstand coastal saline breeze while maintaining high thermal mass, Dune Residence relies on thick rammed-earth piers, expansive shaded verandas, and natural pine decking.",
    ],
    specs: [
      { label: "LEAD ARCHITECT", value: "Astrid Vale" },
      { label: "EARTH CONTRACTOR", value: "Terra Form Studio" },
    ],
    gallery: [],
  },
  {
    ref: "06",
    id: "monolith-gallery",
    title: "Monolith Gallery",
    subtitle:
      "Subterranean art pavilion integrated into Icelandic volcanic basalt.",
    typology: "Cultural",
    location: "REYKJAVIK, ICELAND",
    scale: "12,000 SQ FT",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    alt: "Monolith Gallery Brutalist Concrete Structure",
    href: "/works/monolith-gallery",
    summary:
      "A public gallery space carved into volcanic rock, lit exclusively through ceiling light apertures.",
    paragraphs: [
      "Designed as a quiet sanctuary for contemporary sculpture, Monolith Gallery uses raw pigmented concrete and volcanic aggregate to echo the rugged Icelandic landscape.",
    ],
    specs: [{ label: "LEAD ARCHITECT", value: "Erik Lindqvist" }],
    gallery: [],
  },
  {
    ref: "07",
    id: "studio-obsidian",
    title: "Studio Obsidian",
    subtitle:
      "Former industrial foundry transformed into a modern design laboratory.",
    typology: "Commercial",
    location: "BERLIN, GERMANY",
    scale: "3,400 SQ FT",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80",
    alt: "Studio Obsidian Modern Commercial Space",
    href: "/works/studio-obsidian",
    summary:
      "Steel framing, matte black finishes, and restored brickwork give this Berlin studio space quiet rigor.",
    paragraphs: [
      "Retaining the historic industrial shell, internal partitions were replaced with translucent acoustic glass screens, creating flexible open workspaces.",
    ],
    specs: [{ label: "LEAD ARCHITECT", value: "Astrid Vale" }],
    gallery: [],
  },
  {
    ref: "08",
    id: "sanctuary-of-light",
    title: "Sanctuary of Light",
    subtitle:
      "Conceptual chapel exploring shadow, wind, and Patagonia horizon.",
    typology: "Unbuilt / Research",
    location: "PATAGONIA, CHILE",
    scale: "—",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
    alt: "Sanctuary of Light Architectural Concept",
    href: "/works/sanctuary-of-light",
    summary:
      "An unbuilt research prototype investigating off-grid timber assemblies in extreme weather zones.",
    paragraphs: [
      "Designed as an experimental shelter for wind observation, Sanctuary of Light uses self-tensioning cable stays and prefabricated cross-laminated timber panels.",
    ],
    specs: [{ label: "RESEARCH LEAD", value: "Lindqvist & Vale Lab" }],
    gallery: [],
  },
];
