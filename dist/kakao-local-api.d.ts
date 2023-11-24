import type { GeoCoord2addressRequestQuery, GeoCoord2addressResponseDocument, GeoCoord2regioncodeRequestQuery, GeoCoord2regioncodeResponseDocument, GeoTranscoordRequestQuery, GeoTranscoordResponseDocument, SearchAddressRequsetQuery, SearchAddressResponseDocument, SearchKeywordRequestQuery, SearchKeywordResponseDocument, SearchCategoryRequestQuery, SearchCategoryResponseDocument } from './type';
export interface KakaoLocalRestAPI {
    geoCoord2regioncode(query: GeoCoord2regioncodeRequestQuery): Promise<GeoCoord2regioncodeResponseDocument[]>;
    geoCoord2address(query: GeoCoord2addressRequestQuery): Promise<GeoCoord2addressResponseDocument[]>;
    geoTranscoord(query: GeoTranscoordRequestQuery): Promise<GeoTranscoordResponseDocument[]>;
    searchAddress(query: SearchAddressRequsetQuery): Promise<SearchAddressResponseDocument[]>;
    searchKeyword(query: SearchKeywordRequestQuery): Promise<SearchKeywordResponseDocument[]>;
    searchCategory(query: SearchCategoryRequestQuery): Promise<SearchCategoryResponseDocument[]>;
}
export declare class KakaoLocalAPI implements KakaoLocalRestAPI {
    #private;
    constructor(apiKey: string);
    geoCoord2regioncode(query: GeoCoord2regioncodeRequestQuery): Promise<GeoCoord2regioncodeResponseDocument[]>;
    geoCoord2address(query: GeoCoord2addressRequestQuery): Promise<GeoCoord2addressResponseDocument[]>;
    geoTranscoord(query: GeoTranscoordRequestQuery): Promise<GeoTranscoordResponseDocument[]>;
    searchAddress(query: SearchAddressRequsetQuery): Promise<SearchAddressResponseDocument[]>;
    searchKeyword(query: SearchKeywordRequestQuery): Promise<SearchKeywordResponseDocument[]>;
    searchCategory(query: SearchCategoryRequestQuery): Promise<SearchCategoryResponseDocument[]>;
    private get;
    private convertQueryString;
}
