import { KakaoLocalRestAPI } from '../../src/kakao-local-api';
import { SearchKeywordRequestQuery } from '../../src/type';
import { CategoryGroupCode } from '../../src/type/base.type';

import { validCoord } from '../helper/coord';
import { initKakaoLocalAPI } from '../helper/init';

describe('KakaoLocalAPI#searchKeyword - 좌표로 주소(지번, 도로명) 조회하기', () => {
  let api: KakaoLocalRestAPI;

  beforeAll(() => {
    api = initKakaoLocalAPI();
  });

  it('"서울특별시청" 좌표 기준 "스타벅스" 키워드로 반경 2km 내에 1개 이상 조회된다.', async () => {
    // given
    const query: SearchKeywordRequestQuery = {
      query: '스타벅스',
      category_group_code: CategoryGroupCode.CE7,
      x: validCoord.서울특별시청.x,
      y: validCoord.서울특별시청.y,
      radius: 20000,
    };
    // when
    const result = await api.searchKeyword(query);
    // then
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  it('"밤섬" 좌표 기준 "스타벅스" 키워드로 반경 200m 내에 빈배열이 조회되어야 한다.', async () => {
    // given
    const query: SearchKeywordRequestQuery = {
      query: '스타벅스',
      category_group_code: CategoryGroupCode.CE7,
      x: validCoord.밤섬.x,
      y: validCoord.밤섬.y,
      radius: 200,
    };
    // when
    const result = await api.searchKeyword(query);
    // then
    expect(result.length).toBe(0);
  });
});
