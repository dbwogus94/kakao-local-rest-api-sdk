import { SearchKeywordResponseDocument } from '../../src/type';

type XY = { x: string; y: string };
type InvalidKeys = '적도' | '세종과학기지';
type InvalidCoord = Record<InvalidKeys, XY>;
type ValidKeys = '서울특별시청' | '석촌호수' | '밤섬';
type ValidCoord = Record<ValidKeys, SearchKeywordResponseDocument>;

export const seoulCenter: XY = { x: '126.978', y: '37.5665' };

export const invalidCoord: InvalidCoord = {
  적도: { x: '0', y: '0' },
  세종과학기지: { x: '-62.2167', y: '-58.7833' },
};
export const validCoord: ValidCoord = {
  서울특별시청: {
    address_name: '서울 중구 태평로1가 31',
    category_group_code: 'PO3',
    category_group_name: '공공기관',
    category_name: '사회,공공기관 > 지방행정기관 > 시청 > 특별시청',
    distance: '67',
    id: '8430129',
    phone: '02-120',
    place_name: '서울특별시청',
    place_url: 'http://place.map.kakao.com/8430129',
    road_address_name: '서울 중구 세종대로 110',
    x: '126.978652258823',
    y: '37.56682420267543',
  },
  석촌호수: {
    address_name: '서울 송파구 잠실동 47',
    category_group_code: 'AT4',
    category_group_name: '관광명소',
    category_name: '여행 > 관광,명소 > 호수',
    distance: '12537',
    id: '7947003',
    phone: '',
    place_name: '석촌호수 서호',
    place_url: 'http://place.map.kakao.com/7947003',
    road_address_name: '',
    x: '127.099112837006',
    y: '37.5076807262772',
  },
  밤섬: {
    address_name: '서울 영등포구 여의도동 84-3',
    category_group_code: 'AT4',
    category_group_name: '관광명소',
    category_name: '여행 > 관광,명소 > 섬 > 섬(내륙)',
    distance: '',
    id: '8319957',
    phone: '02-3780-0793',
    place_name: '밤섬',
    place_url: 'http://place.map.kakao.com/8319957',
    road_address_name: '',
    x: '126.9309237525547',
    y: '37.538019040537435',
  },
};
