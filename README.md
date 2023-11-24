# kakao-local-rest-api-sdk

[카카오 로컬 REST API](https://developers.kakao.com/docs/latest/ko/local/dev-guide)를 TS SDK로 제공하는 라이브러리

### KakaoLocalRestAPI 인터페이스
- `geoCoord2regioncode`: 좌표를 사용하여 행정구역정보 받기
- `geoCoord2address`: 좌표를 사용하여 주소(지번, 도로명)정보 받기
- `geoTranscoord`: 좌표를 원하는 좌표계로 변환하기
- `searchAddress`: 주소로 검색하기
- `searchKeyword`: 키워드로 장소 검색하기
- `searchCategory`: 카테고리로 장소 검색하기

### KakaoLocalAPI 클래스
- `KakaoLocalRestAPI` 인터페이스를 구현한 클래스
- 내부적으로 axios를 사용한다.
- 모든 메서드는 API키가 잘못된 경우 401 상태코드를 가진 HttpError를 응답한다.
- geo 메서드는 조회 실패시 HttpError를 응답한다.
- search메서드는 조회 결과가 없을 시 빈배열을 응답한다.

### 환경변수
- `KAKAO_REST_API_KEY`
- ex) package.json의 scripts 실행을 위한 .env 파일
```.env
KAKAO_REST_API_KEY=${카카오에서 제공하는 REST API Key}
```