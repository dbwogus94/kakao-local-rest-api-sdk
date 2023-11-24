import { BaseRequestQuery, CategoryGroupCode, StringBoolean } from './base.type';
export interface SearchKeywordRequestQuery extends BaseRequestQuery {
    query: string;
    category_group_code?: CategoryGroupCode;
    x?: string;
    y?: string;
    radius?: number;
    rect?: string;
    sort?: 'distance' | 'accuracy';
}
export interface SearchKeywordResponse {
    meta: SearchKeywordResponseMeta;
    documents: SearchKeywordResponseDocument[];
}
export interface SearchKeywordResponseMeta {
    total_count: string;
    pageable_count: string;
    is_end: StringBoolean;
    same_name: SameName;
}
interface SameName {
    region: string[];
    keyword: string;
    selected_region: string;
}
export interface SearchKeywordResponseDocument {
    id: string;
    place_name: string;
    category_name: string;
    category_group_code: string;
    category_group_name: string;
    phone: string;
    address_name: string;
    road_address_name: string;
    x: string;
    y: string;
    place_url: string;
    distance?: string;
}
export {};
