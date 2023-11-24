import { BaseRequestQuery, StringBoolean } from './base.type';
export interface SearchAddressRequsetQuery extends BaseRequestQuery {
    query: string;
    analyze_type?: 'similar' | 'exact';
}
export interface SearchAddressResponse {
    meta: SearchAddressResponseMeta;
    documents: SearchAddressResponseDocument[];
}
export interface SearchAddressResponseMeta {
    total_count: string;
    pageable_count: string;
    is_end: StringBoolean;
}
export interface SearchAddressResponseDocument {
    address_name: string;
    address_type: 'REGION' | 'ROAD' | 'REGION_ADDR' | 'ROAD_ADDR';
    x: string;
    y: string;
    address: SearchAddressAddress;
    road_address: SearchAddressRoadAddress;
}
interface SearchAddressAddress {
    address_name: string;
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
    region_3depth_h_name: string;
    h_code: string;
    b_code: string;
    mountain_yn: 'Y' | 'N';
    main_address_no: string;
    sub_address_no: string;
    x: string;
    y: string;
}
interface SearchAddressRoadAddress {
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
    x: string;
    y: string;
}
export {};
