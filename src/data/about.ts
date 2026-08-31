export interface AboutData {
  tag: string;
  linkText: string;
  linkHref: string;
  statementPrefix: string;
  locations: string[];
  statementSuffix: string;
  image: string;
  alt: string;
}

export const ABOUT_DATA: AboutData = {
  tag: "02 / ABOUT",
  linkText: "More About Studio Profile →",
  linkHref: "#about",
  statementPrefix:
    "Founded in 2018, Lindqvist & Vale is an international architectural practice operating between ",
  locations: ["Zürich", "New York", "Tokyo"],
  statementSuffix:
    "We specialize in residential, cultural, and adaptive reuse projects defined by spatial clarity and materiality.",
  image:
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=80",
  alt: "Lindqvist & Vale architectural studio space",
};
