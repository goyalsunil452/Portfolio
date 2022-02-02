import { environment } from "./environment";

//mention the apis
const serverIp = `${environment.serverIp}`;

export const api = {
    // here we ccan provide the full path for apis
    googleGeoLocation :`${environment.googleMaps}/maps/api/geocode/json`,
}