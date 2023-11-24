export interface GeoCoord2regioncodeRequestQuery {
    x: string;
    y: string;
    input_coord?: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
    output_coord?: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
}
export interface GeoCoord2regioncodeResponse {
    meta: GeoCoord2regioncodeResponseMeta;
    documents: GeoCoord2regioncodeResponseDocument[];
}
export interface GeoCoord2regioncodeResponseMeta {
    total_count: number;
}
export interface GeoCoord2regioncodeResponseDocument {
    region_type: 'H' | 'B';
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    region_4depth_name?: string;
    code: string;
    x: number;
    y: number;
}
