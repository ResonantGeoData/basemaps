import { Basemap } from './basemap';

export const osmAttribution = 'Data by <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL.';

export const osm: Basemap = {
  name: 'OpenStreetMap',
  description:
    'OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.\nhttp://www.openstreetmap.org',
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  iconUrl: 'https://a.tile.openstreetmap.org/5/15/12.png',
  attribution: osmAttribution,
  minimumLevel: 0,
  maximumLevel: 19,
  subdomains: 'abc',
};
