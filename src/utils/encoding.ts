import { encode, decode } from 'base2048'

type EncoderDecoder = {
  encode(str: string): string
  decode<T>(str: string): T
}

export const Base64EncodeDecode: EncoderDecoder = {
  encode(str: string): string {
    return btoa(unescape(encodeURIComponent(str)))
  },

  decode<T>(str: string): T {
    const jsonString = decodeURIComponent(escape(atob(str)))
    return JSON.parse(jsonString) as T
  },
}

/**
 * Binary encoding lib: https://github.com/qntm/base2048
 * This is kinda weird but it's optimized for sharing data in a URL over Twitter.
 * It results in a smaller URL than base64 but uses interesting characters.
 */
export const BinaryEncodeDecode: EncoderDecoder = {
  encode(str: string): string {
    const uint8Array = new TextEncoder().encode(str)
    return encode(uint8Array)
  },

  decode<T>(str: string): T {
    const uint8Array = new Uint8Array(decode(str))
    const jsonString = new TextDecoder().decode(uint8Array)
    return JSON.parse(jsonString) as T
  },
}

// export const Encoding: EncoderDecoder = BinaryEncodeDecode
// export const Encoding: EncoderDecoder = Base64EncodeDecode
