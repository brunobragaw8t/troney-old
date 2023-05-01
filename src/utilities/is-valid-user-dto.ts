import type { User } from "@/dto/user";

export function isValidUserDto(jwt: object): jwt is User {
  return (
    "object" === typeof jwt &&
    jwt &&
    "sub" in jwt &&
    "string" === typeof jwt.sub &&
    "name" in jwt &&
    "string" === typeof jwt.name &&
    "email" in jwt &&
    "string" === typeof jwt.email
  );
}
