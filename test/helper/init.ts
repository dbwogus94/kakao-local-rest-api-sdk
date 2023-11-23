import { KakaoLocalAPI } from '../../src/kakao-local-api';

export function initKakaoLocalAPI() {
  const apiKey = process.env.KAKAO_REST_API_KEY;
  if (!apiKey) {
    console.log('KAKAO_REST_API_KEY가 존재하지 않습니다 : %d', apiKey);
    process.exit(1);
  }
  return new KakaoLocalAPI(apiKey);
}
