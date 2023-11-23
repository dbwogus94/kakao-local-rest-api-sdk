import { GeoCoord2addressRequestQuery } from '../../src/type';
import { HttpError } from '../../src/http-error';
import { KakaoLocalRestAPI } from '../../src/kakao-local-api';

import { invalidCoord, validCoord } from '../helper/coord';
import { initKakaoLocalAPI } from '../helper/init';

describe('KakaoLocalAPI#geoCoord2address - 좌표로 주소(지번, 도로명) 조회하기', () => {
  let api: KakaoLocalRestAPI;

  beforeAll(() => {
    api = initKakaoLocalAPI();
  });

  it('"서울특별시청" 좌표로 주소는 1개 이상 조회된다.', async () => {
    // given
    const query: GeoCoord2addressRequestQuery = {
      x: validCoord.서울특별시청.x,
      y: validCoord.서울특별시청.y,
    };
    // when
    const result = await api.geoCoord2address(query);
    // then
    expect(result.length).toBeGreaterThan(0);
  });

  it('"적도"의 좌표로 주소는 조회되지 않고 400에러가 발생한다.', async () => {
    try {
      // given
      const query: GeoCoord2addressRequestQuery = {
        x: invalidCoord.적도.x,
        y: invalidCoord.적도.y,
      };
      // when
      await api.geoCoord2address(query);
    } catch (error) {
      // then
      expect(error).toBeInstanceOf(HttpError);
      expect((error as HttpError).status).toBe(400);
    }
  });
});
