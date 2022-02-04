import { Basemap } from './basemap';

export const nationalMapSatellite: Basemap = {
  name: 'National Map Satellite',
  description: null,
  url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}',
  iconUrl: 'http://a.basemaps.cartocdn.com/light_all/5/15/12.png',
  attribution: 'Tile data from <a href="https://basemap.nationalmap.gov/">USGS</a>',
  minimumLevel: 0,
  maximumLevel: 16,
  subdomains: null,
};
