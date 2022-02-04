import { Basemap } from './basemap';

/* Per Carto's website regarding basemap attribution: https://carto.com/help/working-with-data/attribution/#basemaps */
export const cartoAttribution =
  'Map tiles by <a href="https://carto.com">Carto</a>, under CC BY 3.0. Data by <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL.';

export const positron: Basemap = {
  name: 'Positron',
  description: 'CartoDB Positron basemap',
  url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  iconUrl: 'http://a.basemaps.cartocdn.com/light_all/5/15/12.png',
  attribution: cartoAttribution,
  minimumLevel: 0,
  maximumLevel: 18,
  subdomains: 'abc',
};

export const positronNoLabels: Basemap = {
  name: 'Positron without labels',
  description: 'CartoDB Positron without labels basemap',
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png',
  iconUrl: 'http://a.basemaps.cartocdn.com/rastertiles/light_nolabels/5/15/12.png',
  attribution: cartoAttribution,
  minimumLevel: 0,
  maximumLevel: 18,
  subdomains: 'abc',
};

export const darkMatter: Basemap = {
  name: 'Dark Matter',
  description: 'CartoDB Dark Matter basemap',
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
  iconUrl: 'http://a.basemaps.cartocdn.com/rastertiles/dark_all/5/15/12.png',
  attribution: cartoAttribution,
  minimumLevel: 0,
  maximumLevel: 18,
  subdomains: 'abc',
};

export const darkMatterNoLabels: Basemap = {
  name: 'Dark Matter without labels',
  description: 'CartoDB Dark Matter without labels basemap',
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png',
  iconUrl: 'http://a.basemaps.cartocdn.com/rastertiles/dark_nolabels/5/15/12.png',
  attribution: cartoAttribution,
  minimumLevel: 0,
  maximumLevel: 18,
  subdomains: 'abc',
};

export const voyager: Basemap = {
  name: 'Voyager',
  description: 'CartoDB Voyager basemap',
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png',
  iconUrl: 'http://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/5/15/12.png',
  attribution: cartoAttribution,
  minimumLevel: 0,
  maximumLevel: 18,
  subdomains: 'abc',
};

export const voyagerNoLabels: Basemap = {
  name: 'Voyager  without labels',
  description: 'CartoDB Voyager without labels basemap',
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png',
  iconUrl: 'http://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/5/15/12.png',
  attribution: cartoAttribution,
  minimumLevel: 0,
  maximumLevel: 18,
  subdomains: 'abc',
};
