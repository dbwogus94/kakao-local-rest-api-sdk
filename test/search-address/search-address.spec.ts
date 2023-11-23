import { KakaoLocalRestAPI } from '../../src/kakao-local-api';
import { SearchAddressRequsetQuery } from '../../src/type';

import { initKakaoLocalAPI } from '../helper/init';

describe('KakaoLocalAPI#searchAddress - 주소 검색하기', () => {
  let api: KakaoLocalRestAPI;

  beforeAll(() => {
    api = initKakaoLocalAPI();
  });

  it('"서울특별시청"의 도로명주소를 사용하여 정확하기 일치하는 1개의 데이터가 조회된다.', async () => {
    // given
    const query: SearchAddressRequsetQuery = {
      query: '서울 중구 태평로1가 31',
      analyze_type: 'exact',
    };
    // when
    const result = await api.searchAddress(query);
    // then
    expect(result.length).toBeGreaterThan(0);
  });

  it('주소 체계와 일치하지 않는 정보로 질의하는 경우 빈배열을 응답한다.', async () => {
    // given
    const query: SearchAddressRequsetQuery = {
      query: '태해란로',
      analyze_type: 'exact',
    };
    // when
    const result = await api.searchAddress(query);
    // then
    expect(result.length).toBe(0);
  });
});
