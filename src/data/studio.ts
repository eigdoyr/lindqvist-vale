export interface Pillar {
  ref: string;
  title: string[];
  body: string;
}

export interface Parameter {
  figure: string;
  label: string;
  note: string;
}

export interface TeamMember {
  ref: string;
  name: string;
  role: string;
  bio: string;
  atelier: string;
  education: string;
  focus: string;
  portrait: string;
  alt: string;
}

export interface StudioQuote {
  lead: string;
  emphasis: string;
  tail: string;
}

export interface StudioData {
  eyebrow: string;
  headline: string[];
  lead: string;
  coordinates: string;
  founded: string;
  image: string;
  alt: string;
  pillars: Pillar[];
  quote: StudioQuote;
  parameters: Parameter[];
  team: TeamMember[];
}

const portrait = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=faces&w=200&h=250&q=80`;

export const STUDIO_DATA: StudioData = {
  eyebrow: "01 / Studio",
  headline: ["Purity of form.", "Rigor of execution."],
  lead: "We operate as a unified architectural practice dedicated to spatial reduction, material honesty, and permanent form.",
  coordinates: "47°22'N 8°32'E",
  founded: "Est. 2018",
  image:
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=80",
  alt: "Lindqvist & Vale studio interior, Zürich",

  pillars: [
    {
      ref: "01",
      title: ["Spatial", "reduction"],
      body: "We strip away architectural ornament to expose the fundamental structure. Space is defined not by what is added, but by the weight of what remains.",
    },
    {
      ref: "02",
      title: ["Honest", "materiality"],
      body: "Concrete, cold-rolled steel, untamed timber, and low-iron glass. We select materials that age with dignity, resisting artificial surface treatments in favor of raw patina.",
    },
    {
      ref: "03",
      title: ["Site", "dialogue"],
      body: "A building must submit to its topography. We analyse natural light vectors, wind paths, and geological contours to ground every structure in its environment.",
    },
  ],

  quote: {
    lead: "We deliberately restrict our output to ensure",
    emphasis: "direct partner involvement",
    tail: "across every phase — from initial site excavation to custom door lever joinery.",
  },
  parameters: [
    {
      figure: "6",
      label: "Annual commissions",
      note: "Maximum projects per year, preserving absolute oversight.",
    },
    {
      figure: "28",
      label: "Built portfolio",
      note: "Completed works, favouring quality over volume.",
    },
    {
      figure: "3",
      label: "Global ateliers",
      note: "Zürich, New York, and Tokyo.",
    },
    {
      figure: "18",
      label: "Studio core",
      note: "Designers and engineers in-house.",
    },
  ],

  team: [
    {
      ref: "01",
      name: "Henrik Lindqvist",
      role: "Founding partner & principal architect",
      bio: "Henrik founded the practice in 2018 following a decade of research into Swiss brutalist heritage and alpine structural engineering. His work centres on tectonic permanence — creating gravity-defying residential and civic forms that feel carved directly from rock.",
      atelier: "Zürich",
      education: "ETH Zürich (M.Arch)",
      focus: "Monolithic concrete, structural cantilevers",
      portrait: portrait("photo-1624395213043-fa2e123b2656"),
      alt: "Portrait of Henrik Lindqvist",
    },
    {
      ref: "02",
      name: "Elena Vale",
      role: "Co-partner & lead spatial strategist",
      bio: "Elena oversees North American projects and international cultural masterplans. Her background in spatial psychology and adaptive reuse informs the studio's approach to historic contexts, balancing preserved architectural heritage with radical minimalist intervention.",
      atelier: "New York",
      education: "Columbia GSAPP (M.Arch)",
      focus: "Adaptive reuse, cultural masterplanning",
      portrait: portrait("photo-1589729132389-8f0e0b55b91e"),
      alt: "Portrait of Elena Vale",
    },
    {
      ref: "03",
      name: "Kenjiro Sato",
      role: "Director of architecture & engineering",
      bio: "Kenjiro leads the technical execution team, bridging high-concept spatial vision with extreme engineering precision. He holds three patents in ultra-thin thermal break profiles and structural glass assemblies.",
      atelier: "Tokyo",
      education: "University of Tokyo (M.Eng)",
      focus: "Thermal-break envelopes, structural glass",
      portrait: portrait("photo-1603833985136-305b5fdb9dd2"),
      alt: "Portrait of Kenjiro Sato",
    },
    {
      ref: "04",
      name: "Anya Thorne",
      role: "Head of interior architecture & tactile",
      bio: "Anya directs the studio's internal interior division, developing bespoke furniture, millwork, and tactile surfaces. She works directly with quarries across Scandinavia and Northern Italy to select raw stone slabs for each project.",
      atelier: "Zürich",
      education: "Konstfack (MFA)",
      focus: "Stone, millwork, bespoke furniture",
      portrait: portrait("photo-1770058428154-9eee8a6a1fbb"),
      alt: "Portrait of Anya Thorne",
    },
  ],
};
