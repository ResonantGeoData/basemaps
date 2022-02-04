export type Basemap = {
  name: string;
  url: string;
  attribution: string;
  description: string | null;
  iconUrl: string | null;
  subdomains: string | null;
  minimumLevel: number | null;
  maximumLevel: number | null;
};
