const DEFAULT_WIDTHS = [640, 960, 1280, 1600, 2000, 2560];

function atWidth(url: string, width: number): string {
  const next = new URL(url);
  next.searchParams.set("w", String(width));
  next.searchParams.set("auto", "format");
  next.searchParams.delete("h");
  return next.toString();
}

export function srcset(url: string, widths: number[] = DEFAULT_WIDTHS): string {
  return widths.map((width) => `${atWidth(url, width)} ${width}w`).join(", ");
}
