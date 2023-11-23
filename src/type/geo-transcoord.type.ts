/**
 * Kakao local Rest API - 좌표계 변환하기 query
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#trans-coord-request
 */
export interface GeoTranscoordRequestQuery {
  /** X 좌표값, 경위도인 경우 경도(longitude) */
  x: string;
  /** Y 좌표값, 경위도인 경우 위도(latitude) */
  y: string;
  /** x, y로 입력되는 값에 대한 좌표계 (기본값: WGS84) */
  input_coord?: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
  /** 결과에 출력될 좌표계 (기본값: WGS84) */
  output_coord: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMUL' | 'WTM' | 'TM';
}

/* ================= Response ================= */
/**
 * Kakao local Rest API - 좌표계 변환하기 응답 body
 * @docs https://developers.kakao.com/docs/latest/ko/local/dev-guide#trans-coord-response
 */
export interface GeoTranscoordResponse {
  /** 응답 meta 데이터 */
  meta: GeoTranscoordResponseMeta;
  /** 응답 결과 */
  documents: GeoTranscoordResponseDocument[];
}

/**
 * 응답 meta 정보
 */
export interface GeoTranscoordResponseMeta {
  /** 매칭된 문서수  */
  total_count: number;
}

/**
 * 응답 결과
 */
export interface GeoTranscoordResponseDocument {
  /** X 좌표값, 경위도인 경우 경도(longitude) */
  x: string;
  /** Y 좌표값, 경위도인 경우 위도(latitude) */
  y: string;
}
