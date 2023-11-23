/**
 * Kakao local Rest API - 좌표로 행정구역정보 받기 query
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-district-request
 */
export interface GeoCoord2regioncodeRequestQuery {
  /** X 좌표값, 경위도인 경우 경도(longitude) */
  x: string;
  /** Y 좌표값, 경위도인 경우 위도(latitude) */
  y: string;
  /** x, y로 입력되는 값에 대한 좌표계 (기본값: WGS84) */
  input_coord?: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
  /** 결과에 출력될 좌표계 (기본값: WGS84) */
  output_coord?: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
}

/* ================= Response ================= */

/**
 * Kakao local Rest API - 주소 검색하기 응답 body
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-district-response
 */
export interface GeoCoord2regioncodeResponse {
  /** 응답 meta 데이터 */
  meta: GeoCoord2regioncodeResponseMeta;
  /** 응답 결과 */
  documents: GeoCoord2regioncodeResponseDocument[];
}

/**
 * 응답 meta 정보
 */
export interface GeoCoord2regioncodeResponseMeta {
  /** 검색어에 검색된 문서 수 */
  total_count: number;
}

/**
 * 응답 결과
 */
export interface GeoCoord2regioncodeResponseDocument {
  /** region_type: H(행정동) 또는 B(법정동) */
  region_type: 'H' | 'B';
  /** 전체 지역 명칭 */
  address_name: string;
  /** 지역 1Depth, 시도 단위 */
  region_1depth_name: string;
  /** 지역 2Depth, 구 단위 */
  region_2depth_name: string;
  /** 지역 3Depth, 동 단위 */
  region_3depth_name: string;
  /** 지역 4Depth (region_type이 법정동이며, 리 영역인 경우만 존재) */
  region_4depth_name?: string;
  /** region 코드 */
  code: string;
  /** X 좌표값, 경위도인 경우 경도(longitude) */
  x: number;
  /** Y 좌표값, 경위도인 경우 위도(latitude) */
  y: number;
}
