import {
  BaseRequestQuery,
  CategoryGroupCode,
  StringBoolean,
} from './base.type';

/**
 * Kakao local Rest API - 카테고리 장소 검색하기 query
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword-request
 */
export interface SearchCategoryRequestQuery extends BaseRequestQuery {
  /** 카테고리 그룹 코드 */
  category_group_code: CategoryGroupCode;

  /** 중심 좌표의 X 혹은 경도(longitude) 값 */
  x?: string;

  /** 중심 좌표의 Y 혹은 위도(latitude) 값 */
  y?: string;

  /**
   * 중심 좌표부터의 반경거리.
   * - 단위: 미터(m), 최소: 0, 최대: 20000
   * - radius 또는 rect 필수
   */
  radius?: number;

  /**
   * 사각형의 지정 범위 내 제한 검색을 위한 좌표
   * - radius 또는 rect 필수
   */
  rect?: string;

  /** 결과 정렬 순서, distance 또는 accuracy(기본값: accuracy) */
  sort?: 'distance' | 'accuracy';
}

/* ================= Response ================= */

/**
 * Kakao local Rest API - 키워드로 장소 검색하기 body
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword-response
 */
export interface SearchCategoryResponse {
  /** 응답 관련 정보 */
  meta: SearchCategoryResponseMeta;
  /** 응답 결과 */
  documents: SearchCategoryResponseDocument[];
}

/**
 * 응답 관련 정보
 */
export interface SearchCategoryResponseMeta {
  /** 검색어에 검색된 문서 수(Integer) */
  total_count: string;
  /** total_count 중 노출 가능 문서 수(Integer)
   * - 최대: 45
   */
  pageable_count: string;
  /**
   * 현재 페이지가 마지막 페이지인지 여부(Boolean)
   * - true of false
   */
  is_end: StringBoolean;
  /** 질의어의 지역 및 키워드 분석 정보 */
  same_name: SameName;
}

/**
 * 질의어의 지역 및 키워드 분석 정보
 */
interface SameName {
  /** 질의어에서 인식된 지역의 리스트 */
  region: string[];
  /** 질의어에서 지역 정보를 제외한 키워드 */
  keyword: string;
  /** 인식된 지역 리스트 중, 현재 검색에 사용된 지역 정보 */
  selected_region: string;
}

/**
 * 응답 결과 Document
 */
export interface SearchCategoryResponseDocument {
  /** 장소 ID */
  id: string;
  /** 장소명, 업체명 */
  place_name: string;
  /** 카테고리 이름 */
  category_name: string;
  /** 중요 카테고리만 그룹핑한 카테고리 그룹 코드 */
  category_group_code: string;
  /** 중요 카테고리만 그룹핑한 카테고리 그룹명 */
  category_group_name: string;
  /** 전화번호 */
  phone: string;
  /** 전체 지번 주소 */
  address_name: string;
  /** 전체 도로명 주소 */
  road_address_name: string;
  /** X 좌표값, 경위도인 경우 longitude (경도) */
  x: string;
  /** Y 좌표값, 경위도인 경우 latitude (위도) */
  y: string;
  /** 장소 상세페이지 URL */
  place_url: string;
  /** 중심좌표까지의 거리 (단, x,y 파라미터를 준 경우에만 존재) */
  distance?: string; // 단위 meter
}
