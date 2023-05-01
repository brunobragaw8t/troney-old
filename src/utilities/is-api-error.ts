import type { ApiError } from "@/dto/api-error";

export function isApiError(item: any): item is ApiError {
  return (
    "object" === typeof item &&
    item &&
    "statusCode" in item &&
    "number" === typeof item.statusCode &&
    "message" in item &&
    "string" === typeof item.message &&
    "error" in item &&
    "string" === typeof item.error
  );
}
