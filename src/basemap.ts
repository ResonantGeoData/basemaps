export interface Basemap {
  readonly name: string;
  readonly url: string;
  readonly attribution: string;
  readonly description: string | null;
  readonly iconUrl: string | null;
  readonly subdomains: string | null;
  readonly minimumLevel: number | null;
  readonly maximumLevel: number | null;
};

export type BasemapGroup = Record<string, Basemap>;
