# LINDQVIST & VALE

A speculative brand identity and web system for a fictional architectural
practice. Built as a concept project to explore editorial layout, typographic
hierarchy, and restrained motion design.

**Live:** [lindqvist-vale.vercel.app](https://lindqvist-vale.vercel.app)

> LINDQVIST & VALE does not exist. The practice, its partners, projects,
> offices, and contact details are invented. All photography is placeholder
> imagery from Unsplash.

## Stack

- [Astro](https://astro.build) — static site generation, view transitions
- SCSS with fluid design tokens
- Deployed on Vercel

## Structure

```text
src/
  components/   Header, Footer, ProjectCard, SectionHeader, Hero, IntroFlash
  data/         Typed content modules — projects, studio, footer, navigation
  layouts/      BaseLayout — head, reveal observer, client router
  pages/        index, works/, works/[id], studio, 404
  styles/       global.scss, main.scss, tokens/
```

Content lives in `src/data` as typed modules. Pages read from those rather than
hardcoding copy, so editing text never means touching markup.

## Development

```bash
npm install
npm run dev      # localhost:4321
npm run build    # ./dist
npm run preview
```

## Design notes

- **Type** — Lora throughout, fluid `clamp()` scales, no fixed breakpoint jumps
- **Motion** — four duration tokens; in-out easing for state changes in place,
  out easing for anything that arrives
- **Accessibility** — `prefers-reduced-motion` honoured globally, drawer removed
  from the tab order when closed, focus trapped while open

## Credit

Design and build by **Ryodgie Barnatia**
[ryodgie.com](https://ryodgie.com) · [LinkedIn](https://linkedin.com/in/ryodgie) · [Dribbble](https://dribbble.com/ryodgie) · [GitHub](https://github.com/eigdoyr)

Licensed under [CC BY-NC 4.0](./LICENSE).
