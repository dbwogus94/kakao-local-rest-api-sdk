export interface GeoCoord2addressRequestQuery {
    x: string;
    y: string;
    input_coord?: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
}
export interface GeoCoord2addressResponse {
    meta: GeoCoord2addressResponseMeta;
    documents: GeoCoord2addressResponseDocument[];
}
export interface GeoCoord2addressResponseMeta {
    total_count: number;
}
export interface GeoCoord2addressResponseDocument {
    address: GeoCoord2addressAddress;
    road_address: GeoCoord2addressRoadAddress;
}
interface GeoCoord2addressAddress {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    mountain_yn: 'Y' | 'N';
    main_address_no: string;
    sub_address_no: string;
    zip_code?: string;
}
interface GeoCoord2addressRoadAddress {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    road_name: string;
    underground_yn: 'Y' | 'N';
    main_building_no: string;
    sub_building_no: string;
    building_name: string;
    zone_no: string;
}
export {};
