import type { DevError, ProdError } from "../types/error";
import { ApiError } from "./apiError";

export function formatErrorProd(error: Error): ProdError {
  if (error instanceof ApiError) {
    return {
      type: error.name,
      error: error.message,
    };
  }

  return {
    type: Error.name,
    error: "Something went wrong",
  };
}

export function formatDevError(error: Error): DevError {
  return {
    type: error.name,
    error: error.message,
    errorObj: error,
    stack: error.stack,
  };
}
