import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode';

import { writable } from 'svelte/store';
let defaultUserData = {} as JWTPayload;
export const userData = writable(defaultUserData);
export function getAuthorizationToken() {
  let jwt = Cookies.get("CF_Authorization") || null;
  if (!jwt) {
    return null;
  }

  const decoded: JWTPayload = jwtDecode(jwt, );

  return decoded
}


export interface JWTPayload {
  aud: string[]
  email: string
  exp: number
  iat: number
  nbf: number
  iss: string
  type: string
  identity_nonce: string
  sub: string
  pathCookie: boolean
  pathText: string
  country: string
}
 