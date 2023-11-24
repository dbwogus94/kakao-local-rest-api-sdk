import { BaseRequestQuery, StringBoolean } from './base.type';

/**
 * Kakao local Rest API - 주소 검색하기 요청 query
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord-request-query
 */
export interface SearchAddressRequsetQuery extends BaseRequestQuery {
  /** 주소 검색을 위한 질의 */
  query: string;

  /**
   * 검색결과 제공방식
   * - similar: 건물명과 일부만 매칭될 경우에도 확장된 검색 결과 제공
   * - exact: 주소의 정확한 건물명이 입력된 주소패턴일 경우에 한해, 입력한 건물명과 정확히 일치하는 검색 결과 제공
   * @default similar
   */
  analyze_type?: 'similar' | 'exact';
}

/* ================= Response ================= */
/**
 * Kakao local Rest API - 주소 검색하기 응답 body
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord-response-body
 */
export interface SearchAddressResponse {
  /** 응답 meta 데이터 */
  meta: SearchAddressResponseMeta;
  /** 응답 결과 */
  documents: SearchAddressResponseDocument[];
}

export interface SearchAddressResponseMeta {
  /** 검색어에 검색된 문서 수(Integer) */
  total_count: string;
  /** total_count 중 노출 가능 문서 수(Integer)
   * - 최대: 45
   */
  pageable_count: string;
  /**
   * 현재 페이지가 마지막 페이지인지 여부(Boolean)
   * - 값이 false면 다음 요청 시 page 값을 증가시켜 다음 페이지 요청 가능
   */
  is_end: StringBoolean;
}

export interface SearchAddressResponseDocument {
  /** 전체 지번 주소 또는 전체 도로명 주소, 입력에 따라 결정됨 */
  address_name: string;

  /**
   * address_name의 값의 타입
   * - REGION(지명)
   * - ROAD(도로명)
   * - REGION_ADDR(지번 주소)
   * - ROAD_ADDR(도로명 주소)
   */
  address_type: 'REGION' | 'ROAD' | 'REGION_ADDR' | 'ROAD_ADDR';
  /** X 좌표값, 경위도인 경우 경도(longitude)  */
  x: string;
  /** Y 좌표값, 경위도인 경우 위도(latitude) */
  y: string;
  /** 지번 주소 상세 정보 - (구)주소정보 */
  address: SearchAddressAddress;
  /** 도로명 주소 상세 정보 */
  road_address: SearchAddressRoadAddress;
}

/**
 * 주소 검색하기 응답 - (구)주소정보
 */
export interface SearchAddressAddress {
  /** 전체 지번 주소 */
  address_name: string;
  /** 지역 1 Depth, 시도 단위 */
  region_1depth_name: string;
  /** 지역 2 Depth, 구 단위 */
  region_2depth_name: string;
  /** 지역 3 Depth, 동 단위 */
  region_3depth_name: string;
  /** 지역 3 Depth, 행정동 명칭 */
  region_3depth_h_name: string;
  /** 행정 코드 */
  h_code: string;
  /** 법정 코드 */
  b_code: string;
  /** 산 여부, Y 또는 N */
  mountain_yn: 'Y' | 'N';
  /** 지번 주번지 */
  main_address_no: string;
  /** 지번 부번지, 없을 경우 빈 문자열("") 반환 */
  sub_address_no: string;
  /** X 좌표값, 경위도인 경우 경도(longitude) */
  x: string;
  /** Y 좌표값, 경위도인 경우 위도(latitude) */
  y: string;
}

/**
 * 주소 검색하기 응답 - 도로 주소 정보
 */
export interface SearchAddressRoadAddress {
  /** 전체 도로명 주소 */
  address_name: string;
  /** 지역명1 */
  region_1depth_name: string;
  /** 지역명2 */
  region_2depth_name: string;
  /** 지역명3 */
  region_3depth_name: string;
  /** 도로명 */
  road_name: string;
  /** 지하 여부, Y 또는 N */
  underground_yn: 'Y' | 'N';
  /** 건물 본번 */
  main_building_no: string;
  /** 건물 부번, 없을 경우 빈 문자열("") 반환 */
  sub_building_no: string;
  /** 건물 이름 */
  building_name: string;
  /** 우편번호(5자리) */
  zone_no: string;
  /** X 좌표값, 경위도인 경우 경도(longitude) */
  x: string;
  /** Y 좌표값, 경위도인 경우 위도(latitude) */
  y: string;
}
