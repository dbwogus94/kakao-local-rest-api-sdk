export type TryCatch<T, E extends Error> = T | E;
export declare class HttpError extends Error {
    readonly status: number;
    readonly httpErrorMessage?: string;
    constructor(error: Error, status: number, httpErrorMessage?: string);
}
