const MAPBOX_TOKEN = 'pk.eyJ1Ijoibmljb2xhc3BhcmRvIiwiYSI6ImNrc3Z6N240bTByemUyb3F1Zng2anZ5MWUifQ.jPvwUS4kbseTEs1BVBE-LQ';
const MAPBOX_STYLE = "mapbox://styles/mapbox/streets-v11";
const MAPBOX_VIEWPORT_WIDTH = '100%';
const MAPBOX_VIEWPORT_HEIGHT = '100%';
const MAPBOX_VIEWPORT_LATITUDE = -34.616264;
const MAPBOX_VIEWPORT_LONGITUDE = -58.440323;
const MAPBOX_VIEWPORT_ZOOM = 12.5;

export const mapBoxConfig = {
    width: MAPBOX_VIEWPORT_WIDTH,
    height: MAPBOX_VIEWPORT_HEIGHT,
    latitude: MAPBOX_VIEWPORT_LATITUDE,
    longitude: MAPBOX_VIEWPORT_LONGITUDE,
    zoom: MAPBOX_VIEWPORT_ZOOM,
    token: MAPBOX_TOKEN,
    style: MAPBOX_STYLE,
};