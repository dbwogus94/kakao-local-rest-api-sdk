export interface GeoTranscoordRequestQuery {
    x: string;
    y: string;
    input_coord?: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
    output_coord: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
}
export interface GeoTranscoordResponse {
    meta: GeoTranscoordResponseMeta;
    documents: GeoTranscoordResponseDocument[];
}
export interface GeoTranscoordResponseMeta {
    total_count: number;
}
export interface GeoTranscoordResponseDocument {
    x: string;
    y: string;
}
