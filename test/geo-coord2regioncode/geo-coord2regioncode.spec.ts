import { GeoCoord2regioncodeRequestQuery } from '../../src/type';
import { KakaoLocalRestAPI } from '../../src/kakao-local-api';
import { HttpError } from '../../src/http-error';

import { initKakaoLocalAPI } from '../helper/init';
import { invalidCoord, validCoord } from '../helper/coord';

describe('KakaoLocalAPI#geoCoord2regioncode - 좌표로 행정구역정보 받기', () => {
  let api: KakaoLocalRestAPI;

  beforeAll(() => {
    api = initKakaoLocalAPI();
  });

  it('"서울특별시청" 좌표로 행정구역정보는 1개 이상 조회된다.', async () => {
    // given
    const query: GeoCoord2regioncodeRequestQuery = {
      x: validCoord.서울특별시청.x,
      y: validCoord.서울특별시청.y,
    };
    // when
    const result = await api.geoCoord2regioncode(query);
    // then
    expect(result.length).toBeGreaterThan(0);
  });

  it('"적도" 좌표로는 행정구역정보가 조회되지 않고 400에러가 발생한다.', async () => {
    try {
      // given
      const query: GeoCoord2regioncodeRequestQuery = {
        x: invalidCoord.적도.x,
        y: invalidCoord.적도.y,
      };
      // when
      await api.geoCoord2regioncode(query);
    } catch (error) {
      // then
      expect(error).toBeInstanceOf(HttpError);
      expect((error as HttpError).status).toBe(400);
    }
  });
});
