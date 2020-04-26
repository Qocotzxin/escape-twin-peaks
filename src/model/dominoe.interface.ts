export interface Tile {
  style: { [id: string]: string };
  icons: string[];
  x: number;
  y: number;
  id: string[] | string;
  ok: boolean;
  vertical?: boolean;
}
