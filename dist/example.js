"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kakao_local_api_1 = require("./kakao-local-api");
const base_type_1 = require("./type/base.type");
const apiKey = process.env.KAKAO_REST_API_KEY;
if (!apiKey) {
    console.log('KAKAO_REST_API_KEY가 존재하지 않습니다.');
    process.exit(0);
}
const seoulCenter = { x: '126.978', y: '37.5665' };
const api = new kakao_local_api_1.KakaoLocalAPI(process.env.KAKAO_REST_API_KEY);
api
    .searchCategory({
    category_group_code: base_type_1.CategoryGroupCode.CE7,
    x: '126.9309237525547',
    y: '37.538019040537435',
    radius: 200,
})
    .then((data) => {
    console.log(data);
})
    .catch((err) => console.error(err.status));
//# sourceMappingURL=example.js.map