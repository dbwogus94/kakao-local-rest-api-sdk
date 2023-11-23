import axios, { AxiosInstance, AxiosError } from 'axios';

import type {
  GeoCoord2addressRequestQuery,
  GeoCoord2addressResponseDocument,
  GeoCoord2regioncodeRequestQuery,
  GeoCoord2regioncodeResponseDocument,
  GeoTranscoordRequestQuery,
  GeoTranscoordResponseDocument,
  SearchAddressRequsetQuery,
  SearchAddressResponseDocument,
  SearchKeywordRequestQuery,
  SearchKeywordResponseDocument,
  SearchCategoryRequestQuery,
  SearchCategoryResponseDocument,
} from './type';
import { HttpError } from './http-error';

export interface KakaoLocalRestAPI {
  /**
   * 카카오 Local REST API - 좌표로 행정구역정보 받기
   * @param query
   * @throws HttpError
   * @restAPI GET https://dapi.kakao.com/v2/local/geo/coord2regioncode.json
   * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-district
   */
  geoCoord2regioncode(
    query: GeoCoord2regioncodeRequestQuery,
  ): Promise<GeoCoord2regioncodeResponseDocument[]>;

  /**
   * 카카오 Local REST API - 좌표로 주소(지번, 도로명) 변환하기
   * @param query
   * @throws HttpError
   * @restAPI GET https://dapi.kakao.com/v2/local/geo/coord2address.json
   * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-address
   * @throws HttpError
   */
  geoCoord2address(
    query: GeoCoord2addressRequestQuery,
  ): Promise<GeoCoord2addressResponseDocument[]>;

  /**
   * 카카오 Local REST API - 좌표계 변환하기
   * @param query
   * @throws HttpError
   * @restAPI GET https://dapi.kakao.com/v2/local/geo/transcoord.json
   * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#trans-coord
   */
  geoTranscoord(
    query: GeoTranscoordRequestQuery,
  ): Promise<GeoTranscoordResponseDocument[]>;

  /**
   * 카카오 Local REST API - 주소 검색하기
   * @param query
   * @throws HttpError
   * @restAPI GET https://dapi.kakao.com/v2/local/search/address.json
   * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord
   */
  searchAddress(
    query: SearchAddressRequsetQuery,
  ): Promise<SearchAddressResponseDocument[]>;

  /**
   * 카카오 Local REST API - 키워드로 장소 검색하기
   * @param query
   * @throws HttpError
   * @restAPI GET https://dapi.kakao.com/v2/local/search/keyword.json
   * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword
   */
  searchKeyword(
    query: SearchKeywordRequestQuery,
  ): Promise<SearchKeywordResponseDocument[]>;

  /**
   * 카카오 Local REST API - 카테고리로 장소 검색하기
   * @param query
   * @throws HttpError
   * @restAPI GET https://dapi.kakao.com/v2/local/search/category.json
   * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-category
   */
  searchCategory(
    query: SearchCategoryRequestQuery,
  ): Promise<SearchCategoryResponseDocument[]>;
}

export class KakaoLocalAPI implements KakaoLocalRestAPI {
  #api: AxiosInstance;
  #baseURL: string = 'https://dapi.kakao.com/v2/local';

  /**
   * @param apiKey -  카카오 Local REST API Key
   */
  constructor(apiKey: string) {
    this.#api = axios.create({ baseURL: this.#baseURL });
    this.#api.interceptors.request.use((config) => {
      config.headers.Authorization = `KakaoAK ${apiKey}`;
      return config;
    });
  }

  async geoCoord2regioncode(
    query: GeoCoord2regioncodeRequestQuery,
  ): Promise<GeoCoord2regioncodeResponseDocument[]> {
    const url = `${this.#baseURL}/geo/coord2regioncode.json`;
    return this.get(url, query);
  }

  async geoCoord2address(
    query: GeoCoord2addressRequestQuery,
  ): Promise<GeoCoord2addressResponseDocument[]> {
    const url = `${this.#baseURL}/geo/coord2address.json`;
    return this.get(url, query);
  }

  async geoTranscoord(
    query: GeoTranscoordRequestQuery,
  ): Promise<GeoTranscoordResponseDocument[]> {
    const url = `${this.#baseURL}/geo/transcoord.json`;
    return this.get(url, query);
  }

  async searchAddress(
    query: SearchAddressRequsetQuery,
  ): Promise<SearchAddressResponseDocument[]> {
    const url = `${this.#baseURL}/search/address.json`;
    return this.get(url, query);
  }

  async searchKeyword(
    query: SearchKeywordRequestQuery,
  ): Promise<SearchKeywordResponseDocument[]> {
    const url = `${this.#baseURL}/search/keyword.json`;
    return this.get(url, query);
  }

  async searchCategory(
    query: SearchCategoryRequestQuery,
  ): Promise<SearchCategoryResponseDocument[]> {
    const url = `${this.#baseURL}/search/category.json`;
    return this.get(url, query);
  }

  private async get<T>(url: string, query: Record<string, any>): Promise<T> {
    try {
      const queryString = this.convertQueryString(query);
      const response = await this.#api.get(`${url}?${queryString}`);
      return response.data.documents;
    } catch (error) {
      const axiosError = error as AxiosError;
      const { status, data } = axiosError.response!;
      throw new HttpError(axiosError, status, JSON.stringify(data));
    }
  }

  private convertQueryString(query: Record<string, any>): string {
    return new URLSearchParams(query).toString();
  }
}
