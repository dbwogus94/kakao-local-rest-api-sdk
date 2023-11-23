/**
 * Kakao local Rest API - 좌표로 주소 변환하기 query
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-address-request
 */
export interface GeoCoord2addressRequestQuery {
  /** X 좌표값, 경위도인 경우 경도(longitude) */
  x: string;
  /** Y 좌표값, 경위도인 경우 위도(latitude) */
  y: string;
  /** x, y로 입력되는 값에 대한 좌표계 (기본값: WGS84) */
  input_coord?: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
}

/* ================= Response ================= */

/**
 * Kakao local Rest API - 좌표로 주소 변환하기 응답 body
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-address-response
 */
export interface GeoCoord2addressResponse {
  /** 응답 관련 정보 */
  meta: GeoCoord2addressResponseMeta;
  /** 응답 결과 */
  documents: GeoCoord2addressResponseDocument[];
}

/**
 * 주소 변환 응답의 meta 정보
 */
export interface GeoCoord2addressResponseMeta {
  /**
   * 변환된 지번 주소 및 도로명 주소의 개수
   * - 0 또는 1
   */
  total_count: number;
}

/**
 * 주소 변환 응답의 Document 정보
 */
export interface GeoCoord2addressResponseDocument {
  /** 지번 주소 상세 정보 */
  address: GeoCoord2addressAddress;
  /** 도로명 주소 상세 정보 */
  road_address: GeoCoord2addressRoadAddress;
}

/**
 * 좌표로 주소 변환하기 응답 - 지번 주소 상세 정보
 */
interface GeoCoord2addressAddress {
  /** 전체 지번 주소 */
  address_name: string;
  /** 지역 1Depth명, 시도 단위 */
  region_1depth_name: string;
  /** 지역 2Depth명, 구 단위 */
  region_2depth_name: string;
  /** 지역 3Depth명, 동 단위 */
  region_3depth_name: string;
  /** 산 여부, Y 또는 N */
  mountain_yn: 'Y' | 'N';
  /** 지번 주 번지 */
  main_address_no: string;
  /** 지번 부 번지, 없을 경우 빈 문자열("") 반환 */
  sub_address_no: string;
  /** 우편번호 (Deprecated: 6자리, 공지 참고) */
  zip_code?: string; // Deprecated
}

/**
 * 좌표로 주소 변환하기 응답 - 도로명 주소 상세 정보
 */
interface GeoCoord2addressRoadAddress {
  /** 전체 도로명 주소 */
  address_name: string;
  /** 지역 1Depth, 시도 단위 */
  region_1depth_name: string;
  /** 지역 2Depth, 구 단위 */
  region_2depth_name: string;
  /** 지역 3Depth, 면 단위 */
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
}
