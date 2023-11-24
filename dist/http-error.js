"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(error, status, httpErrorMessage) {
        super(error.message);
        this.status = status;
        this.httpErrorMessage = httpErrorMessage;
        Error.captureStackTrace(this, this.constructor);
        this.stack += error.stack;
    }
}
exports.HttpError = HttpError;
//# sourceMappingURL=http-error.js.map