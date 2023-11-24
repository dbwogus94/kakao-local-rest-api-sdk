import { BaseRequestQuery, CategoryGroupCode, StringBoolean } from './base.type';
export interface SearchCategoryRequestQuery extends BaseRequestQuery {
    category_group_code: CategoryGroupCode;
    x?: string;
    y?: string;
    radius?: number;
    rect?: string;
    sort?: 'distance' | 'accuracy';
}
export interface SearchCategoryResponse {
    meta: SearchCategoryResponseMeta;
    documents: SearchCategoryResponseDocument[];
}
export interface SearchCategoryResponseMeta {
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
export interface SearchCategoryResponseDocument {
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
