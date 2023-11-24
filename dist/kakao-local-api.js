"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _KakaoLocalAPI_api, _KakaoLocalAPI_baseURL;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoLocalAPI = void 0;
const axios_1 = require("axios");
const http_error_1 = require("./http-error");
class KakaoLocalAPI {
    constructor(apiKey) {
        _KakaoLocalAPI_api.set(this, void 0);
        _KakaoLocalAPI_baseURL.set(this, 'https://dapi.kakao.com/v2/local');
        __classPrivateFieldSet(this, _KakaoLocalAPI_api, axios_1.default.create({ baseURL: __classPrivateFieldGet(this, _KakaoLocalAPI_baseURL, "f") }), "f");
        __classPrivateFieldGet(this, _KakaoLocalAPI_api, "f").interceptors.request.use((config) => {
            config.headers.Authorization = `KakaoAK ${apiKey}`;
            return config;
        });
    }
    async geoCoord2regioncode(query) {
        const url = `${__classPrivateFieldGet(this, _KakaoLocalAPI_baseURL, "f")}/geo/coord2regioncode.json`;
        return this.get(url, query);
    }
    async geoCoord2address(query) {
        const url = `${__classPrivateFieldGet(this, _KakaoLocalAPI_baseURL, "f")}/geo/coord2address.json`;
        return this.get(url, query);
    }
    async geoTranscoord(query) {
        const url = `${__classPrivateFieldGet(this, _KakaoLocalAPI_baseURL, "f")}/geo/transcoord.json`;
        return this.get(url, query);
    }
    async searchAddress(query) {
        const url = `${__classPrivateFieldGet(this, _KakaoLocalAPI_baseURL, "f")}/search/address.json`;
        return this.get(url, query);
    }
    async searchKeyword(query) {
        const url = `${__classPrivateFieldGet(this, _KakaoLocalAPI_baseURL, "f")}/search/keyword.json`;
        return this.get(url, query);
    }
    async searchCategory(query) {
        const url = `${__classPrivateFieldGet(this, _KakaoLocalAPI_baseURL, "f")}/search/category.json`;
        return this.get(url, query);
    }
    async get(url, query) {
        try {
            const queryString = this.convertQueryString(query);
            const response = await __classPrivateFieldGet(this, _KakaoLocalAPI_api, "f").get(`${url}?${queryString}`);
            return response.data.documents;
        }
        catch (error) {
            const axiosError = error;
            const { status, data } = axiosError.response;
            throw new http_error_1.HttpError(axiosError, status, JSON.stringify(data));
        }
    }
    convertQueryString(query) {
        return new URLSearchParams(query).toString();
    }
}
exports.KakaoLocalAPI = KakaoLocalAPI;
_KakaoLocalAPI_api = new WeakMap(), _KakaoLocalAPI_baseURL = new WeakMap();
//# sourceMappingURL=kakao-local-api.js.map