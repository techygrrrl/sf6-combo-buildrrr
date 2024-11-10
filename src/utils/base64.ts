// export const base64 = {
//   decode: s => Uint8Array.from(atob(s), c => c.charCodeAt(0)),
//   encode: b => btoa(String.fromCharCode(...new Uint8Array(b))),
//   decodeToString: s => new TextDecoder().decode(base64.decode(s)),
//   encodeString: s => base64.encode(new TextEncoder().encode(s)),
// }

export const base64EncodeJson = (input: string): string => {
  return btoa(unescape(encodeURIComponent(input)))
}

export const base64DecodeJson = <T>(base64String: string): T => {
  const jsonString = decodeURIComponent(escape(atob(base64String)))

  return JSON.parse(jsonString) as T
}
