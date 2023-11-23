import { GeoTranscoordRequestQuery } from '../../src/type';
import { HttpError } from '../../src/http-error';
import { KakaoLocalRestAPI } from '../../src/kakao-local-api';

import { invalidCoord, validCoord } from '../helper/coord';
import { initKakaoLocalAPI } from '../helper/init';

describe('KakaoLocalAPI#geoTranscoord - 좌표계 변환하기', () => {
  let api: KakaoLocalRestAPI;

  beforeAll(() => {
    api = initKakaoLocalAPI();
  });

  it('"서울특별시청" 좌표를 평면직각좌표계(TM)로 변환하면 1개가 조회된다.', async () => {
    // given
    const query: GeoTranscoordRequestQuery = {
      x: validCoord.서울특별시청.x,
      y: validCoord.서울특별시청.y,
      output_coord: 'TM',
    };
    // when
    const result = await api.geoTranscoord(query);
    // then
    expect(result.length).toBe(1);
  });

  it('"적도"의 좌표변환은 조회되지 않고 400에러가 발생한다.', async () => {
    try {
      // given
      const query: GeoTranscoordRequestQuery = {
        x: invalidCoord.적도.x,
        y: invalidCoord.적도.y,
        output_coord: 'TM',
      };
      // when
      await api.geoTranscoord(query);
    } catch (error) {
      // then
      expect(error).toBeInstanceOf(HttpError);
      expect((error as HttpError).status).toBe(400);
    }
  });
});
