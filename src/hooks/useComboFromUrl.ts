import { Combo } from '../combos/models.ts'
import { base64DecodeJson } from '../utils/base64.ts'

export const useComboFromUrl = (): Combo | null => {
  if (!location.search) return null
  try {
    const params = new URLSearchParams(location.search)
    const encoded = params.get('c')
    if (!encoded) return null

    const decoded = base64DecodeJson<Combo>(encoded)
    // todo: validate w/ JSON schema
    return decoded
  } catch (e) {
    console.error('useComboFromUrl', e)
    return null
  }
}
