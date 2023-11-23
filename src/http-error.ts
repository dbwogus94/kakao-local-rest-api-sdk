export type TryCatch<T, E extends Error> = T | E;

export class HttpError extends Error {
  constructor(
    error: Error,
    readonly status: number,
    readonly httpErrorMessage?: string,
  ) {
    super(error.message);
    Error.captureStackTrace(this, this.constructor);
    (this.stack as any) += error.stack;
  }
}
