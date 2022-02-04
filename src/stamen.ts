import { Basemap } from './basemap';

/* Stamen's website (http://maps.stamen.com) as of 2019-08-28 says that the
 * maps they host may be used free of charge.  For http access, use a url like
 * http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png */
export const stamenAttribution =
  'Map tiles by <a href="http://stamen.com">Stamen ' +
  'Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">' +
  'CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap' +
  '</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.';

export const terrain: Basemap = {
  name: 'Stamen Terrain',
  description: null,
  url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
  iconUrl: 'https://stamen-tiles-a.a.ssl.fastly.net/terrain/5/15/12.png',
  attribution: stamenAttribution,
  minimumLevel: 0,
  maximumLevel: 14,
  subdomains: 'abcd',
};

export const terrainBackground: Basemap = {
  name: 'Stamen Terrain Background',
  description: null,
  url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
  iconUrl: 'https://stamen-tiles-a.a.ssl.fastly.net/terrain-background/5/15/12.png',
  attribution: stamenAttribution,
  minimumLevel: 0,
  maximumLevel: 14,
  subdomains: 'abcd',
};

export const toner: Basemap = {
  name: 'Stamen Toner',
  description: null,
  url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
  iconUrl: 'https://stamen-tiles-a.a.ssl.fastly.net/toner/5/15/12.png',
  attribution: stamenAttribution,
  minimumLevel: 0,
  maximumLevel: 14,
  subdomains: 'abcd',
};

export const tonerLite: Basemap = {
  name: 'Stamen Toner Lite',
  description: null,
  url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
  iconUrl: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png',
  attribution: stamenAttribution,
  minimumLevel: 0,
  maximumLevel: 14,
  subdomains: 'abcd',
};
